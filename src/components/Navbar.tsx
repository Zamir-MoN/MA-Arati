import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 bg-cream-50/95 backdrop-blur-md border-b border-cream-border/70 ${
          isScrolled ? 'py-1.5 shadow-royal-sm' : 'py-2 sm:py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* BRAND LOGO - SLIM & SHARP */}
            <a href="#home" className="group flex items-center gap-2.5 select-none">
              <img
                src="/images/brand_logo_trimmed.png"
                alt="MA ARATI ENTERPRISE Logo"
                className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />

              <div className="flex flex-col">
                <span className="font-serif tracking-widest font-bold text-burgundy text-base sm:text-lg uppercase leading-none">
                  MA ARATI
                </span>
                <span className="text-[8px] sm:text-[8.5px] tracking-[0.22em] text-royal-blue font-semibold uppercase mt-0.5">
                  ENTERPRISE
                </span>
              </div>
            </a>

            {/* DESKTOP NAVIGATION LINKS */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-charcoal-muted hover:text-burgundy text-[13px] font-medium tracking-wide transition-colors py-0.5 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* DESKTOP CTA BUTTON - SLIM PILL */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenQuote}
                className="relative group overflow-hidden px-4 sm:px-5 py-1.5 rounded-full bg-burgundy hover:bg-burgundy-light text-cream-50 text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-royal-sm hover:shadow-royal flex items-center gap-1.5"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1 text-gold-light" />
              </button>
            </div>

            {/* MOBILE HAMBURGER BUTTON */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenQuote}
                className="px-4 py-1.5 rounded-full bg-[#6B0D0D] hover:bg-[#851010] text-white text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
              >
                <span>QUOTE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded text-charcoal hover:text-burgundy"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE SLIDE-DOWN DRAWER MENU */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-400 md:hidden ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal/50 backdrop-blur-xs"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-cream-50 border-l border-cream-border shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-cream-border">
              <div className="flex items-center gap-2">
                <img
                  src="/images/brand_logo_trimmed.png"
                  alt="MA ARATI ENTERPRISE"
                  className="h-8 w-auto object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-serif text-base font-bold text-burgundy tracking-wider leading-tight">
                    MA ARATI
                  </span>
                  <span className="text-[8px] tracking-widest text-royal-blue font-semibold">
                    ENTERPRISE
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-charcoal"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-lg text-charcoal hover:text-burgundy transition-colors py-1.5 border-b border-cream-border/40 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-4 border-t border-cream-border space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-2.5 rounded-full bg-burgundy hover:bg-burgundy-light text-cream-50 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-royal"
            >
              <span>Get a Quote Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-light" />
            </button>

            <div className="text-center text-[11px] text-charcoal-muted flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              <span>Pan-India Supply &amp; Custom Fabrication</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
