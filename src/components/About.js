import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-title text-4xl lg:text-5xl text-roseGold-800 mb-6">
              Sobre Gabrielle Golin
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-roseGold-400 to-champagne-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative z-10">
                <div className="w-full h-96 bg-gradient-to-br from-champagne-200 to-blush-200 rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-40 h-40 bg-gradient-to-br from-roseGold-400 to-champagne-300 rounded-full mx-auto flex items-center justify-center">
                      <span className="font-title text-6xl text-white">G</span>
                    </div>
                    <p className="font-body text-gray-600">Foto da Gabrielle</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-roseGold-200 rounded-full opacity-30"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-champagne-200 rounded-full opacity-30"></div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="font-title text-3xl text-roseGold-700">
                  Especialista em Beleza e Estética
                </h3>

                <p className="font-body text-lg text-gray-700 leading-relaxed">
                  Com mais de 10 anos de experiência no mundo da estética,
                  Gabrielle Golin dedica sua vida a transformar e realçar a
                  beleza natural de cada cliente. Sua abordagem única combina
                  técnicas modernas com um toque de elegância que só ela pode
                  oferecer.
                </p>

                <p className="font-body text-lg text-gray-700 leading-relaxed">
                  Formada em Estética e Cosmética, Gabrielle continua se
                  especializando constantemente para oferecer os melhores
                  tratamentos e produtos do mercado, sempre priorizando a saúde
                  e bem-estar de suas clientes.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-title text-roseGold-600 mb-2">
                    500+
                  </div>
                  <div className="font-body text-sm text-gray-600">
                    Clientes Satisfeitas
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-title text-champagne-600 mb-2">
                    10+
                  </div>
                  <div className="font-body text-sm text-gray-600">
                    Anos de Experiência
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-title text-blush-600 mb-2">
                    50+
                  </div>
                  <div className="font-body text-sm text-gray-600">
                    Tratamentos Especiais
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <button className="bg-gradient-to-r from-roseGold-500 to-champagne-400 text-white px-8 py-3 rounded-full font-body text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Conhecer Mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
