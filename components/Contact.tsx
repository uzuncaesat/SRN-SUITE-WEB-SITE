'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/constants/siteConfig';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dateRange: '',
    guests: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = siteConfig.contact.whatsappMessageTemplate({
      name: formData.name,
      phone: formData.phone,
      dateRange: formData.dateRange,
      guests: formData.guests,
      message: formData.message,
    });

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `${siteConfig.whatsapp.link}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-white to-primary-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-nature-forest mb-4 text-center">
            Rezervasyon & İletişim
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Hemen rezervasyon yapın veya bizimle iletişime geçin
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a
              href={siteConfig.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-600 transition-colors shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              WhatsApp'tan Bilgi Al
            </motion.a>
            <motion.a
              href={siteConfig.phone.link}
              className="bg-white text-nature-forest px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg border-2 border-primary-500 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hemen Ara
            </motion.a>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-serif font-bold text-nature-forest mb-6 text-center">
              Rezervasyon Formu
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="05XX XXX XX XX"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="dateRange" className="block text-sm font-medium text-gray-700 mb-2">
                    Tarih Aralığı
                  </label>
                  <input
                    type="text"
                    id="dateRange"
                    name="dateRange"
                    value={formData.dateRange}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="Örn: 15-20 Ocak 2024"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                    Kişi Sayısı
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    min="1"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="Kaç kişi?"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Eklemek istediğiniz bilgiler..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-primary-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 transition-colors shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                WhatsApp'a Gönder
              </motion.button>

              <p className="text-sm text-gray-500 text-center">
                Formu gönderdiğinizde WhatsApp uygulaması açılacak ve hazır mesajınız hazır olacaktır.
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
