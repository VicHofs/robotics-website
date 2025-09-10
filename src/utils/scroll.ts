import Lenis from "lenis";

type ScrollOptions = {
  duration?: number;
  easing?: (t: number) => number;
  offset?: number; // pixels to offset from top (e.g., header height)
};

let lenis: Lenis | null = null;

const ensureLenis = () => {
  if (typeof window === "undefined") return null;
  if (!lenis) {
    lenis = new Lenis();

    const raf = (time: number) => {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }
  return lenis;
};

const getHeaderOffset = (): number => {
  const header = document.getElementById("header");
  if (!header) return 0;
  return header.offsetHeight || header.getBoundingClientRect().height || 0;
};

export const smoothScrollToId = (
  id: string,
  { duration = 0.7, easing, offset }: ScrollOptions = {}
) => {
  const target = document.getElementById(id);
  if (!target) return;

  const headerOffset = typeof offset === "number" ? offset : getHeaderOffset();

  const instance = ensureLenis();
  if (!instance) return;

  instance.scrollTo(target, {
    duration,
    easing,
    // Negative offset so target appears below sticky header
    offset: -(headerOffset || 0),
  } as any);
};
