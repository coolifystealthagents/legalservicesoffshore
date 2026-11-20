const cardImages = [
  '/images/editorial/blog-hero.webp',
  '/images/editorial/legal-intake.webp',
  '/images/editorial/contract-administration.jpg',
  '/images/editorial/legal-research.jpg',
  '/images/editorial/case-file-management.webp',
  '/images/editorial/e-discovery.jpg',
  '/images/editorial/litigation-review.jpg',
  '/images/editorial/reporting-qa.webp',
] as const;

export function getCardImage(index: number): string {
  return cardImages[index % cardImages.length];
}
