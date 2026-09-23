import React, { useEffect, useRef } from 'react';
import { ArrowRight, Truck, Award, Users } from 'lucide-react';
import { OrnamentalCorner } from './decorative/OrnamentalCorner';
import gsap from 'gsap';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-eyebrow', { opacity: 0, y: -15, duration: 0.8, delay: 0.1 })
        .from('.hero-heading', { opacity: 0, y: 30, duration: 0.95 }, '-=0.55')
        .from('.hero-desc', { opacity: 0, y: 20, duration: 0.8 }, '-=0.6')
        .from('.hero-btns', { opacity: 0, y: 20, duration: 0.8 }, '-=0.6')
        .from('.hero-trust-bar', { opacity: 0, y: 35, duration: 0.9, ease: 'power2.out' }, '-=0.5');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative overflow-hidden min-h-[calc(100vh-68px)] lg:max-h-[820px] flex flex-col justify-between pt-6 pb-4 sm:py-8 lg:py-10"
    >
      {/* 1. BACKGROUND IMAGE */}
      {/* Desktop Background */}
      <div
        className="hidden md:block absolute inset-0 w-full h-full bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: "url('/images/landing_hero_bg.webp')",
        }}
      />

      {/* Mobile Background - EXACT User Provided Image */}
      <div
        className="md:hidden absolute inset-0 w-full h-full bg-cover bg-[position:0%_0%] pointer-events-none"
        style={{
          backgroundImage: "url('/images/landing_hero_mobile_bg.webp')",
        }}
      />

      {/* 2. WHITE/CREAM BLEND BACKGROUND */}
      {/* Desktop / Tablet smooth horizontal white blend */}
      <div
        className="hidden md:block absolute inset-y-0 left-0 w-[72%] lg:w-[65%] xl:w-[58%] pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(90deg, #FFFDF7 0%, #FFFDF7 48%, rgba(255, 253, 247, 0.98) 60%, rgba(255, 253, 247, 0.88) 72%, rgba(255, 253, 247, 0.5) 86%, rgba(255, 253, 247, 0) 100%)',
        }}
      />

      {/* Mobile soft frosted legibility wash over text zone */}
      <div
        className="md:hidden absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            'radial-gradient(ellipse 95% 55% at 20% 48%, rgba(255, 253, 247, 0.94) 0%, rgba(255, 253, 247, 0.82) 48%, rgba(255, 253, 247, 0.25) 75%, rgba(255, 253, 247, 0) 100%)',
        }}
      />

      {/* 2b. BOTTOM SEAMLESS FADE BLEND */}
      <div
        className="absolute inset-x-0 bottom-0 h-28 pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255, 249, 239, 0) 0%, rgba(255, 249, 239, 0.6) 60%, #FFF9EF 100%)',
        }}
      />

      {/* 3. MANDALA CORNER ORNAMENT (DESKTOP ONLY) */}
      <div className="hidden sm:block absolute top-0 left-0 h-[64%] max-h-[460px] pointer-events-none z-10 select-none overflow-hidden opacity-75">
        <img
          src="/images/left_ornament.webp"
          alt=""
          loading="eager"
          decoding="async"
          className="h-full w-auto object-contain object-left-top"
        />
      </div>

      {/* 4. TOP RIGHT CORNER ORNAMENT */}
      <div className="absolute top-3 right-3 pointer-events-none z-10 hidden sm:block">
        <OrnamentalCorner size={85} opacity={0.65} color="#A67838" position="top-right" />
      </div>

      {/* 5. MAIN HERO CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex-1 flex flex-col justify-between pt-3 sm:pt-4 md:pt-6 lg:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center my-auto">
          {/* Left Column: Text & CTAs */}
          <div
            ref={contentRef}
            className="lg:col-span-7 max-w-xl flex flex-col justify-center pt-6 sm:pt-6 md:pt-10 lg:pt-12"
          >
            {/* EYEBROW: — YOUR EVENT. OUR FABRICS. */}
            <div className="hero-eyebrow flex items-center gap-2.5 mb-3.5">
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#9E7432] inline-block" />
              <p className="text-[10px] sm:text-[11.5px] font-bold tracking-[0.24em] text-[#9E7432] uppercase">
                YOUR EVENT. OUR FABRICS.
              </p>
            </div>

            {/* MAIN HEADING - EXACT PROPORTIONS & COLORS */}
            <h1 className="hero-heading font-['Playfair_Display'] text-[38px] sm:text-5xl lg:text-[54px] font-bold leading-[1.05] tracking-tight mb-4">
              <span className="block text-[#660C11]">
                Elegant Spaces.
              </span>
              <span className="block text-[#A67838] font-bold mt-1">
                Beautiful <span className="sm:inline block">Celebrations.</span>
              </span>
            </h1>

            {/* PARAGRAPH */}
            <p className="hero-desc text-[13.5px] sm:text-[15px] text-[#423C36] leading-[1.55] mb-5 sm:mb-6 max-w-sm sm:max-w-lg font-normal">
              Premium tent items, pandal cloth, decorative fabrics and event setup
              materials for weddings, functions and grand celebrations across India.
            </p>

            {/* ACTION BUTTONS */}
            <div className="hero-btns flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 mb-3 sm:mb-4 select-none w-full max-w-[320px] sm:max-w-none">
              {/* Primary button: Dark burgundy fill with warm gold circular right arrow */}
              <a
                href="#products"
                className="group px-6 py-2.5 sm:py-3 rounded-full bg-[#5D0C0E] hover:bg-[#781013] text-white text-[12px] font-bold tracking-[0.06em] uppercase transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-between sm:justify-center gap-3"
              >
                <span>EXPLORE PRODUCTS</span>
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FCE39E] flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform shadow-xs">
                  <ArrowRight className="w-3.5 h-3.5 text-[#5D0C0E] stroke-[2.2]" />
                </span>
              </a>

              {/* Secondary button: Cream pill linking to Contact section */}
              <a
                href="#contact"
                className="group px-6 py-2.5 sm:py-3 rounded-full bg-[#FFFDF9] hover:bg-[#FBF6ED] text-[#5D0C0E] border-[1.5px] border-[#5D0C0E] text-[12px] font-bold tracking-[0.06em] uppercase transition-all duration-300 shadow-xs hover:shadow-sm flex items-center justify-between sm:justify-center gap-3"
              >
                <span>CONTACT US</span>
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#5D0C0E] bg-white flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-[#5D0C0E] stroke-[2.2]" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Column / Image Area spacer */}
          <div className="hidden lg:block lg:col-span-5" />
        </div>

        {/* 6. BOTTOM FLOATING TRUST CARD - CENTERED IN THE MIDDLE OF LANDING PAGE */}
        <div className="hero-trust-bar mt-auto pt-4 lg:pt-6 max-w-4xl mx-auto w-full pb-2 sm:pb-3 flex flex-col items-center">
          <div className="w-full bg-[#FFFDF9]/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-[#EADBCA] shadow-[0_4px_25px_rgba(107,13,13,0.07)] p-3.5 sm:p-4 grid grid-cols-4 divide-x divide-[#EADBCA]">
            {/* 1. Pan India Delivery */}
            <div className="flex flex-col items-center text-center px-1 sm:px-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-[#8C6527] mb-1">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.6]" />
              </div>
              <span className="text-[10.5px] sm:text-[12px] font-bold text-[#2A2521] leading-tight">
                Pan India
              </span>
              <span className="text-[9px] sm:text-[10.5px] text-[#6B645C] leading-tight mt-0.5 font-medium">
                Delivery
              </span>
            </div>

            {/* 2. Premium Quality */}
            <div className="flex flex-col items-center text-center px-1 sm:px-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-[#8C6527] mb-1">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.6]" />
              </div>
              <span className="text-[10.5px] sm:text-[12px] font-bold text-[#2A2521] leading-tight">
                Premium
              </span>
              <span className="text-[9px] sm:text-[10.5px] text-[#6B645C] leading-tight mt-0.5 font-medium">
                Quality
              </span>
            </div>

            {/* 3. Trusted by Thousands */}
            <div className="flex flex-col items-center text-center px-1 sm:px-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-[#8C6527] mb-1">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.6]" />
              </div>
              <span className="text-[10.5px] sm:text-[12px] font-bold text-[#2A2521] leading-tight">
                Trusted by
              </span>
              <span className="text-[9px] sm:text-[10.5px] text-[#6B645C] leading-tight mt-0.5 font-medium">
                Thousands
              </span>
            </div>

            {/* 4. Wide Product Range */}
            <div className="flex flex-col items-center text-center px-1 sm:px-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-[#8C6527] mb-1">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-[#8C6527] fill-none" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                </svg>
              </div>
              <span className="text-[10.5px] sm:text-[12px] font-bold text-[#2A2521] leading-tight">
                Wide Product
              </span>
              <span className="text-[9px] sm:text-[10.5px] text-[#6B645C] leading-tight mt-0.5 font-medium">
                Range
              </span>
            </div>
          </div>

          {/* Centered Small Gold Star Accent (✧) Underneath */}
          <div className="flex justify-center items-center mt-2.5 text-[#9E7432]">
            <span className="text-sm">✧</span>
          </div>
        </div>
      </div>
    </section>
  );
};
