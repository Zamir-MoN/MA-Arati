import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import type { ProductItem } from './ProductCard';
import { GoldDivider } from './decorative/GoldDivider';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: ProductItem | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('Pandal Cloth');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setCategory(initialProduct.title.replace(/^\d+\.\s*/, ''));
    }
  }, [initialProduct]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `*New Quote Request - MA ARATI ENTERPRISE*\n\n` +
      `*Name:* ${name || 'Prospective Client'}\n` +
      `*Phone:* ${phone || 'Not provided'}\n` +
      `*Location/City:* ${city || 'India'}\n` +
      `*Category:* ${category}\n` +
      `*Requirement/Quantity:* ${quantity || 'Standard Requirement'}\n` +
      `*Notes:* ${message || 'Please send catalogue and price list.'}`
    );
    window.open(`https://wa.me/918597895039?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/70 backdrop-blur-sm p-4 select-none">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-cream-50 rounded-2xl border-2 border-gold/40 shadow-royal-lg p-6 sm:p-8 z-10 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-cream-200 text-charcoal-muted hover:text-burgundy transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-burgundy">Inquiry Received!</h3>
            <p className="text-sm text-charcoal-muted mt-2 max-w-xs">
              Thank you {name || 'valued customer'}. Our fabric consultant will contact you with wholesale pricing within 2 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-dark uppercase tracking-widest mb-1">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Custom Wholesale Quotation</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-burgundy">
                Request a Fabric Quote
              </h3>
              <GoldDivider width={160} subtle />
              <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
                Direct factory pricing for wedding decorators, event managers &amp; tent houses.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-medium text-charcoal mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-cream-border bg-white text-charcoal focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-medium text-charcoal mb-1">Phone / Mobile</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98XXX XXXXX"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-cream-border bg-white text-charcoal focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-medium text-charcoal mb-1">City / Location</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Kolkata, Varanasi, Delhi"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-cream-border bg-white text-charcoal focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-medium text-charcoal mb-1">Product Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-cream-border bg-white text-charcoal focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="Premium Pandal Fabric">Premium Pandal Fabric</option>
                    <option value="Premium Net Fabric">Premium Net Fabric</option>
                    <option value="Pandal Cloth">Pandal Cloth</option>
                    <option value="Ceiling Cloth">Ceiling Cloth</option>
                    <option value="Side Curtains">Side Curtains</option>
                    <option value="Tent Accessories">Tent Accessories</option>
                    <option value="Carpet & Flooring">Carpet &amp; Flooring</option>
                    <option value="Decorative Fabrics">Decorative Fabrics</option>
                    <option value="Full Event Setup Package">Full Event Setup Package</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-medium text-charcoal mb-1">
                  Estimated Requirement / Dimensions
                </label>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="e.g. 5,000 sq ft or 20 rolls of satin drapes"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-cream-border bg-white text-charcoal focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div>
                <label className="block font-medium text-charcoal mb-1">Additional Requirements</label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Color preferences, fabric textures, target delivery date..."
                  className="w-full px-3.5 py-2 rounded-lg border border-cream-border bg-white text-charcoal focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-full bg-burgundy hover:bg-burgundy-light text-cream-50 font-semibold tracking-wider uppercase text-xs transition-all shadow-royal-sm hover:shadow-royal flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-gold-light" />
                  <span>Submit Inquiry</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppQuote}
                  className="flex-1 py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold tracking-wider uppercase text-xs transition-all shadow-royal-sm flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
