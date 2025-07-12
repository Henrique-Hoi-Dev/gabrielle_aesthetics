import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-roseGold-900 to-roseGold-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-roseGold-400 to-champagne-300 rounded-full flex items-center justify-center">
                  <span className="font-title text-white text-2xl">G</span>
                </div>
                <div>
                  <h3 className="font-title text-2xl text-white">Gabrielle</h3>
                  <p className="font-body text-roseGold-100 text-sm">
                    Aesthetics
                  </p>
                </div>
              </div>

              <p className="font-body text-roseGold-100 leading-relaxed mb-6 max-w-md">
                Transformando vidas através da beleza com dedicação, carinho e
                técnicas modernas. Sua beleza natural merece ser realçada com
                elegância.
              </p>

              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-roseGold-700 rounded-full flex items-center justify-center hover:bg-roseGold-600 transition-colors duration-200">
                  <span className="text-white">📱</span>
                </button>
                <button className="w-10 h-10 bg-roseGold-700 rounded-full flex items-center justify-center hover:bg-roseGold-600 transition-colors duration-200">
                  <span className="text-white">📷</span>
                </button>
                <button className="w-10 h-10 bg-roseGold-700 rounded-full flex items-center justify-center hover:bg-roseGold-600 transition-colors duration-200">
                  <span className="text-white">💬</span>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-title text-xl text-white mb-6">
                Links Rápidos
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#home"
                    className="font-body text-roseGold-100 hover:text-white transition-colors duration-200"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#sobre"
                    className="font-body text-roseGold-100 hover:text-white transition-colors duration-200"
                  >
                    Sobre Gabrielle
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="font-body text-roseGold-100 hover:text-white transition-colors duration-200"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="font-body text-roseGold-100 hover:text-white transition-colors duration-200"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-title text-xl text-white mb-6">Serviços</h4>
              <ul className="space-y-3">
                <li>
                  <button className="font-body text-roseGold-100 hover:text-white transition-colors duration-200">
                    Tratamentos Faciais
                  </button>
                </li>
                <li>
                  <button className="font-body text-roseGold-100 hover:text-white transition-colors duration-200">
                    Maquiagem Profissional
                  </button>
                </li>
                <li>
                  <button className="font-body text-roseGold-100 hover:text-white transition-colors duration-200">
                    Consultoria de Beleza
                  </button>
                </li>
                <li>
                  <button className="font-body text-roseGold-100 hover:text-white transition-colors duration-200">
                    Depilação Especializada
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-roseGold-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="font-body text-roseGold-200">
                  © 2024 Gabrielle Aesthetics. Todos os direitos reservados.
                </p>
              </div>

              <div className="flex space-x-6">
                <button className="font-body text-roseGold-200 hover:text-white transition-colors duration-200 text-sm">
                  Política de Privacidade
                </button>
                <button className="font-body text-roseGold-200 hover:text-white transition-colors duration-200 text-sm">
                  Termos de Uso
                </button>
                <button className="font-body text-roseGold-200 hover:text-white transition-colors duration-200 text-sm">
                  Cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
