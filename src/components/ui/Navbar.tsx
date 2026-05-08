'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Menú', href: '#menu' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-brand-offwhite/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="#" 
          className={`font-serif text-2xl md:text-3xl font-semibold tracking-wide transition-colors ${
            isScrolled ? 'text-brand-primary' : 'text-brand-offwhite'
          }`}
        >
          Lumbre
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-sans font-medium text-sm tracking-wide transition-colors hover:text-brand-terracotta ${
                isScrolled ? 'text-brand-primary/80' : 'text-brand-offwhite/90'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://wa.me/528112345678"
            target="_blank"
            className={`font-sans font-medium text-sm px-5 py-2.5 rounded-full transition-all ${
              isScrolled
                ? 'bg-brand-primary text-brand-offwhite hover:bg-brand-primary/90'
                : 'bg-brand-offwhite text-brand-primary hover:bg-brand-offwhite/90'
            }`}
          >
            Pedir ahora
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-8 h-8 transition-colors ${
              isScrolled || isMobileMenuOpen ? 'text-brand-primary' : 'text-brand-offwhite'
            }`}
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-brand-offwhite shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-80 opacity-100 border-t border-brand-sand/50' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans font-medium text-brand-primary/80 hover:text-brand-terracotta py-2 border-b border-brand-sand/30 last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://wa.me/528112345678"
            target="_blank"
            className="w-full text-center font-sans font-medium text-brand-offwhite bg-brand-primary py-3 rounded-full hover:bg-brand-primary/90 transition-colors mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pedir ahora
          </Link>
        </div>
      </div>
    </nav>
  );
};
