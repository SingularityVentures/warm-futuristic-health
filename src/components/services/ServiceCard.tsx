
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    subtitle: string;
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
  return (
    <Card 
      className={`border-l-4 border-l-green-600 rounded-xl transition-all duration-300
                ${isHighlighted 
                  ? "shadow-[0_0_20px_rgba(34,197,94,0.3)] relative z-10" 
                  : hoveredSection ? "opacity-80" : "hover:shadow-lg"}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <CardContent className="p-0">
        <div className="grid md:grid-cols-[120px_1fr] items-center">
          <div className={`bg-green-50 p-3 flex flex-col items-center justify-center h-full border-r border-green-100 rounded-l-lg`}>
            <h4 className="font-bold text-lg text-green-800">{service.title}</h4>
          </div>
          <div className="p-5">
            <h4 className="font-bold text-xl md:text-2xl text-green-700 mb-2">{service.subtitle}</h4>
            <p className="text-gray-600 mb-3 text-sm">{service.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {service.badges.map((badge, i) => (
                <Badge key={i} variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                  {badge}
                </Badge>
              ))}
            </div>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white transition-colors"
            >
              Learn more
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
