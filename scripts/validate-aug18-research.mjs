import fs from 'node:fs';
import assert from 'node:assert/strict';

const manifest = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-08-18/research.json', 'utf8'));
const data = fs.readFileSync('app/fleet-data.ts', 'utf8');
const article = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');
const index = fs.readFileSync('app/research/page.tsx', 'utf8');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
const expected = manifest.entries.map(e => e.slug);
assert.equal(manifest.targetDate, '2026-08-18');
assert.equal(manifest.family, 'research');
assert.equal(manifest.repository, 'coolifystealthagents/legalservicesoffshore');
assert.equal(manifest.branch, 'main');
assert.equal(expected.length, 10);
assert.equal(new Set(expected).size, 10);
for (const entry of manifest.entries) {
  assert.equal(entry.route, `/research/${entry.slug}`);
  assert.deepEqual(entry.sourcePaths, ['app/fleet-data.ts']);
  assert.match(data, new RegExp(`slug:'${entry.slug}'`));
}
assert.match(data, /published: '2026-08-18'/);
assert.match(data, /sourceDate: '2026-08-18'/);
assert.match(article, /datePublished:post\.published/);
assert.match(article, /article:published_time/);
assert.match(article, /time dateTime/);
assert.match(article, /alternates:\{canonical/);
assert.match(index, /sortedResearchPosts/);
assert.match(sitemap, /researchPosts\.map/);
console.log(`August 18 Research manifest: PASS (${expected.length} entries)`);
