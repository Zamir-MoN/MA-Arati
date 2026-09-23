import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TopMiniBar } from './components/TopMiniBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import type { ProductItem } from './components/ProductCard';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SimpleLoader } from './components/SimpleLoader';
import { WhatsAppIcon } from './components/icons/WhatsAppIcon';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize Lenis smooth scroll synchronized with GSAP ScrollTrigger
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  const handleOpenDetail = (product: ProductItem) => {
    setSelectedProduct(product);
    setDetailModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col selection:bg-burgundy selection:text-cream-50">
      {/* SIMPLE WEBSITE OPENING LOADING SCREEN */}
      {showLoader && <SimpleLoader onFinish={() => setShowLoader(false)} />}

      {/* PERMANENTLY FIXED HEADER (TopMiniBar + Navbar) */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full shadow-royal-sm bg-cream-50/98 backdrop-blur-md">
        {/* 1. TOP MINI BAR */}
        <TopMiniBar />

        {/* 2. NAVBAR */}
        <Navbar 
          onMenuToggle={(isOpen) => setMobileMenuOpen(isOpen)}
        />
      </header>

      {/* 3. HERO SECTION */}
      <main className="flex-grow pt-[84px] sm:pt-[94px]">
        <Hero />

        {/* 4. PRODUCTS SECTION */}
        <Products onSelectProduct={(product) => handleOpenDetail(product)} />

        {/* 5. WHY CHOOSE US SECTION */}
        <WhyChooseUs />

        {/* 6. EVENT GALLERY WITH LIGHTBOX */}
        <Gallery />

        {/* 7. FULL-WIDTH CONTACT / CALL TO ACTION */}
        <CallToAction />
      </main>

      {/* 8. FOOTER */}
      <Footer />

      {/* FLOATING WHATSAPP BUTTON (Automatically hidden when mobile navigation menu is open) */}
      <a
        href="https://wa.me/91XXXXXXXXXX?text=Hello%20MA%20ARATI%20ENTERPRISE%2C%20I%20would%20like%20to%20inquire%20about%20your%20tent%20and%20event%20fabrics."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat"
        className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-royal-lg hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-cream-50 ${
          mobileMenuOpen ? 'opacity-0 pointer-events-none scale-0 invisible -z-10' : 'opacity-100 scale-100 visible z-[80]'
        }`}
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7" />
      </a>

      {/* PRODUCT DETAIL POPUP MODAL (IMAGE + DETAILS IN POINTS) */}
      <ProductDetailModal
        isOpen={detailModalOpen}
        product={selectedProduct}
        onClose={() => setDetailModalOpen(false)}
      />
    </div>
  );
}

export default App;
