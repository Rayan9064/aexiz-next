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
      {/* Fixed Header */}
      <Header logoText="aexiz" contactButtonText="contact" />
      
      {/* Main Content with top padding for fixed header */}
      <div className="pt-12">
        {/* Hero Section with Navigation Bar below it */}
        <section className="w-full bg-ghostwhite">
          <HeroSection minHeight="min-h-[522px]" />
          <div className="flex justify-center pb-12">
            <NavigationBar />
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* Works Section */}
        <WorksSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
