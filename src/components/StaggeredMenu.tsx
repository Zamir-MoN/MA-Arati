import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export interface StaggeredMenuItem {
  label: string;
  ariaLabel: string;
  link: string;
}
export interface StaggeredMenuSocialItem {
  label: string;
  link: string;
}
export interface StaggeredMenuProps {
  position?: 'left' | 'right';
  colors?: string[];
  items?: StaggeredMenuItem[];
  socialItems?: StaggeredMenuSocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  logoUrl?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  isFixed?: boolean;
  changeMenuColorOnOpen?: boolean;
  closeOnClickAway?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  onItemClick?: (item: StaggeredMenuItem) => void;
  onQuoteClick?: () => void;
}

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  position = 'right',
  colors = ['#5C0B0B', '#7D1111', '#17365D'],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  logoUrl = '/images/brand_logo_trimmed.webp',
  menuButtonColor: _menuButtonColor = '#202020',
  openMenuButtonColor: _openMenuButtonColor = '#FFFDF7',
  accentColor = '#C89B3C',
  closeOnClickAway = true,
  onMenuOpen,
  onMenuClose,
  onItemClick,
  onQuoteClick
}) => {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const preLayersRef = useRef<HTMLDivElement | null>(null);
  const preLayerElsRef = useRef<HTMLElement[]>([]);

  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTweenRef = useRef<gsap.core.Tween | null>(null);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
  const busyRef = useRef(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;

      if (!panel) return;

      let preLayers: HTMLElement[] = [];
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer')) as HTMLElement[];
      }
      preLayerElsRef.current = preLayers;

      const offscreen = position === 'left' ? -100 : 100;
      gsap.set([panel, ...preLayers], { xPercent: offscreen });
      if (preContainer) {
        gsap.set(preContainer, { xPercent: 0 });
      }
    });
    return () => ctx.revert();
  }, [position]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    if (closeTweenRef.current) {
      closeTweenRef.current.kill();
      closeTweenRef.current = null;
    }

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel')) as HTMLElement[];
    const numberEls = Array.from(
      panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')
    ) as HTMLElement[];
    const ctaSection = panel.querySelector('.sm-cta-section') as HTMLElement | null;
    const socialTitle = panel.querySelector('.sm-socials-title') as HTMLElement | null;
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link')) as HTMLElement[];

    const offscreen = position === 'left' ? -100 : 100;
    const layerStates = layers.map((el) => ({ el, start: offscreen }));
    const panelStart = offscreen;

    if (itemEls.length) gsap.set(itemEls, { yPercent: 120, opacity: 0 });
    if (numberEls.length) gsap.set(numberEls, { ['--sm-num-opacity' as any]: 0 });
    if (ctaSection) gsap.set(ctaSection, { opacity: 0, y: 15 });
    if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
    if (socialLinks.length) gsap.set(socialLinks, { y: 20, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    layerStates.forEach((ls, i) => {
      tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.45, ease: 'power3.out' }, i * 0.06);
    });

    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.06 : 0;
    const panelInsertTime = lastTime + (layerStates.length ? 0.06 : 0);
    const panelDuration = 0.5;

    tl.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: panelDuration, ease: 'power3.out' },
      panelInsertTime
    );

    if (itemEls.length) {
      const itemsStart = panelInsertTime + 0.1;
      tl.to(
        itemEls,
        { yPercent: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: { each: 0.06, from: 'start' } },
        itemsStart
      );

      if (numberEls.length) {
        tl.to(
          numberEls,
          { duration: 0.4, ease: 'power2.out', ['--sm-num-opacity' as any]: 1, stagger: { each: 0.05, from: 'start' } },
          itemsStart + 0.08
        );
      }
    }

    if (ctaSection) {
      tl.to(ctaSection, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, panelInsertTime + 0.2);
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + 0.25;
      if (socialTitle) tl.to(socialTitle, { opacity: 1, duration: 0.4, ease: 'power2.out' }, socialsStart);
      if (socialLinks.length) {
        tl.to(
          socialLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            ease: 'power3.out',
            stagger: { each: 0.05, from: 'start' }
          },
          socialsStart + 0.02
        );
      }
    }

    openTlRef.current = tl;
    return tl;
  }, [position]);

  const playOpen = useCallback(() => {
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback('onComplete', () => {
        busyRef.current = false;
      });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    const all: HTMLElement[] = [...layers, panel];
    closeTweenRef.current?.kill();

    const offscreen = position === 'left' ? -100 : 100;

    closeTweenRef.current = gsap.to(all, {
      xPercent: offscreen,
      duration: 0.28,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => {
        busyRef.current = false;
      }
    });
  }, [position]);

  const toggleMenu = useCallback(() => {
    const nextState = !openRef.current;
    openRef.current = nextState;
    setOpen(nextState);

    if (nextState) {
      onMenuOpen?.();
      playOpen();
    } else {
      onMenuClose?.();
      playClose();
    }
  }, [playOpen, playClose, onMenuOpen, onMenuClose]);

  const closeMenu = useCallback(() => {
    if (openRef.current) {
      openRef.current = false;
      setOpen(false);
      onMenuClose?.();
      playClose();
    }
  }, [playClose, onMenuClose]);

  React.useEffect(() => {
    if (!closeOnClickAway || !open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeOnClickAway, open, closeMenu]);

  return (
    <div className="sm-scope inline-block">
      {/* 1. Toggle Button - Natural flow in Navbar */}
      <button
        ref={toggleBtnRef}
        className={`sm-toggle relative flex items-center justify-center p-2 rounded-lg border cursor-pointer leading-none transition-all duration-300 shadow-sm active:scale-95 z-50 ${
          open
            ? 'bg-burgundy-dark text-cream-50 border-gold/60 shadow-royal'
            : 'bg-cream-100/90 text-charcoal hover:text-burgundy border-cream-border/80 hover:border-gold/50'
        }`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="staggered-menu-panel"
        onClick={toggleMenu}
        type="button"
      >
        {/* Standard 3-line hamburger icon that transforms smoothly to X when open */}
        <div className="relative w-5 h-4 flex flex-col justify-between items-center pointer-events-none" aria-hidden="true">
          <span
            className={`w-5 h-[2px] rounded-full transition-all duration-300 ease-out origin-center ${
              open ? 'bg-gold rotate-45 translate-y-[7px]' : 'bg-current'
            }`}
          />
          <span
            className={`w-5 h-[2px] rounded-full transition-all duration-300 ease-out ${
              open ? 'opacity-0 scale-x-0' : 'bg-current'
            }`}
          />
          <span
            className={`w-5 h-[2px] rounded-full transition-all duration-300 ease-out origin-center ${
              open ? 'bg-gold -rotate-45 -translate-y-[7px]' : 'bg-current'
            }`}
          />
        </div>
      </button>

      {/* 2. Fullscreen Overlay & Menu Panel Portal */}
      <div
        className={
          (className ? className + ' ' : '') + `staggered-menu-wrapper fixed inset-0 w-full h-[100dvh] min-h-screen ${
            open ? 'pointer-events-auto visible z-[9990]' : 'pointer-events-none invisible -z-10'
          }`
        }
        style={accentColor ? ({ ['--sm-accent' as any]: accentColor } as React.CSSProperties) : undefined}
        data-position={position}
        data-open={open || undefined}
      >
        {/* Full-width Staggered Background Underlays */}
        <div
          ref={preLayersRef}
          className="sm-prelayers fixed inset-0 w-full h-[100dvh] min-h-screen pointer-events-none z-[9992]"
          aria-hidden="true"
        >
          {(() => {
            const raw = colors && colors.length ? colors.slice(0, 4) : ['#5C0B0B', '#7D1111', '#17365D'];
            let arr = [...raw];
            if (arr.length >= 3) {
              const mid = Math.floor(arr.length / 2);
              arr.splice(mid, 1);
            }
            return arr.map((c, i) => (
              <div
                key={i}
                className="sm-prelayer absolute inset-0 h-full w-full"
                style={{ background: c }}
              />
            ));
          })()}
        </div>

        {/* Full Screen Menu Panel */}
        <aside
          id="staggered-menu-panel"
          ref={panelRef}
          className="staggered-menu-panel fixed inset-0 w-full h-[100dvh] min-h-screen bg-[#140808] text-cream-50 flex flex-col p-6 sm:p-10 pt-6 sm:pt-8 pb-10 overflow-y-auto z-[9995] shadow-2xl backdrop-blur-2xl pointer-events-auto"
          aria-hidden={!open}
        >
          {/* Subtle Decorative Ambient Glows */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-radial from-gold/15 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-radial from-burgundy/30 to-transparent pointer-events-none" />

          <div className="sm-panel-inner flex-1 flex flex-col justify-between max-w-lg mx-auto w-full relative z-10 pb-6">
            {/* Top Brand Header in Panel */}
            <div className="flex items-center justify-between pb-5 border-b border-gold/25">
              <div className="flex items-center gap-3">
                <img
                  src={logoUrl || '/images/brand_logo_trimmed.webp'}
                  loading="lazy"
                  decoding="async"
                  alt="MA ARATI ENTERPRISE Logo"
                  className="h-10 sm:h-12 w-auto object-contain bg-cream-50/10 p-1.5 rounded-lg border border-gold/30 shadow-sm"
                />
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-cream-50 text-xl tracking-wider uppercase leading-tight">
                    MA ARATI
                  </span>
                  <span className="text-[9.5px] tracking-[0.24em] text-gold-light font-semibold uppercase">
                    ENTERPRISE
                  </span>
                </div>
              </div>

              {/* Close Button with X */}
              <button
                type="button"
                onClick={closeMenu}
                className="px-3.5 py-1.5 rounded-full bg-cream-50/10 border border-gold/40 text-gold-light text-xs font-sans font-semibold tracking-wider uppercase hover:bg-gold hover:text-burgundy-dark transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
              >
                <span>Close</span>
                <span className="text-sm leading-none font-bold">✕</span>
              </button>
            </div>

            {/* Menu Navigation Links */}
            <ul
              className="sm-panel-list list-none m-0 p-0 flex flex-col gap-4 sm:gap-6 my-auto py-6"
              role="list"
              data-numbering={displayItemNumbering || undefined}
            >
              {items && items.length ? (
                items.map((it, idx) => (
                  <li className="sm-panel-itemWrap relative overflow-hidden leading-tight" key={it.label + idx}>
                    <a
                      className="sm-panel-item relative text-cream-100 hover:text-gold font-serif font-bold text-3xl sm:text-5xl cursor-pointer tracking-wide transition-colors duration-200 inline-block no-underline pr-12 group"
                      href={it.link}
                      aria-label={it.ariaLabel}
                      data-index={idx + 1}
                      onClick={() => {
                        onItemClick?.(it);
                        closeMenu();
                      }}
                    >
                      <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform group-hover:translate-x-1.5 transition-transform">
                        {it.label}
                      </span>
                    </a>
                  </li>
                ))
              ) : (
                <li className="sm-panel-itemWrap relative overflow-hidden leading-none" aria-hidden="true">
                  <span className="sm-panel-item relative text-cream-100 font-serif font-semibold text-3xl">
                    <span className="sm-panel-itemLabel inline-block">No items</span>
                  </span>
                </li>
              )}
            </ul>

            {/* Bottom Actions: Get Quote & Direct Support Links */}
            <div className="sm-cta-section space-y-4 pt-5 border-t border-gold/20 pb-4">
              {onQuoteClick && (
                <button
                  type="button"
                  onClick={() => {
                    closeMenu();
                    onQuoteClick();
                  }}
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-burgundy-dark font-sans font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-royal hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Request a Free Quote</span>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}

              {displaySocials && socialItems && socialItems.length > 0 && (
                <div className="sm-socials flex flex-col gap-2" aria-label="Social links">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-sans font-semibold tracking-wider text-gold uppercase">
                      Direct Support &amp; Connect
                    </span>
                    <span className="text-[10.5px] text-cream-200/60 font-sans">Pan-India Supply</span>
                  </div>
                  <ul
                    className="sm-socials-list list-none m-0 p-0 flex flex-row items-center gap-2.5 sm:gap-4 flex-wrap pt-1"
                    role="list"
                  >
                    {socialItems.map((s, i) => (
                      <li key={s.label + i} className="sm-socials-item">
                        <a
                          href={s.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sm-socials-link text-xs sm:text-sm font-sans font-medium text-cream-200 hover:text-gold no-underline relative inline-flex items-center py-1.5 px-3 rounded-full bg-white/5 border border-white/10 hover:border-gold/40 transition-all duration-200"
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </aside>
      </div>

      <style>{`
.sm-scope .staggered-menu-wrapper { 
  position: fixed; 
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0; 
  width: 100vw; 
  height: 100dvh; 
  min-height: 100vh; 
}
.sm-scope .staggered-menu-panel { 
  position: fixed; 
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0; 
  width: 100vw; 
  height: 100dvh; 
  min-height: 100vh; 
  display: flex; 
  flex-direction: column; 
  overflow-y: auto; 
  -webkit-overflow-scrolling: touch; 
  z-index: 9995; 
}
.sm-scope .sm-prelayers { 
  position: fixed; 
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0; 
  width: 100vw; 
  height: 100dvh; 
  min-height: 100vh; 
  pointer-events: none; 
  z-index: 9992; 
}
.sm-scope .sm-prelayer { position: absolute; inset: 0; height: 100%; width: 100%; }
.sm-scope .sm-panel-inner { flex: 1; display: flex; flex-direction: column; }
.sm-scope .sm-panel-itemWrap { position: relative; overflow: hidden; }
.sm-scope .sm-panel-itemLabel { display: inline-block; will-change: transform; transform-origin: 50% 100%; }
.sm-scope .sm-panel-list[data-numbering] { counter-reset: smItem; }
.sm-scope .sm-panel-list[data-numbering] .sm-panel-item::after { 
  counter-increment: smItem; 
  content: counter(smItem, decimal-leading-zero); 
  position: absolute; 
  top: 0.18em; 
  right: 0.2em; 
  font-family: var(--font-sans, sans-serif);
  font-size: 13px; 
  font-weight: 600; 
  color: var(--sm-accent, #C89B3C); 
  letter-spacing: 0.05em; 
  pointer-events: none; 
  user-select: none; 
  opacity: var(--sm-num-opacity, 0); 
}
      `}</style>
    </div>
  );
};

export default StaggeredMenu;
