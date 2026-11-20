'use client';

import { useEffect, useRef } from 'react';

import { stealthReviews } from './reviews-data';
export { stealthReviews };


export function ReviewMarquee() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let position = viewport.scrollLeft;
    let frame = 0;
    let previous = 0;
    let paused = false;
    const pause = () => { paused = true; };
    const resume = () => { paused = false; previous = performance.now(); };
    const move = (time: number) => {
      if (!previous) previous = time;
      if (!paused) {
        position += Math.min(time - previous, 40) * 0.028;
        viewport.scrollLeft = Math.round(position);
        const first = track.firstElementChild as HTMLElement | null;
        if (first) {
          const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
          const span = first.getBoundingClientRect().width + gap;
          if (position >= span) {
            track.append(first);
            position -= span;
            viewport.scrollLeft = Math.round(position);
          }
        }
      }
      previous = time;
      frame = requestAnimationFrame(move);
    };
    viewport.addEventListener('pointerenter', pause);
    viewport.addEventListener('pointerleave', resume);
    viewport.addEventListener('focusin', pause);
    viewport.addEventListener('focusout', resume);
    frame = requestAnimationFrame(move);
    return () => {
      cancelAnimationFrame(frame);
      viewport.removeEventListener('pointerenter', pause);
      viewport.removeEventListener('pointerleave', resume);
      viewport.removeEventListener('focusin', pause);
      viewport.removeEventListener('focusout', resume);
    };
  }, []);
  return <section className="review-marquee" aria-labelledby="stealth-review-heading">
    <p id="stealth-review-heading" className="review-label">StealthAgents reviews</p>
    <div className="review-viewport" ref={viewportRef}><div className="review-track" ref={trackRef}>
      {stealthReviews.map((review) => <article className="review-card" key={review.name}>
        <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div><h2>{review.headline}</h2><blockquote>“{review.body}”</blockquote><p><strong>{review.name}</strong><span>{review.detail}</span></p>
      </article>)}
    </div></div>
    <p className="review-source">Verified from the <a href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">official StealthAgents website</a>.</p>
  </section>;
}
