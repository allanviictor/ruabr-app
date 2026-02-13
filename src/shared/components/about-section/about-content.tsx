import { Button } from "@/ui/button/button";
import { ArrowRight, BookOpen, Users, Wrench } from "lucide-react";

/**
 * AboutContent - Conteúdo textual da seção "Sobre Nós"
 *
 * Renderiza:
 * - Micro-headline "QUEM SOMOS"
 * - Título principal com destaque
 * - Parágrafo introdutório
 * - Lista de 3 destaques com ícones
 * - Botão CTA
 */
const AboutContent = ({ className = "" }) => {
  const highlights = [
    {
      icon: BookOpen,
      iconColor: "text-secondary-500",
      bgColor: "bg-secondary-50",
      title: "Projetos educativos",
      description: "Espaços de aprendizado que estimulam o pensamento crítico.",
    },
    {
      icon: Wrench,
      iconColor: "text-secondary-500",
      bgColor: "bg-secondary-50",
      title: "Cursos e oficinas",
      description:
        "Formações em tecnologia e empreendedorismo para ampliar a renda.",
    },
    {
      icon: Users,
      iconColor: "text-secondary-500",
      bgColor: "bg-secondary-50",
      title: "Ações em rede",
      description: "Conectando conhecimento e empatia em escolas e empresas.",
    },
  ];

  return (
    <div className={className}>
      {/* Micro-headline */}
      <p className="text-primary font-medium mb-3 tracking-wide uppercase">
        Quem somos
      </p>

      {/* Título Principal */}
      <h2
        id="about-heading"
        className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6 leading-tight"
      >
        Educação, acolhimento e{" "}
        <span className="relative inline-block">
          <span className="relative z-10 text-primary">
            oportunidades reais
          </span>
          <span
            className="absolute -bottom-1 left-0 w-full h-3 z-0 bg-secondary-200/70  "
            style={{
              borderRadius: "65% 35% 55% 45% / 40% 70% 30% 60%",
            }}
          />
        </span>
      </h2>

      {/* Parágrafo Introdutório */}
      <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10 lg:mb-12 max-w-[90%]">
        Somos uma organização social que acredita que a educação e a
        solidariedade podem transformar realidades. Fortalecemos a autonomia de
        jovens e adultos através de projetos práticos.
      </p>

      {/* Lista de Destaques */}
      <div className="space-y-6 lg:space-y-8 mb-10">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-start gap-4">
              {/* Ícone com background */}
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-lg ${item.bgColor} flex items-center justify-center`}
              >
                <Icon
                  className={item.iconColor}
                  size={24}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </div>

              {/* Conteúdo */}
              <div className="flex-1">
                <h3 className="text-base lg:text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <Button
        className="cursor-pointer w-full md:w-auto hover:no-underline text-foreground hover:bg-neutral-100 transition-colors"
        variant={"outline"}
        iconRight={<ArrowRight size={20} />}
      >
        <a rel="noopener noreferrer">Conheça nossos projetos</a>
      </Button>
    </div>
  );
};

export default AboutContent;
