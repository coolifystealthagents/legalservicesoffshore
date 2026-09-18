import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const source = await readFile('app/research/research-2026-09-18.ts','utf8');
const fleet = await readFile('app/fleet-data.ts','utf8');
const article = await readFile('app/research/[slug]/page.tsx','utf8');
const sitemap = await readFile('app/sitemap.xml/route.ts','utf8');
const manifest = JSON.parse(await readFile('.paperclip/daily-content/2026-09-18/research.json','utf8'));
const expected = [
  'law-firm-intake-callback-attempt-outcome-study',
  'offshore-legal-appointment-reminder-disposition-research',
  'legal-document-template-field-deviation-study',
  'law-firm-billing-correction-authorization-chain-study',
  'offshore-legal-qa-first-pass-acceptance-denominator-study',
];

assert.equal(manifest.contract,'canonical-daily-research-publishing');
assert.equal(manifest.targetDate,'2026-09-18');
assert.equal(manifest.requiredCount,5);
assert.equal(manifest.entries.length,5);
assert.deepEqual(manifest.entries.map(entry=>entry.slug),expected);
assert.equal(new Set(expected).size,5);
for (const slug of expected) {
  assert.equal((source.match(new RegExp(`slug:'${slug}'`,'g'))||[]).length,1,`one source record for ${slug}`);
  assert.match(fleet,/september18ResearchPosts/);
}
assert.match(source,/published:'2026-09-18'/);
assert.match(source,/sourceDate:'2026-09-18'/);
assert.match(source,/checked on September 18, 2026/);
assert.match(article,/datePublished:post\.published/);
assert.match(article,/article:published_time/);
assert.match(article,/alternates:\{canonical:/);
assert.match(sitemap,/researchPosts\.map/);
assert.doesNotMatch(source,/[—–]| -- /,'house-style punctuation');
console.log('September 18 Research: PASS (5 new slugs, publication metadata, source checked date, canonical and sitemap wiring)');
