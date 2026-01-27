'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/constants/siteConfig';

const MapSection = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-nature-forest mb-4 text-center">
            Konum
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            {siteConfig.map.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Map */}
            <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.272557464403!2d30.205983175497202!3d40.6899945389632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cca90aec4fdeaf%3A0xa2cb72218af302a2!2sSRN%20Suite%26House%20Sapanca!5e0!3m2!1str!2str!4v1769517952193!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h3 className="text-2xl font-serif font-bold text-nature-forest mb-4">
                  Ulaşım Bilgileri
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {siteConfig.map.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-800">Sapanca Merkez</p>
                      <p className="text-gray-600">Kolay ulaşım imkanı</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-800">Yıl Boyu Açık</p>
                      <p className="text-gray-600">Dört mevsim konaklama</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
