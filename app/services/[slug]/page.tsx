import { Header, Footer, CTA, JsonLd } from '../../components';
import { services, serviceDetails, site } from '../../data';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const baseUrl = `https://${site.domain.toLowerCase()}`;
  const serviceUrl = `${baseUrl}/services/${service?.slug || slug}`;
  const title = service?.title || 'Service';
  const description = service?.desc;

  return {
    title,
    description,
    alternates: { canonical: serviceUrl },
    openGraph: {
      title,
      description,
      url: serviceUrl,
      siteName: site.brand,
      type: 'website',
    },
  };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug) || services[0];
  const detail = serviceDetails[service.slug];
  const baseUrl = `https://${site.domain.toLowerCase()}`;
  const serviceUrl = `${baseUrl}/services/${service.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${serviceUrl}#webpage`,
        url: serviceUrl,
        name: service.title,
        description: service.desc,
        mainEntity: { '@id': `${serviceUrl}#service` },
        breadcrumb: { '@id': `${serviceUrl}#breadcrumb` },
        hasPart: { '@id': `${serviceUrl}#faq` },
      },
      {
        '@type': 'Service',
        '@id': `${serviceUrl}#service`,
        name: service.title,
        description: service.desc,
        url: serviceUrl,
        serviceType: 'Offshore legal support staffing',
        areaServed: 'United States',
        provider: { '@type': 'Organization', name: site.brand, url: baseUrl },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${service.title} task lanes`,
          itemListElement: detail.bestTasks.map((task) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: task } })),
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${serviceUrl}#faq`,
        mainEntity: detail.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${serviceUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/#services` },
          { '@type': 'ListItem', position: 3, name: service.title, item: serviceUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <JsonLd data={schema} />
        <section className="service-hero">
          <div className="container two">
            <div>
              <p className="eyebrow">{site.brand} service</p>
              <h1>{service.title}</h1>
              <p className="lead">{service.desc}</p>
              <a className="btn" href="/contact">Plan this role</a>
            </div>
            <div className="hero-card"><img src={site.serviceImage} alt={`${service.title} offshore service team`} /></div>
          </div>
        </section>

        <section className="section">
          <div className="container cards">
            <div className="card">
              <h3>Good first tasks</h3>
              <ul>{detail.bestTasks.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="card">
              <h3>Review rules</h3>
              <ul>{detail.guardrails.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="card">
              <h3>First week plan</h3>
              <ul>{detail.firstWeek.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="section band">
          <div className="container two">
            <div>
              <p className="eyebrow">Legal guardrails</p>
              <h2>Keep judgment with the firm.</h2>
              <p>Offshore staff can take admin work, intake notes, reports, and prepared checklists off the desk. Legal advice, case strategy, filing approval, and client promises stay with the licensed team.</p>
            </div>
            <div className="card">
              <h3>Pilot scorecard</h3>
              <p>Use five fields for the first two weeks: accuracy, turnaround, missing details, escalation speed, and rework reason.</p>
              <p className="quote">"Send anything with legal judgment to the attorney before it reaches the client."</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: 920 }}>
            <p className="eyebrow">FAQ</p>
            <h2>Questions firms ask before hiring.</h2>
            <div className="cards">
              {detail.faqs.map((faq) => (
                <div className="card" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
