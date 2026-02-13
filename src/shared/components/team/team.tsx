import Person1 from "#/team/allan-victor.jpg";
import Person4 from "#/team/antonio-neto.jpg";
import Person2 from "#/team/edson-gomes.jpg";
import Person3 from "#/team/eliel.jpg";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

const members: TeamMember[] = [
  {
    id: "1",
    name: "Edson Gomes Ramos",
    role: "Fundador & Diretor Executivo",
    imageUrl: Person2,
  },
  {
    id: "2",
    name: "Allan Victor de Moura",
    role: "Coordenador de Projetos",
    imageUrl: Person1,
  },

  {
    id: "3",
    name: "Eliel Ferreira",
    role: "Educador Social",
    imageUrl: Person3,
  },
  {
    id: "4",
    name: "Antônio Joaquim",
    role: "Coordenador de Voluntários",
    imageUrl: Person4,
  },
];

interface MemberCardProps {
  member: TeamMember;
}

function MemberCard({ member }: MemberCardProps) {
  return (
    <article className="group rounded-xl overflow-hidden bg-card shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      {/* Foto */}
      <div className="overflow-hidden h-[200px] sm:h-[260px] lg:h-[280px] bg-base-200">
        <img
          src={member.imageUrl}
          alt={`Foto de ${member.name}`}
          className="w-full h-80 xs:h-full  object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="px-4 py-5 bg-card">
        <p className="text-base font-semibold text-foreground leading-snug">
          {member.name}
        </p>
        <p className="text-[13px] text-muted-foreground mt-1">{member.role}</p>
      </div>
    </article>
  );
}

export function TeamSection() {
  return (
    <section
      className="w-full py-15 lg:py-20 px-4 lg:px-6 bg-white"
      aria-labelledby="team-section-title"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-12">
          {/* Título + descrição */}
          <div className="max-w-[700px]">
            <h2
              id="team-section-title"
              className="text-[26px] lg:text-[32px] font-bold text-foreground mb-4 leading-tight"
            >
              Nossa equipe
            </h2>
            <p className="text-[15px] text-muted-foreground leading-[1.7]">
              Somos um time dedicado e apaixonado por transformar vidas através
              da educação e da solidariedade. Cada membro traz experiência,
              empatia e compromisso para construir um impacto real nas
              comunidades que atendemos.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-1 px-6 md:px-auto md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
