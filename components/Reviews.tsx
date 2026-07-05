'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/constants/siteConfig';

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const AirbnbIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FF5A5F">
    <path d="M12 0.6c-1.1 0-2.06.55-2.63 1.47-.2.32-.42.74-.68 1.28l-.02.04C7.1 6.65 5.24 10.7 4.05 13.72c-.36.9-.55 1.6-.61 2.24-.07.7.02 1.37.28 2 .55 1.33 1.77 2.28 3.19 2.5 1.4.21 2.85-.3 4.14-1.44l.95-.87.95.87c1.29 1.13 2.74 1.65 4.14 1.44 1.42-.22 2.64-1.17 3.19-2.5.26-.63.35-1.3.28-2-.06-.64-.25-1.34-.61-2.24-1.19-3.02-3.05-7.07-4.62-10.33l-.02-.04c-.26-.54-.48-.96-.68-1.28C14.06 1.15 13.1.6 12 .6zm0 1.8c.48 0 .9.24 1.15.65.16.25.35.62.6 1.13 1.55 3.22 3.38 7.21 4.55 10.16.31.79.46 1.35.5 1.81.05.44-.01.83-.16 1.2-.33.8-1.05 1.36-1.9 1.49-.85.13-1.78-.22-2.68-1.01l-.7-.64c.81-.94 1.46-1.83 1.92-2.65.61-1.09.92-2.06.92-2.93 0-2.35-1.86-4.21-4.2-4.21s-4.2 1.86-4.2 4.21c0 .87.31 1.84.92 2.93.46.82 1.11 1.71 1.92 2.65l-.7.64c-.9.79-1.83 1.14-2.68 1.01-.85-.13-1.57-.69-1.9-1.49-.15-.37-.21-.76-.16-1.2.04-.46.19-1.02.5-1.81C6.87 11.39 8.7 7.4 10.25 4.18c.25-.51.44-.88.6-1.13.25-.41.67-.65 1.15-.65zm0 6.8c1.35 0 2.4 1.05 2.4 2.41 0 .53-.22 1.24-.68 2.05-.4.72-.99 1.52-1.72 2.38-.73-.86-1.32-1.66-1.72-2.38-.46-.81-.68-1.52-.68-2.05 0-1.36 1.05-2.41 2.4-2.41z" />
  </svg>
);

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className={`w-4 h-4 ${star <= rating ? 'text-accent-gold' : 'text-gray-200'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.078 10.1c-.783-.57-.38-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.518-4.674z" />
      </svg>
    ))}
  </div>
);

const sourceLabels: Record<string, string> = {
  google: 'Google',
  airbnb: 'Airbnb',
};

type Review = (typeof siteConfig.reviews.items)[number];

const ReviewCard = ({ review, ariaHidden }: { review: Review; ariaHidden?: boolean }) => (
  <div
    aria-hidden={ariaHidden}
    className="group relative w-[300px] sm:w-[360px] md:w-[410px] shrink-0 mr-4 md:mr-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 p-6 md:p-7 flex flex-col"
  >
    {/* Quote mark */}
    <div className="absolute top-5 right-6 text-6xl font-serif text-primary-100 leading-none select-none">
      &ldquo;
    </div>

    {/* Header: avatar + name + source */}
    <div className="flex items-center gap-3 mb-4 relative">
      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-500 to-nature-forest text-white flex items-center justify-center font-serif font-bold text-lg shrink-0">
        {review.name.charAt(0)}
      </div>
      <div className="min-w-0">
        <h3 className="font-semibold text-nature-forest truncate">
          {review.name}
        </h3>
        <p className="text-xs text-gray-400">{review.date}</p>
      </div>
    </div>

    {/* Rating */}
    <div className="mb-3">
      <StarRating rating={review.rating} />
    </div>

    {/* Text */}
    <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed flex-1">
      {review.text}
    </p>

    {/* Source badge */}
    <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-2">
      {review.source === 'google' ? <GoogleIcon /> : <AirbnbIcon />}
      <span className="text-xs font-medium text-gray-500">
        {sourceLabels[review.source] || review.source} yorumu
      </span>
    </div>
  </div>
);

const MarqueeRow = ({ items }: { items: Review[] }) => {
  // Track is duplicated 4x and animated to -50% so the loop is seamless
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee-row overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="marquee-track py-3">
        {repeated.map((review, i) => (
          <ReviewCard key={i} review={review} ariaHidden={i >= items.length} />
        ))}
      </div>
    </div>
  );
};

const Reviews = () => {
  const { reviews, airbnb } = siteConfig;

  return (
    <section id="reviews" className="relative py-20 md:py-32 bg-gradient-to-b from-white to-primary-50/30 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 -right-32 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -left-32 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm uppercase tracking-[0.3em] text-accent-gold font-semibold mb-4">
            Misafirlerimiz Ne Diyor?
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-nature-forest mb-4">
            {reviews.title}
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {reviews.subtitle}
          </p>

          {/* Platform rating badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gray-100 shadow-md">
              <GoogleIcon />
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-nature-forest">{reviews.platforms.google.rating}</span>
                  <StarRating rating={5} />
                </div>
                <p className="text-xs text-gray-400">{reviews.platforms.google.count} Google yorumu</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gray-100 shadow-md">
              <AirbnbIcon />
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-nature-forest">{reviews.platforms.airbnb.rating}</span>
                  <StarRating rating={5} />
                </div>
                <p className="text-xs text-gray-400">{reviews.platforms.airbnb.count} Airbnb değerlendirmesi</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full-width marquee */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <MarqueeRow items={reviews.items} />
      </motion.div>

      <div className="container mx-auto px-4 relative">
        {/* Platform links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <a
            href={airbnb.listingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 shadow-md hover:shadow-xl transition-shadow font-medium text-gray-700"
          >
            <AirbnbIcon />
            Airbnb&apos;de Tüm Yorumları Gör
          </a>
          {reviews.googleLink && (
            <a
              href={reviews.googleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 shadow-md hover:shadow-xl transition-shadow font-medium text-gray-700"
            >
              <GoogleIcon />
              Google&apos;da Tüm Yorumları Gör
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
