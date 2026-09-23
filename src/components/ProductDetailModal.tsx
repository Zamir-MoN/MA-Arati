import React, { useEffect } from 'react';
import { X, Check, Sparkles, Layers, ShieldCheck, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import type { ProductItem } from './ProductCard';
import { GoldDivider } from './decorative/GoldDivider';

interface ProductDetailModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
  onInquire?: (product: ProductItem) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const [selectedImgIndex, setSelectedImgIndex] = React.useState(0);

  // 4 real preview angles/variants for each product
  const productGallery = React.useMemo(() => {
    if (!product) return [];
    // Extract card number if possible
    const match = product.image.match(/card_(\d+)\.png/);
    const num = match ? parseInt(match[1], 10) : 1;
    // Pick 3 related fabric views from the existing 12 high-res cards
    const second = `/images/cards/card_${((num % 12) + 1)}.png`;
    const third = `/images/cards/card_${(((num + 1) % 12) + 1)}.png`;
    const fourth = `/images/cards/card_${(((num + 2) % 12) + 1)}.png`;

    return [product.image, second, third, fourth];
  }, [product]);

  useEffect(() => {
    setSelectedImgIndex(0);
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        setSelectedImgIndex((prev) => (prev - 1 + productGallery.length) % productGallery.length);
      }
      if (e.key === 'ArrowRight') {
        setSelectedImgIndex((prev) => (prev + 1) % productGallery.length);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, productGallery.length]);

  if (!isOpen || !product) return null;

  const defaultFeatures = [
    'Premium quality threadwork & high-grade sequin embellishments',
    'Crease-resistant event drapery fabric engineered for grand pandal setups',
    'Vibrant colorfast dyes suited for high-intensity decorative lighting',
    'Custom roll lengths & bulk wholesale orders available across India',
    'Ready stock available with same-day dispatch support',
  ];

  const features = product.features && product.features.length > 0 ? product.features : defaultFeatures;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `*Product Inquiry - MA ARATI ENTERPRISE*\n\n` +
      `*Product:* ${product.title}\n` +
      `*ID:* ${product.id}\n` +
      `*Details:* ${product.description}\n\n` +
      `Hello, I would like to inquire about fabric availability, wholesale pricing, and roll dimensions.`
    );
    window.open(`https://wa.me/918597895039?text=${text}`, '_blank');
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImgIndex((prev) => (prev - 1 + productGallery.length) % productGallery.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImgIndex((prev) => (prev + 1) % productGallery.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-3 sm:p-5 md:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-gold/30 overflow-hidden flex flex-col md:flex-row my-auto max-h-[92vh]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 text-charcoal hover:text-burgundy hover:bg-white shadow-md flex items-center justify-center transition-all duration-200 border border-cream-border"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT COLUMN: HERO FABRIC IMAGE WITH EMBEDDED ROYAL INFO & THUMBNAIL SLIDER */}
        <div className="w-full md:w-1/2 relative bg-[#F9F5EC] flex flex-col justify-between overflow-hidden border-b md:border-b-0 md:border-r border-[#E8DDCD]">
          {/* Main Visual Presentation */}
          <div className="relative aspect-[3/4] md:aspect-auto flex-grow min-h-[380px] md:min-h-[460px] overflow-hidden">
            <img
              src={productGallery[selectedImgIndex] || product.image}
              alt={product.title}
              className="w-full h-full object-cover object-center transition-all duration-300"
            />

            {/* Subtle Gradient Backdrop behind text */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-transparent pointer-events-none h-48" />

            {/* Left Circular Navigation Chevron */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#6B0D0D] hover:bg-burgundy text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 border border-gold/40"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
            </button>

            {/* Right Circular Navigation Chevron */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#6B0D0D] hover:bg-burgundy text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 border border-gold/40"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.2]" />
            </button>
          </div>

          {/* Bottom 4-Thumbnail Strip with Active Highlight & Indicators */}
          <div className="p-3.5 bg-white/95 border-t border-[#E8DDCD] flex flex-col items-center gap-2.5">
            <div className="flex items-center justify-center gap-3 w-full">
              {productGallery.map((imgSrc, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImgIndex(idx)}
                  className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                    selectedImgIndex === idx
                      ? 'border-[#6B0D0D] ring-2 ring-[#6B0D0D]/30 scale-105 shadow-md'
                      : 'border-white opacity-75 hover:opacity-100 hover:border-gold shadow-xs'
                  }`}
                >
                  <img
                    src={imgSrc}
                    alt={`Angle ${idx + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>

            {/* Indicator Pills (Matching Reference Design) */}
            <div className="flex items-center gap-1.5 pt-0.5">
              {productGallery.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    selectedImgIndex === idx
                      ? 'w-7 bg-[#6B0D0D]'
                      : 'w-5 bg-[#E8DDCD]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: DETAILS IN BULLET POINTS & WHATSAPP ACTION */}
        <div className="w-full md:w-1/2 p-6 sm:p-7 lg:p-8 flex flex-col justify-between overflow-y-auto bg-[#FFFDF9]">
          <div>
            {/* Arch Mandala Crest Ornament in Modal */}
            <div className="w-20 mb-2 pointer-events-none select-none opacity-85">
              <img
                src="/images/arch_mandala_crest.png"
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Header category */}
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-gold-dark" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-dark">
                {product.category || 'Tent & Event Fabric'}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-burgundy tracking-tight leading-snug">
              {product.title}
            </h2>

            <GoldDivider width={160} className="my-2.5 !justify-start" />

            {/* Description */}
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-5">
              {product.description}
            </p>

            {/* 4 Feature Highlights Grid (Matching Reference Aesthetics) */}
            <div className="grid grid-cols-2 gap-2.5 mb-6">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-cream-50 border border-[#EFE5D5]">
                <div className="w-7 h-7 rounded-full bg-cream-100 border border-gold/50 flex items-center justify-center text-burgundy flex-shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="text-[11px] font-bold text-burgundy leading-tight">
                  Premium Velvet &amp; Silk
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-cream-50 border border-[#EFE5D5]">
                <div className="w-7 h-7 rounded-full bg-cream-100 border border-gold/50 flex items-center justify-center text-burgundy flex-shrink-0">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <div className="text-[11px] font-bold text-burgundy leading-tight">
                  Golden Sequins
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-cream-50 border border-[#EFE5D5]">
                <div className="w-7 h-7 rounded-full bg-cream-100 border border-gold/50 flex items-center justify-center text-burgundy flex-shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div className="text-[11px] font-bold text-burgundy leading-tight">
                  Rich Heavy Texture
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-cream-50 border border-[#EFE5D5]">
                <div className="w-7 h-7 rounded-full bg-cream-100 border border-gold/50 flex items-center justify-center text-burgundy flex-shrink-0">
                  <Truck className="w-3.5 h-3.5" />
                </div>
                <div className="text-[11px] font-bold text-burgundy leading-tight">
                  Perfect For Royal Events
                </div>
              </div>
            </div>

            {/* BULLET POINTS / SPECIFICATIONS */}
            <div className="mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-3 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-burgundy" />
                <span>Product Specifications &amp; Features:</span>
              </h3>

              <ul className="space-y-2.5">
                {features.map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-charcoal/90 leading-snug">
                    <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-gold/20 text-burgundy flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Elegance In Every Detail Calligraphy Accent */}
            <div className="pt-2 pb-1 border-t border-cream-border/70 flex items-center justify-between">
              <span className="font-serif italic text-sm text-[#8C6527]">
                &ldquo;Elegance in Every Detail&rdquo;
              </span>
              <span className="text-[11px] text-charcoal-muted font-medium">
                Tested Wholesale Grade
              </span>
            </div>
          </div>

          {/* ACTION BUTTON */}
          <div className="pt-4">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="w-full py-3.5 px-5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 group"
            >
              <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Inquire on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
