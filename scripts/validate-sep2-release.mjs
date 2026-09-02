import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';

const blog = fs.readFileSync('app/blog/blog-2026-09-02.ts', 'utf8');
const research = fs.readFileSync('app/research/research-2026-09-02.ts', 'utf8');
const collect = (source, field) => [...source.matchAll(new RegExp(`${field}: '([^']+)'`, 'g'))].map(match => match[1]);
const blogSlugs = collect(blog, 'slug');
const researchSlugs = collect(research, 'slug');
const blogTitles = collect(blog, 'title');
const researchTitles = collect(research, 'title');

assert.equal(blogSlugs.length, 12, 'September 2 blog count');
assert.equal(researchSlugs.length, 5, 'September 2 research count');
assert.equal(new Set([...blogSlugs, ...researchSlugs]).size, 17, '17 unique slugs');
assert.equal(new Set([...blogTitles, ...researchTitles]).size, 17, '17 unique titles');
assert.match(blog, /Published September 2, 2026/);
assert.match(research, /Published September 2, 2026/);
assert.match(blog, /published: '2026-09-02'/);
assert.match(research, /published: '2026-09-02'/);
assert.doesNotMatch(blog + research, /[—–]| -- /, 'humanizer punctuation check');

const allBodies = [
  ...[...blog.matchAll(/\{ slug: '([^']+)'[^\n]+\}/g)].map(match => match[0]),
  ...[...research.matchAll(/\{ slug: '([^']+)'[^\n]+\}/g)].map(match => match[0]),
];
const hashes = allBodies.map(body => crypto.createHash('sha256').update(body).digest('hex'));
assert.equal(allBodies.length, 17, '17 article definitions');
assert.equal(new Set(hashes).size, 17, '17 unique content hashes');

const data = fs.readFileSync('app/data.ts', 'utf8');
const fleet = fs.readFileSync('app/fleet-data.ts', 'utf8');
assert.match(data, /\.\.\.september2BlogPosts/);
assert.match(fleet, /\.\.\.september2ResearchPosts/);
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
assert.match(sitemap, /blogs\.map/);
assert.match(sitemap, /researchPosts\.map/);

console.log(JSON.stringify({ blogSlugs, researchSlugs }, null, 2));
console.log('September 2 release: PASS (12 blog, 5 research, unique titles/slugs/content, visible and structured dates, index/sitemap wiring)');
