/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://acrtracking.stealthagents.us https://static.cloudflareinsights.com https://*.oncehub.com https://*.scheduleonce.com; connect-src 'self' https://acrtracking.stealthagents.us https://cloudflareinsights.com https://*.oncehub.com https://*.scheduleonce.com; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://*.oncehub.com; font-src 'self' data:; frame-src https://*.oncehub.com https://*.scheduleonce.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests" },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
];
const nextConfig = { async headers(){return [{source:'/(.*)',headers:securityHeaders}]} };
export default nextConfig;
