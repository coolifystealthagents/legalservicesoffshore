import { blogPosts, services, site, staffingProcess } from './data';
import { Footer, Header, JsonLd } from './components';

const serviceMarks = ['01', '02', '03', '04'];
const serviceNotes = [
  'Keep intake facts complete and urgent messages moving.',
  'Give every routine matter update a clear next step.',
  'Prepare files from firm-approved templates and rules.',
  'See output, rework, and exceptions in one short report.',
];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `https://${site.domain}/#organization`,
        name: site.brand,
        url: `https://${site.domain}`,
      },
      {
        '@type': 'WebPage',
        '@id': `https://${site.domain}/#webpage`,
        url: `https://${site.domain}`,
        name: 'Offshore legal support for law firms',
        description: 'Plan offshore legal intake, matter administration, document preparation, billing support, and quality reporting with clear attorney review rules.',
        about: { '@id': `https://${site.domain}/#organization` },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: services.map((service, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: service.title,
            url: `https://${site.domain}/services/${service.slug}`,
          })),
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="lso-home">
        <JsonLd data={schema} />

        <section className="lso-hero">
          <div className="container lso-hero-grid">
            <div className="lso-hero-copy">
              <p className="lso-kicker">Offshore legal support, built around your rules</p>
              <h1>Give legal admin work a clear owner.</h1>
              <p className="lso-intro">
                Build a remote support role for the repeat work that slows your firm down. Your attorneys keep legal judgment. Your support team keeps the handoff moving.
              </p>
              <ul className="lso-hero-list">
                <li>Client intake notes and follow-up</li>
                <li>Matter updates and deadline tracking</li>
                <li>Document prep from firm templates</li>
                <li>Billing and records cleanup</li>
              </ul>
              <a className="lso-button lso-button-primary" href="/contact">Request support plan</a>
              <p className="lso-micro">Start with one role, a short task list, and firm-set review rules.</p>
            </div>

            <div className="lso-hero-visual" aria-label="Legal support work organized around firm review">
              <div className="lso-image-frame">
                <img src={site.heroImage} alt={site.alt} />
                <span className="lso-image-label">Built for law-firm handoffs</span>
              </div>
              <div className="lso-docket-card">
                <span>First role file</span>
                <strong>Intake + matter admin</strong>
                <ul>
                  <li>Approved scripts</li>
                  <li>Limited tool access</li>
                  <li>Named review owner</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container lso-trust-strip">
            <p>Control stays with your firm</p>
            <span>Attorney review for legal judgment</span>
            <span>Access starts narrow</span>
            <span>Quality checks are written down</span>
          </div>
        </section>

        <section className="lso-problem">
          <div className="container lso-problem-grid">
            <div>
              <p className="lso-kicker">Routine work still needs care</p>
              <h2>Your attorneys should not be chasing every update.</h2>
            </div>
            <div className="lso-problem-copy">
              <p>New leads wait for a call back. Matter notes sit in an inbox. Files need the same cleanup every week. None of this is legal strategy, but missed details still hurt the client experience.</p>
              <p>A well-scoped offshore role gives that work an owner. The firm sets the script, access, deadline rules, and review point before the first task goes live.</p>
            </div>
          </div>
        </section>

        <section className="container lso-services" id="tasks">
          <div className="lso-section-head">
            <div>
              <p className="lso-kicker">Choose the first work lane</p>
              <h2>Support roles shaped for legal teams.</h2>
            </div>
            <p>Start with the work that repeats and already has a good example. Add more only after the first lane is steady.</p>
          </div>
          <div className="lso-service-grid">
            {services.map((service, index) => (
              <a className="lso-service-card" href={`/services/${service.slug}`} key={service.slug}>
                <span className="lso-card-number">{serviceMarks[index]}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{serviceNotes[index]}</p>
                </div>
                <strong>See the role scope <span aria-hidden="true">→</span></strong>
              </a>
            ))}
          </div>
        </section>

        <section className="lso-control">
          <div className="container lso-control-grid">
            <div className="lso-control-photo">
              <img src={site.serviceImage} alt="Law firm team reviewing a legal support handoff" />
              <div className="lso-photo-caption">
                <span>Firm review gate</span>
                <strong>Prep work moves. Legal calls stay with counsel.</strong>
              </div>
            </div>
            <div className="lso-control-copy">
              <p className="lso-kicker">A safer way to hand off work</p>
              <h2>Write the boundary before you share the login.</h2>
              <p>Your first role plan should name the task, the source file, the expected output, and the person who approves exceptions. That is much safer than a vague job description.</p>
              <div className="lso-rule-list">
                <div><span>01</span><p><strong>Show a clean example.</strong> Give the support team a finished file or note that meets the firm's standard.</p></div>
                <div><span>02</span><p><strong>Limit the first access.</strong> Open only the tools and folders needed for the pilot.</p></div>
                <div><span>03</span><p><strong>Review early work.</strong> Check the first batch before moving from daily review to weekly samples.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="container lso-process">
          <div className="lso-section-head">
            <div>
              <p className="lso-kicker">From task list to working role</p>
              <h2>A plain four-step launch.</h2>
            </div>
            <a className="lso-text-link" href="/contact">Request support plan →</a>
          </div>
          <div className="lso-process-grid">
            {staffingProcess.map((item) => (
              <article key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.body.replace('our staffing team', 'The staffing team')}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lso-guides">
          <div className="container">
            <div className="lso-section-head">
              <div>
                <p className="lso-kicker">Read before you hire</p>
                <h2>Useful notes for the planning call.</h2>
              </div>
              <a className="lso-text-link" href="/blog">View all guides →</a>
            </div>
            <div className="lso-guide-grid">
              {blogPosts.slice(0, 3).map((post, index) => (
                <a href={`/blog/${post.slug}`} key={post.slug}>
                  <span>{String(index + 1).padStart(2, '0')} / {post.minutes} min</span>
                  <h3>{post.title.replace('Legal Services Offshore: ', '')}</h3>
                  <p>{post.excerpt}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="container lso-final">
          <div>
            <p className="lso-kicker">Bring the messy task list</p>
            <h2>We will help turn it into one clear legal support role.</h2>
          </div>
          <div>
            <p>Share the work, tools, hours, and review needs. The next step is a practical staffing scope, not a public rate card.</p>
            <a className="lso-button lso-button-light" href="/contact">Request support plan</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
