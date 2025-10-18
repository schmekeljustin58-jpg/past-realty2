"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-black">
              PAST <span className="text-[#E1251D]">+</span> REALTY
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#E1251D] transition-colors font-medium"
            >
              Home
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#E1251D] transition-colors font-medium">
                <span>Services</span>
                <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  <Link
                    href="/services/immobilien-kaufen"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#E1251D] transition-colors"
                  >
                    Immobilien kaufen
                  </Link>
                  <Link
                    href="/services/immobilien-verkaufen"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#E1251D] transition-colors"
                  >
                    Immobilien verkaufen
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/kontakt"
              className="text-gray-700 hover:text-[#E1251D] transition-colors font-medium"
            >
              Kontakt
            </Link>
            <Link
              href="/impressum"
              className="text-gray-700 hover:text-[#E1251D] transition-colors font-medium"
            >
              Impressum
            </Link>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#E1251D] transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-[#E1251D] transition-colors font-medium"
              >
                <span>Services</span>
                <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    href="/services/immobilien-kaufen"
                    className="block text-gray-600 hover:text-[#E1251D] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Immobilien kaufen
                  </Link>
                  <Link
                    href="/services/immobilien-verkaufen"
                    className="block text-gray-600 hover:text-[#E1251D] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Immobilien verkaufen
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/kontakt"
              className="text-gray-700 hover:text-[#E1251D] transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </Link>
            <Link
              href="/impressum"
              className="text-gray-700 hover:text-[#E1251D] transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Impressum
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
