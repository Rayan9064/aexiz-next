'use client';

interface HeaderProps {
  logoText?: string;
  contactButtonText?: string;
}

export default function Header({
  logoText = 'aexiz',
  contactButtonText = 'contact',
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-ghostwhite px-16 py-8">
      <div className="mx-auto flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wider text-black font-sans">
          {logoText}
        </div>

        {/* Contact Button */}
        <button
          className="flex items-center gap-3 rounded-full bg-[#20211e] px-8 py-3 transition-all duration-200 hover:bg-black"
          aria-label="Contact us"
        >
          <span className="text-lg font-bold tracking-wider text-ghostwhite">
            {contactButtonText}
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-ghostwhite"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </header>
  );
}
