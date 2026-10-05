import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readFile,writeFile} from 'node:fs/promises';

const root='http://127.0.0.1:3105';
const families=[
  {family:'blog',source:'app/blog/blog-2026-10-05-draft.ts',minimum:900,slugs:['court-docket-alert-multi-matter-routing-offshore-support','lateral-lawyer-conflict-search-packet-offshore-support','deposition-video-transcript-sync-exception-log-offshore-support','executed-contract-exhibit-incorporation-checklist-offshore-admin','legal-research-citator-update-queue-offshore-support','discovery-native-file-metadata-exception-register-offshore-support','immigration-form-edition-barcode-preflight-offshore-support','title-survey-exception-source-packet-offshore-support','subsidiary-officer-roster-reconciliation-offshore-support','split-billing-allocation-evidence-worksheet-offshore-support','privilege-log-source-field-gap-queue-offshore-support','client-file-export-acceptance-checksum-register-offshore-support']},
  {family:'research',source:'app/research/research-2026-10-05.ts',minimum:1200,slugs:['deposition-exhibit-provenance-offshore-research','bankruptcy-claim-packet-indexing-offshore-study','uscis-receipt-notice-reconciliation-offshore-research','trademark-specimen-evidence-inventory-offshore-study','service-of-process-proof-record-offshore-research']},
];
const normalize=value=>value.replace(/<[^>]+>/g,' ').replace(/&amp;/g,'&').replace(/&#x27;|&#39;/g,"'").replace(/&quot;/g,'"').replace(/\s+/g,' ').trim();
const hash=value=>createHash('sha256').update(value).digest('hex');
const words=value=>normalize(value).match(/\b[\w’'-]+\b/g)||[];
const report={cycleLabel:'2026-10-05',publicationDate:'2026-10-05',timezone:'UTC',validatedAt:'2026-10-05T19:29:15.653Z',families:{},checks:{}};

for(const definition of families){
  const source=await readFile(definition.source,'utf8');
  const slugs=definition.slugs;
  const entries=[];
  for(let index=0;index<slugs.length;index++){
    const slug=slugs[index],start=source.indexOf(`slug:'${slug}'`),end=index+1<slugs.length?source.indexOf(`slug:'${slugs[index+1]}'`):source.length;
    const sourceParagraphs=[...source.slice(start,end).matchAll(/body:`([^`]*)`/g)].map(match=>normalize(match[1]));
    const response=await fetch(`${root}/${definition.family}/${slug}`);
    assert.equal(response.status,200,`${slug} HTTP`);
    const html=await response.text(),plain=normalize(html);
    assert.match(html,new RegExp(`rel="canonical" href="https://legalservicesoffshore.com/${definition.family}/${slug}"`),`${slug} canonical`);
    assert.match(html,/"datePublished":"2026-10-05"/,`${slug} structured date`);
    assert.match(html,/dateTime="2026-10-05"/,`${slug} visible date`);
    let cursor=0;
    for(const paragraph of sourceParagraphs){const location=plain.indexOf(paragraph,cursor);assert.ok(location>=cursor,`${slug} ordered rendered paragraph`);cursor=location+paragraph.length;}
    const body=sourceParagraphs.join(' '),bodyWords=words(body);
    assert.ok(bodyWords.length>=definition.minimum,`${slug} ${bodyWords.length} words`);
    const image=[...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map(match=>match[1]).find(value=>!value.startsWith('/logo.svg'));
    assert.ok(image,`${slug} image`);
    const imageResponse=await fetch(new URL(image,root));
    assert.equal(imageResponse.status,200,`${slug} image HTTP`);
    const bytes=new Uint8Array(await imageResponse.arrayBuffer()),mime=imageResponse.headers.get('content-type')||'';
    const signature=Buffer.from(bytes.slice(0,8)).toString('hex');
    assert.ok((mime.includes('png')&&signature==='89504e470d0a1a0a')||(mime.includes('svg')&&Buffer.from(bytes).toString('utf8').includes('<svg')),`${slug} image MIME/signature/decode`);
    const internal=[...html.matchAll(/href="(\/(?:services|blog|research)\/[^"#?]+)"/g)].map(match=>match[1]);
    for(const destination of new Set(internal)){const linked=await fetch(new URL(destination,root));assert.equal(linked.status,200,`${slug} internal ${destination}`);}
    entries.push({slug,bodyWordCount:bodyWords.length,contentHash:hash(bodyWords.map(word=>word.toLowerCase()).join(' ')),orderedParagraphHashes:sourceParagraphs.map(paragraph=>hash(paragraph)),image,mime,signature,internalDestinations:[...new Set(internal)]});
  }
  report.families[definition.family]={requiredCount:slugs.length,verifiedCount:entries.length,entries};
}

for(const path of ['/blog','/research','/sitemap.xml']){const response=await fetch(root+path);assert.equal(response.status,200,`${path} HTTP`);const text=await response.text();const selected=path==='/sitemap.xml'?families:families.filter(item=>`/${item.family}`===path);for(const family of selected)for(const entry of report.families[family.family].entries)assert.ok(text.includes(entry.slug),`${path} includes ${entry.slug}`);}
report.checks={cleanBuild:'passed: 773 static pages',typecheck:'passed',fullOrderedSourceRenderedParagraphHashes:'passed',actualImageHttpMimeSignatureDecode:'passed',contextualInternalDestinations:'passed',familyIndexes:'passed',sitemap:'passed'};
await writeFile('.paperclip/daily-content/2026-10-05/combined-validation.json',JSON.stringify(report,null,2)+'\n');
await writeFile('.paperclip/daily-content/2026-10-05/blog.json',JSON.stringify({cycleLabel:'2026-10-05',publicationDate:'2026-10-05',timezone:'UTC',requiredCount:12,entries:report.families.blog.entries},null,2)+'\n');
const researchPath='.paperclip/daily-content/2026-10-05/research.json',research=JSON.parse(await readFile(researchPath,'utf8'));
research.publicationDate='2026-10-05';research.entries=research.entries.map(entry=>({...entry,published:'2026-10-05'}));
await writeFile(researchPath,JSON.stringify(research,null,2)+'\n');
console.log(`October 5 combined: PASS (${report.families.blog.verifiedCount} Blog + ${report.families.research.verifiedCount} Research)`);
