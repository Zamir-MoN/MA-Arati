import React, { useEffect, useState } from 'react';

interface SimpleLoaderProps {
  onFinish?: () => void;
}

export const SimpleLoader: React.FC<SimpleLoaderProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Quick, smooth loading progress (~1.1 seconds)
    const startTime = performance.now();
    const duration = 1100;

    const animateProgress = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed < duration) {
        requestAnimationFrame(animateProgress);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            setIsMounted(false);
            if (onFinish) onFinish();
          }, 450);
        }, 150);
      }
    };

    const animId = requestAnimationFrame(animateProgress);
    return () => cancelAnimationFrame(animId);
  }, [onFinish]);

  const handleDismiss = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsMounted(false);
      if (onFinish) onFinish();
    }, 300);
  };

  if (!isMounted) return null;

  return (
    <div
      onClick={handleDismiss}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FFFDF8] cursor-pointer select-none transition-all duration-500 ease-out ${
        isExiting ? 'opacity-0 scale-[1.02] pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      <div className="flex flex-col items-center text-center px-4 max-w-sm">
        {/* BRAND LOGO */}
        <div className="w-20 sm:w-24 h-auto mb-5 drop-shadow-sm transition-transform duration-700 ease-out animate-pulse">
          <img
            src="/images/brand_logo_trimmed.png"
            alt="MA ARATI ENTERPRISE"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* BRAND TITLE */}
        <h1 className="font-serif text-xl sm:text-2xl font-bold text-burgundy tracking-[0.2em] uppercase leading-snug">
          MA ARATI ENTERPRISE
        </h1>

        {/* SUBTITLE */}
        <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#8C6527] uppercase mt-1.5">
          Wholesaler Pandal Fabric &amp; Tent Items
        </p>

        {/* MINIMALIST GOLDEN HAIRLINE PROGRESS BAR */}
        <div className="w-44 sm:w-52 h-[3px] bg-[#EFE4D2] rounded-full overflow-hidden mt-6 relative">
          <div
            className="h-full bg-gradient-to-r from-gold via-[#E2AD38] to-burgundy rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
