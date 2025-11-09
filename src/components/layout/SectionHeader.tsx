'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionHeaderProps {
  title: string;
  barPosition?: 'top' | 'bottom';
  barAlignment?: 'left' | 'right';
  barTopOffset?: number;
  showBar?: boolean;
}

export default function SectionHeader({
  title,
  barPosition = 'bottom',
  barAlignment = 'right',
  barTopOffset = 380,
  showBar = true,
}: SectionHeaderProps) {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <div
      ref={headingRef}
      className="w-full min-h-screen bg-ghostwhite relative px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-20 flex flex-col justify-center transition-all duration-700"
      style={{ position: 'relative' }}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header - Figma design spec */}
        <h2
          className={`transition-all duration-700 ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{
            fontFamily: "'Impact', sans-serif",
            fontSize: '290px',
            fontWeight: '400',
            color: '#000',
            lineHeight: 'normal',
            width: '1109px',
            height: '298px',
            flexShrink: 0,
            display: 'block',
            margin: 0,
            padding: 0,
            position: 'relative',
            zIndex: 2,
            top: '-40px',
          }}
        >
          {title}
        </h2>
      </div>

      {/* Colored bar: 80% of viewport width, positioned as configured */}
      {showBar && (
        <div
          aria-hidden
          className={`transition-all duration-700 delay-150 ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{
            position: 'absolute',
            [barAlignment]: 0,
            width: '80vw',
            height: '80px',
            top: `${barTopOffset}px`,
            backgroundColor: 'rgba(255, 0, 0, 0.53)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  );
}
