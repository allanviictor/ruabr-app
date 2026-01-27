import { Facebook, Instagram, Youtube } from "lucide-react";

import React from "react";
import LogoRuaCompleto from "/assets/logo-rua-completo.png";

export function Footer() {
  return (
    <React.Fragment>
      <footer className="bg-neutral-800 text-neutral-50 position-relative  ">
        <div className="container mx-auto">
          {/*   <!-- Top: país/selector --> */}
          <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-neutral-200 text-sm">
            <div className="w-auto h-12 flex ">
              <img
                src={LogoRuaCompleto}
                alt="logo rede urbana de aprendizagem"
              />
            </div>
          </div>

          <div className="border-t border-neutral-200/20"></div>

          {/*   <!-- Middle: links + social --> */}
          <div className=" px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1  md:grid-cols-4 gap-10">
              {/* <!-- Coluna 1 --> */}
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="hover:text-neutral-200 transition-colors"
                  >
                    Política de Doação
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-neutral-200 transition-colors"
                  >
                    Relatórios Anuais
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-neutral-200 transition-colors"
                  >
                    Política de Comunidade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-neutral-200 transition-colors"
                  >
                    Trabalhe conosco
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-neutral-200 transition-colors"
                  >
                    Doe agora
                  </a>
                </li>
              </ul>

              {/*     <!-- Coluna 2 --> */}
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="hover:text-neutral-200 transition-colors"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-neutral-200 transition-colors"
                  >
                    Direitos Autorais
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-neutral-200 transition-colors"
                  >
                    Fale conosco
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-neutral-200 transition-colors"
                  >
                    Arquivo
                  </a>
                </li>
              </ul>

              {/*       <!-- Coluna 3 (vazia/ajuste ou mais links) --> */}
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="hover:text-neutral-200 transition-colors"
                  >
                    Transparência
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-neutral-200 transition-colors"
                  >
                    Imprensa
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-neutral-200 transition-colors"
                  >
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-neutral-200 transition-colors"
                  >
                    Apoie projetos
                  </a>
                </li>
              </ul>

              {/*    <!-- Coluna 4: Social --> */}
              <div>
                <p className="text-neutral-200 mb-4">
                  Siga-nos nas redes sociais
                </p>
                <div className="flex items-center gap-3 text-neutral-50">
                  {/*      <!-- Ícones sociais (SVGs simples; substitua pelos seus) --> */}

                  <a
                    href="#"
                    aria-label="Facebook"
                    className="hover:text-primary-400 transition-colors"
                  >
                    <Facebook strokeWidth={1} size={25} />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="hover:text-primary-400 transition-colors"
                  >
                    <Instagram strokeWidth={1} size={25} />
                  </a>
                  <a
                    href="#"
                    aria-label="YouTube"
                    className="hover:text-primary-400 transition-colors"
                  >
                    <Youtube strokeWidth={1} size={25} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-200/20"></div>

          {/*   <!-- Bottom: legal / copyright --> */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-xs text-neutral-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <p className="leading-relaxed">
                Rede urbana de aprendizagem – CNPJ 00.000.000/0000-00 –
                Associação civil sem fins lucrativos que goza de isenção com
                relação aos tributos federais devidos sobre suas receitas
                próprias. A menos que especificado o contrário, os textos neste
                site estão licenciados sob uma licença CC‑BY International.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
