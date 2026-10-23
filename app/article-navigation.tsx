'use client';

import { useEffect, useState } from 'react';

type Heading = { id: string; label: string; level: number };

export function ArticleNavigator({ items = [], related = [], serviceHref = '/services/legal-research-support' }: { items?: Heading[]; related?: { href: string; label: string }[]; serviceHref?: string }) {
  const [headings, setHeadings] = useState<Heading[]>(items);
  const [active, setActive] = useState('');
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-article-body="true"]');
    if (!root) return;
    const seen = new Map<string, number>();
    const list = [...root.querySelectorAll<HTMLElement>('h2,h3')].filter(h => !h.closest('[data-article-sidebar]')).map((heading) => {
      let id = heading.id || (heading.textContent || 'section').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      const count = seen.get(id) || 0;
      seen.set(id, count + 1);
      if (count) id = `${id}-${count + 1}`;
      heading.id = id;
      heading.classList.add('article-anchor');
      return { id, label: heading.textContent || 'Section', level: Number(heading.tagName.slice(1)) };
    });
    setHeadings(list);
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-110px 0px -70% 0px', threshold: [0, 1] });
    list.forEach(item => { const node = document.getElementById(item.id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, []);

  return <aside className="article-sidebar" data-article-sidebar aria-label="Article tools">
    <details className="toc-disclosure">
      <summary>In this article</summary>
      <nav aria-label="Table of contents">
        {headings.length ? <ol>{headings.map(item => <li key={item.id} className={item.level === 3 ? 'toc-sub' : ''}><a href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined} onClick={(event) => { const details = event.currentTarget.closest('details'); if (details) details.removeAttribute('open'); }}>{item.label}</a></li>)}</ol> : <p className="toc-loading">Article sections load here.</p>}
      </nav>
    </details>
    <section className="sidebar-module"><h2>Publisher</h2><p><strong>Legal Services Offshore</strong><br />Powered by StealthAgents</p><p>Operational guidance for supervised Philippines-based legal support.</p></section>
    <section className="sidebar-module"><h2>Related support</h2><a href={serviceHref}>Explore the relevant service</a><a href="/contact-us">Discuss a controlled workflow</a></section>
    {related.length ? <section className="sidebar-module"><h2>Related reading</h2>{related.slice(0,3).map(item => <a href={item.href} key={item.href}>{item.label}</a>)}</section> : null}
  </aside>;
}
