
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { useIsMobile } from "@/hooks/use-mobile";

const CreateBusinessTab = () => {
  const isMobile = useIsMobile();
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  
  const createServices = [
    {
      id: "innovation",
      title: "Ideate",
      imageTitle: "Business Ideation", // Title shown on the image
      subtitle: "Business Model Ideation", // Title shown in the card content
      description: "I help you to create bold, digital-first business model ideas that fuel growth and impact the bottom line.",
      badges: ["Ideation", "Business Model Canvas", "Design Thinking", "Workshops"],
      imageSrc: "/lovable-uploads/8439b94e-c0a4-4705-a4c1-0fbbfb9a281d.png",
    },
    {
      id: "mvp",
      title: "Validate",
      imageTitle: "Model Validation", // Title shown on the image
      subtitle: "Business Model Validation", // Title shown in the card content
      description: "Got a bold idea? I help you rapidly test business ideas in the real world — using lean methods to validate key assumptions before making major investments.",
      badges: ["Hypothesis Testing", "Lean Startup", "Rapid Prototyping", "User Testing", "Agile Development"],
      imageSrc: "/lovable-uploads/1868fe1c-abec-474c-8788-d83afc98502e.png",
    },
    {
      id: "scaling",
      title: "Build",
      imageTitle: "Venture Building", // Title shown on the image
      subtitle: "Venture Building and Go-To-Market", // Title shown in the card content
      description: "As a former entrepreneur, I know how to build and launch ventures from scratch — crafting go-to-market strategies, setting up scalable operations, and handing over a ready-to-run business.",
      badges: ["Go-To-Market", "GTM", "Venture Building", "Startup", "Market Expansion"],
      imageSrc: "/lovable-uploads/b1c71173-7634-447b-b0f3-2552fea88d8e.png",
    }
  ];

  const handleTileHover = (id: string | null) => {
    if (isMobile) return; // Disable hover effects on mobile
    setHoveredSection(id);
  };

  return (
    <div className="mb-12">
      {/* Service Cards - Vertical layout matching TransformBusinessTab */}
      <div className="space-y-6">
        {createServices.map((service, index) => (
          <div 
            key={index}
            className={`${!isMobile && hoveredSection === service.id ? "scale-[1.02]" : !isMobile && hoveredSection ? "opacity-80" : ""} transition-all duration-300`}
            onMouseEnter={() => handleTileHover(service.id)}
            onMouseLeave={() => handleTileHover(null)}
          >
            <ServiceCard
              service={service}
              isHighlighted={hoveredSection === service.id}
              hoveredSection={hoveredSection}
              onMouseEnter={() => handleTileHover(service.id)}
              onMouseLeave={() => handleTileHover(null)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateBusinessTab;
