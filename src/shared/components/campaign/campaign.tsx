import { Card, CardContent } from "@/ui/card";

interface ImpactProject {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  status: string;
  collectedAmount: number;
  goalAmount: number;
  progressPercent: number;
}

const projects: ImpactProject[] = [
  {
    id: "2",
    title: "Horta Comunitária Urbana",
    description:
      "Transformando terrenos abandonados em hortas comunitárias para fornecer alimentos frescos a famílias em situação de vulnerabilidade alimentar.",
    imageUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    imageAlt: "Crianças aprendendo sobre horta",
    status: "Doações em breve",
    collectedAmount: 0,
    goalAmount: 0,
    progressPercent: 0,
  },
];

function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  });
}

interface ProgressBarProps {
  percent: number;
  collected: number;
  goal: number;
}

function ProgressBar({ percent, collected, goal }: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-foreground">
          Meta alcançada
        </span>
        <span className="text-sm font-semibold text-foreground">
          {percent}%
        </span>
      </div>

      <div
        className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${percent}% da meta alcançada`}
      >
        <div
          className="h-full bg-secondary rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="flex items-center justify-between mt-2">
        <span className="text-xs text-muted-foreground">
          Arrecadado: {formatCurrency(collected)}
        </span>
        <span className="text-xs text-muted-foreground">
          Meta: {formatCurrency(goal)}
        </span>
      </div>
    </div>
  );
}

interface StatusBadgeProps {
  label: string;
}

function StatusBadge({ label }: StatusBadgeProps) {
  return (
    <span className="absolute top-3 right-3 bg-white/90 text-secondary-700 text-xs font-medium px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
      {label}
    </span>
  );
}

interface ImpactCardProps {
  project: ImpactProject;
}

function ImpactCard({ project }: ImpactCardProps) {
  return (
    <Card className="w-full px-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Coluna de Imagem */}
          <div className="relative md:w-[40%] w-full shrink-0">
            <img
              src={project.imageUrl}
              alt={project.imageAlt}
              className="w-full h-[250px] md:h-[300px] object-cover rounded-l-xl rounded-r-xl"
            />
            <StatusBadge label={project.status} />
          </div>

          {/* Coluna de Texto */}
          <div className="flex flex-col justify-between gap-4 p-6 md:p-8 md:w-[60%]">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl md:text-2xl font-bold text-secondary-400 leading-snug">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <ProgressBar
                percent={project.progressPercent}
                collected={project.collectedAmount}
                goal={project.goalAmount}
              />

              {/* <div className="flex justify-center md:justify-end">
                <Button
                  variant={"secondary-default"}
                  aria-label={`Doar para o projeto: ${project.title}`}
                >
                  Doar para este projeto
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function SocialImpactSection() {
  return (
    <section
      className="w-full py-15 px-4"
      aria-labelledby="social-impact-title"
      style={{
        background:
          "linear-gradient(180deg, var(--color-background) 10%, var(--color-base-100) 40%, var(--color-base-100) 60%, var(--color-background) 90%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        {/* Título */}

        <div className="text-center  ">
          <p className="text-md font-medium text-secondary uppercase tracking-wider mb-3">
            Projetos destaque
          </p>
          <h2
            id="social-impact-title"
            className="text-[36px] lg:text-[40px] font-bold text-foreground text-center leading-tight"
          >
            Campanhas Ativas
          </h2>
        </div>
        {/* Cards */}
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ImpactCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
