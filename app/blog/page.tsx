import { Footer, Header } from '../components';
import { blogPosts, site } from '../data';

export const metadata = {
  title: 'Offshore legal support guides',
  description: 'Practical guides for planning, hiring, and reviewing offshore legal support without handing off attorney judgment.',
};

export default function Blog() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <p className="eyebrow">{site.brand} guides</p>
          <h1>Plan an offshore legal support role</h1>
          <p className="lead">Use these guides to choose a first task, question a provider, and set firm review rules before a new hire gets access.</p>
          <div className="cards">
            {blogPosts.map((post) => (
              <a className="card" href={`/blog/${post.slug}`} key={post.slug}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="pill">{post.minutes} min read</span>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
