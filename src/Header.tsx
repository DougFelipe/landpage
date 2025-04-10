import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/LOGO.png" alt="Logo Data Designer" className="h-8 w-auto" />
            <span className="text-xl font-bold text-gray-800">Data Designer</span>
          </div>

          {/* Botão de menu mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-800 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}
              />
            </svg>
          </button>

          {/* Navegação desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#pacotes" className="text-gray-800 hover:text-blue-600 transition-colors">Pacotes</a>
            <a href="#formulario" className="text-gray-800 hover:text-blue-600 transition-colors">Atendimento</a>

            <a
              href="https://wa.me/5584998017577?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20do%20Data%20Designer."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-green-700 transition-colors"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp Logo"
                className="h-5 w-5"
              />
              <span>Entre em Contato</span>
            </a>
          </div>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <div className="mt-4 md:hidden flex flex-col items-start space-y-4">
            <a href="#pacotes" className="text-gray-800 hover:text-blue-600 transition-colors">Pacotes</a>
            <a href="#formulario" className="text-gray-800 hover:text-blue-600 transition-colors">Atendimento</a>
            <a
              href="https://wa.me/5584998017577?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20do%20Data%20Designer."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-green-700 transition-colors"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp Logo"
                className="h-5 w-5"
              />
              <span>Entre em Contato</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
