'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // public/images/gallery/ klasöründeki fotoğraflar (gallery-01.jpg ... gallery-21.jpg)
  const images = Array.from(
    { length: 21 },
    (_, i) => `/images/gallery/gallery-${String(i + 1).padStart(2, '0')}.jpg`
  );

  // Masonry pattern - varying heights for visual interest
  const masonryPattern = [
    'row-span-2', 'row-span-1', 'row-span-2', 'row-span-1',
    'row-span-1', 'row-span-2', 'row-span-1', 'row-span-2',
  ];
  const masonryHeights = images.map((_, i) => masonryPattern[i % masonryPattern.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  }, [selectedIndex, images.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  }, [selectedIndex, images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      else if (e.key === 'ArrowLeft') handlePrev();
      else if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [selectedIndex, handlePrev, handleNext]);

  return (
    <>
      <section id="gallery" className="relative py-20 md:py-32 bg-gradient-to-b from-primary-50/30 via-white to-white overflow-hidden">
        <div className="absolute top-40 -right-20 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm uppercase tracking-[0.3em] text-accent-gold font-semibold mb-4">
              Görsel Yolculuk
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-nature-forest mb-4">
              Galeri
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mb-6" />
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Tesisimizden en güzel kareler
            </p>
          </motion.div>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[120px] md:auto-rows-[140px] gap-3 md:gap-4 max-w-7xl mx-auto">
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: (index % 8) * 0.05, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className={`${masonryHeights[index]} group relative overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-500`}
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={src}
                  alt={`Galeri görseli ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-nature-forest/80 via-nature-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Caption slide up */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between">
                    <span className="text-white/90 text-xs font-medium uppercase tracking-wider">
                      Büyüt
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Counter */}
            <div className="absolute top-6 left-6 text-white/90 text-sm font-medium bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              {selectedIndex + 1} / {images.length}
            </div>

            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all flex items-center justify-center z-10"
              aria-label="Kapat"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 md:left-8 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all flex items-center justify-center z-10"
              aria-label="Önceki"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 md:right-8 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all flex items-center justify-center z-10"
              aria-label="Sonraki"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[85vh] w-full h-full px-16 md:px-24"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex]}
                alt={`Galeri görseli ${selectedIndex + 1}`}
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />
            </motion.div>

            {/* Keyboard hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs hidden md:flex items-center gap-3">
              <span className="px-2 py-1 bg-white/10 rounded border border-white/20">←</span>
              <span className="px-2 py-1 bg-white/10 rounded border border-white/20">→</span>
              <span>gezin</span>
              <span className="px-2 py-1 bg-white/10 rounded border border-white/20">ESC</span>
              <span>kapat</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
