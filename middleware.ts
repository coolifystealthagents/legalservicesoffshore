import { NextRequest, NextResponse } from 'next/server';
const legacyServiceRedirects: Record<string, string> = {
  '/services/operations-support': '/services/case-file-management',
  '/services/customer-support': '/services/legal-intake-support',
  '/services/admin-support': '/services/contract-administration',
};
export function middleware(request:NextRequest){
  const forwardedProto=request.headers.get('x-forwarded-proto');
  const cloudflareVisitor=request.headers.get('cf-visitor');
  let visitorProto='';
  if(cloudflareVisitor){try{visitorProto=String(JSON.parse(cloudflareVisitor).scheme||'').toLowerCase();}catch{visitorProto='';}}
  const forwardedHost=request.headers.get('x-forwarded-host')||request.headers.get('host')||request.nextUrl.host;
  const host=forwardedHost.split(':')[0].toLowerCase();
  if(forwardedProto==='http'||visitorProto==='http'||host==='www.legalservicesoffshore.com'){
    const url=request.nextUrl.clone();url.protocol='https:';url.host='legalservicesoffshore.com';url.port='';return NextResponse.redirect(url,308);
  }
  const replacement=legacyServiceRedirects[request.nextUrl.pathname];
  if(replacement){const url=request.nextUrl.clone();url.pathname=replacement;return NextResponse.redirect(url,308);}
  return NextResponse.next();
}
export const config={matcher:['/((?!_next/static|_next/image|favicon.ico).*)']};
