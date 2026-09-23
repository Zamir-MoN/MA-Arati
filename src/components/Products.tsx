import React from 'react';
import { ProductCard } from './ProductCard';
import type { ProductItem } from './ProductCard';
import { GoldDivider } from './decorative/GoldDivider';
import {
  ArrowRight,
  Sparkles,
  Flower2,
  Layers,
  Award,
  Gem,
  Palette,
  Leaf,
  Crown,
  Heart,
  Sun,
  Lightbulb,
} from 'lucide-react';

interface ProductsProps {
  onSelectProduct: (product: ProductItem) => void;
}

// Top 2 Horizontal Featured Cards (Matching User's Reference Top Row)
const topFeaturedCards = [
  {
    id: 'pandal-fabric-featured',
    badgeText: 'FEATURED —',
    title: 'Premium Pandal Fabric',
    description: 'High-quality fabrics for elegant event setups.',
    image: '/images/cards/card_2.webp',
  },
  {
    id: 'net-fabric-featured',
    badgeText: 'POPULAR —',
    title: 'Premium Net Fabric',
    description: 'Stylish, durable and perfect for modern decorations.',
    image: '/images/cards/card_3.webp',
  },
];

// All 12 Distinct Fabric & Material Cards (From User's 12 Downloaded Images)
const allTwelveCards: ProductItem[] = [
  {
    id: 'card-1',
    title: 'White & Magenta Floral Sequin',
    category: 'Celebration Pandal Fabric',
    description: 'Crinkle celebration fabric with vibrant magenta floral trellis & golden sequins.',
    image: '/images/cards/card_1.webp',
    badge: 'Bestseller',
    icon: <Flower2 className="w-4 h-4 stroke-[1.8]" />,
    features: [
      'Crinkle textured base fabric with high drape elasticity',
      'Vibrant magenta floral trellis embroidered with gleaming gold sequins',
      'Ideal for wedding entrance arches, backdrop walls & canopy ceilings',
      'Fade-resistant dyes formulated for halogen & LED event lighting',
      'Available in standard roll widths of 44" and 54" with custom length options',
    ],
  },
  {
    id: 'card-2',
    title: 'Golden Royal Sequin Fabric',
    category: 'Pandal & Stage Fabric',
    description: 'Lustrous yellow silk with diamond-lattice sequin embroidery & floral accents.',
    image: '/images/cards/card_2.webp',
    badge: 'Popular',
    icon: <Sparkles className="w-4 h-4 stroke-[1.8]" />,
    features: [
      'Deep lustrous golden base silk offering regal reflection under warm lights',
      'Geometric diamond-lattice pattern with magenta flower sequence centers',
      'Heavy-duty drape quality suitable for grand wedding mandaps & stage partitions',
      'Wrinkle-resistant fabric designed for fast installation and repeated event use',
      'Wholesale packaging in 50m and 100m sealed master bundles',
    ],
  },
  {
    id: 'card-3',
    title: 'Pink Rose Garden Net Fabric',
    category: 'Sheer Event Drapery',
    description: 'Delicate sheer net fabric with pastel floral threadwork & scalloped border.',
    image: '/images/cards/card_3.webp',
    badge: 'Luxury',
    icon: <Layers className="w-4 h-4 stroke-[1.8]" />,
    features: [
      'Ultra-fine sheer white net with soft touch and flowy ceiling drape',
      'Multi-color pastel pink & green floral vine embroidery throughout',
      'Reinforced scalloped border edge for neat hanging without extra tailoring',
      'Allows soft light transmission for ambient chandelier and fairy-light glow',
      'Widely preferred for reception ceilings, photo booths & garden canopies',
    ],
  },
  {
    id: 'card-4',
    title: 'Ceiling Net',
    category: 'Festive Pandal Net',
    description: 'Pure white net with festive orange & yellow embroidered floral borders.',
    image: '/images/cards/card_4.webp',
    badge: 'Traditional',
    icon: <Award className="w-4 h-4 stroke-[1.8]" />,
    features: [
      'Traditional yellow and saffron marigold floral border embroidery',
      'Durable high-tensile net structure resistant to tearing during stretching',
      'Classic festive aesthetic ideal for Haldi ceremonies, pujas & outdoor tents',
      'Pre-washed and shrink-resistant fabric for all weather conditions',
      'Supplied in customized roll packages with prompt pan-India dispatch',
    ],
  },
  {
    id: 'card-5',
    title: 'Taiwan Print',
    category: 'Heritage Tent Fabric',
    description: 'Geometric diamond lattice with vivid pink blossoms and olive green borders.',
    image: '/images/cards/card_5.webp',
    badge: 'Exclusive',
    icon: <Gem className="w-4 h-4 stroke-[1.8]" />,
    features: [
      'Striking diamond geometric grid pattern with center blossom medallions',
      'Dense thread count ensuring complete opacity for privacy partitions',
      'Royal contrast border in dark olive and antique golden thread accents',
      'Heavyweight fabric ideal for pandal side walls, royal gates & backdrops',
      'Premium colorfast printing and stitching that withstands heavy handling',
    ],
  },
  {
    id: 'card-6',
    title: 'Loadshedding Galaxy',
    category: 'Modern Theme Fabric',
    description: 'Vibrant multi-hued pastel rainbow sheer drape with embroidered floral sprigs.',
    image: '/images/cards/card_6.webp',
    badge: 'Trending',
    icon: <Palette className="w-4 h-4 stroke-[1.8]" />,
    features: [
      'Gradient rainbow ombre transition across sky blue, yellow, and blush tones',
      'Scattered multi-color embroidered floral sprigs adding depth and texture',
      'Lightweight and fluid drape motion perfect for breeze-catching outdoor setups',
      'Ideal for Mehndi, Sangeet stages, pool-side functions & modern weddings',
      'Colorfast sublimation and embroidery for long-lasting vibrancy',
    ],
  },
  {
    id: 'card-7',
    title: 'Peach Botanical Leaf Net',
    category: 'Designer Mandap Net',
    description: 'Sheer ivory net with delicate peach vine embroidery for mandap canopies.',
    image: '/images/cards/card_7.webp',
    badge: 'Botanical',
    icon: <Leaf className="w-4 h-4 stroke-[1.8]" />,
    features: [
      'Subtle peach and terracotta botanical foliage embroidery on sheer ivory net',
      'Sophisticated contemporary look favoured for destination wedding themes',
      'Scalloped lower hemline designed for seamless ceiling swagging',
      'Soft translucent finish creating dreamy depth under diffused spotlights',
      'Available in bulk wholesale rolls with bespoke length cutting support',
    ],
  },
  {
    id: 'card-8',
    title: 'Rani Pink Velvet Sequin Fabric',
    category: 'Luxury Royal Velvet',
    description: 'Rich rani pink celebration fabric with golden trellis work and flower sequins.',
    image: '/images/cards/card_8.webp',
    badge: 'Royal',
    icon: <Crown className="w-4 h-4 stroke-[1.8]" />,
    features: [
      'Deep magenta-pink royal texture with high light reflectivity',
      'Dense golden sequin trellis embroidery with floral star bursts',
      'Heavy fall fabric that creates deep luxurious pleats on stage pillars',
      'Engineered for grand palace weddings, VVIP stages & royal entrance gates',
      'Tested for fire-retardant event treatments and heavy-duty usage',
    ],
  },
  {
    id: 'card-9',
    title: 'Ceiling Net (Pink Floral)',
    category: 'Ceiling & Arch Fabric',
    description: 'Graceful sheer white cloth with pink flower bouquets and scalloped edging.',
    image: '/images/cards/card_9.webp',
    badge: 'Wedding Special',
    icon: <Heart className="w-4 h-4 stroke-[1.8]" />,
    features: [
      'Pastel floral bouquet motifs with delicate petal shading in pink and crimson',
      'Sheer airy base providing an ethereal floating effect for tent canopies',
      'Ornamental double scalloped border along the bottom hem',
      'Easy to knot, clamp, and drape over metal scaffolding and truss systems',
      'Bulk wholesale availability with fast express transit to decorators',
    ],
  },
  {
    id: 'card-10',
    title: 'White Trellis Sequin Fabric',
    category: 'Signature Sequin Fabric',
    description: 'Lattice sequin embroidery with magenta rosettes on premium white cloth.',
    image: '/images/cards/card_10.webp',
    badge: 'Classic',
    icon: <Sparkles className="w-4 h-4 stroke-[1.8]" />,
    features: [
      'Timeless criss-cross lattice pattern woven with shimmering metallic sequins',
      'Bright magenta flower rosettes positioned at each lattice intersection',
      'Crisp white base cloth offering clean contrast in wedding photography',
      'Resistant to fraying and seam stress during rapid pandal installation',
      'Full stock ready in Kolkata warehouse for immediate nationwide courier',
    ],
  },
  {
    id: 'card-11',
    title: 'Haldi Mustard Sequin Fabric',
    category: 'Ceremonial Fabric',
    description: 'Festive mustard yellow fabric with shimmering diamond sequence work.',
    image: '/images/cards/card_11.webp',
    badge: 'Haldi Special',
    icon: <Sun className="w-4 h-4 stroke-[1.8]" />,
    features: [
      'Traditional auspicious turmeric mustard hue ideal for Haldi & daytime pujas',
      'Shimmering diamond sequin matrix catching direct sunlight and stage lights',
      'Silky smooth texture that drapes effortlessly over seating and tables',
      'Stain-resistant finish designed for lively festive gatherings',
      'Available in large volume bolt packing for event management companies',
    ],
  },
  {
    id: 'card-12',
    title: 'Illuminated Canopy Ceiling Drape',
    category: 'Canopy & Ceiling Drape',
    description: 'Embroidered leaf vines on scalloped canopy cloth with ambient light rolls.',
    image: '/images/cards/card_12.webp',
    badge: 'Ceiling Special',
    icon: <Lightbulb className="w-4 h-4 stroke-[1.8]" />,
    features: [
      'Specially designed for overhead pandal ceiling installations and canopy swags',
      'Reflective metallic embroidery creates a glowing effect when backlit',
      'Reinforced grommets and edging for secure rigging at heights',
      'Lightweight yet tough tensile fabric prevents sagging over wide spans',
      'Tested and certified for professional tent and decorator requirements',
    ],
  },
  {
    id: 'card-13',
    title: 'Bright Lycra',
    category: 'Stretch Event Fabric',
    description: 'Ultra-stretch, wrinkle-free bright magenta lycra fabric for grand ceiling drapes, pillar wraps & stage backdrops.',
    image: '/images/cards/card_bright_lycra.webp',
    badge: 'Popular',
    icon: <Sparkles className="w-4 h-4 stroke-[1.8]" />,
    features: [
      'Four-way premium stretch elasticity ensuring taut, wrinkle-free installation',
      'Vibrant bright magenta celebration hue engineered for dazzling event lights',
      'Smooth matte micro-ribbed surface providing deep, non-reflective elegance',
      'Heavy drape and shape recovery that resists sagging across large ceiling spans',
      'Supplied in continuous bulk rolls with custom cutting support from Nadia warehouse',
    ],
  },
  {
    id: 'card-14',
    title: 'Plain Taiwan',
    category: 'All-Color Event Drapery',
    description: 'Graceful Plain Taiwan fabric available in all colors for pandal ceilings, backdrop draping & decorative partitions.',
    image: '/images/cards/card_plain_taiwan.webp',
    badge: 'All Colors Available',
    icon: <Palette className="w-4 h-4 stroke-[1.8]" />,
    features: [
      'Available in all vibrant & pastel event colors upon wholesale request',
      'Fluid, graceful drape with elegant swirl texture ideal for ceiling swags',
      'Crease-resistant and durable construction designed for repeated event setups',
      'High colorfastness formulated to withstand intensive halogen & LED stage lighting',
      'Wholesale bulk bolt packaging with direct all-India transport dispatch',
    ],
  },
  {
    id: 'card-15',
    title: 'Sunflower Galaxy (Yellow)',
    category: 'Festive Pandal Fabric',
    description: 'Festive turmeric yellow fabric embroidered with bright magenta and golden sunflower blossoms.',
    image: '/images/cards/card_sunflower_galaxy_yellow.webp',
    icon: <Sun className="w-4 h-4 stroke-[1.8]" />,
    features: [
      'Auspicious festive turmeric yellow base ideal for Haldi, weddings & puja pandals',
      'Artfully embroidered dual-tone magenta and golden sunflower medallions',
      'High-grade wrinkle-resistant celebration cloth engineered for crisp drape',
      'Colorfast dyes that glow with warmth under halogen and warm stage spotlights',
      'Wholesale bulk bolt packaging with direct all-India dispatch from Nadia',
    ],
  },
  {
    id: 'card-16',
    title: 'Sunflower Galaxy (White)',
    category: 'Celebration Pandal Fabric',
    description: 'Crisp white ceremonial fabric featuring radiant pink sunflower blossoms and leafy vines.',
    image: '/images/cards/card_sunflower_galaxy_white.webp',
    icon: <Flower2 className="w-4 h-4 stroke-[1.8]" />,
    features: [
      'Pure white background fabric with contrasting vibrant pink sunflower embroidery',
      'Graceful floral vine repeat perfect for entrance gates, mandaps & stage partitions',
      'Smooth, breathable premium drape quality suited for indoor and outdoor venues',
      'Durable stitching resistant to tension stress during fast decorator rigging',
      'Available in standard roll widths with wholesale bulk packaging and cutting support',
    ],
  },
];

