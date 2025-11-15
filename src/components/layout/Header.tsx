'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  logoText?: string;
  contactButtonText?: string;
}

function parseRGB(color: string) {
  // handles rgb(a) and hex (basic)
  const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (rgbMatch) return [parseInt(rgbMatch[1], 10), parseInt(rgbMatch[2], 10), parseInt(rgbMatch[3], 10)];
  // hex fallback
  const hexMatch = color.replace('#', '');
  if (hexMatch.length === 6) {
    return [parseInt(hexMatch.substring(0, 2), 16), parseInt(hexMatch.substring(2, 4), 16), parseInt(hexMatch.substring(4, 6), 16)];
  }
  return [255, 255, 255];
}

function luminance([r, g, b]: number[]) {
  const rs = r / 255;
  const gs = g / 255;
  const bs = b / 255;
  const a = [rs, gs, bs].map((v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

export default function Header({
  logoText = 'aexiz',
  contactButtonText = 'contact',
}: HeaderProps) {
  const [isDark, setIsDark] = useState(false);
  const tick = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const headerEl = document.querySelector('header');

    function findBackground(el: Element | null): string {
      while (el && el !== document.documentElement) {
        const cs = window.getComputedStyle(el as Element).backgroundColor;
        if (cs && cs !== 'rgba(0, 0, 0, 0)' && cs !== 'transparent') return cs;
        el = el.parentElement;
      }
      return window.getComputedStyle(document.body).backgroundColor || 'rgb(255,255,255)';
    }

    function checkDark() {
      // sample a point just below the header center
      const x = window.innerWidth / 2;
      const y = (headerEl ? (headerEl.getBoundingClientRect().height + 10) : 100);
      const el = document.elementFromPoint(x, y);
      const bg = findBackground(el);
      const rgb = parseRGB(bg);
      const lum = luminance(rgb);
      setIsDark(lum < 0.5);
    }

    function onScroll() {
      if (tick.current != null) return;
      tick.current = window.setTimeout(() => {
        checkDark();
        if (tick.current) {
          clearTimeout(tick.current);
          tick.current = null;
        }
      }, 80);
    }

    checkDark();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (tick.current) clearTimeout(tick.current);
    };
  }, []);

  const logoColor = isDark ? '#ffffff' : '#000000';
  const buttonBg = isDark ? '#ef6b6b' : '#20211e';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-8 md:px-16 py-4 sm:py-6 md:py-8 bg-transparent">
      <div className="mx-auto flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <div className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider font-sans" style={{ color: logoColor }}>
          <Link href="/" className="block">
            {logoText}
          </Link>
        </div>

        {/* Contact Button */}
        <Link href="/contact" aria-label="Contact us" className="flex items-center gap-2 sm:gap-3 rounded-full px-6 sm:px-8 py-2 sm:py-3 transition-all duration-200" style={{ backgroundColor: buttonBg, border: 'none' }}>
          <span className="text-base sm:text-lg md:text-xl font-bold tracking-wider text-white">{contactButtonText}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
        </Link>
      </div>
    </header>
  );
}
