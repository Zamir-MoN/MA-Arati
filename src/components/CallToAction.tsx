import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { OrnamentalCorner } from './decorative/OrnamentalCorner';
import { MandalaOrnament } from './decorative/MandalaOrnament';

interface CallToActionProps {
  onOpenQuote: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenQuote }) => {
  return (
    <section
      className="relative py-16 sm:py-20 bg-gradient-to-r from-burgundy via-burgundy-light to-burgundy-dark text-cream-50 overflow-hidden border-y border-gold/40 shadow-xl"
    >
      {/* Decorative Ornaments in corners and center */}
      <div className="absolute top-4 left-4 pointer-events-none">
        <OrnamentalCorner size={90} opacity={0.25} color="#DEB55D" position="top-left" />
      </div>
      <div className="absolute bottom-4 right-4 pointer-events-none">
        <OrnamentalCorner size={90} opacity={0.25} color="#DEB55D" position="bottom-right" />
      </div>
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 pointer-events-none hidden md:block">
        <MandalaOrnament size={320} opacity={0.06} color="#DEB55D" animate />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Text */}
          <div className="text-center lg:text-left max-w-2xl">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-cream-50 leading-tight">
              Let's Make Your Next Event Special
            </h2>
            <p className="mt-4 text-sm sm:text-base text-cream-200/90 leading-relaxed font-light">
              Get the best quality tent items and fabrics for your occasion with custom cut lengths,
              pan-India logistics, and wholesale pricing.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-charcoal font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-royal hover:shadow-royal-lg flex items-center justify-center gap-2.5 group select-none"
            >
              <span>Get a Quote Now</span>
              <ArrowRight className="w-4 h-4 text-charcoal transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>

            <a
              href="https://wa.me/918597895039?text=Hello%20MA%20ARATI%20ENTERPRISE%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20event%20fabrics."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm tracking-wide transition-all duration-300 shadow-royal-sm flex items-center justify-center gap-2 border border-emerald-400/40 select-none"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
