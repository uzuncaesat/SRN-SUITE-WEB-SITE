import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import LocationBenefits from '@/components/LocationBenefits';
import Amenities from '@/components/Amenities';
import Gallery from '@/components/Gallery';
import MapSection from '@/components/MapSection';
import Contact from '@/components/Contact';
import Rules from '@/components/Rules';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <LocationBenefits />
      <Amenities />
      <Gallery />
      <MapSection />
      <Contact />
      <Rules />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
