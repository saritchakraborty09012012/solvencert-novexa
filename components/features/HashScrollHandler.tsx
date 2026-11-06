import { useEffect } from 'react';
import { useRouter } from 'next/router';

/**
 * Scrolls to the element named by a URL hash after client-side navigation.
 *
 * Next's router scrolls to top on route changes; content pages also restore a
 * saved reading position. That can win the race against a `#q-ex9.1-q17` link
 * opened from the What's New popup. This handler re-asserts the hash target for
 * a short while, so "View" always lands on the exact question or section.
 */

const HEADER_OFFSET = 104;
const MAX_ATTEMPTS = 24;
const RETRY_MS = 110;

function scrollToId(id: string): () => void {
  let cancelled = false;
  let attempts = 0;
  let timer = 0;

  const stop = () => {
    cancelled = true;
    if (timer) window.clearTimeout(timer);
    window.removeEventListener('wheel', stop);
    window.removeEventListener('touchstart', stop);
  };

  const apply = (smooth: boolean) => {
    const el = document.getElementById(id);
    if (!el) return false;
    const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET);
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo({ top, behavior: smooth ? 'smooth' : 'auto' });
    root.style.scrollBehavior = previous;
    return true;
  };

  const step = () => {
    if (cancelled) return;
    if (apply(false)) {
      // Re-assert once after paint in case the router's scroll-to-top or the
      // chapter reading-position restore runs just after us.
      timer = window.setTimeout(() => {
        if (!cancelled) apply(false);
      }, 140);
      return;
    }
    attempts += 1;
    if (attempts >= MAX_ATTEMPTS) return;
    timer = window.setTimeout(step, RETRY_MS);
  };

  // Let the user take over immediately.
  window.addEventListener('wheel', stop, { once: true, passive: true });
  window.addEventListener('touchstart', stop, { once: true, passive: true });

  step();
  return stop;
}

export default function HashScrollHandler() {
  const router = useRouter();

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const run = (url: string) => {
      cleanup?.();
      cleanup = undefined;

      const hashIndex = url.indexOf('#');
      const hash = hashIndex !== -1 ? url.slice(hashIndex) : window.location.hash;
      if (!hash || hash === '#') return;

      let id = hash.slice(1);
      try {
        id = decodeURIComponent(id);
      } catch {
        /* keep the raw value */
      }
      if (!id) return;

      cleanup = scrollToId(id);
    };

    run(`${window.location.pathname}${window.location.search}${window.location.hash}`);

    const onRoute = (url: string) => run(url);
    const onHash = (url: string) => run(url);

    router.events.on('routeChangeComplete', onRoute);
    router.events.on('hashChangeComplete', onHash);

    return () => {
      cleanup?.();
      router.events.off('routeChangeComplete', onRoute);
      router.events.off('hashChangeComplete', onHash);
    };
  }, [router.events]);

  return null;
}
