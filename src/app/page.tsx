import Header from '@/components/layout/Header';
import NavigationBar from '@/components/layout/NavigationBar';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WorksSection from '@/components/sections/WorksSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  // Height of header + navbar (adjust if you change their heights)
  const headerHeight = 72; // px
  const navbarHeight = 56; // px
  const offset = headerHeight + navbarHeight;

  return (
    <main className="w-full">
      {/* Fixed Header */}
      <Header logoText="aexiz" contactButtonText="contact" />

      {/* Hero Section with floating nav bar at bottom */}
      <section className="w-full bg-ghostwhite relative flex flex-col justify-end" style={{ minHeight: `${offset + 522}px` }}>
        <div className="flex-1 flex items-center justify-center">
          <HeroSection minHeight="min-h-[522px]" />
        </div>
        <div className="w-full flex justify-center pb-8 pointer-events-none">
          <div className="pointer-events-auto">
            <NavigationBar />
          </div>
        </div>
      </section>

      {/* Main Content Sections - each with floating nav bar at bottom */}
      <section className="w-full bg-white relative" style={{ minHeight: '100vh' }}>
        <ServicesSection />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-full flex justify-center pointer-events-none">
          <div className="pointer-events-auto">
            <NavigationBar />
          </div>
        </div>
      </section>

      <section className="w-full bg-white relative" style={{ minHeight: '100vh' }}>
        <WorksSection />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-full flex justify-center pointer-events-none">
          <div className="pointer-events-auto">
            <NavigationBar />
          </div>
        </div>
      </section>

      <section className="w-full bg-white relative" style={{ minHeight: '100vh' }}>
        <ContactSection />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-full flex justify-center pointer-events-none">
          <div className="pointer-events-auto">
            <NavigationBar />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
