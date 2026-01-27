import AboutContent from "./about-content";
import AboutVisuals from "./about-visuals";

/**
 * AboutSection - Seção "Sobre Nós" da landing page
 *
 * Container principal que integra o conteúdo textual (esquerda)
 * e a composição visual (direita) em um layout responsivo.
 */
const AboutSection = () => {
  return (
    <section
      className="py-16 md:py-20 px-4 md:px-5 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <AboutVisuals className="lg:order-2" />
            <AboutContent className="lg:order-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
