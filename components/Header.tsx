'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary-700">West Shores</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium">
              About
            </Link>
            <Link href="/amenities" className="text-gray-700 hover:text-primary-600 font-medium">
              Amenities
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-primary-600 font-medium">
              Events
            </Link>
            <Link href="/documents" className="text-gray-700 hover:text-primary-600 font-medium">
              Documents
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-primary-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 text-gray-700 hover:text-primary-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-primary-600 font-medium">
              About
            </Link>
            <Link href="/amenities" className="block py-2 text-gray-700 hover:text-primary-600 font-medium">
              Amenities
            </Link>
            <Link href="/events" className="block py-2 text-gray-700 hover:text-primary-600 font-medium">
              Events
            </Link>
            <Link href="/documents" className="block py-2 text-gray-700 hover:text-primary-600 font-medium">
              Documents
            </Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-primary-600 font-medium">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
