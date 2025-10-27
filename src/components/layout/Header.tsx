'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Hammer, Home, Wrench, Users, HelpCircle, Mail, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navigation = [
    { name: 'Startseite', href: '#home', icon: Home },
    { name: 'Dienstleistungen', href: '#services', icon: Wrench },
    { name: 'Über uns', href: '#about', icon: Users },
    { name: 'FAQ', href: '#faq', icon: HelpCircle },
    { name: 'Kontakt', href: '#contact', icon: Mail },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-900/90 shadow-lg backdrop-blur-sm text-white transition-all duration-300 fixed top-0 left-0 right-0 z-50">
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
              <Image 
                src="/LOGO.webp" 
                alt="BBS Barrierefreies Bauen und Sanieren Logo - Björn Hartmann Berlin Brandenburg" 
                width={48}
                height={48}
                className="h-12 w-auto mr-3"
                priority
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
                className="text-white hover:text-blue-400 font-medium transition-colors duration-200 flex items-center gap-2"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/anfrage"
              className="text-white hover:text-blue-400 font-medium transition-colors duration-200 flex items-center gap-2"
            >
              <Hammer className="w-4 h-4" />
              Jetzt Anfragen
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-400 transition-colors duration-200 relative z-[60]"
              aria-label="Menü öffnen"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-1/2 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                  }`}
                />
                <span
                  className={`absolute top-1/2 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute top-1/2 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Modern Mobile Navigation Overlay */}
      <div className="md:hidden">
        {/* Slide-in Menu Panel */}
        <div
          className={`fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-gray-900/95 backdrop-blur-sm shadow-2xl rounded-br-3xl transform transition-transform duration-500 ease-out z-[46] ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Menu Content */}
          <div className="flex flex-col h-full bg-gray-900/95 rounded-br-3xl">
            {/* Logo Section - matches header height */}
            <div className="py-4 flex items-center px-6 border-b border-gray-700/50 bg-gray-900/95">
              <Link 
                href="/" 
                className="flex items-center gap-2"
                onClick={handleLinkClick}
              >
                <Image 
                  src="/LOGO.webp" 
                  alt="BBS Logo" 
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                />
                <div className="flex flex-col">
                  <div className="font-bold text-white text-xl tracking-tight">BBS</div>
                  <div className="text-xs text-gray-300 leading-tight">
                    Barrierefreies Bauen und Sanieren
                  </div>
                </div>
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-4 py-8 bg-gray-900/95 rounded-br-3xl">
              <div className="space-y-2">
                {navigation.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={handleLinkClick}
                      className="group flex items-center gap-4 px-6 py-4 rounded-xl text-white hover:bg-red-900/30 transition-all duration-300 hover:translate-x-2"
                      style={{
                        transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                        opacity: isMenuOpen ? 1 : 0,
                        transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                      }}
                    >
                      <div className="p-2 rounded-lg bg-red-500/20 group-hover:bg-red-500/30 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-red-400 group-hover:text-red-300" />
                      </div>
                      <span className="text-lg font-medium flex-1">{item.name}</span>
                      <ArrowRight className="w-5 h-5 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-red-400 transition-all duration-300" />
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
