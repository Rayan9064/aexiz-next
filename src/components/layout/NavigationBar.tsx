'use client';

interface NavItem {
  icon: React.ReactNode;
  label: string;
}

interface NavigationBarProps {
  navItems?: NavItem[];
}


// PNG icon paths
const homeIcon = "/nav/Vector.png";
const gearIcon = "/nav/gear.png";
const inboxIcon = "/nav/inbox.png";
const organizationIcon = "/nav/organization.png";

export default function NavigationBar({ navItems }: NavigationBarProps) {
  const defaultItems: NavItem[] = [
    { label: 'Home', icon: <img src={homeIcon} alt="Home" className="w-4 h-4" /> },
    { label: 'Services', icon: <img src={gearIcon} alt="Services" className="w-4 h-4" /> },
    { label: 'Works', icon: <img src={inboxIcon} alt="Works" className="w-4 h-4" /> },
    { label: 'Contact', icon: <img src={organizationIcon} alt="Contact" className="w-4 h-4" /> },
  ];

  const items = navItems || defaultItems;

  return (
    <nav className="fixed left-1/2 -translate-x-1/2 bottom-8 z-40">
      <div className="flex items-center gap-8 rounded-full bg-neutral-400 px-8 py-3 shadow-lg">
        {items.map((item, index) => (
          <button
            key={index}
            className="flex items-center gap-2 transition-all duration-200 hover:opacity-80"
          >
            <span className="w-4 h-4 flex items-center justify-center">
              {item.icon}
            </span>
            <span className="text-sm font-bold tracking-wider" style={{ color: '#F8F8FF' }}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
