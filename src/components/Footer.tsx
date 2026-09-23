import React from 'react';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      className="relative bg-[#FFF9EE] border-t border-[#F2E5D0] text-charcoal pt-14 pb-8 overflow-hidden"
    >
      {/* LEFT BOTTOM CORNER MANDALA FLOURISH */}
      <div className="absolute bottom-0 left-0 pointer-events-none z-0 select-none w-[160px] sm:w-[220px] md:w-[260px] lg:w-[300px] max-w-[32vw]">
        <img
          src="/images/footer_corner_ornament.png"
          alt=""
          className="w-full h-auto object-contain object-left-bottom opacity-85 block -scale-x-100"
        />
      </div>

      {/* RIGHT BOTTOM CORNER MANDALA FLOURISH (Natural orientation: right edge and bottom edge) */}
      <div className="absolute bottom-0 right-0 pointer-events-none z-0 select-none w-[160px] sm:w-[220px] md:w-[260px] lg:w-[300px] max-w-[32vw]">
        <img
          src="/images/footer_corner_ornament.png"
          alt=""
          className="w-full h-auto object-contain object-right-bottom opacity-85 block"
        />
      </div>

      {/* FLOATING CORNER DIAMOND FLOURISHES (TOP CORNERS) */}
      <div className="absolute top-6 left-6 pointer-events-none select-none hidden md:flex flex-col items-center gap-1.5 opacity-50 text-[#C89B3C]">
        <div className="w-2.5 h-2.5 border border-[#C89B3C] rotate-45" />
        <div className="w-1.5 h-1.5 bg-[#C89B3C] rotate-45" />
      </div>
      <div className="absolute top-6 right-6 pointer-events-none select-none hidden md:flex flex-col items-center gap-1.5 opacity-50 text-[#C89B3C]">
        <div className="w-2.5 h-2.5 border border-[#C89B3C] rotate-45" />
        <div className="w-1.5 h-1.5 bg-[#C89B3C] rotate-45" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 3-COLUMN MAIN FOOTER CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0 items-start pb-12">
          
          {/* COLUMN 1: BRAND LOGO & DESCRIPTION */}
          <div className="footer-col md:col-span-5 md:pr-10 lg:pr-12">
            <div className="flex items-center gap-3.5 mb-5 select-none">
              <img
                src="/images/brand_logo_trimmed.png"
                alt="MA ARATI ENTERPRISE Logo"
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-sm"
              />
              <div className="flex flex-col justify-center">
                <span className="font-serif text-2xl sm:text-[26px] font-bold tracking-[0.12em] text-[#7A1C1C] uppercase leading-none">
                  MA ARATI
                </span>
                <span className="text-[10px] sm:text-[11px] tracking-[0.3em] text-[#C89B3C] font-bold uppercase mt-1">
                  ENTERPRISE
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-[13px] text-[#5A5046] leading-relaxed max-w-sm font-normal">
              India's premier wholesale supplier of high-grade pandal cloth, tent accessories, decorative ceiling fabrics, and event setup materials.
            </p>
          </div>

          {/* COLUMN 2: QUICK LINKS (CENTERED WITH VERTICAL GOLD DIVIDERS) */}
          <div className="footer-col md:col-span-3 md:px-8 lg:px-10 md:border-l md:border-[#E8DAC2] relative">
            {/* Center diamond on left divider */}
            <div className="hidden md:block absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#FFF9EE] border border-[#C89B3C] rotate-45 select-none" />

            {/* Header + Diamond Sub-line */}
            <div className="mb-6">
              <h4 className="font-serif text-sm sm:text-base font-bold text-[#7A1C1C] uppercase tracking-[0.2em]">
                QUICK LINKS
              </h4>
              <div className="flex items-center gap-2 mt-1.5 text-[#C89B3C]">
                <div className="w-12 h-px bg-[#E3D3BE]" />
                <div className="w-2 h-2 border border-[#C89B3C] rotate-45" />
                <div className="w-12 h-px bg-[#E3D3BE]" />
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-[13px] text-[#5A5046]">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Products', href: '#products' },
                { name: 'About Us', href: '#about' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[#5A5046] hover:text-[#7A1C1C] transition-colors font-medium"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#C89B3C] transition-transform duration-200 group-hover:translate-x-1" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CONTACT US */}
          <div id="contact" className="footer-col md:col-span-4 md:pl-8 lg:pl-10 md:border-l md:border-[#E8DAC2]">
            {/* Header + Diamond Sub-line */}
            <div className="mb-6">
              <h4 className="font-serif text-sm sm:text-base font-bold text-[#7A1C1C] uppercase tracking-[0.2em]">
                CONTACT US
              </h4>
              <div className="flex items-center gap-2 mt-1.5 text-[#C89B3C]">
                <div className="w-12 h-px bg-[#E3D3BE]" />
                <div className="w-2 h-2 border border-[#C89B3C] rotate-45" />
                <div className="w-12 h-px bg-[#E3D3BE]" />
              </div>
            </div>

            <ul className="space-y-4 text-xs sm:text-[13px] text-[#5A5046]">
              {/* Address */}
              <li className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[#7A1C1C]">
                  <MapPin className="w-4 h-4 stroke-[1.8]" />
                </div>
                <span className="leading-snug">Gangni, Badkulla Nadia,<br />Pin 741121</span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3.5">
                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[#7A1C1C]">
                  <Phone className="w-4 h-4 stroke-[1.8]" />
                </div>
                <a
                  href="tel:+918597895039"
                  className="hover:text-[#7A1C1C] transition-colors font-medium"
                >
                  +91 8597895039
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3.5">
                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[#7A1C1C]">
                  <Mail className="w-4 h-4 stroke-[1.8]" />
                </div>
                <a
                  href="mailto:info@maaratienterprise.com"
                  className="hover:text-[#7A1C1C] transition-colors"
                >
                  info@maaratienterprise.com
                </a>
              </li>
            </ul>

            {/* Circular Social Buttons (WhatsApp & Facebook exactly like screenshot) */}
            <div className="flex items-center gap-3 mt-6 pt-1">
              {/* WhatsApp */}
              <a
                href="https://wa.me/918597895039"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full border border-[#C89B3C] bg-transparent flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-300 shadow-sm"
              >
                <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1BvHSxt5T3/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-[#C89B3C] bg-transparent flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all duration-300 shadow-sm"
              >
                <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT LINE WITH CENTRAL DIAMOND FLOURISH */}
        <div className="relative pt-6 border-t border-[#E8DAC2] flex items-center justify-center text-xs text-[#7A7065] text-center">
          {/* Centered Diamond Node on bottom border */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex items-center gap-1 select-none text-[#C89B3C] bg-[#FFF9EE] px-3">
            <div className="w-6 h-px bg-[#C89B3C]" />
            <div className="w-2.5 h-2.5 border border-[#C89B3C] rotate-45 bg-[#FFF9EE]" />
            <div className="w-6 h-px bg-[#C89B3C]" />
          </div>

          <p>© 2026&nbsp;&nbsp;<strong className="font-bold text-burgundy tracking-wide">DELTA X</strong>&nbsp;&nbsp;. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
