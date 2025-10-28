import { useEffect } from "react";

export function NotFound() {
  useEffect(() => {
    document.title = "Página não encontrada";
  });
  return (
    <div className="   px-4">
      <div className="text-center">
        {/* Número 404 grande */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-white mb-4">404</h1>
          <div className="w-24 h-1 bg-gray-600 mx-auto rounded"></div>
        </div>

        {/* Mensagem principal */}
        <h2 className="text-3xl font-semibold text-white mb-4">
          Página não encontrada
        </h2>

        <p className="text-white mb-8 max-w-md mx-auto">
          Ops! A página que você está procurando não existe ou foi movida para
          outro local.
        </p>
      </div>
    </div>
  );
}
