"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
        
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center transition-transform hover:scale-105">
          <img 
            src="/heshritha-logo.png" 
            alt="Heshritha Educational Services" 
            className="h-16 w-auto object-contain" 
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600">Home</Link>
          <Link href="/colleges" className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600">Explore</Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600">Contact</Link>
        </nav>

        {/* Global CTA (Desktop) */}
        <div className="hidden md:block">
          <Link 
            href="/contact" 
            className="inline-flex h-10 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white transition-all hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <button 
          className="md:hidden p-2 text-gray-800 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-3xl border-b border-gray-100 shadow-xl px-4 py-6 flex flex-col gap-5">
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-gray-900 hover:text-blue-600"
          >
            Home
          </Link>
          <Link 
            href="/colleges" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-gray-900 hover:text-blue-600"
          >
            Explore
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-gray-900 hover:text-blue-600"
          >
            Contact
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-full bg-black px-6 text-base font-medium text-white transition-colors hover:bg-gray-800"
          >
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
}