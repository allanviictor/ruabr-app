import React from "react";
import LogoRua from "../assets/logo-rua.png";

export function Header() {
  return (
    <React.Fragment>
      <nav className="bg-primary-900 shadow-md sticky top-0 z-50">
        <div className="container mx-auto py-3">
          <div className="flex justify-between items-center h-16">
            <img className="w-auto h-10" src={LogoRua} alt="logo rua br" />

            <div className="hidden md:flex items-center space-x-12">
              <a
                href="#"
                className="text-text hover:text-neutral-100 transition-colors text-lg font-bold"
              >
                Informe-se
              </a>
              <a
                href="#"
                className="text-text hover:text-neutral-100 transition-colors text-lg font-bold"
              >
                Como ajudar
              </a>
              <a
                href="#"
                className="text-text hover:text-neutral-100 transition-colors  text-lg font-bold"
              >
                Notícias e histórias
              </a>
              <a
                href="#"
                className="text-text hover:text-neutral-100 transition-colors text-lg font-bold"
              >
                Sobre nós
              </a>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
