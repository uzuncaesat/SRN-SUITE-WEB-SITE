export const siteConfig = {
  // Tesis Bilgileri
  name: "SRN SUITE&HOUSE",
  
  // İletişim Bilgileri
  whatsapp: {
    phone: "0545 131 54 54",
    link: "https://wa.me/905451315454",
  },
  phone: {
    display: "0545 131 54 54",
    link: "tel:+905451315454",
  },
  instagram: {
    link: "https://www.instagram.com/sapancasrnsuite/",
    handle: "@sapancasrnsuite",
  },
  
  // Hero Section
  hero: {
    title: "SRN SUITE&HOUSE",
    subtitle: "Merkezi konumda, tamamen müstakil konaklama. Isıtmalı havuz, çift kişilik jakuzi, şömine ve sinema sistemiyle dört mevsim keyif.",
    features: [
      "Tamamen Müstakil",
      "Isıtmalı Havuz",
      "Çift Kişilik Jakuzi",
      "Şömine",
      "Sinema Sistemi",
      "Kış Bahçesi",
    ],
  },
  
  // About Section
  about: {
    paragraphs: [
      "SRN SUITE&HOUSE, Sapanca'nın kalbinde konumlanmış, tamamen müstakil bir konaklama deneyimi sunar. Doğanın içinde, şehrin gürültüsünden uzak, huzurlu bir atmosferde unutulmaz anılar biriktirebileceğiniz özel bir mekan.",
      "Tesisimiz, modern konfor ile doğal güzellikleri harmanlayan bir tasarıma sahiptir. Isıtmalı havuz, çift kişilik jakuzi, şömine ve sinema sistemi gibi olanaklarla dört mevsim keyifli bir konaklama imkanı sunuyoruz.",
      "Merkezi konumumuz sayesinde hem sakin bir ortamda dinlenebilir, hem de çevredeki tüm aktivitelere kolayca ulaşabilirsiniz. Alışveriş, restoran ve kafe gibi ihtiyaçlarınız yürüme mesafesinde.",
    ],
    highlights: [
      "🔗 Tamamen müstakil",
      "🏊‍♂️ Isıtmalı Havuz",
      "🔥 Şömine",
      "🏖  2 kişilik jakuzi",
      "🛏  2 yatak odalı",
      "🛁 Ortak kullanım banyo",
      "👨‍👩‍👦‍👦 4 kişi kapasiteli, aileye uygun",
      "🥩 Barbekü imkanı",
      "❄️ Klima",
      "🛒 Süpermarket ve Restaurantlara yürüme mesafesi",
      "🏖  Kırkpınar Sahile 1 kilometre uzaklıkta",
    ],
  },
  
  // Location Benefits
  locationBenefits: [
    {
      title: "1 km İçerisinde Alışveriş",
      description: "Kasap, Büfe, Migros, Bim, A101, Hertat, Mezeci",
      icon: "shopping",
    },
    {
      title: "1 km Uzaklıkta",
      description: "Kırkpınar Bağdat Caddesi ve Kırkpınar Sahil (Restoran ve Kafeler)",
      icon: "restaurant",
    },
    {
      title: "Gezilecek Alanlar",
      description: "Gezip görebileceğiniz alanlara maksimum 4 km uzaklıkta",
      icon: "map",
    },
    {
      title: "Online Sipariş",
      description: "Yemeksepeti gibi uygulamalar ile rahatlıkla dışarıdan sipariş oluşturabilirsiniz",
      icon: "delivery",
    },
  ],
  
  // Amenities
  amenities: [
    {
      title: "Tamamen Müstakil",
      icon: "home",
    },
    {
      title: "Isıtmalı Havuz",
      icon: "pool",
    },
    {
      title: "Çift Kişilik Jakuzi",
      icon: "hot-tub",
    },
    {
      title: "Şömine",
      icon: "fire",
    },
    {
      title: "Sinema Sistemi",
      icon: "tv",
    },
    {
      title: "Kış Bahçesi",
      description: "Şömine - Barbekü Alanı - Mutfak",
      icon: "garden",
    },
    {
      title: "Barbekü İmkanı",
      icon: "grill",
    },
    {
      title: "2 Yatak Odası",
      icon: "bed",
    },
  ],
  
  // Rules
  rules: {
    message: "Sadece erkek gruplarına kiralama yapılamamaktadır.",
  },
  
  // Contact Form
  contact: {
    whatsappMessageTemplate: (data: {
      name: string;
      phone: string;
      dateRange: string;
      guests: string;
      message: string;
    }) => {
      return `Merhaba SRN SUITE&HOUSE, rezervasyon için bilgi almak istiyorum.
Ad Soyad: ${data.name}
Telefon: ${data.phone}
Tarih: ${data.dateRange}
Kişi Sayısı: ${data.guests}
Mesaj: ${data.message}`;
    },
  },
  
  // Map Section
  map: {
    description: "Merkezi konum avantajıyla hem sakin hem de her yere yakın.",
    placeholder: "Google Maps iframe linki buraya eklenecek",
  },
  
  // Airbnb Integration
  airbnb: {
    // iCal URL .env.local dosyasında AIRBNB_ICAL_URL olarak tanımlı
    listingUrl: "https://www.airbnb.com.tr/rooms/54283390",
  },
  
  // Availability Calendar Section
  availabilityCalendar: {
    title: "Müsaitlik Takvimi",
    subtitle: "Rezervasyon durumunu kontrol edin",
    legend: {
      available: "Müsait",
      booked: "Dolu",
    },
    noIcalMessage: "Güncel müsaitlik için lütfen iletişime geçin",
    ctaText: "WhatsApp ile Rezervasyon Yap",
  },
};
