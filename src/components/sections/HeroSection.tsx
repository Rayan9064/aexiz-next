'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface HeroSectionProps {
  backgroundImage?: string;
  minHeight?: string;
}

export default function HeroSection({
  backgroundImage,
  minHeight = 'min-h-[522px]',
}: HeroSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className={`relative w-full px-2 sm:px-4 md:px-8 flex items-center justify-center ${minHeight}`}
      style={{ minHeight: '522px' }}
    >
      <div
        className={`w-full max-w-[992px] h-[180px] sm:h-[260px] md:h-[340px] lg:h-[400px] flex items-center justify-center rounded-lg bg-[#d9d9d9] px-2 sm:px-4 md:px-8 transform md:-translate-y-8 lg:-translate-y-12 z-10 transition-all duration-700 ${
          isVisible ? 'animate-on-scroll' : 'opacity-0 translate-y-12'
        }`}
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        data-node-id="92:18"
      >
        {/* Optional: Add overlay or content here for future sections */}
      </div>
    </section>
  );
}
