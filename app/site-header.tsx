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
    <header className="nav" data-site-header>
      <div className="nav-inner">
        <a className="logo" href="/" aria-label="Legal Services Offshore home">
          <img className="logo-img" src="/logo.svg" alt="" width="42" height="42" />
          <span className="logo-text"><span className="logo-name">Legal Services Offshore</span><span className="parent-attribution">Powered by <strong>StealthAgents</strong></span></span>
        </a>
        <nav className="desktop-primary" aria-label="Primary navigation">
          <a href="/">Home</a><a href="/services">Services</a><a href="/contact-us">Contact Us</a>
        </nav>
        <button ref={buttonRef} className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-primary" onClick={() => setOpen(v => !v)}>
          <span aria-hidden="true">{open ? 'Close' : 'Menu'}</span><span className="sr-only">{open ? 'Close navigation' : 'Open navigation'}</span>
        </button>
      </div>
      {open ? <div className="mobile-panel" id="mobile-primary" ref={panelRef} role="dialog" aria-modal="true" aria-label="Site navigation">
        <nav aria-label="Mobile primary navigation"><a href="/" onClick={() => setOpen(false)}>Home</a><a href="/services" onClick={() => setOpen(false)}>Services</a><a href="/contact-us" onClick={() => setOpen(false)}>Contact Us</a></nav>
      </div> : null}
    </header>
  </>;
}
