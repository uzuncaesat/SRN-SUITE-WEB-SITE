# SRN SUITE&HOUSE - Landing Page

Modern, premium ve rezervasyon odaklı tek sayfalık web sitesi. Next.js, TypeScript ve Tailwind CSS ile geliştirilmiştir.

## 🚀 Özellikler

- **Modern Tasarım**: Minimal, lüks ve doğa temalı tasarım
- **Responsive**: Mobil öncelikli, tüm cihazlarda mükemmel görünüm
- **SEO Optimized**: Meta tags ve OpenGraph desteği
- **WhatsApp Entegrasyonu**: Rezervasyon formu WhatsApp'a yönlendirme
- **Animasyonlar**: Framer Motion ile hafif ve performanslı animasyonlar
- **Galeri**: Lightbox modal ile görsel galeri
- **Performans**: next/image ile optimize edilmiş görseller

## 📋 Gereksinimler

- Node.js 18+ 
- npm veya yarn

## 🛠️ Kurulum

1. Projeyi klonlayın veya indirin
2. Bağımlılıkları yükleyin:

```bash
npm install
```

3. Fotoğrafları kopyalayın:

```bash
npm run copy-images
```

**Not**: Eğer script çalışmazsa, `Fotoğraflar` klasöründeki tüm `.jpg` dosyalarını manuel olarak `public/images/` klasörüne kopyalayın.

## 🏃 Çalıştırma

Geliştirme modunda çalıştırmak için:

```bash
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 📦 Build

Production build oluşturmak için:

```bash
npm run build
```

Build'i çalıştırmak için:

```bash
npm start
```

## 🌐 Deploy

### Vercel

1. GitHub'a push edin
2. [Vercel](https://vercel.com) hesabınızla giriş yapın
3. "New Project" butonuna tıklayın
4. Repository'nizi seçin
5. Vercel otomatik olarak Next.js'i algılayacak ve deploy edecektir

### Diğer Platformlar

Proje standart Next.js yapısına sahip olduğu için herhangi bir Node.js hosting platformunda çalıştırılabilir.

## 📁 Proje Yapısı

```
├── app/
│   ├── layout.tsx          # Root layout (SEO, fonts)
│   ├── page.tsx            # Ana sayfa
│   └── globals.css         # Global stiller
├── components/
│   ├── Navbar.tsx          # Navigasyon menüsü
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # Hakkında bölümü
│   ├── LocationBenefits.tsx # Konum avantajları
│   ├── Amenities.tsx      # Olanaklar
│   ├── Gallery.tsx        # Galeri
│   ├── MapSection.tsx     # Harita
│   ├── Contact.tsx        # İletişim formu
│   ├── Rules.tsx          # Kurallar
│   ├── Footer.tsx         # Footer
│   └── WhatsAppButton.tsx # Sticky WhatsApp butonu
├── constants/
│   └── siteConfig.ts      # Site konfigürasyonu
└── public/
    └── images/            # Görseller
```

## ⚙️ Konfigürasyon

Tüm sabit bilgiler (iletişim, metinler, vb.) `constants/siteConfig.ts` dosyasında merkezi olarak yönetilmektedir.

### Önemli Ayarlar

- **WhatsApp**: `siteConfig.whatsapp.link`
- **Telefon**: `siteConfig.phone.link`
- **Instagram**: `siteConfig.instagram.link`
- **Google Maps**: `components/MapSection.tsx` içinde iframe src'yi güncelleyin

## 🎨 Tasarım

- **Renkler**: Doğa temalı yeşil tonları, bej ve beyaz
- **Tipografi**: Inter (sans-serif) ve Playfair Display (serif)
- **Spacing**: Ferah boşluklar, premium görünüm
- **Animasyonlar**: Hafif fade-in ve scroll reveal efektleri

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Geliştirme

### Yeni Component Ekleme

1. `components/` klasörüne yeni component dosyası ekleyin
2. `app/page.tsx` içinde import edin ve kullanın

### Stil Değişiklikleri

- Global stiller: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component stilleri: Her component içinde Tailwind classes

## 📝 Notlar

- Fotoğraflar `public/images/` klasöründe bulunmalıdır
- Google Maps iframe linki `components/MapSection.tsx` içinde güncellenmelidir
- Form gönderimleri backend olmadan WhatsApp'a yönlendirme yapar

## 📄 Lisans

Tüm hakları saklıdır. © 2024 SRN SUITE&HOUSE

## 📞 İletişim

- WhatsApp: 0545 131 54 54
- Instagram: [@sapancasrnsuite](https://www.instagram.com/sapancasrnsuite/)
