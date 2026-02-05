import banner1 from "#/img-1.png";
import banner2 from "#/img-2.png";
import banner3 from "#/img-3.png";
import AboutSection from "@/shared/components/about-section/about-section";
import { HeroCarousel } from "@/shared/components/hero-carrousel/hero-carrousel";
import CredibilityMetrics from "@/shared/components/metrics/metrics";
import { Layout } from "../../layouts/layout";
import "./home.css";

const heroSlides = [
  {
    id: "1",
    title: "Festival Cultural 2026",
    description:
      "Participe do nosso maior evento cultural do ano! Música, arte e educação se encontram para transformar vidas.",
    ctaText: "Garanta seu ingresso",
    ctaLink: "/eventos",
    image: banner1,
  },
  {
    id: "2",
    title: "Cultura que Transforma",
    description:
      "Apoie nossos projetos culturais e educativos. Sua contribuição fortalece a autonomia de jovens e adultos.",
    ctaText: "Faça sua doação",
    ctaLink: "/doar",
    image: banner2,
  },
  {
    id: "3",
    title: "Oficinas Gratuitas",
    description:
      "Inscreva-se nas nossas oficinas de arte, música e tecnologia. Educação e cultura acessíveis para todos.",
    ctaText: "Inscreva-se agora",
    ctaLink: "/oficinas",
    image: banner3,
  },
];
export function Home() {
  return (
    <Layout PageTitle="Home">
      <HeroCarousel slides={heroSlides} autoplay={true} autoplayDelay={6000} />
      <AboutSection />
      <CredibilityMetrics />
    </Layout>
  );
}
