import './globals.css';
import './redesign.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://legalservicesoffshore.com'),
  title: {
    default: 'Offshore Legal Support for Law Firms | Legal Services Offshore',
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
  return <html lang="en"><body>{children}</body></html>;
}
