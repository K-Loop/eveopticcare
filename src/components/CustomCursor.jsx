import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device supports touch
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Outer subtle ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-9999 transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `translate3d(${position.x - (isPointer ? 20 : 14)}px, ${position.y - (isPointer ? 20 : 14)}px, 0)`,
        }}
      >
        <div
          className={`rounded-full border transition-all duration-200 ${
            isPointer
              ? 'w-10 h-10 border-[#F50914] bg-[#F50914]/15 scale-110'
              : 'w-7 h-7 border-white/40 bg-transparent'
          }`}
        />
      </div>

      {/* Center dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-9999 will-change-transform"
        style={{
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
        }}
      >
        <div
          className={`w-1.5 h-1.5 rounded-full transition-colors duration-150 ${
            isPointer ? 'bg-[#F50914]' : 'bg-[#00D4FF]'
          }`}
        />
      </div>
    </>
  );
}
