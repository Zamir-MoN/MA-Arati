import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { Lightbox } from './Lightbox';
import type { GalleryItem } from './Lightbox';

const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Grand Entrance & Walkway Drapery',
    tag: 'Royal Setup',
    image: '/images/gallery/gallery_item_1.webp',
  },
  {
    id: 'gallery-2',
    title: 'Ceiling Canopy & Chandelier Drapery',
    tag: 'Ceiling Decor',
    image: '/images/gallery/gallery_item_2.webp',
  },
  {
    id: 'gallery-3',
    title: 'Mandap Floral & Fabric Architecture',
    tag: 'Mandap Setup',
    image: '/images/gallery/gallery_item_3.webp',
  },
  {
    id: 'gallery-4',
    title: 'Banquet Hall Round Table Setting',
    tag: 'Banquet Decor',
    image: '/images/gallery/gallery_item_4.webp',
  },
  {
    id: 'gallery-5',
    title: 'Illuminated Floral Aisle Walkway',
    tag: 'Aisle Setup',
    image: '/images/gallery/gallery_item_5.webp',
  },
  {
    id: 'gallery-6',
    title: 'VIP Lounge & Luxurious Sofa Seating',
    tag: 'Lounge Decor',
    image: '/images/gallery/gallery_item_6.webp',
  },
  {
    id: 'gallery-7',
    title: 'Open Pavilion Lounge & Tent Setup',
    tag: 'Tent Setup',
    image: '/images/gallery/gallery_item_7.webp',
  },
  {
    id: 'gallery-8',
    title: 'Royal Stage Backdrop with Warm Lights',
    tag: 'Stage Setup',
    image: '/images/gallery/gallery_item_8.webp',
  },
  {
    id: 'gallery-9',
    title: 'Table Centerpiece & Glassware Setting',
    tag: 'Table Styling',
    image: '/images/gallery/gallery_item_9.webp',
  },
  {
    id: 'gallery-10',
    title: 'Embroidered Lace & Decorative Fabrics',
    tag: 'Premium Fabric',
    image: '/images/gallery/gallery_item_10.webp',
  },
];

