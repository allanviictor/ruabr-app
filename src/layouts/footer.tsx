import React from "react";

export function Footer() {
  return (
    <React.Fragment>
      <footer className="bg-neutral-800 text-base-300">
        <div className="max-w-[1200px] mx-auto px-4 py-6">
          <div className="  flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-xs text-base-400">
              © {new Date().getFullYear()} Rede Urbana de Aprendizagem. Todos os
              direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a className="text-xs text-base-400 hover:text-base-100 transition-colors duration-200">
                Política de Privacidade
              </a>
              <a className="text-xs text-base-400 hover:text-base-100 transition-colors duration-200">
                Termos e Condições
              </a>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
