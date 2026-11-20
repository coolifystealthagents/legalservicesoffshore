'use client';

import { useEffect, useRef, useState } from 'react';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>('a,button');
    focusable?.[0]?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
      if (event.key === 'Tab' && focusable?.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    }
    document.addEventListener('keydown', onKey);
    document.body.classList.add('menu-open');
    return () => { document.removeEventListener('keydown', onKey); document.body.classList.remove('menu-open'); };
  }, [open]);

  return <>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <header className="cf-header">
      <div className="cf-nav">
        <a className="cf-brand" href="/" aria-label="Legal Services Offshore home">
          <img src="/logo.svg" alt="" width="40" height="40" />
          <span className="cf-brand-text">
            <span className="cf-brand-name">Legal Services Offshore</span>
            <span className="cf-brand-sub">Powered by StealthAgents</span>
          </span>
        </a>
        <nav className="cf-nav-links" aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact-us">Contact Us</a>
        </nav>
        <a className="cf-nav-cta" href="/contact-us" id="cta-global-header-contact">Request a support plan <span aria-hidden="true">↗</span></a>
        <button ref={buttonRef} className="cf-menu-button" type="button" aria-expanded={open} aria-controls="cf-mobile-primary" onClick={() => setOpen(v => !v)}>
          <span aria-hidden="true">{open ? 'Close' : 'Menu'}</span><span className="cf-sr">{open ? 'Close navigation' : 'Open navigation'}</span>
        </button>
      </div>
      {open ? <div className="cf-mobile-panel" id="cf-mobile-primary" ref={panelRef} role="dialog" aria-modal="true" aria-label="Site navigation">
        <nav aria-label="Mobile primary navigation">
          <a href="/" onClick={() => setOpen(false)}>Home</a>
          <a href="/services" onClick={() => setOpen(false)}>Services</a>
          <a href="/contact-us" onClick={() => setOpen(false)}>Contact Us</a>
          <a href="/blog" onClick={() => setOpen(false)}>Blog</a>
          <a href="/research" onClick={() => setOpen(false)}>Research</a>
        </nav>
      </div> : null}
    </header>
  </>;
}
