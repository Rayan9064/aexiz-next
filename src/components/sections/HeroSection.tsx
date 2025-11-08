'use client';

interface HeroSectionProps {
  backgroundImage?: string;
  minHeight?: string;
}

export default function HeroSection({
  backgroundImage,
  minHeight = 'min-h-[522px]',
}: HeroSectionProps) {
  return (
    <section
      className={`relative w-full px-2 sm:px-4 md:px-8 flex items-center justify-center ${minHeight}`}
      style={{ minHeight: '522px' }}
    >
      <div
        className="w-full max-w-[992px] h-[180px] sm:h-[260px] md:h-[340px] lg:h-[400px] flex items-center justify-center rounded-lg bg-[#d9d9d9] mt-6 sm:mt-10 md:mt-16 lg:mt-20 px-2 sm:px-4 md:px-8"
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
