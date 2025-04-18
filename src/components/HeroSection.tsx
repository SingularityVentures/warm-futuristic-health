
import { ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const HeroSection = () => {
  const { scrollToSection } = useScrollToSection();
  
  return <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-green-950/70 z-10"></div>
        <video autoPlay muted loop playsInline className="object-cover w-full h-full">
          <source src="/20250406_2107_Precision in High-Tech Lab_simple_compose_01jr67z47kegkvzd75d7bnpydm.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <div className="animate-fade-in-up max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-oswald font-bold mb-6 text-white tracking-wider">
            <span className="block">
              <span className="text-green-600">S</span>
              <span>INGULARITY </span> 
              <span className="text-green-600">V</span>
              <span>ENTURES</span>
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium mb-6 text-white font-oswald tracking-wide">
            Digital Transformation for Pharma and Healthcare
          </h2>
          <Separator className="h-1 w-24 md:w-32 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6" />
          <p className="text-xl md:text-2xl mb-12 text-gray-100 font-light font-raleway">Project Manager | Consultant | Venture Builder</p>
        </div>
      </div>
      
      {/* Animated scroll down indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <a href="#achievements" className="text-white flex flex-col items-center group" onClick={scrollToSection("achievements")}>
          <span className="text-sm mb-2 opacity-80 group-hover:opacity-100 transition-opacity font-raleway">Scroll to explore</span>
          <div className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center animate-bounce">
            <ChevronDown className="h-5 w-5" />
          </div>
        </a>
      </div>
    </section>;
};

export default HeroSection;
