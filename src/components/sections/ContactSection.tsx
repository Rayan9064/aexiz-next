'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ContactSectionProps {
  heading?: string;
}

export default function ContactSection({ heading = 'CONTACT' }: ContactSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.25 });

  return (
    <section
      ref={ref}
      className={`w-full bg-white py-32 px-4 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Heading with Accent */}
        <div className="relative mb-20">
          <h2 className={`text-8xl md:text-9xl font-black text-black leading-none tracking-tighter transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {heading}
          </h2>
          {/* Red accent bar under part of the heading */}
          <div className={`absolute top-16 md:top-20 left-1/2 md:left-auto md:right-0 w-32 md:w-48 h-8 bg-red-400 opacity-75 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-75 translate-y-0' : 'opacity-0 translate-y-8'
          }`}></div>
        </div>

        {/* Content Area - Can be extended with form or other content */}
        <div className={`min-h-96 flex items-center justify-center transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-gray-500 text-lg">Contact section content goes here</p>
        </div>
      </div>
    </section>
  );
}
