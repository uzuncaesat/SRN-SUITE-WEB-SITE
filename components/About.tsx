'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { siteConfig } from '@/constants/siteConfig';

const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <section ref={containerRef} id="about" className="relative py-20 md:py-32 bg-gradient-to-b from-white via-accent-cream/30 to-white overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-40 -left-20 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm uppercase tracking-[0.3em] text-accent-gold font-semibold mb-4"
          >
            Bize Dair
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-nature-forest mb-4">
            Hakkımızda
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto" />
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Parallax Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-soft-lg order-2 md:order-1"
          >
            <motion.div
              className="absolute inset-0"
              style={{ y: imageY, scale: imageScale }}
            >
              <Image
                src="/images/gallery/gallery-06.jpg"
                alt="SRN Suite"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-nature-forest/40 via-transparent to-transparent" />

            {/* Floating glass card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center shadow-glow">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-serif font-bold text-nature-forest">Premium Konaklama</p>
                  <p className="text-sm text-gray-600">Sapanca&apos;nın kalbinde</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            {siteConfig.about.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-base md:text-lg text-gray-700 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Highlights card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="glass-card rounded-2xl p-6 md:p-8 mt-8"
            >
              <h3 className="text-xl font-serif font-bold text-nature-forest mb-5 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-accent-gold" />
                Öne Çıkanlar
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {siteConfig.about.highlights.slice(0, 8).map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
                    className="text-sm text-gray-700 flex items-start gap-2"
                  >
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
