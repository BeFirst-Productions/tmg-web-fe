'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from '../layout/Container';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navLinks = ['Home', 'About', 'Service', 'Workspace', 'Accounting', 'Visa', 'Company', 'Packages'];
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`top-0 left-0 right-0 z-50 py-4 sm:py-6 md:py-3 fixed transition-all duration-300 ${
        isScrolled 
          ? 'border-2 border-b-0 border-gray-200 bg-gradient-to-b from-white/90 to-white/60 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between lg:justify-start lg:gap-[11rem] xl:gap-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src='/assets/logo/logo.png' 
              alt="Logo" 
              className="h-16 sm:h-20 md:h-24 lg:h-20 xl:h-[6.563rem] w-auto" 
            />
          </div>

          {/* Desktop Navigation Links */}
          <div 
            className={`hidden lg:flex rounded-2xl flex-1 max-w-4xl px-4 xl:px-8 py-2 xl:py-3 transition-all duration-300 ${
              isScrolled 
                ? 'bg-white/90 backdrop-blur-sm shadow-lg' 
                : 'bg-white/70 backdrop-blur-sm shadow-md'
            }`}
          >
            <ul className="flex items-center justify-center w-full gap-4 xl:gap-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={`text-sm xl:text-base text-center font-normal transition-colors hover:text-red-800 whitespace-nowrap ${
                      index === 0 ? 'text-red-800 border-b-2 border-red-800 pb-1' : 'text-gray-700'
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-red-800 transition-colors bg-white/90 backdrop-blur-sm rounded-lg shadow-lg"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
            <ul className="py-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-6 py-3 text-base font-normal transition-colors hover:bg-red-50 hover:text-red-800 ${
                      index === 0 ? 'text-red-800 bg-red-50 border-l-4 border-red-800' : 'text-gray-700'
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </nav>
  );
};