export const Gallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section
      id="gallery"
      className="relative py-20 sm:py-28 bg-[#FFFDF7] border-b border-[#EADBCA]/60 overflow-hidden content-auto"
    >
      {/* Top Left Golden Botanical Corner Ornament */}
      <div className="absolute top-0 left-0 pointer-events-none z-0 hidden md:block select-none overflow-hidden w-[180px] sm:w-[220px] md:w-[250px] lg:w-[280px] max-w-[25vw] opacity-75">
        <img
          src="/images/footer_corner_ornament.webp"
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-contain object-left-top -scale-y-100 -scale-x-100"
        />
      </div>

      {/* Top Right Golden Botanical Corner Ornament */}
      <div className="absolute top-0 right-0 pointer-events-none z-0 hidden md:block select-none overflow-hidden w-[180px] sm:w-[220px] md:w-[250px] lg:w-[280px] max-w-[25vw] opacity-75">
        <img
          src="/images/footer_corner_ornament.webp"
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-contain object-right-top -scale-y-100"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER SECTION MATCHING REFERENCE EXACTLY */}
        <div className="gallery-header text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          {/* Top Diamond Divider */}
          <div className="flex items-center justify-center gap-3 text-[#A67838] mb-3">
            <span className="h-[1px] w-16 sm:w-24 bg-[#A67838]/40" />
            <span className="text-xs tracking-widest flex items-center gap-1 font-serif select-none">
              <span className="text-[10px]">◇</span>
              <span className="text-[12px]">◆</span>
              <span className="text-[10px]">◇</span>
            </span>
            <span className="h-[1px] w-16 sm:w-24 bg-[#A67838]/40" />
          </div>

          {/* Heading with Burgundy + Gold Title */}
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-5xl font-bold tracking-tight">
            <span className="text-[#660C11]">Our Event </span>
            <span className="text-[#A67838]">Gallery</span>
          </h2>

          {/* Bottom Diamond Divider */}
          <div className="flex items-center justify-center gap-3 text-[#A67838] mt-3 mb-3">
            <span className="h-[1px] w-16 sm:w-24 bg-[#A67838]/40" />
            <span className="text-xs tracking-widest flex items-center gap-1 font-serif select-none">
              <span className="text-[10px]">◇</span>
              <span className="text-[12px]">◆</span>
              <span className="text-[10px]">◇</span>
            </span>
            <span className="h-[1px] w-16 sm:w-24 bg-[#A67838]/40" />
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-gray-500 font-normal">
            Real events. Real setups. Real celebrations.
          </p>
        </div>

        {/* DESKTOP EXACT MOSAIC GRID LAYOUT */}
        <div className="gallery-desktop-grid hidden lg:grid grid-cols-12 gap-5 auto-rows-[250px]">
          {/* Item 1: Tall Card Left (Cols 1-4, Spans 2 Rows) */}
          <div
            onClick={() => openLightbox(0)}
            className="gallery-mosaic-card group relative col-span-4 row-span-2 cursor-pointer overflow-hidden rounded-2xl border border-[#EADBCA] bg-[#1A1A1A] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={galleryItems[0].image}
              alt={galleryItems[0].title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-2 rounded-full bg-white/30 text-white backdrop-blur-sm">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Item 2: Top Middle Card (Cols 5-8, Row 1) */}
          <div
            onClick={() => openLightbox(1)}
            className="gallery-mosaic-card group relative col-span-4 row-span-1 cursor-pointer overflow-hidden rounded-2xl border border-[#EADBCA] bg-[#1A1A1A] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={galleryItems[1].image}
              alt={galleryItems[1].title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-2 rounded-full bg-white/30 text-white backdrop-blur-sm">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Item 3: Top Right Card (Cols 9-12, Row 1) */}
          <div
            onClick={() => openLightbox(2)}
            className="gallery-mosaic-card group relative col-span-4 row-span-1 cursor-pointer overflow-hidden rounded-2xl border border-[#EADBCA] bg-[#1A1A1A] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={galleryItems[2].image}
              alt={galleryItems[2].title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-2 rounded-full bg-white/30 text-white backdrop-blur-sm">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Row 2 Container across Cols 5-12 to guarantee 3 perfectly equal columns */}
          <div className="col-span-8 row-span-1 grid grid-cols-3 gap-5">
            {/* Item 4: Mid-Left */}
            <div
              onClick={() => openLightbox(3)}
              className="gallery-mosaic-card group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-[#EADBCA] bg-[#1A1A1A] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={galleryItems[3].image}
                alt={galleryItems[3].title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-1.5 rounded-full bg-white/30 text-white backdrop-blur-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Item 5: Mid-Center */}
            <div
              onClick={() => openLightbox(4)}
              className="gallery-mosaic-card group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-[#EADBCA] bg-[#1A1A1A] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={galleryItems[4].image}
                alt={galleryItems[4].title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-1.5 rounded-full bg-white/30 text-white backdrop-blur-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Item 6: Mid-Right */}
            <div
              onClick={() => openLightbox(5)}
              className="gallery-mosaic-card group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-[#EADBCA] bg-[#1A1A1A] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={galleryItems[5].image}
                alt={galleryItems[5].title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-1.5 rounded-full bg-white/30 text-white backdrop-blur-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: 3 Horizontal Cards across full width */}
          {/* Item 7: Bottom Left (Cols 1-4) */}
          <div
            onClick={() => openLightbox(6)}
            className="gallery-mosaic-card group relative col-span-4 row-span-1 cursor-pointer overflow-hidden rounded-2xl border border-[#EADBCA] bg-[#1A1A1A] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={galleryItems[6].image}
              alt={galleryItems[6].title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-2 rounded-full bg-white/30 text-white backdrop-blur-sm">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Item 8: Bottom Center (Cols 5-8) */}
          <div
            onClick={() => openLightbox(7)}
            className="gallery-mosaic-card group relative col-span-4 row-span-1 cursor-pointer overflow-hidden rounded-2xl border border-[#EADBCA] bg-[#1A1A1A] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={galleryItems[7].image}
              alt={galleryItems[7].title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-2 rounded-full bg-white/30 text-white backdrop-blur-sm">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Item 9: Bottom Right (Cols 9-12) */}
          <div
            onClick={() => openLightbox(8)}
            className="gallery-mosaic-card group relative col-span-4 row-span-1 cursor-pointer overflow-hidden rounded-2xl border border-[#EADBCA] bg-[#1A1A1A] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={galleryItems[8].image}
              alt={galleryItems[8].title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-2 rounded-full bg-white/30 text-white backdrop-blur-sm">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET RESPONSIVE GRID (clean 2-column layout) */}
        <div className="gallery-mobile-grid grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4">
          {galleryItems.slice(0, 10).map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="gallery-mobile-card group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border border-[#EADBCA] bg-[#1A1A1A] shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-2 rounded-full bg-white/30 text-white backdrop-blur-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX COMPONENT */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={currentIndex}
        items={galleryItems}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
