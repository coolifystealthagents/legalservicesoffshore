import { Footer, Header, JsonLd } from '../components';
import { leadQuestions, site, staffingFitNote, staffingOffer } from '../data';

export const metadata = {
  title: `Contact ${site.brand}`,
  description: 'Ask for an offshore legal support role plan based on your tasks, practice tools, schedule, access limits, and review rules.',
};

export default function Contact() {
  const siteUrl = `https://${site.domain.toLowerCase()}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'ContactPage', name: `Contact ${site.brand}`, url: `${siteUrl}/contact` },
      { '@type': 'Organization', name: site.brand, url: siteUrl },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteUrl}/contact` },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="section">
        <JsonLd data={schema} />
        <div className="container two">
          <div>
            <p className="eyebrow">Plan the first role</p>
            <h1>Tell us which legal admin work needs an owner</h1>
            <p className="lead">Share one task that keeps slipping, the tools it touches, and who should review it. The staffing team will use those details to map the role.</p>
            <div className="card">
              <h2>What the staffing team can map</h2>
              <ul className="list">{staffingOffer.included.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="card">
              <h2>Details worth sending</h2>
              <ul className="list">{leadQuestions.map((question) => <li key={question}>{question}</li>)}</ul>
            </div>
            <p className="callout"><b>About fit:</b> {staffingFitNote}</p>
          </div>
          <form className="card" action="/thank-you">
            <label>Name<br /><input required name="name" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
            <label>Email<br /><input required name="email" type="email" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
            <label>Firm / website<br /><input name="company" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
            <label>Which role or task do you want staffed?<br /><textarea name="tasks" rows={6} style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
            <label>What needs the most care?<br />
              <select name="concern" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }}>
                <option>Finding someone with the right experience</option>
                <option>Reviewing work and correcting errors</option>
                <option>Coverage, schedule, and time zone</option>
                <option>Practice-tool access and client data</option>
                <option>Adding more work after the pilot</option>
              </select>
            </label>
            <button className="btn" type="submit">Request a role plan</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
