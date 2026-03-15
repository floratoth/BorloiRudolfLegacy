// src/components/Navbar.tsx

"use client";

import { useState } from 'react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex flex-grow items-center justify-center space-x-4">
            {/* Menu Item 1 */}
            <a href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">IDŐREND</a>

            {/* Menu Item 2 with Dropdown */}
            <div className="relative">
              <button
                onClick={() => { window.location.href = '/katalogus'; }}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                KATALÓGUS
              </button>
            </div>

            {/* Menu Item 3 with Dropdown */}
            <div className="relative">
              <button
                onClick={() => window.location.href = '/zene-es-proza'}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                ZENE ÉS PRÓZA
              </button>
            </div>

            <div className="relative">
              <button
                onClick={() => window.location.href = '/galeria'}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                GALÉRIA
              </button>
            </div>

            {/* Menu Item 5 */}
            <a href="/kapcsolat" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">KAPCSOLAT</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <a href="/" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">IDŐREND</a>
          <a href="/katalogus" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">KATALÓGUS</a>
          <a href="/zene-es-proza" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">ZENE ÉS PRÓZA</a>
          <a href="/galeria" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">GALÉRIA</a>
          <a href="/kapcsolat" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">KAPCSOLAT</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
