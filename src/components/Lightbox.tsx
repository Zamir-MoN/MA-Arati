import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface GalleryItem {
  id: string;
  title: string;
  tag: string;
  image: string;
}

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  items: GalleryItem[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  currentIndex,
  items,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 backdrop-blur-md transition-opacity duration-300 select-none p-4 sm:p-6">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-cream-50/10 hover:bg-cream-50/20 text-cream-100 transition-colors border border-cream-100/20"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-cream-50/10 hover:bg-cream-50/25 text-cream-100 transition-colors border border-cream-100/20"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-cream-50/10 hover:bg-cream-50/25 text-cream-100 transition-colors border border-cream-100/20"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center">
        <div className="relative overflow-hidden rounded-2xl border-2 border-gold/40 shadow-2xl bg-charcoal">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[75vh] w-auto object-contain rounded-xl"
          />
        </div>

        {/* Caption Bar */}
        <div className="mt-4 text-center">
          <p className="text-xs text-cream-300/80">
            Image {currentIndex + 1} of {items.length} • Press ESC to close
          </p>
        </div>
      </div>
    </div>
  );
};
