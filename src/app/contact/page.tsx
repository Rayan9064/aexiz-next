import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

export default function ContactPage() {
  return (
    <main className="w-full">
      <section className="w-full bg-white relative min-h-screen">
        <ContactSection />
      </section>
      <Footer />
    </main>
  );
}
