
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with DNA/tech overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-green-950/70 z-10"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-medical-technology-with-a-3d-scan-of-the-human-body-12462-large.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Tech overlay pattern */}
        <div className="absolute inset-0 z-5 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0zNiAzNGg0djFoLTR6TTM2IDMxaDR2MWgtNHpNMzUgMzJ2M2gtMVYzMnpNMzggMzJ2M2gtMVYzMnpNMzMgMzBoMTV2MTVIMzN6Ii8+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <div className="animate-fade-in-up max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-oswald font-bold mb-6 text-white tracking-tight">
            <span className="block">SINGULARITY VENTURES</span>
          </h1>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
          <h2 className="text-2xl md:text-4xl font-medium mb-8 text-white font-oswald tracking-wide">
            Digital Transformation for Pharma and Healthcare
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-100 font-light font-raleway">
            <span className="border-b-2 border-green-500 pb-1">Project Manager</span>
            <span className="mx-3 border-b-2 border-green-500 pb-1">Consultant</span>
            <span className="border-b-2 border-green-500 pb-1">Technologist</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-lg shadow-lg shadow-green-700/30 font-raleway">
              <a href="#services">My Services</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 text-lg font-raleway">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated scroll down indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <a href="#achievements" className="text-white flex flex-col items-center group">
          <span className="text-sm mb-2 opacity-80 group-hover:opacity-100 transition-opacity font-raleway">Scroll to explore</span>
          <div className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center animate-bounce">
            <ChevronDown className="h-5 w-5" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
