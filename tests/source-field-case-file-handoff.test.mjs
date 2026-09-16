import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const source = fs.readFileSync('app/research/research-2026-09-14.ts', 'utf8');

test('source-to-field research keeps its case-file handoff and firm decision boundary', () => {
  assert.match(source, /offshore-legal-support-source-to-field-reproducibility-study-campaign-assurance/);
  assert.match(source, /updated:s\.slug==='offshore-legal-support-source-to-field-reproducibility-study-campaign-assurance'\?'2026-09-16'/);
  assert.match(source, /slug:'case-file-management',label:'Plan case-file support',title:'Set up a case-file preparation lane'/);
  assert.match(source, /approved source, record fields, and review step/);
  assert.match(source, /The law firm decides what the record means, who can use it, and what happens next\./);
});
