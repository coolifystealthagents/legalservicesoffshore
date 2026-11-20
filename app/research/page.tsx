import type { CSSProperties } from 'react';
import { Footer, Header, PageHero } from '../components';
import { researchPosts } from '../fleet-data';
import { site } from '../data';

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(`${date}T00:00:00Z`));

const researchImages = [
  '/images/editorial/research-hero.webp',
  '/images/editorial/legal-research.jpg',
  '/images/editorial/reporting-qa.webp',
  '/images/editorial/case-file-management.webp',
  '/images/editorial/litigation-review.jpg',
  '/images/editorial/e-discovery.jpg',
] as const;

const sortedResearchPosts = [...researchPosts].sort(
  (a, b) => b.published.localeCompare(a.published) || a.title.localeCompare(b.title)
);

export const metadata = {
  title: 'Research',
  description: 'Original research and source-backed analysis for planning Philippines-based legal support.',
  alternates: { canonical: '/research' },
};

export default function Research() {
  const featured = sortedResearchPosts.slice(0, 6);
  const archive = sortedResearchPosts.slice(featured.length);
  const clusters = Array.from(new Set(archive.map((post) => post.cluster)));

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="cf-page cf-index research-index-page">
        <PageHero
          eyebrow="Research library"
          title={<>Source-backed research for better support decisions.</>}
          lead="Use these reports to compare roles, controls, review cadence, and onboarding decisions before building a Philippines-based legal support team."
          image="/images/editorial/research-hero.webp"
          imageAlt="Professional reviewing research notes and source material"
          imageCaption="Source material, notes, and review questions kept together."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Research' }]}
          actions={<a className="cf-btn cf-btn--light" href="/blog">Read the practical guides ↗</a>}
        >
          <div className="research-meta" style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 18 }}>
            <span style={{ padding: '5px 9px', border: '1px solid rgba(255,255,255,.2)', color: '#d4ded7', fontFamily: 'var(--cf-mono)', fontSize: 7.5 }}>{sortedResearchPosts.length} reports</span>
            <span style={{ padding: '5px 9px', border: '1px solid rgba(255,255,255,.2)', color: '#d4ded7', fontFamily: 'var(--cf-mono)', fontSize: 7.5 }}>Methodology notes</span>
            <span style={{ padding: '5px 9px', border: '1px solid rgba(255,255,255,.2)', color: '#d4ded7', fontFamily: 'var(--cf-mono)', fontSize: 7.5 }}>Source-backed</span>
          </div>
        </PageHero>

        <section className="cf-section research-library-section">
          <div className="cf-container">
            <div className="cf-index-bar">
              <p>Each brief pairs a source review with the operating implications for a buyer.</p>
              <span>{sortedResearchPosts.length} research briefs</span>
            </div>

            <div className="research-card-grid">
              {featured.map((post, index) => (
                <a
                  className="research-library-card"
                  href={`/research/${post.slug}`}
                  key={post.slug}
                  data-reveal
                  style={{ '--cf-delay': `${(index % 3) * 60}ms` } as CSSProperties}
                >
                  <img className="research-card-image" src={researchImages[index % researchImages.length]} width="1200" height="630" alt="" loading="lazy" />
                  <span className="research-card-badge">{post.cluster}</span>
                  <h2>{post.title}</h2>
                  <p className="research-card-highlight">{post.headlineStat}</p>
                  <p className="research-card-excerpt">{post.excerpt}</p>
                  <div className="research-card-meta">
                    <span>{formatDate(post.published)}</span>
                    <span>Read brief ↗</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="cf-archive" id="research-archive">
              <h2>Complete archive</h2>
              {clusters.map((cluster) => {
                const items = archive.filter((post) => post.cluster === cluster);
                return (
                  <details key={cluster}>
                    <summary>
                      <span>{cluster}</span>
                      <small>{items.length} {items.length === 1 ? 'brief' : 'briefs'}</small>
                    </summary>
                    <div className="cf-archive-links">
                      {items.map((post) => (
                        <a href={`/research/${post.slug}`} key={post.slug}>
                          <span style={{ color: '#405048', fontFamily: 'var(--cf-body)', fontSize: 12, letterSpacing: 0, textTransform: 'none' }}>{post.title}</span>
                          <span>Read ↗</span>
                        </a>
                      ))}
                    </div>
                  </details>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
