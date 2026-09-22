import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const expected = {
  h1: 'Where legal research administration should stop',
  canonical: 'https://legalservicesoffshore.com/research/legal-research-administration-boundaries',
};

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const target = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(target, out);
    else if (entry.name.endsWith('.html')) out.push(target);
  }
  return out;
}

const files = walk(path.join(root, '.next', 'server', 'app'));
const artifact = files.find((file) => fs.readFileSync(file, 'utf8').includes(`rel="canonical" href="${expected.canonical}"`));
assert(artifact, 'Built artifact with expected canonical was not found');

const html = fs.readFileSync(artifact, 'utf8');
const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? '';
assert(main.includes(`<h1>${expected.h1}</h1>`), 'route-local main missing expected H1');
const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
const article = scripts.find((item) => item['@type'] === 'Article');
assert(article, 'Article JSON-LD absent');
assert(article.author?.['@type'] === 'Organization' && article.author.name === 'Legal Services Offshore', 'Article author mismatch');
assert(article.publisher?.['@type'] === 'Organization' && article.publisher.name === 'Legal Services Offshore' && article.publisher.url === 'https://LegalServicesOffshore.com', 'Article publisher mismatch');
assert(Array.isArray(article.citation) && article.citation.length > 0 && article.citation.every((url) => typeof url === 'string' && url.startsWith('https://')), 'Article citations missing or not HTTPS');
assert(article.citation.every((url) => main.includes(`href="${url}"`)), 'Article citations do not match visible route-local source links');
const sitemap = fs.readFileSync(path.join(root, '.next', 'server', 'app', 'sitemap.xml.body'), 'utf8');
assert(sitemap.includes(`<loc>${expected.canonical}</loc>`), 'canonical research route missing sitemap record');
console.log(JSON.stringify({ artifact: path.relative(root, artifact), h1: expected.h1, citationCount: article.citation.length, sitemap: 'loc present; no lastmod asserted by repository contract' }));
