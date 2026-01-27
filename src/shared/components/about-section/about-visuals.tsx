import avatar1 from "#/avatar/avatar-1.png";
import avatar2 from "#/avatar/avatar-2.png";
import avatar3 from "#/avatar/avatar-3.png";

/**
 * AboutVisuals - Composição visual da seção "Sobre Nós"
 *
 * Renderiza:
 * - Imagem principal em card arredondado
 * - Card de depoimento sobreposto
 * - Avatares de beneficiários
 * - Quote inspiracional
 */
const AboutVisuals = ({ className = "" }) => {
  // Placeholder - substituir pela imagem real da ONG
  const mainImage: string =
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop";

  // Avatares de exemplo
  const avatars: string[] = [avatar1, avatar2, avatar3];

  return (
    <div className={`relative w-full ${className}`}>
      {/* Container Principal da Imagem */}
      <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
        <img
          src={mainImage}
          alt="Educadora em sala de aula com estudantes atentos durante atividade educativa"
          className="w-full h-full object-cover "
          loading="lazy"
        />

        {/* Overlay suave para melhor contraste */}
        <div className="absolute inset-0  from-black/20 to-transparent" />
      </div>

      {/* Card de Depoimento - Sobreposto */}
      <div
        className="hidden lg:block absolute lg:-bottom-10 lg:-left-10 lg:w-64 bg-white rounded-xl shadow-2xl px-5 py-3"
        style={{ boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)" }}
      >
        {/* Avatares */}
        <div className="flex items-center mb-3 sm:none md:none">
          <div className="flex -space-x-3">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt={`Beneficiário ${index + 1}`}
                className={`w-10 h-10 rounded-full bg-white border-2 border-primary-400 object-cover`}
              />
            ))}
          </div>
          <span className="ml-3 text-sm font-medium text-muted-foreground ">
            +2.4k pessoas
          </span>
        </div>

        {/* Depoimento */}
        <p className="text-sm lg:text-base  leading-relaxed text-zinc-800 font-medium ">
          "Através da cultura, encontrei minha voz e meu caminho."
        </p>
      </div>

      {/* Elemento decorativo - círculo de fundo */}
      <div
        className="absolute -top-4 -right-4 w-32 h-32 rounded-full -z-10 blur-3xl opacity-30"
        style={{ backgroundColor: "#FDE68A" }}
        aria-hidden="true"
      />
    </div>
  );
};

export default AboutVisuals;
