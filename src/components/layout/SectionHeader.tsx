"use client";

import React, { useEffect, useState } from 'react';
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(max-width: 768px)');
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  const barBaseStyle: React.CSSProperties = {
    position: 'absolute',
    width: 'clamp(70vw, 75vw, 80vw)',
    height: isMobile ? 'clamp(28px, 6vw, 60px)' : '80px',
    top: `${Math.max(0, barTopOffset - (isMobile ? 40 : 0))}px`,
    backgroundColor: 'rgba(255, 0, 0, 0.53)',
    zIndex: 1,
    pointerEvents: 'none',
  };

  const barPositionStyle: React.CSSProperties =
    barAlignment === 'right' ? { right: 0 } : { left: '50%', transform: 'translateX(-50%)' };

  const barStyle: React.CSSProperties = { ...barBaseStyle, ...barPositionStyle };

  return (
    <div
      ref={headingRef}
      className="w-full min-h-screen bg-ghostwhite relative px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-20 flex flex-col justify-center transition-all duration-700 -mt-16 sm:-mt-20 md:-mt-24"
      style={{ position: 'relative' }}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-center">
        {/* Section Header - Figma design spec */}
        <h2
          className={`transition-all duration-700 ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{
            fontFamily: "'Impact', sans-serif",
            fontSize: isMobile ? 'clamp(80px, 12vw, 200px)' : '290px',
            fontWeight: '400',
            color: '#000',
            lineHeight: 'normal',
            display: 'block',
            textAlign: 'center',
            height: 'auto',
            flexShrink: 0,
            margin: 0,
            padding: 0,
            position: 'relative',
            zIndex: 2,
            top: isMobile ? '-20px' : '-40px',
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
          style={barStyle}
        />
      )}
    </div>
  );
}
