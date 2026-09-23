import React from 'react';
import { Gem, Layers, Settings, Handshake } from 'lucide-react';
import { GoldDivider } from './decorative/GoldDivider';
import { OrnamentalCorner } from './decorative/OrnamentalCorner';

interface FeatureItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    id: 'quality',
    icon: Gem,
    title: 'PREMIUM QUALITY',
    description: 'High-grade fabrics & durable materials engineered for luxury aesthetic and durability.',
  },
  {
    id: 'variety',
    icon: Layers,
    title: 'WIDE VARIETY',
    description: 'Multiple colours, intricate designs & custom options to match any grand celebration theme.',
  },
  {
    id: 'custom',
    icon: Settings,
    title: 'CUSTOM SOLUTIONS',
    description: 'Tailored fabrication and custom drapery lengths for specific venue and pandal structures.',
  },
  {
    id: 'service',
    icon: Handshake,
    title: 'RELIABLE SERVICE',
    description: 'On-time pan-India dispatch and dedicated support trusted by thousands of event decorators.',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section
      id="about"
      className="relative pt-28 pb-16 sm:pt-36 md:pt-44 sm:pb-24 bg-cream-50 border-b border-cream-border/60 overflow-visible content-auto"
    >
      {/* HANGING ARCH MANDALA (Upside down from previous section boundary to current) */}
      <div className="hanging-mandala-crest absolute -top-[1px] left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none flex flex-col items-center">
        <div className="w-56 sm:w-72 md:w-88 lg:w-96 rotate-180 drop-shadow-md">
          <img
            src="/images/arch_mandala_crest.webp"
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain mx-auto"
          />
        </div>
      </div>

      {/* Corner Ornaments */}
      <div className="absolute top-6 left-6 pointer-events-none">
        <OrnamentalCorner size={70} opacity={0.12} position="top-left" />
      </div>
      <div className="absolute top-6 right-6 pointer-events-none">
        <OrnamentalCorner size={70} opacity={0.12} position="top-right" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADING */}
        <div className="why-header text-center max-w-3xl mx-auto mb-12 sm:mb-16 flex flex-col items-center">
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy tracking-tight">
            Why Choose MA ARATI ENTERPRISE?
          </h2>
          <GoldDivider width={200} />
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
            Combining traditional Indian textile craftsmanship with modern durability for memorable weddings and grand events.
          </p>
        </div>

        {/* 4 FEATURE CARDS */}
        <div className="why-features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-14 sm:mb-16">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="why-feature-card group relative bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DDCD] hover:border-gold transition-all duration-300 hover:-translate-y-1.5 shadow-royal-sm hover:shadow-royal flex flex-col items-center text-center"
              >
                {/* Circular Icon with Gold/Burgundy Styling */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cream-50 to-cream-200 border border-gold/60 flex items-center justify-center text-burgundy mb-5 transition-all duration-300 group-hover:scale-110 group-hover:border-gold group-hover:bg-burgundy group-hover:text-gold-light shadow-sm">
                  <Icon className="w-7 h-7 stroke-[1.5] transition-transform duration-300 group-hover:rotate-6" />
                </div>

                {/* Heading */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-burgundy group-hover:text-burgundy-light tracking-wide mb-2.5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  {item.description}
                </p>

                {/* Tiny Gold Accent Dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-gold/40 mt-4 group-hover:bg-gold transition-colors" />
              </div>
            );
          })}
        </div>

        {/* TRUST & HERITAGE STATS BANNER */}
        <div className="why-stats-banner bg-gradient-to-r from-[#2A0808] via-burgundy to-[#2A0808] rounded-2xl p-6 sm:p-8 lg:p-10 border border-gold/30 shadow-royal relative overflow-hidden text-cream-50">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#C89B3C_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y-2 md:divide-y-0 md:divide-x divide-gold/20 text-center">
            <div className="flex flex-col items-center justify-center px-4">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-light tracking-tight">
                10+
              </span>
              <span className="text-xs sm:text-sm uppercase tracking-wider text-cream-200 mt-1 font-medium">
                Years of Legacy
              </span>
            </div>

            <div className="flex flex-col items-center justify-center px-4 pt-4 md:pt-0">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-light tracking-tight">
                10,000+
              </span>
              <span className="text-xs sm:text-sm uppercase tracking-wider text-cream-200 mt-1 font-medium">
                Grand Events Supplied
              </span>
            </div>

            <div className="flex flex-col items-center justify-center px-4 pt-4 md:pt-0">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-light tracking-tight">
                500+
              </span>
              <span className="text-xs sm:text-sm uppercase tracking-wider text-cream-200 mt-1 font-medium">
                Exclusive Fabric Designs
              </span>
            </div>

            <div className="flex flex-col items-center justify-center px-4 pt-4 md:pt-0">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-light tracking-tight">
                100%
              </span>
              <span className="text-xs sm:text-sm uppercase tracking-wider text-cream-200 mt-1 font-medium">
                Pan-India Delivery
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
