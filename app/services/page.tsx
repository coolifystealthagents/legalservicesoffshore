import type { Metadata } from 'next';
import { Header, Footer, CTA, JsonLd } from '../components';
import { fleetServices } from '../fleet-data';
import { site } from '../data';

const baseUrl = `https://${site.domain.toLowerCase()}`;
const servicesUrl = `${baseUrl}/services`;
const description = 'Explore legal support services staffed only by Filipino talent based in the Philippines, with clear task limits, review points, and attorney handoffs.';

export const metadata: Metadata = {
  title: 'Philippines legal support services',
  description,
  alternates: { canonical: servicesUrl },
  openGraph: {
    title: 'Philippines legal support services',
    description,
    url: servicesUrl,
    siteName: site.brand,
    type: 'website',
  },
};

export default function Services() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${servicesUrl}#webpage`,
        url: servicesUrl,
        name: 'Philippines legal support services',
        description,
        mainEntity: { '@id': `${servicesUrl}#service-list` },
        breadcrumb: { '@id': `${servicesUrl}#breadcrumb` },
      },
      {
        '@type': 'ItemList',
        '@id': `${servicesUrl}#service-list`,
        name: 'Legal support services staffed in the Philippines',
        numberOfItems: fleetServices.length,
        itemListElement: fleetServices.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: service.title,
          url: `${servicesUrl}/${service.slug}`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${servicesUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: servicesUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <JsonLd data={schema} />
        <section className="fleet-hero variant-3">
          <div className="container">
            <p className="eyebrow">Philippines-based services</p>
            <h1>Legal support services staffed in the Philippines</h1>
            <p className="lead">Choose a legal operations task, then set the tools, schedule, approval points, and attorney handoffs before work begins.</p>
            <p className="service-origin-note">We recruit and hire only in the Philippines. Every candidate is Filipino talent based in the Philippines.</p>
          </div>
        </section>
        <section className="section">
          <div className="container fleet-service-grid">
            {fleetServices.map((service, index) => (
              <a className="card fleet-service-card" href={`/services/${service.slug}`} key={service.slug}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h2>{service.title}</h2>
                <p>{service.desc}</p>
                <b>View service →</b>
              </a>
            ))}
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
