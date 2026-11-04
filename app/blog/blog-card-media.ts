const fallbackImage = "/images/editorial/blog-hero.webp";

export function getBlogCardImage(post: unknown): string {
  const media = post as {
    featuredImage?: unknown;
    image?: unknown;
    thumbnail?: unknown;
  };
  const candidate = [media.featuredImage, media.image, media.thumbnail].find(
    (value): value is string => typeof value === "string" && value.length > 0,
  );
  return candidate ?? fallbackImage;
}
