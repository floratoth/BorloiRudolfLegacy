// src/components/Navbar.tsx

"use client";

import { useState } from 'react';

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null); // Track which dropdown is open
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle function for dropdown
  const toggleDropdown = (name: string) => {
    setDropdownOpen(dropdownOpen === name ? null : name);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex flex-grow items-center justify-center space-x-4">
            {/* Menu Item 1 */}
            <a href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">ÉLETE</a>

            {/* Menu Item 2 with Dropdown */}
            <div className="relative">
              <button
                onClick={() => { window.location.href = '/muvei'; }}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                ÉLETMŰVE
              </button>
              {/* {dropdownOpen === 'muvei' && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                  <a href="/muvei" className="block px-4 py-2 text-sm hover:bg-gray-200">MŰVEI MŰFAJUK ÉS KOMPONÁLÁSI IDEJÜK SZERINT RENDEZVE</a>
                </div>
              )} */}
            </div>

            {/* Menu Item 3 with Dropdown */}
            <div className="relative">
              <button
                onClick={() => window.location.href = '/hanganyagok'}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                ZENESZERZŐI MUNKÁSSÁGA
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

            {/* Menu Item 4 with Dropdown */}
            {/* <div className="relative">
              <button
                onClick={() => toggleDropdown('utohatas')}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                ÉLETMŰVÉNEK UTÓHATÁSA
              </button>
              {dropdownOpen === 'utohatas' && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                  <a href="/forum" className="block px-4 py-2 text-sm hover:bg-gray-200">FÓRUM</a>
                </div>
              )}
            </div> */}

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
          <a href="/" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">ÉLETE</a>
          <div>
            <button
              onClick={() => toggleDropdown('muvei')}
              className="block w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 text-left"
            >
              ÉLETMŰVE
            </button>
            {dropdownOpen === 'muvei' && (
              <div className="pl-4">
                <a href="/muvei" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">MŰVEI MŰFAJUK ÉS KOMPONÁLÁSUK IDEJE SZERINT RENDEZVE</a>
                <a href="/mufaj" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"></a>
                <a href="/komponalas" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"></a>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => toggleDropdown('zenesz')}
              className="block w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 text-left"
            >
              ZENESZERZŐI MUNKÁSSÁGA
            </button>
            {dropdownOpen === 'zenesz' && (
              <div className="pl-4">
                <a href="/mureszletek" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">A ZENESZERZŐI ÉLETÚT BEMUTATÁSA MŰRÉSZLETEKKEL</a>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => toggleDropdown('utohatas')}
              className="block w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 text-left"
            >
              ÉLETMŰVÉNEK UTÓHATÁSA
            </button>
            {dropdownOpen === 'utohatas' && (
              <div className="pl-4">
                <a href="/forum" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">FÓRUM</a>
              </div>
            )}
          </div>
          <a href="/contact" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">KAPCSOLAT</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
