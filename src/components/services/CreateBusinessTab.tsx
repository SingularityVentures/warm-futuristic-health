
import { useState } from "react";
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
    imageSrc: "/lovable-uploads/66c744b1-0763-459f-82a5-48ff3f186a1c.png",
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

      {/* Combined approach: Journey visualization and Merged Service Card */}
      <div className="space-y-8">
        <ServiceCard
          service={createServices}
          isHighlighted={hoveredSection === "innovation"}
          hoveredSection={hoveredSection}
          onMouseEnter={() => handleCircleHover("innovation")}
          onMouseLeave={() => handleCircleHover(null)}
        />
          
        <div className="flex justify-center items-center">
          <JourneyVisualization 
            steps={createServices.steps}
            isHighlighted={hoveredSection === "innovation"}
            isMobile={isMobile}
            onMouseEnter={() => handleCircleHover("innovation")}
            onMouseLeave={() => handleCircleHover(null)}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateBusinessTab;
