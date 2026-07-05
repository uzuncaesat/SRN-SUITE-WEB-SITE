'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/constants/siteConfig';

interface FloatingInputProps {
  id: string;
  name: string;
  type?: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
  min?: string;
}

const FloatingInput = ({ id, name, type = 'text', label, required, value, onChange, textarea, min }: FloatingInputProps) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;
  const isActive = focused || hasValue;

  const commonClasses = `peer w-full bg-transparent px-4 pt-6 pb-2 text-gray-900 rounded-xl border-2 outline-none transition-all ${
    focused ? 'border-primary-500' : 'border-gray-200'
  }`;

  return (
    <div className="relative group">
      {/* Animated gradient border on focus */}
      <div
        className={`absolute -inset-[2px] rounded-xl bg-gradient-to-r from-primary-500 via-accent-gold to-primary-500 opacity-0 transition-opacity duration-300 blur-sm ${
          focused ? 'opacity-40' : ''
        }`}
        style={{ backgroundSize: '200% 200%', animation: focused ? 'gradientShift 3s ease infinite' : 'none' }}
      />

      <div className="relative">
        {textarea ? (
          <textarea
            id={id}
            name={name}
            required={required}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            rows={4}
            className={`${commonClasses} resize-none`}
          />
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            required={required}
            value={value}
            min={min}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={commonClasses}
          />
        )}

        <label
          htmlFor={id}
          className={`absolute left-4 pointer-events-none transition-all duration-200 ${
            isActive
              ? 'top-2 text-xs text-primary-600 font-medium'
              : 'top-4 text-base text-gray-500'
          }`}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dateRange: '',
    guests: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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

    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setTimeout(() => setSubmitted(false), 2000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-gradient-to-b from-accent-cream/20 via-white to-primary-50/30 overflow-hidden">
      <div className="absolute top-20 -left-32 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-[0.3em] text-accent-gold font-semibold mb-4">
            İletişim
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-nature-forest mb-4">
            Rezervasyon & İletişim
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Hemen rezervasyon yapın veya bizimle iletişime geçin
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href={siteConfig.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-primary-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-glow overflow-hidden text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">WhatsApp&apos;tan Bilgi Al</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.a>
            <motion.a
              href={siteConfig.phone.link}
              className="group relative bg-white text-nature-forest px-8 py-4 rounded-full text-lg font-semibold shadow-soft border-2 border-primary-500 text-center overflow-hidden"
              whileHover={{ scale: 1.05, backgroundColor: '#f0fdf4' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Hemen Ara</span>
            </motion.a>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl p-[1.5px] bg-gradient-to-br from-primary-300/50 via-white to-accent-gold/30 shadow-soft-lg"
          >
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 overflow-hidden">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center justify-center min-h-[400px] gap-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-glow-lg"
                    >
                      <motion.svg
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="w-14 h-14 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <motion.path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </motion.svg>
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-nature-forest mb-2">
                        Mesajınız Hazır!
                      </h3>
                      <p className="text-gray-600">
                        WhatsApp uygulamasına yönlendiriliyorsunuz...
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <h3 className="text-2xl font-serif font-bold text-nature-forest mb-2 text-center">
                      Rezervasyon Formu
                    </h3>
                    <p className="text-sm text-gray-500 mb-6 text-center">
                      Bilgilerinizi girin, WhatsApp&apos;tan devam edelim
                    </p>

                    <div className="grid md:grid-cols-2 gap-5">
                      <FloatingInput
                        id="name"
                        name="name"
                        label="Ad Soyad"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <FloatingInput
                        id="phone"
                        name="phone"
                        type="tel"
                        label="Telefon"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <FloatingInput
                        id="dateRange"
                        name="dateRange"
                        label="Tarih Aralığı"
                        value={formData.dateRange}
                        onChange={handleChange}
                      />
                      <FloatingInput
                        id="guests"
                        name="guests"
                        type="number"
                        min="1"
                        label="Kişi Sayısı"
                        value={formData.guests}
                        onChange={handleChange}
                      />
                    </div>

                    <FloatingInput
                      id="message"
                      name="message"
                      label="Mesaj"
                      value={formData.message}
                      onChange={handleChange}
                      textarea
                    />

                    <motion.button
                      type="submit"
                      className="group relative w-full bg-primary-500 text-white py-4 rounded-xl text-lg font-semibold shadow-glow overflow-hidden"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        WhatsApp&apos;a Gönder
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </motion.button>

                    <p className="text-sm text-gray-500 text-center">
                      Formu gönderdiğinizde WhatsApp uygulaması açılacak ve mesajınız hazır olacaktır.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
