import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-roseGold-500 to-champagne-400 py-6 shadow-lg">
      <div className="container mx-auto px-4">
        <h1 className="font-title text-4xl md:text-6xl text-white text-center">
          Gabrielle Aesthetics
        </h1>
        <p className="font-body text-center text-white/90 mt-2 text-lg">
          Beleza e elegância em cada detalhe
        </p>
      </div>
    </header>
  );
};

export default Header;
