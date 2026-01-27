'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/constants/siteConfig';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-nature-forest mb-12 text-center">
            Hakkımızda
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              {siteConfig.about.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-50 rounded-2xl p-8 border border-primary-100"
            >
              <h3 className="text-2xl font-serif font-bold text-nature-forest mb-6">
                Öne Çıkanlar
              </h3>
              <ul className="space-y-4">
                {siteConfig.about.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-gray-700 text-lg leading-relaxed">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
