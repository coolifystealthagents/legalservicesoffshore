import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';

const expected=['offshore-legal-support-conflict-check-intake-preparation-study','law-firm-offshore-discovery-production-quality-control-research','offshore-legal-support-entity-formation-filing-preparation-study','law-firm-offshore-contract-obligation-extraction-study','offshore-legal-support-records-retention-disposition-research'];
const source=await readFile('app/research/research-2026-09-25.ts','utf8');
const fleet=await readFile('app/fleet-data.ts','utf8');
const article=await readFile('app/research/[slug]/page.tsx','utf8');
const sitemap=await readFile('app/sitemap.xml/route.ts','utf8');
const manifest=JSON.parse(await readFile('.paperclip/daily-content/2026-09-25/research.json','utf8'));
assert.equal(manifest.contract,'canonical-daily-research-publishing');
assert.equal(manifest.targetDate,'2026-09-25');
assert.equal(manifest.timezone,'UTC');
assert.equal(manifest.requiredCount,5);
assert.equal(manifest.releaseMode,'combined-12-blog-plus-5-research');
assert.deepEqual(manifest.entries.map(entry=>entry.slug),expected);
assert.equal(new Set(expected).size,5);
for(const slug of expected){
  assert.equal((source.match(new RegExp(`slug:'${slug}'`,'g'))||[]).length,1,`one source record for ${slug}`);
  const html=await readFile(`.next/server/app/research/${slug}.html`,'utf8');
  assert.match(html,new RegExp(`rel="canonical" href="https://legalservicesoffshore.com/research/${slug}`));
  assert.match(html,/"datePublished":"2026-09-25"/);
  assert.match(html,/Published: <time dateTime="2026-09-25">September 25, 2026<\/time>/);
  assert.match(html,/\/research-thumbnails\/research-default\.svg/);
  assert.ok((html.replace(/<[^>]+>/g,' ').match(/\b[\w’'-]+\b/g)||[]).length>=1200,`${slug} rendered word floor`);
  await stat(`.next/server/app/research/${slug}.html`);
}
assert.match(fleet,/september25ResearchPosts/);
assert.match(source,/published:'2026-09-25'/);
assert.match(source,/checked on September 25, 2026/);
assert.match(article,/datePublished:post\.published/);
assert.match(article,/alternates:\{canonical:/);
assert.match(sitemap,/researchPosts\.map/);
assert.doesNotMatch(source,/[—–]| -- /,'house-style punctuation');
console.log('September 25 Research: PASS (5 new articles, 1,200+ rendered words, date, canonical, media, structured data, sitemap wiring)');
