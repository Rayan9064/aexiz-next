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
      className={`relative mx-auto w-full max-w-[992px] ${minHeight} rounded-lg bg-[#d9d9d9]`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      data-node-id="92:18"
    >
      {/* Optional: Add overlay or content here for future sections */}
    </section>
  );
}
