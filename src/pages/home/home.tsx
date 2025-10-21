import { useEffect } from "react";
import "./home.css";

export function Home() {
  useEffect(() => {
    document.title = "Site em Construção | ruabr.";
  }, []);
  return (
    <div className="construction-page">
      <div className="construction-container">
        {/* Animação de engrenagens */}
        <div className="gears">
          <div className="gear gear-1">⚙️</div>
          <div className="gear gear-2">⚙️</div>
          <div className="gear gear-3">⚙️</div>
        </div>

        {/* Conteúdo principal */}
        <div className="construction-content">
          <h1 className="construction-title">🚧 Site em Construção 🚧</h1>

          <p className="construction-subtitle">
            Novidades a caminho. Em breve, no ar.
          </p>

          {/* Barra de progresso animada */}
          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <span className="progress-text">Carregando...</span>
          </div>

          {/* Animação de pontos pulsantes */}
          <div className="loading-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        {/* Partículas flutuantes */}
        <div className="particles">
          <div className="particle particle-1">✨</div>
          <div className="particle particle-2">⭐</div>
          <div className="particle particle-3">💫</div>
          <div className="particle particle-4">🔧</div>
          <div className="particle particle-5">🔨</div>
        </div>
      </div>
    </div>
  );
}
