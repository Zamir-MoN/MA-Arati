import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Truck,
  ShieldCheck,
  ExternalLink,
  Navigation,
  Check,
  Copy,
} from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { OrnamentalCorner } from './decorative/OrnamentalCorner';
import { MandalaOrnament } from './decorative/MandalaOrnament';

export const CallToAction: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const addressText = 'Gangni, Badkulla Nadia, West Bengal — 741121';
  const mapsUrl = 'https://maps.app.goo.gl/xA2Wn2DNz4u1EHQf9?g_st=aw';
  const embedMapUrl =
    'https://maps.google.com/maps?q=Ma%20arati%20Enterprise%2C%20Badkulla%2C%20Nadia&t=&z=15&ie=UTF8&iwloc=&output=embed';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(addressText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative py-10 sm:py-12 bg-gradient-to-b from-[#520B0B] via-[#660F0F] to-[#3D0606] text-cream-50 overflow-hidden border-t border-gold/30 shadow-2xl scroll-mt-20"
    >
      {/* Background Decorative Ambient Radial Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_10%,rgba(200,155,60,0.12),rgba(0,0,0,0))]" />

      {/* Decorative Corner Ornaments (Compact size) */}
      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 pointer-events-none">
        <OrnamentalCorner size={55} opacity={0.25} color="#DEB55D" position="top-left" />
      </div>
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 pointer-events-none">
        <OrnamentalCorner size={55} opacity={0.25} color="#DEB55D" position="top-right" />
      </div>
      <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 pointer-events-none">
        <OrnamentalCorner size={55} opacity={0.25} color="#DEB55D" position="bottom-left" />
      </div>
      <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 pointer-events-none">
        <OrnamentalCorner size={55} opacity={0.25} color="#DEB55D" position="bottom-right" />
      </div>

      {/* Rotating Mandala Ornament in Background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03]">
        <MandalaOrnament size={420} color="#DEB55D" animate />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* COMPACT SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-cream-50 leading-tight">
            Contact MA ARATI ENTERPRISE
          </h2>

          <p className="text-xs sm:text-[13px] text-cream-200/80 font-light mt-1 max-w-lg mx-auto">
            Wholesale rates, custom cut fabric orders, and direct warehouse dispatch from Badkulla, Nadia.
          </p>
        </div>

        {/* 2-COLUMN MAIN CONTACT & MAP GRID (TIGHT GAP & COMPACT HEIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* LEFT COLUMN: STREAMLINED CONTACT CARDS (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            
            {/* Direct Calling Card */}
            <div className="bg-black/30 backdrop-blur-sm border border-gold/30 hover:border-gold/50 rounded-xl p-3.5 sm:p-4 transition-all duration-200 group">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gold/20 border border-gold/35 flex items-center justify-center shrink-0 text-gold-light">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gold-light uppercase tracking-wider block">
                      Phone & Wholesale Hotline
                    </span>
                    <a
                      href="tel:+91XXXXXXXXXX"
                      className="text-[15px] sm:text-base font-sans font-bold tracking-wide text-cream-50 hover:text-gold-light transition-colors leading-none mt-1 block tabular-nums"
                    >
                      +91 XXXXXXXXXX
                    </a>
                  </div>
                </div>

                <a
                  href="tel:+91XXXXXXXXXX"
                  className="px-3 py-1.5 rounded-full bg-gold/20 hover:bg-gold/30 border border-gold/40 text-gold-light text-xs font-semibold shrink-0 flex items-center gap-1 transition-all"
                >
                  <span>Call</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* WhatsApp Priority Card */}
            <div className="bg-black/30 backdrop-blur-sm border border-emerald-500/30 hover:border-emerald-400/50 rounded-xl p-3.5 sm:p-4 transition-all duration-200 group">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-400/35 flex items-center justify-center shrink-0 text-emerald-400">
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                        WhatsApp Chat
                      </span>
                      <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded-full border border-emerald-500/30">
                        ~5m reply
                      </span>
                    </div>
                    <a
                      href="https://wa.me/91XXXXXXXXXX?text=Hello%20MA%20ARATI%20ENTERPRISE%2C%20I%20would%20like%20to%20get%20information%20about%20event%20fabrics."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] sm:text-base font-sans font-bold tracking-wide text-cream-50 hover:text-emerald-300 transition-colors leading-none mt-1 block tabular-nums"
                    >
                      +91 XXXXXXXXXX
                    </a>
                  </div>
                </div>

                <a
                  href="https://wa.me/91XXXXXXXXXX?text=Hello%20MA%20ARATI%20ENTERPRISE%2C%20I%20would%20like%20to%20get%20information%20about%20event%20fabrics."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shrink-0 flex items-center gap-1 transition-all"
                >
                  <span>Chat</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Warehouse Address Card */}
            <div className="bg-black/30 backdrop-blur-sm border border-gold/30 hover:border-gold/50 rounded-xl p-3.5 sm:p-4 transition-all duration-200 group">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-gold/20 border border-gold/35 flex items-center justify-center shrink-0 text-gold-light mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-gold-light uppercase tracking-wider block">
                    Central Warehouse & Office
                  </span>
                  <p className="text-xs font-medium text-cream-100 mt-0.5 leading-snug">
                    {addressText}
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-gold-light hover:underline cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-300">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                    <span className="text-gold/40">•</span>
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-gold-light hover:underline"
                    >
                      <span>Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours & Email in Single Row */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-black/20 border border-gold/20 rounded-lg p-2.5 flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-light shrink-0" />
                <div className="min-w-0">
                  <span className="text-[9px] uppercase font-bold text-gold-light/90 tracking-wider block leading-tight">
                    Hours
                  </span>
                  <span className="text-[11px] text-cream-100 truncate block">
                    Mon-Sat: 9AM-9PM
                  </span>
                </div>
              </div>

              <div className="bg-black/20 border border-gold/20 rounded-lg p-2.5 flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-light shrink-0" />
                <div className="min-w-0">
                  <span className="text-[9px] uppercase font-bold text-gold-light/90 tracking-wider block leading-tight">
                    Email
                  </span>
                  <a
                    href="mailto:info@maaratienterprise.com"
                    className="text-[11px] text-cream-100 hover:text-gold-light truncate block"
                  >
                    info@maaratienterprise.com
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: COMPACT MAP PREVIEW (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-br from-black/40 via-black/30 to-black/50 backdrop-blur-sm border border-gold/30 rounded-2xl p-3.5 sm:p-4 shadow-xl h-full flex flex-col justify-between">
              
              {/* Map Top Bar */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-bold text-gold-light tracking-wide">
                      Warehouse & Logistics Hub (Badkulla, Nadia)
                    </span>
                  </div>

                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 hover:bg-gold/25 border border-gold/30 text-gold-light text-[11px] font-semibold transition-all shrink-0"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Open Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Google Map Embedded Frame (Compact height: ~210px sm:~230px) */}
                <div className="relative w-full h-[200px] sm:h-[220px] rounded-xl overflow-hidden border border-gold/25 shadow-inner">
                  <iframe
                    title="MA ARATI ENTERPRISE Location Map"
                    src={embedMapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full filter contrast-[1.05]"
                  />
                  
                  {/* Floating Compact Pin Chip */}
                  <div className="absolute bottom-2 left-2 bg-black/85 backdrop-blur-md border border-gold/35 rounded-lg px-2.5 py-1 shadow-md pointer-events-none">
                    <p className="text-[11px] font-bold text-cream-50 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gold-light shrink-0" />
                      <span>MA ARATI ENTERPRISE</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Compact Action Bar */}
              <div className="mt-3 pt-2.5 border-t border-gold/15 flex flex-wrap items-center justify-between gap-2.5">
                
                {/* Fast Action Buttons */}
                <div className="flex items-center gap-2">

                  <a
                    href="https://wa.me/91XXXXXXXXXX?text=Hello%20MA%20ARATI%20ENTERPRISE%2C%20I%20would%20like%20to%20inquire%20about%20event%20fabrics."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-[11px] transition-all flex items-center gap-1 border border-emerald-400/40"
                  >
                    <WhatsAppIcon className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="flex items-center gap-3 text-[10px] text-cream-200/70">
                  <div className="flex items-center gap-1">
                    <Truck className="w-3 h-3 text-gold-light shrink-0" />
                    <span>Pan-India Transport</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-gold-light shrink-0" />
                    <span>Wholesale Pricing</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM COMPACT REASSURANCE LINE */}
        <div className="mt-6 pt-3 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-xs">
          <div className="flex items-center gap-2 text-cream-200/80 text-[11px]">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Immediate wholesale quotes & festival dispatch available across India.</span>
          </div>
          <div className="flex items-center gap-3 font-semibold text-gold-light text-[11px]">
            <a href="tel:+91XXXXXXXXXX" className="hover:underline flex items-center gap-1">
              <Phone className="w-3 h-3" />
              <span>+91 XXXXXXXXXX</span>
            </a>
            <span className="text-gold/40">•</span>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1 text-emerald-300"
            >
              <WhatsAppIcon className="w-3 h-3" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export const ContactSection = CallToAction;
