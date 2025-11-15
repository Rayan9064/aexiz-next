'use client';

import Link from 'next/link';

interface NavItem {
  href: string;
  icon: React.ReactNode;
  label: string;
}

interface NavigationBarProps {
  navItems?: NavItem[];
}

// PNG icon paths
const homeIcon = '/nav/Vector.png';
const gearIcon = '/nav/gear.png';
const inboxIcon = '/nav/inbox.png';
const organizationIcon = '/nav/organization.png';

export default function NavigationBar({ navItems }: NavigationBarProps) {
  const defaultItems: NavItem[] = [
    { href: '/', label: 'Home', icon: <img src={homeIcon} alt="Home" className="w-4 h-4" /> },
    { href: '/services', label: 'Services', icon: <img src={gearIcon} alt="Services" className="w-4 h-4" /> },
    { href: '/works', label: 'Works', icon: <img src={inboxIcon} alt="Works" className="w-4 h-4" /> },
    { href: '/contact', label: 'Contact', icon: <img src={organizationIcon} alt="Contact" className="w-4 h-4" /> },
  ];

  const items = navItems || defaultItems;

  return (
    <nav className="w-full flex justify-center">
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8 rounded-full bg-neutral-400 px-4 sm:px-8 py-2 sm:py-3 shadow-lg">
        {items.map((item, index) => (
          <Link key={index} href={item.href} className="flex items-center gap-1 sm:gap-2 transition-all duration-200 hover:opacity-80">
            <span className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">{item.icon}</span>
            <span className="text-xs sm:text-sm md:text-base font-bold tracking-wider" style={{ color: '#F8F8FF' }}>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
