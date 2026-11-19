import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 1400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0A0A]"
        >
          <div className="relative flex flex-col items-center">
            {/* Animated spectacles logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative mb-6"
            >
              <img
                src="/assets/logo/logo.png"
                alt="Eye Mate Optic"
                className="h-24 md:h-28 w-auto object-contain drop-shadow-[0_0_25px_rgba(245,9,20,0.4)]"
              />
            </motion.div>

            {/* Glowing red accent progress line */}
            <div className="w-48 h-0.5 bg-[#222] rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                className="w-1/2 h-full bg-linear-to-r from-transparent via-[#F50914] to-[#00D4FF]"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-xs tracking-widest text-[#A0A0A0] uppercase font-mono"
            >
              See Better • Look Smarter
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
