import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Tratamentos Faciais',
      description:
        'Procedimentos personalizados para rejuvenescimento e revitalização da pele, incluindo limpeza profunda, hidratação e tratamentos anti-aging.',
      icon: '🌸',
      color: 'roseGold',
      features: ['Limpeza Profunda', 'Hidratação', 'Anti-aging'],
    },
    {
      id: 2,
      title: 'Maquiagem Profissional',
      description:
        'Maquiagem artística para eventos especiais, noivas e ocasiões memoráveis. Técnicas modernas para realçar sua beleza natural.',
      icon: '💄',
      color: 'champagne',
      features: ['Noivas', 'Eventos', 'Tutorial'],
    },
    {
      id: 3,
      title: 'Consultoria de Beleza',
      description:
        'Orientação personalizada para sua rotina de beleza, cuidados diários e escolha de produtos adequados para seu tipo de pele.',
      icon: '✨',
      color: 'blush',
      features: ['Rotina Personalizada', 'Produtos', 'Dicas'],
    },
    {
      id: 4,
      title: 'Depilação Especializada',
      description:
        'Técnicas avançadas de depilação com cera quente, linha e laser para resultados suaves e duradouros.',
      icon: '🦋',
      color: 'roseGold',
      features: ['Cera Quente', 'Linha', 'Laser'],
    },
    {
      id: 5,
      title: 'Tratamentos Corporais',
      description:
        'Procedimentos para modelagem corporal, redução de celulite e tonificação muscular com equipamentos modernos.',
      icon: '🌺',
      color: 'champagne',
      features: ['Modelagem', 'Celulite', 'Tonificação'],
    },
    {
      id: 6,
      title: 'Spa Day',
      description:
        'Pacotes completos de relaxamento e beleza, incluindo massagens, tratamentos faciais e corporais em um ambiente luxuoso.',
      icon: '🕊️',
      color: 'blush',
      features: ['Massagem', 'Relaxamento', 'Luxo'],
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      roseGold: {
        bg: 'bg-roseGold-50',
        border: 'border-roseGold-200',
        text: 'text-roseGold-700',
        hover: 'hover:bg-roseGold-100',
        icon: 'bg-roseGold-500',
      },
      champagne: {
        bg: 'bg-champagne-50',
        border: 'border-champagne-200',
        text: 'text-champagne-700',
        hover: 'hover:bg-champagne-100',
        icon: 'bg-champagne-500',
      },
      blush: {
        bg: 'bg-blush-50',
        border: 'border-blush-200',
        text: 'text-blush-700',
        hover: 'hover:bg-blush-100',
        icon: 'bg-blush-500',
      },
    };
    return colorMap[color];
  };

  return (
    <section
      id="servicos"
      className="py-20 bg-gradient-to-br from-blush-50 to-champagne-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-title text-4xl lg:text-5xl text-roseGold-800 mb-6">
              Nossos Serviços
            </h2>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubra nossa gama completa de serviços especializados para
              realçar sua beleza natural
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-roseGold-400 to-champagne-400 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const colors = getColorClasses(service.color);
              return (
                <div
                  key={service.id}
                  className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 ${colors.hover}`}
                >
                  {/* Icon */}
                  <div
                    className={`${colors.icon} w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mb-6`}
                  >
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className={`font-title text-2xl ${colors.text}`}>
                      {service.title}
                    </h3>

                    <p className="font-body text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="pt-4">
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, index) => (
                          <span
                            key={index}
                            className={`${colors.bg} ${colors.text} px-3 py-1 rounded-full text-sm font-body border ${colors.border}`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-6">
                      <button
                        className={`${colors.text} font-body text-sm hover:underline transition-colors duration-200`}
                      >
                        Saiba Mais →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="font-title text-3xl text-roseGold-800 mb-4">
                Agende sua Consulta
              </h3>
              <p className="font-body text-lg text-gray-600 mb-8">
                Entre em contato para agendar uma consulta personalizada e
                descobrir qual tratamento é ideal para você.
              </p>
              <button className="bg-gradient-to-r from-roseGold-500 to-champagne-400 text-white px-8 py-4 rounded-full font-body text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Agendar Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
