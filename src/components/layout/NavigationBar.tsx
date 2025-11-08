'use client';

interface NavItem {
  icon?: React.ReactNode;
  label: string;
}

interface NavigationBarProps {
  navItems?: NavItem[];
}

export default function NavigationBar({ navItems }: NavigationBarProps) {
  const defaultItems: NavItem[] = [
    { label: 'Home', icon: null },
    { label: 'Services', icon: null },
    { label: 'Works', icon: null },
    { label: 'Contact', icon: null },
  ];

  const items = navItems || defaultItems;

  return (
    <nav className="fixed top-32 left-1/2 z-40 -translate-x-1/2">
      <div className="flex items-center gap-6 rounded-full bg-black/30 px-8 py-3 backdrop-blur-[30px] border border-black/10">
        {items.map((item, index) => (
          <button
            key={index}
            className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
          >
            {item.icon && <span className="text-ghostwhite">{item.icon}</span>}
            <span className="text-sm font-bold tracking-wider text-ghostwhite">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
