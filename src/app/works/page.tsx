import WorksSection from '@/components/sections/WorksSection';
import Footer from '@/components/layout/Footer';

export default function WorksPage() {
  return (
    <main className="w-full">
      <section className="w-full bg-white relative min-h-screen">
        <WorksSection />
      </section>
      <Footer />
    </main>
  );
}
