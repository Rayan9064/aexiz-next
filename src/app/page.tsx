import HeroSection from '@/components/sections/HeroSection';
import Footer from '@/components/layout/Footer';
import UnderDevelopment from '@/components/UnderDevelopment';

export default function Home() {
  // Show under development page if toggle is enabled
  if (process.env.NEXT_PUBLIC_SHOW_UNDER_DEVELOPMENT === '1') {
    return <UnderDevelopment />;
  }

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
