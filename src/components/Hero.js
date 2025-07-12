import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blush-50 via-champagne-50 to-roseGold-50"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-roseGold-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-champagne-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blush-200 rounded-full opacity-30 blur-lg"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="font-title text-5xl lg:text-7xl text-roseGold-800 leading-tight">
                Gabrielle
                <span className="block text-champagne-600">Golin</span>
              </h1>
              <p className="font-body text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                "Transformando vidas através da beleza, um toque de elegância em
                cada detalhe"
              </p>
            </div>

            <div className="space-y-6">
              <p className="font-body text-lg text-gray-700 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Especialista em estética e beleza, dedicada a realçar sua beleza
                natural com técnicas modernas e produtos de alta qualidade.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-roseGold-500 to-champagne-400 text-white px-8 py-4 rounded-full font-body text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Agendar Consulta
                </button>
                <button className="border-2 border-roseGold-300 text-roseGold-700 px-8 py-4 rounded-full font-body text-lg hover:bg-roseGold-50 transition-all duration-300">
                  Conhecer Serviços
                </button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Placeholder for Gabrielle's image */}
              <div className="w-80 h-96 mx-auto lg:mx-0 bg-gradient-to-br from-roseGold-200 to-champagne-200 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-roseGold-400 to-champagne-300 rounded-full mx-auto flex items-center justify-center">
                    <span className="font-title text-4xl text-white">G</span>
                  </div>
                  <p className="font-body text-gray-600">Foto da Gabrielle</p>
                  <p className="font-body text-sm text-gray-500">
                    (Adicionar imagem real)
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-roseGold-200 rounded-3xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-roseGold-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-roseGold-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
