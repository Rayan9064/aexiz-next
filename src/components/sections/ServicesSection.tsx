'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Service {
  number: string;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  services?: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation({ threshold: 0.1 });

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
    <section className="w-full">
      {/* SERVICES Heading Section - Full viewport height with title and colored line */}
      <div
        ref={headingRef}
        className="w-full min-h-screen bg-ghostwhite relative px-4 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24 md:py-32 flex flex-col justify-center transition-all duration-700"
      >
        <div className="w-full max-w-7xl mx-auto">
          {/* SERVICES heading - Impact font, black, 290px */}
          <h2 
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none transition-all duration-700 ${
              headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{
              fontFamily: "'Impact', sans-serif",
              fontWeight: '400',
              color: '#000',
              lineHeight: '1',
            }}
            data-node-id="138:6"
          >
            SERVICES
          </h2>
          
          {/* Red/coral colored line below SERVICES - rgba(255, 0, 0, 0.53) */}
          <div 
            className={`w-full sm:w-5/6 md:w-4/5 h-12 sm:h-16 md:h-20 lg:h-24 mt-6 sm:mt-8 md:mt-12 transition-all duration-700 delay-150 ${
              headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ backgroundColor: 'rgba(255, 0, 0, 0.53)' }}
            data-node-id="134:6"
          />
        </div>
      </div>

      {/* Description Section - Full screen width, dark background */}
      <div 
        ref={descRef}
        className={`w-full bg-[#20211e] flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 py-20 sm:py-28 md:py-32 transition-all duration-700 ${
          descVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        data-node-id="142:27"
      >
        <div
          className="w-full max-w-4xl text-center text-white"
          style={{
        fontFamily: "'Arial', sans-serif",
        fontSize: 'clamp(28px, 5vw, 48px)',
        letterSpacing: '2px',
        lineHeight: 'normal',
        fontWeight: 'normal',
          }}
        >
          {/* Line 1: from wild ideas to sleek visuals, we mix (9 words) */}
          <p className="mb-4">
        from{' '}
        <span style={{ fontWeight: 'normal' }}>wild</span>
        {' '}ideas to sleek
          </p>
          
          {/* Line 2: design, rhythm, and attitude to turn every project into (10 words) */}
          <p className="mb-4">
        {' '}visuals, we mix{' '}
        <span style={{ fontStyle: 'italic', textDecoration: 'underline', fontWeight: 'normal' }}>design</span>
        {','}
          </p>

          <p className="mb-4">
        {'rhythm, and attitude to turn '}
          </p>
          
          <p className="mb-4">
        {' every project into a piece of '}
          </p>

          {/* Line 3: a piece of pure vibe. (6 words) */}
          <p>
        pure{' '}
        <span
          style={{
            fontStyle: 'italic',
            position: 'relative',
            display: 'inline-block',
            lineHeight: 'normal',
            fontWeight: 'normal',
          }}
        >
          <span
            style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          transform: 'translateY(-50%)',
          height: '0.80em',
          backgroundColor: 'rgba(252, 117, 120, 0.6)',
          zIndex: 0,
            }}
          />
          <span style={{ position: 'relative', zIndex: 1 }}>vibe</span>
        </span>
        .
          </p>
        </div>
      </div>

      {/* Dark Background Services Grid */}
      <div ref={servicesRef} className="w-full bg-[#20211e]">
        {items.map((service, index) => {
          const isEven = index % 2 === 1; // 02, 04 are on the right
          return (
            <div
              key={service.number}
              className={`w-full min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24 md:py-32 transition-all duration-700 ${
                servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ 
                maxWidth: '1280px', 
                margin: '0 auto',
                transitionDelay: servicesVisible ? `${index * 0.15}s` : '0s',
              }}
            >
              <div className={`flex items-start gap-8 sm:gap-12 md:gap-16 lg:gap-20 ${isEven ? 'flex-row-reverse' : ''}`}>
                {/* Service Number - Big Shoulders Display */}
                <div className="shrink-0">
                  <p 
                    className={`text-9xl sm:text-9xl md:text-9xl lg:text-[200px] xl:text-[290px] font-normal text-white leading-none transition-all duration-700 ${
                      servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{
                      fontFamily: "'Big Shoulders Display', sans-serif",
                      fontWeight: '400',
                      letterSpacing: '14.5px',
                      lineHeight: '1',
                      transitionDelay: servicesVisible ? `${index * 0.15 + 0.1}s` : '0s',
                    }}
                  >
                    {service.number}
                  </p>
                </div>

                {/* Service Content */}
                <div className="flex-1 flex flex-col justify-start pt-4 sm:pt-8 md:pt-12">
                  {/* Title - Arial Regular */}
                  <h3 
                    className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-white mb-2 sm:mb-4 md:mb-6 transition-all duration-700 ${
                      servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{
                      fontFamily: "'Arial', sans-serif",
                      fontSize: '48px',
                      letterSpacing: '2.4px',
                      lineHeight: '1.2',
                      transitionDelay: servicesVisible ? `${index * 0.15 + 0.15}s` : '0s',
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description - Arial Italic */}
                  <p 
                    className={`text-xs sm:text-sm text-[#ababab] mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-sm transition-all duration-700 ${
                      servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{
                      fontFamily: "'Arial', sans-serif",
                      fontSize: '11px',
                      fontStyle: 'italic',
                      letterSpacing: '0.55px',
                      lineHeight: '1.5',
                      transitionDelay: servicesVisible ? `${index * 0.15 + 0.2}s` : '0s',
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Decorative Lines */}
                  <div className={`flex gap-6 sm:gap-8 md:gap-12 h-24 sm:h-32 md:h-40 transition-all duration-700 ${
                    servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                    style={{
                      transitionDelay: servicesVisible ? `${index * 0.15 + 0.25}s` : '0s',
                    }}
                  >
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="h-px bg-gray-600"></div>
                      <div className="h-px bg-gray-600"></div>
                      <div className="h-px bg-gray-600"></div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="h-px bg-gray-600"></div>
                      <div className="h-px bg-gray-600"></div>
                      <div className="h-px bg-gray-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
