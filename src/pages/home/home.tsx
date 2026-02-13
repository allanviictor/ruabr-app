import AboutSection from "@/shared/components/about-section/about-section";
import { SocialImpactSection } from "@/shared/components/campaign/campaign";
import { HeroCarousel } from "@/shared/components/hero-carrousel/hero-carrousel";
import CredibilityMetrics from "@/shared/components/metrics/metrics";
import { TeamSection } from "@/shared/components/team/team";
import { heroSlides, programas } from "@/shared/dados-estaticos";
import { Card, CardContent, CardHeader } from "@/ui/card";
import { Layout } from "../../layouts/layout";
import "./home.css";

export function Home() {
  return (
    <Layout PageTitle="Home">
      <HeroCarousel slides={heroSlides} autoplay={true} autoplayDelay={6000} />
      <AboutSection />
      <CredibilityMetrics />
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-md font-medium text-primary-600 uppercase tracking-wider mb-3">
              NOSSA ATUAÇÃO
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nossos Programas e Projetos
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {programas.map((program) => (
              <Card
                key={program.id}
                className="group hover:shadow-lg transition-all duration-300 border-border  hover:border-primary-500"
              >
                <CardHeader className="">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 ${program.bgColor} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className={program.iconColor}>
                      <program.icon className="w-6 h-6" key={program.id} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground ">
                    {program.title}
                  </h3>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SocialImpactSection />
      <TeamSection />
    </Layout>
  );
}
