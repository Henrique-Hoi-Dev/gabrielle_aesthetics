import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-roseGold-400 to-champagne-300 rounded-full flex items-center justify-center">
              <span className="font-title text-white text-xl">G</span>
            </div>
            <div>
              <h1 className="font-title text-2xl text-roseGold-700">
                Gabrielle
              </h1>
              <p className="font-body text-xs text-gray-600 -mt-1">
                Aesthetics
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="font-body text-gray-700 hover:text-roseGold-600 transition-colors duration-200"
            >
              Início
            </a>
            <a
              href="#sobre"
              className="font-body text-gray-700 hover:text-roseGold-600 transition-colors duration-200"
            >
              Sobre
            </a>
            <a
              href="#servicos"
              className="font-body text-gray-700 hover:text-roseGold-600 transition-colors duration-200"
            >
              Serviços
            </a>
            <a
              href="#contato"
              className="font-body text-gray-700 hover:text-roseGold-600 transition-colors duration-200"
            >
              Contato
            </a>
          </div>

          {/* CTA Button */}
          <button className="hidden md:block bg-gradient-to-r from-roseGold-500 to-champagne-400 text-white px-6 py-2 rounded-full font-body text-sm hover:shadow-lg transition-all duration-200 hover:scale-105">
            Agendar Consulta
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 hover:text-roseGold-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
