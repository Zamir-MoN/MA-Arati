import React, { useEffect } from 'react';
import { X, Sparkles, ShieldCheck, Truck } from 'lucide-react';
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
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `*Product Inquiry - MA ARATI ENTERPRISE*\n\n` +
      `*Product:* ${product.title}\n` +
      `*ID:* ${product.id}\n` +
      `*Details:* ${product.description}\n\n` +
      `Hello, I would like to inquire about fabric availability, wholesale pricing, and roll dimensions.`
    );
    window.open(`https://wa.me/91XXXXXXXXXX?text=${text}`, '_blank');
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
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 text-charcoal hover:text-burgundy hover:bg-white shadow-md flex items-center justify-center transition-all duration-200 border border-cream-border cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT COLUMN: HERO FABRIC IMAGE */}
        <div className="w-full md:w-1/2 relative bg-[#F9F5EC] overflow-hidden border-b md:border-b-0 md:border-r border-[#E8DDCD] min-h-[340px] md:min-h-[460px] flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* RIGHT COLUMN: DETAILS & WHATSAPP ACTION */}
        <div className="w-full md:w-1/2 p-6 sm:p-7 lg:p-8 flex flex-col justify-between overflow-y-auto bg-[#FFFDF9]">
          <div>
            {/* Category */}
            <div className="flex items-center mb-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-[0.2em] text-[#C89B3C] uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{product.category || 'Exclusive Fabric'}</span>
              </span>
            </div>

            {/* Product Title */}
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-burgundy leading-tight">
              {product.title}
            </h2>

            {/* Gold Divider */}
            <GoldDivider width={160} subtle className="!my-2.5 !justify-start" />

            {/* Description */}
            <p className="text-xs sm:text-[13px] text-charcoal/80 leading-relaxed font-light mb-5">
              {product.description}
            </p>

            {/* 2 QUICK TRUST MINI-BADGES */}
            <div className="grid grid-cols-2 gap-2.5 mb-6">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-cream-50 border border-[#EFE5D5]">
                <div className="w-7 h-7 rounded-full bg-cream-100 border border-gold/50 flex items-center justify-center text-burgundy flex-shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div className="text-[11px] font-bold text-burgundy leading-tight">
                  Rich Heavy Texture
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-cream-50 border border-[#EFE5D5]">
                <div className="w-7 h-7 rounded-full bg-cream-100 border border-gold/50 flex items-center justify-center text-burgundy flex-shrink-0">
                  <Truck className="w-3.5 h-3.5" />
                </div>
                <div className="text-[11px] font-bold text-burgundy leading-tight">
                  Perfect For Royal Events
                </div>
              </div>
            </div>

            {/* Elegance In Every Detail Calligraphy Accent */}
            <div className="pt-3 pb-2 border-t border-cream-border/70 flex items-center justify-between">
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
              className="w-full py-3.5 px-5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer"
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
