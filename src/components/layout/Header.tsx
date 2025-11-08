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
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-ghostwhite px-4 sm:px-8 md:px-16 py-4 sm:py-6 md:py-8">
      <div className="mx-auto flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <div className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-black font-sans">
          {logoText}
        </div>

        {/* Contact Button */}
        <button
          className="flex items-center gap-2 sm:gap-3 rounded-full bg-[#20211e] px-6 sm:px-8 py-2 sm:py-3 transition-all duration-200 hover:bg-black"
          aria-label="Contact us"
        >
          <span className="text-base sm:text-lg md:text-xl font-bold tracking-wider text-white">
            {contactButtonText}
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-white"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </header>
  );
}
