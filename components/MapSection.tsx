'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { siteConfig } from '@/constants/siteConfig';

const MapSection = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-white to-accent-cream/20 overflow-hidden">
      <div className="absolute top-0 -right-20 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-[0.3em] text-accent-gold font-semibold mb-4">
            Bizi Bulun
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-nature-forest mb-4">
            Konum
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {siteConfig.map.description}
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Map with reveal animation */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-soft-lg group"
          >
            {/* Branded loading overlay */}
            {!mapLoaded && (
              <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary-50 to-white flex flex-col items-center justify-center gap-4">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full border-4 border-primary-100"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-primary-500 border-t-transparent animate-spin"></div>
                </div>
                <p className="text-gray-500 text-sm">Harita yükleniyor...</p>
              </div>
            )}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.272557464403!2d30.205983175497202!3d40.6899945389632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cca90aec4fdeaf%3A0xa2cb72218af302a2!2sSRN%20Suite%26House%20Sapanca!5e0!3m2!1str!2str!4v1769517952193!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setMapLoaded(true)}
              className="absolute inset-0"
            />

            {/* Subtle border glow on hover */}
            <div className="absolute inset-0 ring-2 ring-primary-500/0 group-hover:ring-primary-500/30 transition-all duration-500 rounded-3xl pointer-events-none" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="glass-card rounded-3xl p-8 md:p-10 space-y-6">
              <h3 className="text-3xl font-serif font-bold text-nature-forest">
                Ulaşım Bilgileri
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {siteConfig.map.description}
              </p>

              <div className="space-y-4 pt-2">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-primary-50/50 hover:bg-primary-50 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-glow">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-serif font-bold text-nature-forest text-lg">Sapanca Merkez</p>
                    <p className="text-gray-600">Kolay ulaşım imkanı</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-primary-50/50 hover:bg-primary-50 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-gold to-amber-600 flex items-center justify-center shadow-glow-gold">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-serif font-bold text-nature-forest text-lg">Yıl Boyu Açık</p>
                    <p className="text-gray-600">Dört mevsim konaklama</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-primary-50/50 hover:bg-primary-50 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-nature-sage to-nature-forest flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-serif font-bold text-nature-forest text-lg">Kırkpınar Sahil</p>
                    <p className="text-gray-600">1 km mesafede</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
