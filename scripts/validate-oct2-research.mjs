import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readFile,stat} from 'node:fs/promises';

const expected=['offshore-privilege-log-field-quality-research','ediscovery-load-file-reconciliation-offshore-study','corporate-authority-evidence-packet-offshore-research','appellate-record-citation-map-offshore-study','legal-vendor-security-evidence-renewal-research'];
const manifest=JSON.parse(await readFile('.paperclip/daily-content/2026-10-02/research.json','utf8'));
const source=await readFile('app/research/research-2026-10-02.ts','utf8');
const fleet=await readFile('app/fleet-data.ts','utf8');
const baselineFleet=await new Promise((resolve,reject)=>import('node:child_process').then(({execFile})=>execFile('git',['show',`${manifest.baselineSha}:app/fleet-data.ts`],{maxBuffer:20_000_000},(error,stdout)=>error?reject(error):resolve(stdout))));
assert.equal(manifest.requiredCount,5);
assert.equal(manifest.cycleLabel,'2026-10-02');
assert.equal(manifest.timezone,'UTC');
assert.deepEqual(manifest.entries.map(entry=>entry.slug),expected);
assert.equal(new Set(expected).size,5);
assert.match(fleet,/october2ResearchPosts/);
assert.doesNotMatch(source,/[—–]| -- /,'house-style punctuation');
for(const slug of expected){
  assert.equal((source.match(new RegExp(`slug:'${slug}'`,'g'))||[]).length,1,`one source record for ${slug}`);
  assert.ok(!baselineFleet.includes(slug),`${slug} must be new after baseline`);
}

const bodies=[];
const paragraphs=new Map();
for(const slug of expected){
  const html=await readFile(`.next/server/app/research/${slug}.html`,'utf8');
  assert.match(html,new RegExp(`rel="canonical" href="https://legalservicesoffshore.com/research/${slug}`));
  assert.match(html,/"datePublished":"2026-10-02"/);
  assert.match(html,/Published: <time dateTime="2026-10-02">October 2, 2026<\/time>/);
  assert.match(html,/\/research-thumbnails\/research-default\.svg/);
  assert.match(html,/href="\/services\//,'service link');
  const main=(html.match(/<main[\s\S]*?<\/main>/)||[''])[0].replace(/<section class="research-cta[\s\S]*/,'').replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<[^>]+>/g,' ').replace(/&[^;]+;/g,' ');
  const words=(main.match(/\b[\w’'-]+\b/g)||[]).map(word=>word.toLowerCase());
  assert.ok(words.length>=1200,`${slug}: ${words.length} substantive words`);
  const hash=createHash('sha256').update(words.join(' ')).digest('hex');
  assert.equal(manifest.entries.find(entry=>entry.slug===slug).contentHash,hash,`${slug} content hash`);
  bodies.push({slug,words});
  const sectionBodies=[...html.matchAll(/<p>([\s\S]*?)<\/p>/g)].map(match=>match[1].replace(/<[^>]+>/g,' ').replace(/&[^;]+;/g,' ').replace(/\s+/g,' ').trim()).filter(text=>text.split(/\s+/).length>=40);
  for(const paragraph of sectionBodies){
    const normalized=paragraph.toLowerCase();
    const owners=paragraphs.get(normalized)||[];
    owners.push(slug); paragraphs.set(normalized,owners);
  }
  await stat(`.next/server/app/research/${slug}.html`);
}
const repeated=[...paragraphs.entries()].filter(([,owners])=>new Set(owners).size>1);
assert.equal(repeated.length,0,'no repeated substantive paragraphs across articles');
const shingles=words=>{const set=new Set();for(let i=0;i<=words.length-5;i++)set.add(words.slice(i,i+5).join(' '));return set};
let maximum=0;
for(let i=0;i<bodies.length;i++)for(let j=i+1;j<bodies.length;j++){
  const left=shingles(bodies[i].words),right=shingles(bodies[j].words);
  const intersection=[...left].filter(value=>right.has(value)).length;
  const score=intersection/new Set([...left,...right]).size;
  maximum=Math.max(maximum,score);
  assert.ok(score<0.5,`${bodies[i].slug} / ${bodies[j].slug}: ${score}`);
}
assert.deepEqual(manifest.bodyWordCounts,bodies.map(item=>item.words.length));
assert.ok(Math.abs(maximum-manifest.maximumPairwiseFiveWordShingleJaccard)<0.0001);
assert.equal(manifest.repeatedParagraphCheck,'passed: no repeated substantive paragraphs across articles');
assert.equal(manifest.sharedArgumentCheck,'passed: five distinct decisions, evidence models, edge cases, methods, and reader outcomes');
console.log(`October 2 Research: PASS (5 new articles; body words ${bodies.map(item=>item.words.length).join(', ')}; maximum five-word-shingle Jaccard ${maximum.toFixed(4)}; repeated paragraphs 0)`);
