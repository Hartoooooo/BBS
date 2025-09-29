'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Startseite', href: '#home' },
    { name: 'Dienstleistungen', href: '#services' },
    { name: 'Über uns', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Jetzt bewerben!', href: '#contact' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <header className={`${isScrolled ? 'bg-gray-900/90 shadow-lg' : 'bg-transparent'} backdrop-blur-sm text-white transition-all duration-300 fixed top-0 left-0 right-0 z-50`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-4">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.slice(0, 3).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-blue-400 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Centered Logo */}
          <div className="flex-1 flex justify-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/ChatGPT Image 28. Sept. 2025, 20_07_42.png" 
                alt="BBS Logo" 
                className="h-12 w-auto mr-3"
              />
              <div className="flex flex-col justify-center">
                <div className="font-bold text-white text-2xl">BBS</div>
                <div className="text-xs text-white">Barrierefreies Bauen und Sanieren</div>
              </div>
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.slice(3).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-blue-400 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-400"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mb-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-blue-400 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
