import type { CSSProperties } from 'react';
import { FeaturedComparison } from '../../FeaturedComparison';
import { notFound } from 'next/navigation';
import { Footer, Header, PageHero } from '../../../components';
import { blogPosts, site } from '../../../data';
import { postsPerPage } from '../../../fleet-data';
import { getCardImage } from '../../card-image';

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(`${date}T00:00:00Z`));

export function generateStaticParams() {
  const pages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage));
  return Array.from({ length: pages }, (_, i) => ({ page: String(i + 1) }));
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  return {
    title: `Blog page ${page}`,
    description: `Browse page ${page} of practical legal support planning guides.`,
    alternates: { canonical: page === '1' ? '/blog' : `/blog/page/${page}` },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const n = Number(page);
  const pages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage));
  if (!Number.isInteger(n) || n < 1 || n > pages) notFound();
  const posts = blogPosts.slice((n - 1) * postsPerPage, n * postsPerPage);

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="cf-page cf-index">
        <PageHero
          eyebrow={`Blog · page ${n}`}
          title={<>More guides for the next handoff.</>}
          lead="Browse Philippines-based legal operations and workflow articles, ordered by publication date."
          image="/images/editorial/blog-hero.webp"
          imageAlt="Professional writing a legal operations guide at a laptop"
          imageCaption="Every role starts with a documented workflow."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: `Page ${n}` }]}
          actions={<a className="cf-btn cf-btn--light" href="/blog">Back to the latest guides</a>}
        />
        <section className="cf-section">
          <div className="cf-container">
            <div className="cf-index-bar">
              <p>Page {n} of {pages}. Every guide stays available at its original URL.</p>
              <span>{posts.length} guides on this page</span>
            </div>
            {n === 2 ? <FeaturedComparison /> : null}
            <div className="cf-posts" style={{ marginTop: n === 2 ? 24 : 0 }}>
              {posts.map((post, index) => {
                const date = 'published' in post && typeof post.published === 'string' ? post.published : '';
                return (
                  <a
                    className="cf-post"
                    href={`/blog/${post.slug}`}
                    key={post.slug}
                    data-reveal
                    style={{ '--cf-delay': `${(index % 3) * 60}ms` } as CSSProperties}
                  >
                    <img src={getCardImage(index)} alt="" loading="lazy" />
                    <div className="cf-post-body">
                      <span className="cf-post-meta">{date ? formatDate(date) : `${post.minutes} minute guide`}</span>
                      <h3>{post.title.replace('Legal Services Offshore: ', '')}</h3>
                      <p>{post.excerpt}</p>
                      <span className="cf-link">Read the guide ↗</span>
                    </div>
                  </a>
                );
              })}
            </div>
            <nav className="pagination" aria-label="Blog pages">
              {Array.from({ length: pages }, (_, i) => (
                <a aria-current={i + 1 === n ? 'page' : undefined} href={i === 0 ? '/blog' : `/blog/page/${i + 1}`} key={i}>
                  {i + 1}
                </a>
              ))}
            </nav>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
