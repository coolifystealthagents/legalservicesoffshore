import { Footer, Header } from '../components';

export const metadata = {
  title: 'Request received',
  robots: { index: false, follow: false },
};

export default function Thanks() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <p className="eyebrow">Request received</p>
          <h1>Your role details are on their way</h1>
          <p className="lead">The staffing team can now review the task, schedule, tools, and access concerns you shared. Keep a recent work example handy for the next conversation.</p>
          <a className="btn" href="/blog/legal-services-offshore-planning">Read the role planning guide</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
