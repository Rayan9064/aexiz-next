import ServicesSection from '@/components/sections/ServicesSection';
import Footer from '@/components/layout/Footer';

export default function ServicesPage() {
  return (
    <main className="w-full">
      <section className="w-full bg-white relative min-h-screen">
        <ServicesSection />
      </section>
      <Footer />
    </main>
  );
}
