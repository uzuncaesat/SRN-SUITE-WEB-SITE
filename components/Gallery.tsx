'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Get all images from public/images folder
  const images = [
    '/images/SnapInsta.to_482344075_18013577636686719_280753221615882520_n.jpg',
    '/images/SnapInsta.to_482358901_18013577570686719_910588412156272275_n.jpg',
    '/images/SnapInsta.to_482370276_18013577738686719_8508225757338571802_n.jpg',
    '/images/SnapInsta.to_482411591_18013577561686719_5294833011458475782_n.jpg',
    '/images/SnapInsta.to_482416996_18013577729686719_4355322455022595476_n.jpg',
    '/images/SnapInsta.to_482498413_18013577657686719_5242316414358754127_n.jpg',
    '/images/SnapInsta.to_482663874_18013577648686719_5668467727729685012_n.jpg',
    '/images/SnapInsta.to_482665845_18013577687686719_6985286105413707619_n.jpg',
    '/images/SnapInsta.to_482698729_18013577705686719_3244597640443330673_n.jpg',
    '/images/SnapInsta.to_482743651_18013577624686719_662554082367131454_n.jpg',
    '/images/SnapInsta.to_482843080_18013577675686719_6540351538471632070_n.jpg',
    '/images/SnapInsta.to_482861797_18013577714686719_7891650745439239217_n.jpg',
    '/images/SnapInsta.to_482877409_18013577612686719_2495401662541498609_n.jpg',
    '/images/SnapInsta.to_482968570_18013577696686719_799370175751147401_n.jpg',
  ];

  const categories = [
    'Dış Mekân',
    'Havuz',
    'Salon',
    'Yatak Odaları',
    'Kış Bahçesi',
    'Jakuzi',
  ];

  return (
    <>
      <section id="gallery" className="py-20 md:py-32 bg-gradient-to-b from-primary-50/30 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-nature-forest mb-4 text-center">
              Galeri
            </h2>
            <p className="text-xl text-gray-600 mb-8 text-center">
              Tesisimizden kareler
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-white text-gray-700 rounded-full hover:bg-primary-500 hover:text-white transition-colors shadow-sm"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                  onClick={() => setSelectedImage(src)}
                >
                  <Image
                    src={src}
                    alt={`Galeri görseli ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Büyük görsel"
                fill
                className="object-contain"
                priority
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                aria-label="Kapat"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
