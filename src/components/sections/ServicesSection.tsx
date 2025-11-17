'use client';

import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from '@/components/layout/SectionHeader';

interface Service {
  number: string;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  services?: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
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
  const [isMobileLayout, setIsMobileLayout] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const contentEls = Array.from(document.querySelectorAll<HTMLDivElement>('.service-content'));
    const numberEls = Array.from(document.querySelectorAll<HTMLSpanElement>('.service-number'));

    const checkMobile = () => setIsMobileLayout(window.matchMedia('(max-width: 640px)').matches);
    checkMobile();

    const updateNumberSizing = () => {
      const isMobile = window.matchMedia('(max-width: 640px)').matches;
      const scale = isMobile ? 0.75 : 1; // increase sizing on mobile

      contentEls.forEach((contentEl, i) => {
        const numberEl = numberEls[i];
        if (!numberEl) return;
        const height = contentEl.getBoundingClientRect().height;
        const base = Math.floor(height * 0.9 * scale);
        const fontSize = Math.max(60, Math.min(420, base));
        numberEl.style.fontSize = fontSize + 'px';
        numberEl.style.letterSpacing = (14.5 * (fontSize / 290)).toFixed(2) + 'px';
        numberEl.style.lineHeight = '1';
      });
    };

    // initial sizing
    updateNumberSizing();

    const observers: ResizeObserver[] = [];
    contentEls.forEach((contentEl, i) => {
      const ro = new ResizeObserver(() => {
        updateNumberSizing();
      });
      ro.observe(contentEl);
      observers.push(ro);
    });

    // also update on window resize / breakpoint change and keep mobile flag in sync
    const onResize = () => {
      checkMobile();
      updateNumberSizing();
    };
    window.addEventListener('resize', onResize);

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener('resize', onResize);
    };
  }, [items]);

  return (
    <section className="w-full">
      {/* SERVICES Heading Section - Using reusable SectionHeader component */}
      <SectionHeader 
        title="SERVICES" 
        barPosition="bottom"
        barAlignment="right"
        barTopOffset={380}
        showBar={true}
      />

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
          {isMobileLayout ? (
            // Mobile: number and title on a single row, description full-width below
            <>
              <div className="w-full flex items-start gap-4">
                <div style={{ width: 100, display: 'flex', alignItems: 'flex-start' }}>
                  <span
                    aria-hidden
                    className={`service-number transition-all duration-700 ${
                      servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{
                      color: '#FFF',
                      fontFamily: 'BigShoulders, Arial, sans-serif',
                      fontSize: 180,
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal',
                      letterSpacing: '14.5px',
                      display: 'block',
                      transitionDelay: servicesVisible ? `${index * 0.15 + 0.1}s` : '0s',
                      textAlign: isEven ? 'right' : 'left',
                      whiteSpace: 'nowrap',
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    {service.number}
                  </span>
                </div>

                <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <h3
                    className={`text-2xl font-normal text-white transition-all duration-700 ${
                      servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{
                      fontFamily: "'Arial', sans-serif",
                      fontSize: '34px',
                      letterSpacing: '2px',
                      lineHeight: '1.15',
                      transitionDelay: servicesVisible ? `${index * 0.15 + 0.15}s` : '0s',
                    }}
                  >
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="service-content w-full mt-6">
                <p
                  className={`text-xs text-[#ababab] mb-6 leading-relaxed w-full transition-all duration-700 ${
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
                <div className={`flex gap-6 h-24 transition-all duration-700 ${
                  servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: servicesVisible ? `${index * 0.15 + 0.25}s` : '0s' }}>
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
            </>
          ) : (
            // Desktop: keep existing two-column layout
            <div className={`flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 ${isEven ? 'flex-row-reverse' : ''}`}>
              <div
                className="shrink-0"
                style={{
                  width: 360,
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  paddingRight: isEven ? 8 : 0,
                }}
              >
                <span
                  aria-hidden
                  className={`service-number transition-all duration-700 ${
                    servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{
                    color: '#FFF',
                    fontFamily: 'BigShoulders, Arial, sans-serif',
                    fontSize: 220,
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    letterSpacing: '14.5px',
                    display: 'block',
                    transitionDelay: servicesVisible ? `${index * 0.15 + 0.1}s` : '0s',
                    textAlign: isEven ? 'right' : 'left',
                    whiteSpace: 'nowrap',
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {service.number}
                </span>
              </div>

              <div className="service-content flex-1 flex flex-col justify-start pt-4 sm:pt-8 md:pt-12" style={{ width: '100%' }}>
                <h3 
                  className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-white transition-all duration-700 ${
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
          )}
        </div>
      );
        })}
      </div>
    </section>
  );
}
