import { useCallback, useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button/button";

interface HeroSlide {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;

  productImage?: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  autoplay?: boolean;
  autoplayDelay?: number;
  className?: string;
}

export function HeroCarousel({
  slides,
  autoplay = true,
  autoplayDelay = 5000,
  className,
}: HeroCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Plugin de autoplay do Embla
  const autoplayPlugin = autoplay
    ? Autoplay({ delay: autoplayDelay, stopOnInteraction: false })
    : undefined;

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <div
      className={cn(
        "relative w-full h-[60vh] sm:h-[65vh] lg:h-[70vh] overflow-hidden",
        className
      )}
    >
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          duration: 30,
        }}
        plugins={autoplayPlugin ? [autoplayPlugin] : []}
        className="w-full h-[60vh] sm:h-[65vh] lg:h-[70vh]"
      >
        <CarouselContent className="h-[60vh] sm:h-[65vh] lg:h-[70vh]">
          {slides.map((slide) => (
            <CarouselItem
              key={slide.id}
              className="relative h-[60vh] sm:h-[65vh] lg:h-[70vh]"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-full">
                  <div className="max-w-2xl">
                    {/* Title */}
                    <h1 className="font-volkhov text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
                      {slide.description}
                    </p>

                    {/* CTA Button */}
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                      <Button size="lg" variant={"primary"}>
                        <a href={slide.ctaLink}>{slide.ctaText}</a>
                      </Button>
                    </div>
                  </div>

                  {/* Product Image Float */}
                  {slide.productImage && (
                    <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden lg:block animate-in fade-in slide-in-from-right-8 duration-1000">
                      <img
                        src={slide.productImage}
                        alt="Product"
                        className="w-72 xl:w-80 h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 cursor-pointer sm:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center  rounded-full transition-all duration-300 hover:scale-110 group"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white cursor-pointer transition-colors" />
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-4 cursor-pointer sm:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center  rounded-full transition-all duration-300 hover:scale-110 group"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white cursor-pointer transition-colors" />
        </button>
      </Carousel>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-zinc-900/30 backdrop-blur-sm px-5 py-2.5 rounded-full">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "transition-all duration-300 rounded-full cursor-pointer ",
              index === current
                ? "w-8 h-2 bg-primary-500 "
                : "w-2 h-2 bg-zinc-50 hover:bg-white/70"
            )}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
