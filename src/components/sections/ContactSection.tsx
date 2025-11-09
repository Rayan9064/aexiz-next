'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from '@/components/layout/SectionHeader';

interface ContactSectionProps {
  heading?: string;
}

export default function ContactSection({ heading = 'CONTACT' }: ContactSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.25 });

  return (
    <section className="w-full">
      {/* CONTACT Header Section - Using reusable SectionHeader component */}
      <SectionHeader 
        title={heading}
        barPosition="bottom"
        barAlignment="right"
        barTopOffset={380}
        showBar={true}
      />

      {/* Content Area */}
      <div
        ref={ref}
        className={`w-full bg-white py-32 px-4 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Content goes here */}
          <div className={`min-h-96 flex items-center justify-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <p className="text-gray-500 text-lg">Contact section content goes here</p>
          </div>
        </div>
      </div>
    </section>
  );
}
