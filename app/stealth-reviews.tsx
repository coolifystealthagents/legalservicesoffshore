'use client';

import { useEffect, useRef } from 'react';

export const stealthReviews = [
  { headline: 'More room for strategic work', body: 'Lindsay has been incredible. She handles the tactical work, which has freed me up to focus on bigger-picture initiatives.', name: 'Chad Sublet', detail: 'Business Owner' },
  { headline: 'Part of the internal team', body: 'They have made a real difference in our day-to-day operations and truly feel like part of our internal team.', name: 'Alex Behrens', detail: 'Client since October 2024' },
  { headline: 'Efficient and proactive support', body: 'Great communication, efficient and proactive assistant, visible business growth.', name: 'Sarah Jacoby', detail: 'Client' },
  { headline: 'A team that learned the brand', body: 'The team learned my brand and goals and transformed my business. My dream team.', name: 'Martine Cadet', detail: 'Client' },
  { headline: 'Diligent and pleasant', body: 'We especially appreciate how diligent and pleasant Evy is. True pros.', name: 'Rich Cochran', detail: 'Client' },
  { headline: 'Excellent talent matches', body: 'Agents tackled diverse tasks seamlessly and manager Charm consistently provides excellent talent matches.', name: 'George Assi', detail: 'Two-year partner' },
  { headline: 'An absolute asset', body: 'Stealth Agents provided me with a fantastic virtual assistant who has been an absolute asset.', name: 'Lee Maasen', detail: 'Business Owner' },
  { headline: 'Time restored for planning', body: 'VA George eliminated late-night documentation work, restoring my sleep and enabling proper business planning.', name: 'Kevin Carabajal', detail: 'Client' },
  { headline: 'Quality work every time', body: 'Paolo is exceptional. Communicative, fast turnaround, quality work every time.', name: 'Lynda Sunshine West', detail: 'Client' },
  { headline: 'A clear onboarding experience', body: 'The easiest VA onboarding process. Communicative and helpful throughout.', name: 'McKay Jaeckel', detail: 'First-time hire' },
] as const;

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
