import React from 'react';
import { Phone, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const TopMiniBar: React.FC = () => {
  return (
    <div className="bg-[#6B0D0D] text-cream-100 text-[11px] py-1.5 px-3 sm:px-6 lg:px-8 border-b border-gold/20 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Trust Badge */}
        <div className="flex items-center gap-1.5 tracking-wider text-cream-100 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-gold-light shrink-0" />
          <span>Quality Fabrics</span>
        </div>

        {/* Right Contact & Socials */}
        <div className="flex items-center gap-2.5 sm:gap-4 text-cream-100">
          <a
            href="tel:+91XXXXXXXXXX"
            className="flex items-center gap-1.5 hover:text-gold transition-colors font-medium"
          >
            <Phone className="w-3 h-3 text-gold-light shrink-0" />
            <span className="text-[10px] sm:text-[11px] tracking-wide">Call Us: +91 XXXXXXXXXX</span>
          </a>

          <span className="h-3.5 w-px bg-white/25 inline-block" />

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hello%20MA%20ARATI%20ENTERPRISE%2C%20I%20would%20like%20to%20inquire%20about%20tent%20and%20event%20fabrics."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white hover:text-emerald-400 transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://www.facebook.com/share/1BvHSxt5T3/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-blue-300 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
