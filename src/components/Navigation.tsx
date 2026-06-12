import type { JSX } from "react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const NavigationBar = (): JSX.Element => {
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-[#FFF8F1] border-b border-[#E7D2C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          {/* Left menu */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#AE9380]"
              aria-label="Abrir o cerrar menú"
            >
              <svg
                className="h-6 w-6 text-[#2F2521]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Desktop menu */}
            <div className="hidden sm:flex space-x-6 z-50">
              <a
                href="/"
                className="text-[#2F2521] hover:text-[#AE9380] transition-colors"
              >
                Inicio
              </a>
              <a
                href="/about"
                className="text-[#2F2521] hover:text-[#AE9380] transition-colors"
              >
                Nosotros
              </a>
              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="text-[#2F2521] hover:text-[#AE9380] transition-colors focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                >
                  Servicios
                </button>
                {servicesOpen && (
                  <div
                    className="absolute mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-[#E7D2C4]"
                    role="menu"
                  >
                    <a
                      href="/services"
                      className="block px-4 py-2 text-[#2F2521] hover:bg-[#FFF8F1] hover:text-[#6F5141]"
                      role="menuitem"
                    >
                      Todos los servicios
                    </a>
                    <a
                      href="/hair-styling"
                      className="block px-4 py-2 text-[#2F2521] hover:bg-[#FFF8F1] hover:text-[#6F5141]"
                      role="menuitem"
                    >
                      Cabello
                    </a>
                    <a
                      href="/nails"
                      className="block px-4 py-2 text-[#2F2521] hover:bg-[#FFF8F1] hover:text-[#6F5141]"
                      role="menuitem"
                    >
                      Uñas
                    </a>
                    <a
                      href="/services#pestanas"
                      className="block px-4 py-2 text-[#2F2521] hover:bg-[#FFF8F1] hover:text-[#6F5141]"
                      role="menuitem"
                    >
                      Pestañas
                    </a>
                  </div>
                )}
              </div>
              <a
                href="/blog"
                className="text-[#2F2521] hover:text-[#AE9380] transition-colors"
              >
                Blog
              </a>
              <a
                href="/contact"
                className="text-[#2F2521] hover:text-[#AE9380] transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Center logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 sm:hidden md:block">
            <a href="/" className="text-xl font-semibold text-[#6F5141]">
              <img
                src="/images/aura-logo.png"
                alt="AURA Beauty Salon logo"
                className="h-20 w-auto"
                loading="lazy"
                title="AURA Beauty Salon"
                aria-label="AURA Beauty Salon logo"
              />
            </a>
          </div>

          {/* Right WhatsApp */}
          <div>
            <a
              href="https://wa.me/50767925695"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[36px] h-[36px] inline-flex justify-center items-center px-2 py-2 border border-transparent text-4xl font-medium rounded-full text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
              aria-label="Contactar AURA Beauty Salon por WhatsApp"
              title="Escribir por WhatsApp a AURA Beauty Salon"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2 bg-[#FFF8F1] border-t border-[#E7D2C4] z-50">
          <a
            href="/"
            className="block text-[#2F2521] py-1 hover:text-[#AE9380]"
          >
            Inicio
          </a>
          <a
            href="/about"
            className="block text-[#2F2521] py-1 hover:text-[#AE9380]"
          >
            Nosotros
          </a>
          <details className="group">
            <summary className="text-[#2F2521] cursor-pointer py-1">
              Servicios
            </summary>
            <div className="ml-4 mt-1 space-y-1">
              <a href="/services" className="block text-[#75665F]">
                Todos los servicios
              </a>
              <a href="/hair-styling" className="block text-[#75665F]">
                Cabello
              </a>
              <a href="/nails" className="block text-[#75665F]">
                Uñas
              </a>
              <a href="/services#pestanas" className="block text-[#75665F]">
                Pestañas
              </a>
            </div>
          </details>
          <a
            href="/blog"
            className="block text-[#2F2521] py-1 hover:text-[#AE9380]"
          >
            Blog
          </a>
          <a
            href="/contact"
            className="block text-[#2F2521] py-1 hover:text-[#AE9380]"
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
