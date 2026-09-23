import React, { useEffect, useState } from 'react';

interface SimpleLoaderProps {
  onFinish?: () => void;
}

export const SimpleLoader: React.FC<SimpleLoaderProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Prevent body scroll during intro loader
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const startTime = performance.now();
    const duration = 1000;

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
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            if (onFinish) onFinish();
          }, 450);
        }, 150);
      }
    };

    const animId = requestAnimationFrame(animateProgress);
    return () => {
      cancelAnimationFrame(animId);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [onFinish]);

  const handleDismiss = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsMounted(false);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      if (onFinish) onFinish();
    }, 300);
  };

  if (!isMounted) return null;

  return (
    <div
      onClick={handleDismiss}
      className={`fixed inset-0 w-screen h-[100dvh] min-h-screen z-[99999] flex items-center justify-center bg-[#FFFDF8] cursor-pointer select-none transition-all duration-500 ease-out p-4 ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100dvh',
      }}
    >
      <div className="flex flex-col items-center justify-center text-center w-full max-w-[280px] sm:max-w-sm mx-auto my-auto">
        {/* BRAND LOGO WITH GENTLE GLOW */}
        <div className="relative mb-4 flex items-center justify-center">
          <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl animate-pulse pointer-events-none" />
          <img
            src="/images/brand_logo_trimmed.webp"
            alt="MA ARATI ENTERPRISE Logo"
            loading="eager"
            decoding="async"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain relative z-10 drop-shadow-sm transition-transform duration-500"
          />
        </div>

        {/* BRAND TITLE */}
        <h1 className="font-serif text-lg sm:text-2xl font-bold text-burgundy tracking-[0.18em] sm:tracking-[0.2em] uppercase leading-tight">
          MA ARATI ENTERPRISE
        </h1>

        {/* SUBTITLE */}
        <p className="text-[10px] sm:text-xs font-semibold tracking-[0.18em] sm:tracking-[0.22em] text-[#8C6527] uppercase mt-1">
          Wholesale Pandal Fabric &amp; Tent Items
        </p>

        {/* MINIMALIST GOLDEN PROGRESS BAR */}
        <div className="w-40 sm:w-52 h-[3px] bg-[#EFE4D2] rounded-full overflow-hidden mt-5 relative shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-gold via-[#E2AD38] to-burgundy rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* PERCENTAGE COUNTER */}
        <span className="text-[10px] font-sans font-medium text-charcoal-muted tracking-wider mt-2 opacity-75">
          {progress}%
        </span>
      </div>
    </div>
  );
};
