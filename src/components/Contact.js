import React from 'react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-title text-4xl lg:text-5xl text-roseGold-800 mb-6">
              Entre em Contato
            </h2>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Agende sua consulta ou tire suas dúvidas. Estou aqui para ajudar
              você a descobrir sua melhor versão.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-roseGold-400 to-champagne-400 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-title text-3xl text-roseGold-700 mb-6">
                  Vamos Conversar?
                </h3>
                <p className="font-body text-lg text-gray-700 leading-relaxed">
                  Estou sempre disponível para atender você com carinho e
                  dedicação. Entre em contato e vamos juntas descobrir qual
                  tratamento é ideal para você.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-roseGold-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-roseGold-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-gray-800">
                      Telefone
                    </h4>
                    <p className="font-body text-gray-600">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-champagne-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-champagne-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-gray-800">
                      Email
                    </h4>
                    <p className="font-body text-gray-600">
                      gabrielle@gabrielleaesthetics.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blush-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blush-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-gray-800">
                      Endereço
                    </h4>
                    <p className="font-body text-gray-600">
                      Rua das Flores, 123 - São Paulo, SP
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-roseGold-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-roseGold-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-gray-800">
                      Horário de Atendimento
                    </h4>
                    <p className="font-body text-gray-600">
                      Segunda a Sexta: 9h às 18h
                    </p>
                    <p className="font-body text-gray-600">Sábado: 9h às 14h</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6">
                <h4 className="font-body font-semibold text-gray-800 mb-4">
                  Siga-me nas Redes Sociais
                </h4>
                <div className="flex space-x-4">
                  <button className="w-10 h-10 bg-roseGold-100 rounded-full flex items-center justify-center hover:bg-roseGold-200 transition-colors duration-200">
                    <span className="text-roseGold-600">📱</span>
                  </button>
                  <button className="w-10 h-10 bg-champagne-100 rounded-full flex items-center justify-center hover:bg-champagne-200 transition-colors duration-200">
                    <span className="text-champagne-600">📷</span>
                  </button>
                  <button className="w-10 h-10 bg-blush-100 rounded-full flex items-center justify-center hover:bg-blush-200 transition-colors duration-200">
                    <span className="text-blush-600">💬</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-blush-50 to-champagne-50 rounded-2xl p-8 shadow-lg">
              <h3 className="font-title text-2xl text-roseGold-700 mb-6">
                Envie sua Mensagem
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-roseGold-500 focus:border-transparent font-body transition-all duration-200"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-roseGold-500 focus:border-transparent font-body transition-all duration-200"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-roseGold-500 focus:border-transparent font-body transition-all duration-200"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Serviço de Interesse
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-roseGold-500 focus:border-transparent font-body transition-all duration-200">
                    <option>Selecione um serviço</option>
                    <option>Tratamentos Faciais</option>
                    <option>Maquiagem Profissional</option>
                    <option>Consultoria de Beleza</option>
                    <option>Depilação Especializada</option>
                    <option>Tratamentos Corporais</option>
                    <option>Spa Day</option>
                  </select>
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-roseGold-500 focus:border-transparent font-body transition-all duration-200"
                    placeholder="Conte-me sobre suas necessidades..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-roseGold-500 to-champagne-400 text-white py-4 rounded-lg font-body text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
