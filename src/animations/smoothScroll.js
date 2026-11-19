import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

export const initSmoothScroll = () => {
  // Respect user preference for reduced motion
  if (typeof window === 'undefined') return null;
  
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return null;
  }

  if (lenisInstance) {
    lenisInstance.destroy();
  }

  lenisInstance = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1.0,
  });

  // Synchronize Lenis with GSAP ScrollTrigger
  lenisInstance.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenisInstance.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return lenisInstance;
};

export const getLenis = () => lenisInstance;

export const destroySmoothScroll = () => {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
};
