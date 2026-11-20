const photos = {
  intake: '/images/editorial/legal-intake.webp',
  litigation: '/images/editorial/litigation-review.jpg',
  contract: '/images/editorial/contract-administration.jpg',
  research: '/images/editorial/legal-research.jpg',
  matter: '/images/editorial/case-file-management.webp',
  ediscovery: '/images/editorial/e-discovery.jpg',
  immigration: '/images/editorial/immigration-administration.webp',
  realestate: '/images/editorial/real-estate-legal.jpg',
  corporate: '/images/editorial/corporate-records.jpg',
  billing: '/images/editorial/billing-review.jpg',
  quality: '/images/editorial/reporting-qa.webp',
  team: '/images/editorial/home-international-legal-advisory-v3.webp',
  handoff: '/images/editorial/home-legal-operations-handoff-v2.webp',
} as const;

const fallbacks = Object.values(photos);

export function getArticleImage(slug: string, title = ''): string {
  const key = `${slug} ${title}`.toLowerCase();

  if (/intake|inquiry|lead/.test(key)) return photos.intake;
  if (/litigation|deposition|trial|court/.test(key)) return photos.litigation;
  if (/contract|agreement|renewal|clause|signature/.test(key)) return photos.contract;
  if (/research|source|citation|authority/.test(key)) return photos.research;
  if (/e-discovery|discovery|custodian|production/.test(key)) return photos.ediscovery;
  if (/immigration|visa|petition/.test(key)) return photos.immigration;
  if (/real-estate|property|lease|closing|title/.test(key)) return photos.realestate;
  if (/corporate|entity|governance|minutes|filing/.test(key)) return photos.corporate;
  if (/billing|time-entry|invoice|fee/.test(key)) return photos.billing;
  if (/quality|reporting|scorecard|review|handoff|exception|access|queue/.test(key)) return photos.quality;
  if (/matter|case-file|record|closeout/.test(key)) return photos.matter;
  if (/team|onboarding/.test(key)) return photos.team;

  let hash = 0;
  for (const char of key) hash = (hash + char.charCodeAt(0)) % 997;
  return fallbacks[hash % fallbacks.length];
}
