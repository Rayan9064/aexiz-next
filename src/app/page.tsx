import HeroSection from '@/components/sections/HeroSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-ghostwhite relative flex items-center justify-center min-h-[522px]">
        <HeroSection minHeight="min-h-[522px]" />
      </section>

      {/* Footer only on home - other sections moved to their own pages */}
      <Footer />
    </main>
  );
}
