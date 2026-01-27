import banner1 from "#/img-1.png";
import banner2 from "#/img-2.png";
import banner3 from "#/img-3.png";
import { HeroCarousel } from "@/components/hero-carrousel/hero-carrousel";
import { Button } from "@/components/ui/button/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AboutSection from "@/shared/components/about-section/about-section";
import { Heart, LoaderCircle, Share2 } from "lucide-react";
import { Layout } from "../../layouts/layout";
import "./home.css";

const heroSlides = [
  {
    id: "1",
    title: "Calendário Greenpeace Brasil 2026",
    description:
      "Faça uma doação e garanta a nova edição do nosso calendário exclusivo. A luta pelo respeito à Amazônia depende do seu apoio!",
    ctaText: "Doe agora!",
    ctaLink: "/doar",
    image: banner1,

    productImage: "/images/calendario-3d.png",
  },
  {
    id: "2",
    title: "Proteja os Oceanos",
    description:
      "Junte-se a nós na luta contra a poluição plástica. Cada ação conta para preservar a vida marinha.",
    ctaText: "Saiba mais",
    ctaLink: "/oceanos",
    image: banner2,
  },
  {
    id: "3",
    title: "Energias Renováveis",
    description:
      "O futuro é renovável. Apoie nossa campanha por energia limpa e sustentável para todos.",
    ctaText: "Participe",
    ctaLink: "/energia",
    image: banner3,
  },
];
export function Home() {
  return (
    <Layout PageTitle="Home">
      <HeroCarousel slides={heroSlides} autoplay={true} autoplayDelay={6000} />
      <AboutSection />
      <div className="container mx-auto px-4 py-4 my-50 bg-secondary-500 rounded-2xl">
        <div className="grid grid-cols-3 gap-6 py-4 px-4">
          <div className="  rounded-lg text-white">
            <Card>
              <CardHeader>
                <CardTitle>Nome do Projeto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Descrição do projeto...
                </p>

                <div className="w-full bg-zinc-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: "65%" }}
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    className="cursor-pointer"
                    variant="primary"
                    size="sm"
                    loadingIndicator={<Heart size={16} />}
                    iconLeft={<Heart size={16} />}
                  >
                    <a
                      href="http://google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      google
                    </a>
                  </Button>

                  <Button
                    variant="secondary-outline"
                    size="sm"
                    iconLeft={<Share2 size={16} />}
                  >
                    Share
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    loadingIndicator={<Heart size={16} />}
                    iconLeft={<Heart size={16} />}
                  >
                    Donate
                  </Button>

                  <Button
                    variant="secondary-outline"
                    size="sm"
                    iconLeft={<Share2 size={16} />}
                  >
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="  rounded-lg text-white">
            <Card>
              <CardHeader>
                <CardTitle>Nome do Projeto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Descrição do projeto...
                </p>

                <div className="w-full bg-zinc-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: "65%" }}
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    className="cursor-pointer"
                    variant="primary"
                    size="sm"
                    loadingIndicator={<Heart size={16} />}
                    iconLeft={<Heart size={16} />}
                  >
                    <a
                      href="http://google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      google
                    </a>
                  </Button>

                  <Button
                    variant="secondary-outline"
                    size="sm"
                    iconLeft={<Share2 size={16} />}
                  >
                    Share
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    loadingIndicator={<Heart size={16} />}
                    iconLeft={<Heart size={16} />}
                  >
                    Donate
                  </Button>

                  <Button
                    variant="secondary-outline"
                    size="sm"
                    iconLeft={<Share2 size={16} />}
                  >
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="  rounded-lg text-white">
            <Card>
              <CardHeader>
                <CardTitle>Nome do Projeto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Descrição do projeto...
                </p>

                <div className="w-full bg-zinc-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: "65%" }}
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    className="cursor-pointer"
                    variant="primary"
                    size="sm"
                    isLoading={true}
                    loadingIndicator={<LoaderCircle size={16} />}
                    iconLeft={<Heart size={16} />}
                  >
                    <a
                      href="http://google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      google
                    </a>
                  </Button>

                  <Button
                    variant="secondary-outline"
                    size="sm"
                    iconLeft={<Share2 size={16} />}
                  >
                    Share
                  </Button>
                  <Button>Share</Button>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    loadingIndicator={<Heart size={16} />}
                    iconLeft={<Heart size={16} />}
                  >
                    Donate
                  </Button>

                  <Button
                    variant="secondary-outline"
                    size="sm"
                    iconLeft={<Share2 size={16} />}
                  >
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
