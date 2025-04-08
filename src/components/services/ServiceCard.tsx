
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useIsMobile } from "@/hooks/use-mobile";

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    subtitle: string;
    imageTitle?: string; // New prop for the title shown on the image
    description: string;
    badges: string[];
    imageSrc?: string;
  };
  isHighlighted: boolean;
  hoveredSection: string | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ServiceCard = ({ 
  service,
  isHighlighted,
  hoveredSection,
  onMouseEnter,
  onMouseLeave
}: ServiceCardProps) => {
  const { scrollToSection } = useScrollToSection();
  const isMobile = useIsMobile();
  
  // Use imageTitle if provided, otherwise fall back to subtitle
  const displayImageTitle = service.imageTitle || service.title;
  
  return (
    <Card 
      className={`border-l-4 border-l-green-600 rounded-xl transition-all duration-300 ${isMobile ? '' : 'h-[240px]'}
                ${isHighlighted 
                  ? "shadow-[0_0_20px_rgba(34,197,94,0.3)] relative z-10" 
                  : hoveredSection ? "opacity-80" : "hover:shadow-lg"}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <CardContent className="p-0 h-full">
        <div className={`${isMobile ? 'grid grid-cols-1' : 'grid grid-cols-[1fr_2fr]'} h-full`}>
          {/* Image Section */}
          <div className={`relative ${isMobile ? 'h-40' : 'h-full'} overflow-hidden ${isMobile ? 'rounded-t-lg' : 'rounded-l-lg'}`}>
            {service.imageSrc ? (
              <div className="absolute inset-0">
                <img 
                  src={service.imageSrc} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                {/* Added grey overlay for all images to improve text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
                  <h4 className="text-2xl font-bold uppercase tracking-wider text-shadow">{service.title}</h4>
                  <div className="w-20 h-0.5 bg-green-400 my-3"></div>
                  <p className="text-lg mt-2 text-center max-w-[90%] text-shadow font-medium">{displayImageTitle}</p>
                </div>
              </div>
            ) : (
              <div className={`bg-green-50 p-3 flex flex-col items-center justify-center h-full border-r border-green-100 ${isMobile ? 'rounded-t-lg' : 'rounded-l-lg'}`}>
                <h4 className="font-bold text-lg text-green-800">{displayImageTitle}</h4>
              </div>
            )}
          </div>
          
          {/* Content Section */}
          <div className="p-5 flex flex-col h-full justify-between">
            <div>
              <h4 className="font-bold text-xl md:text-2xl text-green-700 mb-2">{service.subtitle}</h4>
              <p className="text-gray-600 mb-3 text-base">{service.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {service.badges.map((badge, i) => (
                  <Badge key={i} variant="outline" className="bg-green-50 text-green-700 border-green-200 text-sm">
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white transition-colors"
                asChild
              >
                <a href="#contact" onClick={scrollToSection("contact")}>
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
