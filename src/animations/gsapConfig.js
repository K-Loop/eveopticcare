import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateHeroEntrance = (targets) => {
  const { eyebrow, headline, subhead, cta, badges, visual } = targets;

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  if (eyebrow) {
    tl.fromTo(eyebrow, { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 0.5 });
  }

  if (headline) {
    tl.fromTo(
      headline,
      { opacity: 0, y: 30, filter: 'blur(8px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 },
      '-=0.3'
    );
  }

  if (subhead) {
    tl.fromTo(subhead, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4');
  }

  if (cta) {
    tl.fromTo(cta, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.5 }, '-=0.3');
  }

  if (badges) {
    tl.fromTo(badges, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, '-=0.2');
  }

  if (visual) {
    tl.fromTo(
      visual,
      { opacity: 0, scale: 0.9, x: 40 },
      { opacity: 1, scale: 1, x: 0, duration: 1.1, ease: 'power2.out' },
      '-=0.9'
    );
  }

  return tl;
};

export const animateSectionReveal = (element, delay = 0) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
};
