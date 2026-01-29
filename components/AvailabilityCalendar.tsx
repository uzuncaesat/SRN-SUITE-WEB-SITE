'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Calendar from 'react-calendar';
import { siteConfig } from '@/constants/siteConfig';
import 'react-calendar/dist/Calendar.css';

interface CalendarResponse {
  bookedDates: string[];
  events: Array<{
    start: string;
    end: string;
    summary: string;
  }>;
  lastUpdated: string;
  hasIcalUrl: boolean;
}

const AvailabilityCalendar = () => {
  const [bookedDates, setBookedDates] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [hasIcalUrl, setHasIcalUrl] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCalendarData = async () => {
      try {
        const response = await fetch('/api/calendar');
        if (!response.ok) throw new Error('Failed to fetch calendar');
        
        const data: CalendarResponse = await response.json();
        setBookedDates(new Set(data.bookedDates));
        setHasIcalUrl(data.hasIcalUrl);
      } catch (err) {
        console.error('Calendar fetch error:', err);
        setError('Takvim yüklenirken bir hata oluştu');
      } finally {
        setLoading(false);
      }
    };

    fetchCalendarData();
  }, []);

  const isDateBooked = (date: Date): boolean => {
    // Use local date format to avoid timezone issues
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;
    return bookedDates.has(dateString);
  };

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view !== 'month') return null;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Past dates
    if (date < today) {
      return 'calendar-tile-past';
    }
    
    // Booked dates
    if (isDateBooked(date)) {
      return 'calendar-tile-booked';
    }
    
    // Available dates
    return 'calendar-tile-available';
  };

  const handleWhatsAppClick = () => {
    window.open(siteConfig.whatsapp.link, '_blank');
  };

  return (
    <section id="availability" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-nature-forest mb-4">
            {siteConfig.availabilityCalendar.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {siteConfig.availabilityCalendar.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Calendar Container */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-lg">
            {loading ? (
              <div className="flex items-center justify-center h-80">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-500 border-t-transparent"></div>
              </div>
            ) : error ? (
              <div className="flex items-center justify-center h-80 text-red-500">
                {error}
              </div>
            ) : (
              <>
                {/* Calendar */}
                <div className="calendar-wrapper">
                  <Calendar
                    locale="tr-TR"
                    minDate={new Date()}
                    tileClassName={tileClassName}
                    showNeighboringMonth={false}
                    prev2Label={null}
                    next2Label={null}
                  />
                </div>

                {/* Legend */}
                <div className="flex flex-wrap justify-center gap-6 mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-green-500"></div>
                    <span className="text-sm text-gray-600">
                      {siteConfig.availabilityCalendar.legend.available}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-red-500"></div>
                    <span className="text-sm text-gray-600">
                      {siteConfig.availabilityCalendar.legend.booked}
                    </span>
                  </div>
                </div>

                {/* No iCal URL Warning */}
                {!hasIcalUrl && (
                  <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg text-center">
                    <p className="text-amber-700 text-sm">
                      {siteConfig.availabilityCalendar.noIcalMessage}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <motion.button
              onClick={handleWhatsAppClick}
              className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors shadow-lg inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {siteConfig.availabilityCalendar.ctaText}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AvailabilityCalendar;
