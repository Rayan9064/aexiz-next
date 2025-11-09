import Header from '@/components/layout/Header';
import NavigationBar from '@/components/layout/NavigationBar';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WorksSection from '@/components/sections/WorksSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-ghostwhite relative flex items-center justify-center min-h-[522px]">
        <HeroSection minHeight="min-h-[522px]" />
      </section>

      {/* Main Content Sections */}
      <section className="w-full bg-white relative min-h-screen">
        <ServicesSection />
      </section>

      <section className="w-full bg-white relative min-h-screen">
        <WorksSection />
      </section>

      <section className="w-full bg-white relative min-h-screen">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
