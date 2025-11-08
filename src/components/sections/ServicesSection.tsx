'use client';

interface Service {
  number: string;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  services?: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  const defaultServices: Service[] = [
    {
      number: '01',
      title: 'BRANDING & MARKETING',
      description: "turning names into identities and ideas into movements. that's what our branding and marketing do best.",
    },
    {
      number: '02',
      title: 'BRANDING & MARKETING',
      description: "turning names into identities and ideas into movements. that's what our branding and marketing do best.",
    },
    {
      number: '03',
      title: 'BRANDING & MARKETING',
      description: "turning names into identities and ideas into movements. that's what our branding and marketing do best.",
    },
    {
      number: '04',
      title: 'BRANDING & MARKETING',
      description: "turning names into identities and ideas into movements. that's what our branding and marketing do best.",
    },
    {
      number: '05',
      title: 'BRANDING & MARKETING',
      description: "turning names into identities and ideas into movements. that's what our branding and marketing do best.",
    },
  ];

  const items = services || defaultServices;

  return (
    <section className="w-full bg-white">
      {/* Services Header - First full viewport section */}
      <div className="w-full min-h-screen flex flex-col justify-center px-4 pt-32">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-8">SERVICES</h2>
          <p className="text-lg text-gray-700 max-w-4xl">
            from wild ideas to sleek visuals, we mix design, rhythm, and attitude to turn every project into a piece of pure vibe.
          </p>
        </div>
      </div>

      {/* Each Service Item - Full viewport height */}
      {items.map((service, index) => (
        <div
          key={service.number}
          className="w-full min-h-screen flex flex-col justify-center px-4 py-20"
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className={`flex items-center gap-8 md:gap-16 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
              {/* Number */}
              <div className="shrink-0">
                <span className="text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 opacity-20">
                  {service.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 max-w-2xl">
                    {service.description}
                  </p>
                </div>

                {/* Decorative Lines */}
                <div className="grid grid-cols-2 gap-8 md:gap-12 max-w-md">
                  <div className="space-y-4">
                    <div className="h-px bg-gray-300"></div>
                    <div className="h-px bg-gray-300"></div>
                    <div className="h-px bg-gray-300"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-px bg-gray-300"></div>
                    <div className="h-px bg-gray-300"></div>
                    <div className="h-px bg-gray-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
