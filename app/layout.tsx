import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://legalservicesoffshore.com'), title: { default: 'Legal Services Offshore | Offshore outsourcing guides', template: '%s | Legal Services Offshore' }, description: 'Stealth Agents-style guides for legal services offshore: services, onboarding, role scope, and provider questions.', openGraph: { title: 'Legal Services Offshore', description: 'Practical outsourcing guides for business teams.', url: 'https://legalservicesoffshore.com', siteName: 'Legal Services Offshore', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
