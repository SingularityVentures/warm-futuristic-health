
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
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  return (
    <div className="w-full mt-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-semibold heading-gradient">
          Companies I've worked for and with
        </h3>
        <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 mx-auto mt-4"></div>
      </div>
      
      <div className="bg-gradient-to-r from-gray-50 to-white py-6 rounded-lg shadow-inner border border-gray-100">
        <Carousel
          ref={emblaRef}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {companies.map((company, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                <div className="p-4 transform transition-all duration-300 hover:scale-105">
                  <div className="bg-white rounded-lg p-4 shadow-md h-24 flex items-center justify-center border border-gray-100">
                    <p className="text-lg md:text-xl text-gray-700 font-medium text-center font-raleway">
                      {company}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
