import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { fleetServices } from '../../fleet-data';
import { site } from '../../data';

const baseUrl = `https://${site.domain.toLowerCase()}`;

export function generateStaticParams() {
  return fleetServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);

  if (!service) return { title: 'Not found' };

  const url = `${baseUrl}/services/${service.slug}`;

  return {
    title: service.title,
    description: service.desc,
    alternates: { canonical: url },
    openGraph: {
      title: service.title,
      description: service.desc,
      url,
      siteName: site.brand,
      type: 'website' as const,
    },
  };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);

  if (!service) notFound();

  const url = `${baseUrl}/services/${service.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: service.title,
        description: service.desc,
        mainEntity: { '@id': `${url}#service` },
        hasPart: { '@id': `${url}#launch-plan` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: service.title,
        description: service.desc,
        url,
        serviceType: 'Philippines-based legal operations staffing',
        areaServed: {
          '@type': 'Country',
          name: 'Philippines',
        },
        provider: {
          '@type': 'Organization',
          name: site.brand,
          url: baseUrl,
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${service.title} tasks`,
          itemListElement: service.tasks.map((task) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: task },
          })),
        },
      },
      {
        '@type': 'HowTo',
        '@id': `${url}#launch-plan`,
        name: `How to start ${service.title.toLowerCase()}`,
        description: `A first-week plan for adding Philippines-based ${service.title.toLowerCase()} to a legal team.`,
        step: service.firstWeek.map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: step,
          text: step,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/services` },
          { '@type': 'ListItem', position: 3, name: service.title, item: url },
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
            <p className="eyebrow">Philippines-based legal operations support</p>
            <h1>{service.title}</h1>
            <p className="lead">{service.desc}</p>
            <p className="service-origin-note">We recruit only in the Philippines. Every candidate for this service is Filipino talent based in the Philippines.</p>
            <a className="btn primary" href="/contact">Discuss this service</a>
          </div>
        </section>
        <section className="section">
          <div className="container fleet-detail-grid">
            <div className="card">
              <h2>Tasks to assign</h2>
              <ul>{service.tasks.map((task) => <li key={task}>{task}</li>)}</ul>
            </div>
            <div className="card">
              <h2>Controls to keep</h2>
              <ul>{service.controls.map((control) => <li key={control}>{control}</li>)}</ul>
            </div>
            <div className="card">
              <h2>Launch steps</h2>
              <ol>{service.firstWeek.map((step) => <li key={step}>{step}</li>)}</ol>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
