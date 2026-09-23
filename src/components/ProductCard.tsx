import React from 'react';

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  image: string;
  badge?: string;
  category?: string;
  features?: string[];
  icon?: React.ReactNode;
}

interface ProductCardProps {
  product: ProductItem;
  onSelect: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(product)}
      className="group relative cursor-pointer bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-[#E8DDCD] hover:border-gold transition-all duration-300 hover:-translate-y-1.5 shadow-royal-sm hover:shadow-royal aspect-[3/4] w-full select-none"
    >
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />


      {/* Persistent elegant button overlay at bottom */}
      <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3 bg-gradient-to-t from-black/75 via-black/35 to-transparent flex items-end justify-center transition-all duration-300">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(product);
          }}
          className="w-full py-1.5 sm:py-2 px-3 bg-white/95 hover:bg-burgundy text-burgundy hover:text-white text-[11px] sm:text-xs font-bold rounded-lg sm:rounded-xl shadow-md border border-gold/40 transition-all duration-200 flex items-center justify-center gap-1.5 backdrop-blur-xs tracking-wider uppercase"
        >
          <span>View Details</span>
          <span className="text-[12px] leading-none">→</span>
        </button>
      </div>
    </div>
  );
};
