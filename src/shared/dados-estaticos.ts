import banner1 from "#/img-1.png";
import banner2 from "#/img-2.png";
import banner3 from "#/img-3.png";
import { GraduationCap, Heart, Laptop, type LucideIcon } from "lucide-react";

export interface Programas {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}
export const programas: Programas[] = [
  {
    id: "education",
    icon: GraduationCap,
    title: "Educação para o Futuro",
    description:
      "Aulas de reforço, alfabetização e preparação para vestibulares para jovens de baixa renda.",
    bgColor: "bg-primary-50",
    iconColor: "text-primary-500",
  },
  {
    id: "digital",
    icon: Laptop,
    title: "Inclusão Digital",
    description:
      "Cursos de programação, design e pacote office para inserir jovens no mercado de tecnologia.",
    bgColor: "bg-secondary-50",
    iconColor: "text-secondary-500",
  },
  {
    id: "psychosocial",
    icon: Heart,
    title: "Apoio Psicossocial",
    description:
      "Atendimento psicológico gratuito e grupos de apoio para famílias em vulnerabilidade.",
    bgColor: "bg-[oklch(0.95_0.02_330)]",
    iconColor: "text-[oklch(0.35_0.08_330)]",
  },
];

interface HeroSlider {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}
export const heroSlides: HeroSlider[] = [
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
