import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';

const expected=['law-firm-offshore-citation-update-preparation-study','offshore-litigation-chronology-source-normalization-research','law-firm-offshore-immigration-translation-intake-study','offshore-real-estate-title-exception-packet-research','law-firm-offshore-billing-guideline-exception-preflight-study'];
const manifest=JSON.parse(await readFile('.paperclip/daily-content/2026-09-28/research.json','utf8'));
const source=await readFile('app/research/research-2026-09-28.ts','utf8');
const fleet=await readFile('app/fleet-data.ts','utf8');
assert.equal(manifest.requiredCount,5);
assert.equal(manifest.targetDate,'2026-09-28');
assert.equal(manifest.timezone,'UTC');
assert.deepEqual(manifest.entries.map(entry=>entry.slug),expected);
assert.equal(new Set(expected).size,5);
assert.match(fleet,/september28ResearchPosts/);
assert.doesNotMatch(source,/[—–]| -- /,'house-style punctuation');
const bodies=[];
for(const slug of expected){
  assert.equal((source.match(new RegExp(`slug:'${slug}'`,'g'))||[]).length,1,`one source record for ${slug}`);
  const html=await readFile(`.next/server/app/research/${slug}.html`,'utf8');
  assert.match(html,new RegExp(`rel="canonical" href="https://legalservicesoffshore.com/research/${slug}`));
  assert.match(html,/"datePublished":"2026-09-28"/);
  assert.match(html,/Published: <time dateTime="2026-09-28">September 28, 2026<\/time>/);
  assert.match(html,/\/research-thumbnails\/research-default\.svg/);
  const main=(html.match(/<main[\s\S]*?<\/main>/)||[''])[0].replace(/<section class="research-cta[\s\S]*/,'').replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<[^>]+>/g,' ').replace(/&[^;]+;/g,' ');
  const words=(main.match(/\b[\w’'-]+\b/g)||[]).map(word=>word.toLowerCase());
  assert.ok(words.length>=1200,`${slug}: ${words.length} substantive words`);
  bodies.push({slug,words});
  await stat(`.next/server/app/research/${slug}.html`);
}
const shingles=words=>{const set=new Set();for(let i=0;i<=words.length-5;i++)set.add(words.slice(i,i+5).join(' '));return set};
let maximum=0;
for(let i=0;i<bodies.length;i++)for(let j=i+1;j<bodies.length;j++){
  const left=shingles(bodies[i].words),right=shingles(bodies[j].words);
  const intersection=[...left].filter(value=>right.has(value)).length;
  const score=intersection/new Set([...left,...right]).size;
  maximum=Math.max(maximum,score);
  assert.ok(score<0.5,`${bodies[i].slug} / ${bodies[j].slug}: ${score}`);
}
assert.ok(Math.abs(maximum-manifest.maximumPairwiseFiveWordShingleJaccard)<0.0001);
console.log(`September 28 Research: PASS (5 new articles; body words ${bodies.map(item=>item.words.length).join(', ')}; maximum five-word-shingle Jaccard ${maximum.toFixed(4)})`);
