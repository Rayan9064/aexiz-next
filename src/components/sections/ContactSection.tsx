'use client';

interface ContactSectionProps {
  heading?: string;
}

export default function ContactSection({ heading = 'CONTACT' }: ContactSectionProps) {
  return (
    <section className="w-full bg-white py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading with Accent */}
        <div className="relative mb-20">
          <h2 className="text-8xl md:text-9xl font-black text-black leading-none tracking-tighter">
            {heading}
          </h2>
          {/* Red accent bar under part of the heading */}
          <div className="absolute top-16 md:top-20 left-1/2 md:left-auto md:right-0 w-32 md:w-48 h-8 bg-red-400 opacity-75"></div>
        </div>

        {/* Content Area - Can be extended with form or other content */}
        <div className="min-h-96 flex items-center justify-center">
          <p className="text-gray-500 text-lg">Contact section content goes here</p>
        </div>
      </div>
    </section>
  );
}
