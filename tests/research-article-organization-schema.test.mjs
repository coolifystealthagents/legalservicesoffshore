import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const root = path.resolve(import.meta.dirname, '..');
const rendererPath = path.join(root, 'app', 'research', '[slug]', 'page.tsx');

test('research Article schema keeps the site Organization and visible-source citations aligned', () => {
  const source = fs.readFileSync(rendererPath, 'utf8');

  assert.match(source, /const organization=\{'@type':'Organization','@id':`https:\/\/\$\{site\.domain\}\/\#organization`,name:site\.brand,url:`https:\/\/\$\{site\.domain\}`\}/);
  assert.match(source, /author:organization,publisher:organization/);
  assert.match(source, /citation:post\.sources\.map\(source=>source\.url\)/);
});
