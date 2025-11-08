'use client';

export default function Footer() {
  return (
    <footer className="site-footer w-full bg-ghostwhite text-black py-0 relative overflow-hidden">
      <div className="footer-content max-w-5xl mx-auto px-8 h-screen flex flex-col gap-6 justify-between">
        {/* Top contact section */}
        <div className="footer-top-contact text-right pt-4">
          <div className="flex flex-col items-end gap-2">
            <h3 className="text-sm font-normal text-gray-600 lowercase tracking-wide">
              write to us
            </h3>
            <a
              href="mailto:aexizsolutions@gmail.com"
              className="text-5xl font-bold text-black underline hover:text-gray-700 transition-colors"
            >
              aexizsolutions@gmail.com
            </a>
          </div>
        </div>

        {/* Main footer content */}
        <div className="footer-main flex justify-between items-start py-4">
          {/* Left section - Social links */}
          <div className="footer-left-section flex-1">
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-black underline text-base lowercase hover:text-gray-600 transition-colors"
              >
                instagram ↗
              </a>
              <a
                href="#"
                className="text-black underline text-base lowercase hover:text-gray-600 transition-colors"
              >
                linkedIn ↗
              </a>
              <a
                href="#"
                className="text-black underline text-base lowercase hover:text-gray-600 transition-colors"
              >
                contact us ↗
              </a>
            </div>
          </div>

          {/* Center section - Navigation */}
          <div className="footer-center-section flex-1 text-center">
            <div className="flex flex-col gap-2 justify-center items-center">
              <a
                href="/"
                className="text-black underline text-base lowercase hover:text-gray-600 transition-colors"
              >
                home
              </a>
              <a
                href="#"
                className="text-black underline text-base lowercase hover:text-gray-600 transition-colors"
              >
                our work
              </a>
              <a
                href="#"
                className="text-black underline text-base lowercase hover:text-gray-600 transition-colors"
              >
                blogs
              </a>
            </div>
          </div>

          {/* Right section - Address */}
          <div className="footer-right-section flex-1 text-right">
            <div className="text-black text-base leading-relaxed">
              <div>Electronic city, Bangalore</div>
              <div>Karnataka, India</div>
              <div>560100</div>
            </div>
          </div>
        </div>

        {/* Footer bottom - Legal and Copyright */}
        <div className="footer-bottom flex justify-between items-start py-2 border-t border-gray-300">
          <div className="footer-legal flex-1 text-left">
            <p className="text-xs text-black font-normal">
              By using this website, you agree to our Terms & Conditions and Privacy Policy.
            </p>
          </div>
          <div className="footer-copyright flex-1 text-right">
            <p className="text-xs text-black font-medium">
              © 2025 Aexiz Agency. All rights reserved.
            </p>
          </div>
        </div>

        {/* Large AEXIZ logo section */}
        <div className="footer-logo-section flex justify-center items-end pb-0 mb-0 h-60vh min-h-96 relative -top-8 z-10">
          <div className="w-full max-w-4xl h-full text-center flex items-end justify-center opacity-90">
            <span className="text-[250px] font-black text-black leading-none wrap-break-word">
              AEXIZ
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
