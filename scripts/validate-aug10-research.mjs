import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import assert from 'node:assert/strict';
const manifest=JSON.parse(fs.readFileSync('.paperclip/aug10-2026/research.json','utf8'));
const data=fs.readFileSync('app/fleet-data.ts','utf8');
const article=fs.readFileSync('app/research/[slug]/page.tsx','utf8');
const index=fs.readFileSync('app/research/page.tsx','utf8');
const sitemap=fs.readFileSync('app/sitemap.xml/route.ts','utf8');
assert.equal(manifest.schemaVersion,1); assert.equal(manifest.contract,'sites3-aug10-public-date-v6'); assert.equal(manifest.family,'research');
assert.ok(manifest.entries.length>=10); assert.equal(new Set(manifest.entries.map(e=>e.slug)).size,manifest.entries.length);
for(const e of manifest.entries){
  assert.match(e.route,/^\/research\/[a-z0-9-]+$/); assert.equal(e.route,`/research/${e.slug}`); assert.equal(e.sourcePath,'app/fleet-data.ts');
  assert.equal(e.provenance,'original-aug10-batch'); assert.equal(e.sourceDateField,'published'); assert.equal(e.sourceDate,'2026-08-10'); assert.equal(e.renderedDate,'2026-08-10');
  assert.ok(e.renderedDateFields.includes('datePublished')); assert.ok(e.renderedDateFields.includes('article:published_time')); assert.ok(e.renderedDateFields.includes('time[datetime]'));
  const before=execFileSync('git',['show',`${e.introducedByCommit}^:app/fleet-data.ts`],{encoding:'utf8'}); const after=execFileSync('git',['show',`${e.introducedByCommit}:app/fleet-data.ts`],{encoding:'utf8'});
  assert.equal(before.includes(`'${e.slug}'`),false); assert.equal(after.includes(`'${e.slug}'`),true); assert.match(data,new RegExp(`makeResearch\\('${e.slug}'.*'2026-08-10'`));
  assert.match(article,/datePublished/); assert.match(article,/article:published_time/); assert.match(article,/time dateTime/); assert.match(article,/alternates:\{canonical/); assert.match(sitemap,/researchPosts\.map/);
}
assert.match(index,/sortedResearchPosts/); assert.match(index,/b\.published\.localeCompare\(a\.published\)/);
console.log(`August 10 Research manifest regression: PASS (${manifest.entries.length} entries)`);