export const Products: React.FC<ProductsProps> = ({ onSelectProduct }) => {
  return (
    <section
      id="products"
      className="relative py-16 sm:py-20 bg-[#FFF9EF] border-b border-cream-border/60 overflow-hidden"
    >
      {/* Top Right Corner Golden Mandala & Lotus Drops */}
      <div className="absolute top-0 right-0 pointer-events-none z-0 hidden sm:block select-none overflow-hidden w-[220px] md:w-[280px] lg:w-[320px] max-w-[30vw]">
        <img
          src="/images/products_top_right_ornament.webp"
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-contain object-right-top opacity-80"
        />
      </div>

      {/* Bottom Left Corner Golden Botanical Filigree Ornament (Flipped horizontally right to left & slightly overlapping bottom line) */}
      <div className="absolute -bottom-1.5 sm:-bottom-2.5 left-0 pointer-events-none z-10 select-none w-[140px] sm:w-[190px] md:w-[230px] lg:w-[260px] max-w-[26vw] -scale-x-100 origin-bottom-center">
        <img
          src="/images/products_bottom_left_ornament.webp"
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-contain object-left-bottom opacity-90 block drop-shadow-sm"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="products-header text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-gold-dark uppercase mb-2">
            TEXTILE CATALOGUE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-burgundy tracking-tight">
            Our Products
          </h2>
          <GoldDivider width={180} />
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed mt-2">
            Wide range of tent items and fabrics in premium quality and traditional designs.
          </p>
        </div>

        {/* 1. TOP ROW: 2 HORIZONTAL FEATURED CARDS (EXACT MATCH TO REFERENCE) */}
        <div className="featured-products-grid grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-14">
          {topFeaturedCards.map((card) => (
            <div
              key={card.id}
              onClick={() =>
                onSelectProduct({
                  id: card.id,
                  title: card.title,
                  description: card.description,
                  image: card.image,
                })
              }
              className="featured-product-card group relative bg-white rounded-2xl overflow-hidden border border-[#E8DDCD] hover:border-gold transition-all duration-400 shadow-royal-sm hover:shadow-royal hover:-translate-y-1.5 flex flex-col sm:flex-row cursor-pointer select-none"
            >
              {/* Image Half */}
              <div className="w-full sm:w-[48%] relative aspect-[4/3] sm:aspect-auto overflow-hidden bg-cream-100">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content Half */}
              <div className="w-full sm:w-[52%] p-5 sm:p-6 lg:p-7 flex flex-col justify-between relative bg-white">
                {/* Subtle corner watermark */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 pointer-events-none opacity-15">
                  <img
                    src="/images/products_top_right_ornament.webp"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <p className="text-[11px] font-bold tracking-[0.2em] text-[#8C6527] uppercase mb-1.5">
                    {card.badgeText}
                  </p>
                  <h3 className="font-serif text-2xl sm:text-[26px] font-bold text-burgundy group-hover:text-burgundy-light transition-colors leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-charcoal-muted mt-2 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-3">
                  <button
                    type="button"
                    className="px-5 py-2 rounded-full bg-[#7D1111] group-hover:bg-burgundy-light text-white text-xs sm:text-[13px] font-bold tracking-wider transition-all duration-300 shadow-sm flex items-center gap-2"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. MIDDLE DIVIDER: MORE EVENT & TENT MATERIALS */}
        <div className="products-mid-divider flex items-center justify-center gap-3 sm:gap-5 mb-10 max-w-4xl mx-auto">
          <span className="w-16 sm:w-32 h-px bg-[#E3D3BE]" />
          <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#8C6527] uppercase text-center">
            MORE EVENT &amp; TENT MATERIALS
          </span>
          <span className="w-16 sm:w-32 h-px bg-[#E3D3BE]" />
        </div>

        {/* 3. GRID OF ALL 12 DISTINCT PRODUCT CARDS - 2 COLUMNS ON MOBILE */}
        <div className="products-cards-grid grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-7 items-stretch max-w-7xl mx-auto">
          {allTwelveCards.map((product) => (
            <div key={product.id} className="product-card-item flex">
              <ProductCard
                product={product}
                onSelect={onSelectProduct}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


