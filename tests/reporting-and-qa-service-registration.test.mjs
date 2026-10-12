import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

test('reporting and QA is registered for every existing research handoff', () => {
  const fleetData = read('app/fleet-data.ts');
  const octoberResearch = read('app/research/research-2026-10-12.ts');
  const serviceRoute = read('app/services/[slug]/page.tsx');
  const sitemap = read('app/sitemap.xml/route.ts');

  assert.match(fleetData, /slug: 'reporting-and-qa'/);
  assert.equal((octoberResearch.match(/"slug": "reporting-and-qa"/g) ?? []).length, 5);
  assert.match(serviceRoute, /fleetServices\.map\(\(service\) => \(\{ slug: service\.slug \}\)\)/);
  assert.match(sitemap, /fleetServices\.map\(s=>`\/services\/\$\{s\.slug\}`\)/);
});
