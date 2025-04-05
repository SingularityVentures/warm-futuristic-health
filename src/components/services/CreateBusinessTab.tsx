
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import JourneyVisualization from "./JourneyVisualization";
import ServiceCard from "./ServiceCard";

const CreateBusinessTab = () => {
  const isMobile = useIsMobile();
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  
  const createServices = {
    id: "innovation",
    title: "Innovation",
    subtitle: "Venture Building & Go-To-Market",
    description: "I help you to create bold ideas that can turn into digital, scalable business models and validate them. Finally, I create go-to-market strategies and execute them. I build, launch, and scale ventures that win markets.",
    badges: ["Ideation", "Design Thinking", "Hypothesis Testing", "Go-To-Market", "Venture Building"],
    steps: [
      { number: 1, title: "Ideation", description: "Generate innovative concepts" },
      { number: 2, title: "Validation", description: "Test and refine ideas" },
      { number: 3, title: "Go-to-Market", description: "Launch and scale" },
    ]
  };

  const handleCircleHover = (id: string | null) => {
    setHoveredSection(id);
  };

  return (
    <div className="mb-12">
      <h3 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-4">
        How I help you to create new business
      </h3>
      <p className="text-center text-gray-600 max-w-4xl mx-auto mb-8">
        Strategic guidance for launching healthcare and life science ventures—from concept validation to market entry and scaling.
      </p>

      {/* Two-column layout: Journey visualization on left, Service Cards on right */}
      <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-8 items-center`}>
        {/* First column: Journey visualization */}
        <div className={`flex justify-center items-center ${isMobile ? "order-1" : "order-1"}`}>
          <JourneyVisualization 
            steps={createServices.steps}
            isHighlighted={hoveredSection === "innovation"}
            isMobile={isMobile}
            onMouseEnter={() => handleCircleHover("innovation")}
            onMouseLeave={() => handleCircleHover(null)}
          />
        </div>

        {/* Second column: Service Card */}
        <div className={`${isMobile ? "order-2" : "order-2"}`}>
          <ServiceCard
            service={createServices}
            isHighlighted={hoveredSection === "innovation"}
            hoveredSection={hoveredSection}
            onMouseEnter={() => handleCircleHover("innovation")}
            onMouseLeave={() => handleCircleHover(null)}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateBusinessTab;
