import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rent', path: '/rent' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="w-full bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Brand Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3 group py-1">
              <img
                src="/logo.png"
                alt="Parveen Fleets Pvt. Ltd."
                className="h-14 sm:h-16 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-xs"
              />
            </Link>
          </div>

          {/* Center: Navigation Links with Router Link */}
          <div className="hidden lg:flex items-center gap-1.5 bg-gray-50/80 p-1.5 rounded-full border border-gray-100/80">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => {
                    if (item.path === '/services' && (location.pathname === '/' || location.pathname === '/services')) {
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-blue-100/80 text-blue-600 shadow-xs'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100/60'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right: Phone number & Book Now Button */}
          <div className="hidden md:flex items-center gap-5">
            {/* Phone badge */}
            <a
              href="tel:+917767000838"
              className="flex items-center gap-2.5 text-gray-800 hover:text-blue-600 transition-colors group"
            >
              <div className="w-9 h-9 rounded-full bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center text-blue-600 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.28.37-.68.25-1.02A11.36 11.36 0 018.96 4.3a.99.99 0 00-1-.99H4.49A1 1 0 003.5 4.31C3.89 13.9 11.6 21.6 21.19 22a1 1 0 001.01-.99v-4.49c0-.55-.44-.99-.99-.99l-1.2-.15z" />
                </svg>
              </div>
              <span className="text-sm font-bold tracking-tight text-[#0b1a30]">
                +91 77670 00838
              </span>
            </a>

            {/* Book Now Button */}
            <Link
              to="/rent"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-full shadow-md shadow-blue-500/25 transition-all duration-200"
            >
              <span>Book Now</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Right: Circular Phone Button + Hamburger Button */}
          <div className="flex md:hidden items-center gap-3">
            {/* Phone Button */}
            <a
              href="tel:+917767000838"
              className="w-11 h-11 rounded-full bg-[#eef5ff] text-[#1e61d8] hover:bg-blue-100 flex items-center justify-center transition-colors shadow-xs"
              aria-label="Call Us"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.28.37-.68.25-1.02A11.36 11.36 0 018.96 4.3a.99.99 0 00-1-.99H4.49A1 1 0 003.5 4.31C3.89 13.9 11.6 21.6 21.19 22a1 1 0 001.01-.99v-4.49c0-.55-.44-.99-.99-.99l-1.2-.15z" />
              </svg>
            </a>

            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#0b1a30] hover:text-blue-600 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Organic Curve in Top Right on Mobile */}
      <div className="absolute top-0 right-0 w-36 sm:w-44 h-full bg-gradient-to-l from-blue-100/70 via-blue-50/40 to-transparent pointer-events-none md:hidden -z-10 rounded-bl-full" />

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (item.path === '/services' && (location.pathname === '/' || location.pathname === '/services')) {
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors block ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-bold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-3">
            <a
              href="tel:+917767000838"
              className="flex items-center gap-2.5 px-4 py-2 text-sm font-bold text-gray-800"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.28.37-.68.25-1.02A11.36 11.36 0 018.96 4.3a.99.99 0 00-1-.99H4.49A1 1 0 003.5 4.31C3.89 13.9 11.6 21.6 21.19 22a1 1 0 001.01-.99v-4.49c0-.55-.44-.99-.99-.99l-1.2-.15z" />
                </svg>
              </div>
              <span>+91 77670 00838</span>
            </a>

            <Link
              to="/rent"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md"
            >
              Book Now →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
