import { useEffect, type RefObject } from 'react';

/**
 * Observes all `.reveal` elements inside the given container ref
 * and adds the `in` class when they enter the viewport.
 * Elements are unobserved after they reveal (fire-once).
 */
export function useScrollReveal(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const targets = container.querySelectorAll<HTMLElement>('.reveal');
    targets.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [containerRef]);
}
