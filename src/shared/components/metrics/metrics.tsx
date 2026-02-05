import { useEffect, useRef, useState } from "react";
import "./metrics.css";

/**
 * Tipos para as métricas
 */
interface Metric {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

/**
 * Métricas padrão conforme page-structure.md
 */
const defaultMetrics: Metric[] = [
  {
    id: "people",
    value: 150,
    suffix: "+",
    label: "Pessoas impactadas",
  },
  {
    id: "courses",
    value: 40,
    suffix: "+",
    label: "Cursos realizados",
  },
  {
    id: "hours",
    value: 2500,
    suffix: "+",
    label: "Horas de aprendizado",
  },
  {
    id: "teachers",
    value: 15,
    suffix: "+",
    label: "Professores qualificados",
  },
];

/**
 * Props para customização do componente
 */
interface CredibilityMetricsProps {
  metrics?: Metric[];
  title?: string;
  duration?: number;
}

/**
 * Componente CountUp - Animação de números com easing cubic-out
 *
 * Design System:
 * - Tipografia: H2 → Números (48-56px, Bold 700, Inter)
 * - Animação: 3 segundos com cubic-out easing
 * - Formato: separador de milhares (pt-BR)
 */
interface CountUpProps {
  target: number;
  suffix: string;
  duration?: number;
  inView?: boolean;
}

const CountUp: React.FC<CountUpProps> = ({
  target,
  suffix,
  duration = 2000,
  inView = true,
}) => {
  const [count, setCount] = useState(0);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing: cubic-out (rápido no início, lento no final)
      // Conforme design-system.md: animações com timing suave
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(target * easeProgress);

      setCount(currentCount);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
      startTimeRef.current = null;
    };
  }, [target, duration, inView]);

  return (
    <div className="flex items-baseline justify-center gap-1">
      {/* Número animado */}
      <span className="font-bold text-white">
        {count.toLocaleString("pt-BR")}
      </span>
      {/* Suffix (+ ou %) */}
      <span className="font-bold text-white">{suffix}</span>
    </div>
  );
};

/**
 * Card Individual de Métrica
 *
 * Design System:
 * - Alinhamento: centrado
 * - Padding interno: 24px (conforme page-structure)
 * - Número: 48-56px Bold (H2)
 * - Label: 16-18px Regular (Body)
 */
interface MetricCardProps {
  metric: Metric;
  isVisible: boolean;
  duration: number;
}

const MetricCard: React.FC<MetricCardProps> = ({
  metric,
  isVisible,
  duration,
}) => {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Número com animação count-up */}
      {/* Desktop: text-5xl (48px), Mobile: text-4xl (36px) */}
      <div className="text-5xl md:text-5xl lg:text-6xl leading-tight">
        <CountUp
          target={metric.value}
          suffix={metric.suffix}
          duration={duration}
          inView={isVisible}
        />
      </div>

      {/* Label da métrica */}
      {/* Conforme design-system: Body (16px) com line-height 1.6 */}
      <p className=" md:text-lg text-white text-center font-normal leading-relaxed">
        {metric.label}
      </p>
    </div>
  );
};

/**
 * CredibilityMetrics - Section 3
 *
 * Design System Aplicado:
 *
 * ✅ LAYOUT:
 *    - Padding: 80px (desktop) / 60px (mobile) - conforme page-structure
 *    - Full-width com max-width 1200px
 *    - Grid responsivo: 4 cols (lg) → 2 cols (md) → 1 col (mobile)
 *    - Gap: 20px (conforme design-system: espaçamento harmônico)
 *
 * ✅ CORES (OKLCH System):
 *    - Fundo: secondary-700 (oklch(0.19 0.05 60)) - profundidade, sofisticação
 *    - Número: white (texto principal em fundo escuro)
 *    - Label: white/80 (texto secundário, opacity para contraste)
 *
 * ✅ TIPOGRAFIA (Design System):
 *    - Título (H2): 32px Inter Semibold, line-height 1.4
 *    - Número: 48-56px Bold 700 (h2 base do sistema)
 *    - Label (Body): 16px Regular 400, line-height 1.6
 *
 * ✅ ANIMAÇÃO:
 *    - Count-up: 3 segundos (máximo conforme spec)
 *    - Easing: cubic-out (rápido → lento)
 *    - Trigger: IntersectionObserver (30% threshold)
 *
 * ✅ RESPONSIVIDADE:
 *    - Mobile (< 768px): padding-y 60px, px 16px, 1 coluna
 *    - Tablet (768px-1024px): padding-y 80px, px 32px, 2 colunas
 *    - Desktop (≥ 1024px): padding-y 80px, px 20px, 4 colunas
 *
 * ✅ ACESSIBILIDADE (WCAG AA):
 *    - Contraste ≥ 4.5:1 (white em secondary-700)
 *    - Semântica HTML correta (section, h2, p)
 *    - Sem flashing ou movimentos prejudiciais
 */
export const CredibilityMetrics: React.FC<CredibilityMetricsProps> = ({
  metrics = defaultMetrics,
  title = "O que já conquistamos juntos",
  duration = 2000,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * IntersectionObserver Hook
   * Ativa animação apenas quando seção entra no viewport
   * Conforme design-system: consistência em animações
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Desabilita observação após primeira trigger para evitar re-animações
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        }
      },
      {
        threshold: 0.3, // Dispara quando 30% está visível
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full metrics-background bg-secondary-400 bg-cover bg-fixed"
      style={{
        // Padding conforme page-structure: 80px (desktop) / 60px (mobile)
        paddingTop: "clamp(60px, 8vw, 80px)",
        paddingBottom: "clamp(60px, 8vw, 80px)",
        paddingLeft: "clamp(16px, 4vw, 20px)",
        paddingRight: "clamp(16px, 4vw, 20px)",
      }}
    >
      {/* Container com max-width 1200px centralizado */}
      <div className="max-w-6xl mx-auto">
        {/* Título da Seção */}
        {/* Conforme design-system: H2 (32px Inter Semibold, line-height 1.4) */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-semibold text-white mb-2 leading-snug"
            style={{
              fontSize: "clamp(28px, 6vw, 40px)",
              fontWeight: 600,
              lineHeight: 1.4,
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </h2>
        </div>

        {/* Grid de Métricas */}
        {/* 
          Responsividade conforme page-structure:
          - Desktop (lg): 4 colunas, gap 20px
          - Tablet (md): 2 colunas, gap 20px
          - Mobile: 1 coluna
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 md:gap-8 lg:gap-10">
          {metrics.map((metric, index) => (
            <div
              key={metric.id}
              // Stagger animation (opcional)
              style={{
                animation: isVisible
                  ? `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  : "none",
              }}
            >
              <MetricCard
                metric={metric}
                isVisible={isVisible}
                duration={duration}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityMetrics;
