import { CTA, Footer, Header } from '../../components';
import { blogDetails, blogPosts, site } from '../../data';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return { title: post?.title || 'Guide', description: post?.excerpt };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug) || blogPosts[0];
  const detail = blogDetails[post.slug];

  return (
    <>
      <Header />
      <main className="section">
        <article className="container" style={{ maxWidth: 880 }}>
          <p className="eyebrow">{site.brand} guide</p>
          <h1>{post.title}</h1>
          <p className="lead">{post.excerpt}</p>
          <div className="card">
            <h2>The short answer</h2>
            <p>{detail.answer}</p>
            <h2>{detail.prepareTitle}</h2>
            <ul>{detail.prepare.map((item) => <li key={item}>{item}</li>)}</ul>
            <h2>{detail.questionsTitle}</h2>
            <ul>{detail.questions.map((item) => <li key={item}>{item}</li>)}</ul>
            <p className="callout">Offshore staff can prepare, organize, and report. The firm still owns legal advice, case strategy, filing approval, and client promises.</p>
          </div>
        </article>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
