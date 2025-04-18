
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const companies = [
  "BioNTech",
  "Merck",
  "Sanofi",
  "Dialogue Health",
  "Argumed",
  "Healthcare Shapers",
  "MPC Biotech",
  "Vertwo Consulting",
  "Ernst & Young",
  "Capgemini Consulting",
];

export function CompanyCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      dragFree: true,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <div className="w-full mt-16">
      <Carousel
        ref={emblaRef}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {companies.map((company, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="p-4">
                <p className="text-xl md:text-2xl text-gray-600 font-medium text-center font-raleway">
                  {company}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
