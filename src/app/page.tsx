import Header from '@/components/layout/Header';
import NavigationBar from '@/components/layout/NavigationBar';
import HeroSection from '@/components/sections/HeroSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-ghostwhite">
      <Header logoText="aexiz" contactButtonText="contact" />
      <NavigationBar />
      
      {/* Main Content Container */}
      <div className="flex flex-col items-center justify-center pt-32">
        <HeroSection minHeight="min-h-[522px]" />
      </div>

      <Footer />
    </main>
  );
}
