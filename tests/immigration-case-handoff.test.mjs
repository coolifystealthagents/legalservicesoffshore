import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const root = path.resolve(import.meta.dirname, '..');
const dataPath = path.join(root, 'app', 'fleet-data.ts');

test('immigration case administration research keeps its typed service handoff and counsel boundary', () => {
  const source = fs.readFileSync(dataPath, 'utf8');
  const start = source.indexOf("{ ...makeResearch('immigration-case-administration-controls'");
  const end = source.indexOf("makeResearch('legal-billing-time-entry-controls'", start);

  assert.notEqual(start, -1, 'selected research record is present');
  assert.notEqual(end, -1, 'selected research record has a bounded source slice');

  const record = source.slice(start, end);
  const handoff = record.slice(record.indexOf('serviceLink:'));
  assert.match(record, /updated: '2026-10-15'/);
  assert.match(handoff, /slug: 'immigration-case-administration'/);
  assert.match(handoff, /label: 'Plan immigration case administration support'/);
  assert.match(handoff, /approved document checks, status records, and the review owner/);
  assert.match(handoff, /Counsel keeps eligibility, filing, legal-advice, and client-commitment decisions/);
  assert.doesNotMatch(handoff, /legal advice and eligibility questions to counsel\./, 'the source excerpt is not reused as the handoff boundary');
});