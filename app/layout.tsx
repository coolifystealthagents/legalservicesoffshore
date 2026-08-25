import { AcrClient } from './acr-client';
import Script from 'next/script';
import './globals.css';
import './redesign.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://legalservicesoffshore.com'),
  title: {
    default: 'Offshore Legal Support for Law Firms | LSO',
    template: '%s | Legal Services Offshore',
  },
  description: 'Plan offshore legal intake, matter administration, document preparation, billing support, and reporting with clear attorney review rules.',
  openGraph: {
    title: 'Offshore Legal Support for Law Firms',
    description: "Build a clear legal support role around your firm's tasks, tools, access rules, and review points.",
    url: 'https://legalservicesoffshore.com',
    siteName: 'Legal Services Offshore',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}<AcrClient/><Script id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'legal-services-offshore',endpoint:'/ingest/track',debug:false,funnelSteps:[{path:'/contact-us',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/contact',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/thank-you',step:2,label:'Form Submitted',event:'funnel_form_submitted'},{path:'/thanks-whats-next',step:3,label:'Booking Confirmed',event:'funnel_booking_confirmed'}]};`}</Script><Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive"/></body></html>;
}
