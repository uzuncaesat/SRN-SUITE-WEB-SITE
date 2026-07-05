'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/constants/siteConfig';

const iconMap: Record<string, JSX.Element> = {
  shopping: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  restaurant: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  map: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  delivery: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
};

const LocationBenefits = () => {
  return (
    <section id="location" className="relative py-20 md:py-32 bg-gradient-to-b from-white via-primary-50/40 to-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-[0.3em] text-accent-gold font-semibold mb-4">
            Merkezi Konum
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-nature-forest mb-4">
            Konum Avantajları
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Sapanca&apos;nın kalbinde, her şeye yakın bir konumdayız
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {siteConfig.locationBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Gradient border wrapper */}
              <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-primary-200 via-transparent to-accent-gold/30 group-hover:from-primary-500 group-hover:to-accent-gold transition-all duration-500">
                <div className="relative bg-white rounded-2xl p-6 md:p-8 h-full overflow-hidden">
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 via-primary-50/50 to-primary-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex items-start gap-5">
                    {/* Icon with rotate animation */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-glow transition-all duration-300"
                    >
                      {iconMap[benefit.icon] || iconMap.shopping}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-bold text-nature-forest mb-2 group-hover:text-primary-600 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationBenefits;
