import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';

const blog = fs.readFileSync('app/blog/blog-2026-09-01.ts', 'utf8');
const research = fs.readFileSync('app/research/research-2026-09-01.ts', 'utf8');
const blogSlugs = [...blog.matchAll(/slug: '([^']+)'/g)].map(m => m[1]);
const researchSlugs = [...research.matchAll(/slug: '([^']+)'/g)].map(m => m[1]);
const blogTitles = [...blog.matchAll(/title: '([^']+)'/g)].map(m => m[1]);
const researchTitles = [...research.matchAll(/title: '([^']+)'/g)].map(m => m[1]);

assert.equal(blogSlugs.length, 12, 'September 1 blog count');
assert.equal(researchSlugs.length, 5, 'September 1 research count');
assert.equal(new Set([...blogSlugs, ...researchSlugs]).size, 17, '17 unique slugs');
assert.equal(new Set([...blogTitles, ...researchTitles]).size, 17, '17 unique titles');
assert.match(blog, /Published September 1, 2026/);
assert.match(research, /Published September 1, 2026/);
assert.match(blog, /published: '2026-09-01'/);
assert.match(research, /published: '2026-09-01'/);
assert.doesNotMatch(blog + research, /[—–]| -- /, 'humanizer punctuation check');
assert.equal(new Set([crypto.createHash('sha256').update(blog).digest('hex'), crypto.createHash('sha256').update(research).digest('hex')]).size, 2);
const data = fs.readFileSync('app/data.ts', 'utf8');
const fleet = fs.readFileSync('app/fleet-data.ts', 'utf8');
assert.match(data, /\.\.\.september1BlogPosts/);
assert.match(fleet, /\.\.\.september1ResearchPosts/);
assert.match(fs.readFileSync('app/sitemap.xml/route.ts', 'utf8'), /blogs\.map/);
assert.match(fs.readFileSync('app/sitemap.xml/route.ts', 'utf8'), /researchPosts\.map/);
console.log('September 1 release: PASS (12 blog, 5 research, unique titles/slugs, visible and structured dates, index/sitemap wiring)');
