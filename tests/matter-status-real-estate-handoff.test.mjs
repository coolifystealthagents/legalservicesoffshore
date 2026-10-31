import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const root = path.resolve(import.meta.dirname, '..');
const dataPath = path.join(root, 'app', 'fleet-data.ts');

test('matter-status research keeps a typed real-estate support handoff and firm decision boundary', () => {
  const source = fs.readFileSync(dataPath, 'utf8');
  const start = source.indexOf('"slug": "legal-support-matter-status-evidence"');
  const end = source.indexOf('"slug": "legal-support-translation-source-preservation"', start);

  assert.notEqual(start, -1, 'selected research record is present');
  assert.notEqual(end, -1, 'selected research record has a bounded source slice');

  const record = source.slice(start, end);
  const handoff = record.slice(record.indexOf('"serviceLink"'));
  assert.match(record, /"updated": "2026-10-31"/);
  assert.match(handoff, /"slug": "real-estate-legal-support"/);
  assert.match(handoff, /"label": "Plan real estate legal support"/);
  assert.match(handoff, /approved status records, source checks, and the review owner/);
  assert.match(handoff, /The firm decides legal meaning, client updates, transaction terms, filing, and closing decisions/);
  assert.doesNotMatch(handoff, /matter is on track/, 'handoff must not turn status evidence into an outcome claim');
});
