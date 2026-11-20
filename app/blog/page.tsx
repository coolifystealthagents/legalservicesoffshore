import type { CSSProperties } from 'react';
import { Footer, Header, PageHero } from '../components';
import { blogPosts, site } from '../data';
import { postsPerPage } from '../fleet-data';
import { getCardImage } from './card-image';

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(`${date}T00:00:00Z`));

export const metadata = {
  title: 'Blog',
  description: `Philippines-based ${site.primary} planning guides.`,
  alternates: { canonical: '/blog' },
};

export default function Blog() {
  const pages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage));
  const posts = blogPosts.slice(0, postsPerPage);
  const [featured, ...rest] = posts;
  const featuredDate = featured && 'published' in featured && typeof featured.published === 'string' ? featured.published : '';

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="cf-page cf-index">
        <PageHero
          eyebrow="Blog"
          title={<>Legal operations guides, written for the handoff.</>}
          lead="Practical planning for Philippines-based legal operations roles, workflows, and manager review."
          image="/images/editorial/blog-hero.webp"
          imageAlt="Professional writing a legal operations guide at a laptop"
          imageCaption="Plan the queue before you hire for it."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
          actions={<a className="cf-btn cf-btn--light" href="/research">Browse the research library ↗</a>}
        />

        <section className="cf-section">
          <div className="cf-container">
            <div className="cf-index-bar">
              <p>Every guide is written for the person who has to make the handoff work.</p>
              <span>{posts.length} guides on this page</span>
            </div>

            {featured ? (
              <a className="cf-feature" href={`/blog/${featured.slug}`} data-reveal>
                <div className="cf-feature-media">
                  <img src={getCardImage(0)} alt="" loading="eager" />
                </div>
                <div className="cf-feature-copy">
                  <span className="cf-post-meta">{featured.minutes} minute guide</span>
                  <h2>{featured.title.replace('Legal Services Offshore: ', '')}</h2>
                  <p>{featured.excerpt}</p>
                  {featuredDate ? <span className="cf-post-meta">Published {formatDate(featuredDate)}</span> : null}
                  <span className="cf-link" style={{ marginTop: 20 }}>Read the guide ↗</span>
                </div>
              </a>
            ) : null}

            <div className="cf-posts">
              {rest.map((post, index) => {
                const date = 'published' in post && typeof post.published === 'string' ? post.published : '';
                return (
                  <a
                    className="cf-post"
                    href={`/blog/${post.slug}`}
                    key={post.slug}
                    data-reveal
                    style={{ '--cf-delay': `${(index % 3) * 60}ms` } as CSSProperties}
                  >
                    <img src={getCardImage(index + 1)} alt="" loading="lazy" />
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
                <a aria-current={i === 0 ? 'page' : undefined} href={i === 0 ? '/blog' : `/blog/page/${i + 1}`} key={i}>
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
