
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const CreateBusinessTab = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  
  const createServices = [
    {
      id: "innovation",
      title: "Innovation",
      subtitle: "Venture Building & Go-To-Market",
      description: "I help you to create bold ideas that can turn into digital, scalable business models and validate them. Finally, I create go-to-market strategies and execute them. I build, launch, and scale ventures that win markets.",
      badges: ["Ideation", "Design Thinking", "Hypothesis Testing", "Go-To-Market", "Venture Building"],
      imageSrc: "/lovable-uploads/8439b94e-c0a4-4705-a4c1-0fbbfb9a281d.png",
    },
    {
      id: "mvp",
      title: "MVP",
      subtitle: "Rapid MVP Development",
      description: "I help you quickly develop and deploy minimal viable products to test your ideas in the real world. Using lean methodologies and iterative development, we can validate assumptions and gather user feedback faster.",
      badges: ["Lean Startup", "Rapid Prototyping", "User Testing", "Agile Development", "Feedback Collection"],
      imageSrc: "/lovable-uploads/1868fe1c-abec-474c-8788-d83afc98502e.png",
    },
    {
      id: "scaling",
      title: "Scaling",
      subtitle: "From MVP to Market Leader",
      description: "Once your concept is validated, I help scale your solution to reach its full market potential. This includes optimizing product-market fit, establishing operational excellence, and creating sustainable growth engines.",
      badges: ["Growth Strategy", "Operations Scaling", "Product Refinement", "Market Expansion", "Investor Readiness"],
      imageSrc: "/lovable-uploads/b1c71173-7634-447b-b0f3-2552fea88d8e.png",
    }
  ];

  const handleTileHover = (id: string | null) => {
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

      {/* Service Cards - Vertical layout matching TransformBusinessTab */}
      <div className="space-y-6">
        {createServices.map((service, index) => (
          <div 
            key={index}
            className={`${hoveredSection === service.id ? "scale-[1.02]" : hoveredSection ? "opacity-80" : ""} transition-all duration-300`}
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
