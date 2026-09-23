import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { StaggeredMenu } from './StaggeredMenu';

interface NavbarProps {
  onMenuToggle?: (isOpen: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    { name: 'Home', href: '#home', ariaLabel: 'Navigate to Home section' },
    { name: 'Products', href: '#products', ariaLabel: 'View our Fabric Products' },
    { name: 'About', href: '#about', ariaLabel: 'About MA ARATI ENTERPRISE' },
    { name: 'Gallery', href: '#gallery', ariaLabel: 'View Event Gallery' },
    { name: 'Contact', href: '#contact', ariaLabel: 'Contact our team' },
  ];

  const staggeredMenuItems = navLinks.map(link => ({
    label: link.name,
    ariaLabel: link.ariaLabel,
    link: link.href
  }));

  const staggeredSocials = [
    { label: 'WhatsApp', link: 'https://wa.me/91XXXXXXXXXX' },
    { label: 'Call Us', link: 'tel:+91XXXXXXXXXX' },
    { label: 'Facebook', link: 'https://www.facebook.com/share/1BvHSxt5T3/' },
  ];

  return (
    <>
      <header
        className={`w-full transition-all duration-300 bg-cream-50/95 backdrop-blur-md border-b border-cream-border/70 ${
          isScrolled ? 'py-1.5' : 'py-2 sm:py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* BRAND LOGO - SLIM & SHARP */}
            <a href="#home" className="group flex items-center gap-2.5 select-none">
              <img
                src="/images/brand_logo_trimmed.webp"
                alt="MA ARATI ENTERPRISE Logo"
                loading="eager"
                decoding="async"
                className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col justify-center">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.08em] text-burgundy uppercase leading-none">
                  MA ARATI
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.24em] text-gold-dark font-semibold uppercase mt-0.5">
                  ENTERPRISE
                </span>
              </div>
            </a>

            {/* DESKTOP NAVIGATION LINKS */}
            <nav className="hidden md:flex items-center space-x-7">
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

            {/* DESKTOP CTA BUTTON - CONTACT US */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="relative group overflow-hidden px-4 sm:px-5 py-1.5 rounded-full bg-burgundy hover:bg-burgundy-light text-cream-50 text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-royal-sm hover:shadow-royal flex items-center gap-1.5"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1 text-gold-light" />
              </a>
            </div>

            {/* MOBILE ACTION & STAGGERED MENU CONTAINER */}
            <div className="flex md:hidden items-center gap-2 relative z-50">
              <a
                href="#contact"
                className="px-3.5 py-1.5 rounded-full bg-burgundy hover:bg-burgundy-light text-white text-[11px] font-bold tracking-wider uppercase flex items-center gap-1 shadow-sm active:scale-95 transition-all"
              >
                <span>CONTACT</span>
                <ArrowRight className="w-3 h-3 text-gold-light" />
              </a>

              <StaggeredMenu
                position="right"
                items={staggeredMenuItems}
                socialItems={staggeredSocials}
                displaySocials={true}
                displayItemNumbering={true}
                menuButtonColor="#202020"
                openMenuButtonColor="#FFFDF7"
                colors={['#5C0B0B', '#7D1111', '#17365D']}
                accentColor="#C89B3C"
                logoUrl="/images/brand_logo_trimmed.webp"
                onMenuOpen={() => onMenuToggle?.(true)}
                onMenuClose={() => onMenuToggle?.(false)}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
