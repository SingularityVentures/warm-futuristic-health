
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
      imageSrc: "/lovable-uploads/66c744b1-0763-459f-82a5-48ff3f186a1c.png",
    },
    {
      id: "mvp",
      title: "MVP",
      subtitle: "Rapid MVP Development",
      description: "I help you quickly develop and deploy minimal viable products to test your ideas in the real world. Using lean methodologies and iterative development, we can validate assumptions and gather user feedback faster.",
      badges: ["Lean Startup", "Rapid Prototyping", "User Testing", "Agile Development", "Feedback Collection"],
      imageSrc: "/lovable-uploads/bfbb1e1e-799a-4916-9f0b-f26f853aa17b.png",
    },
    {
      id: "scaling",
      title: "Scaling",
      subtitle: "From MVP to Market Leader",
      description: "Once your concept is validated, I help scale your solution to reach its full market potential. This includes optimizing product-market fit, establishing operational excellence, and creating sustainable growth engines.",
      badges: ["Growth Strategy", "Operations Scaling", "Product Refinement", "Market Expansion", "Investor Readiness"],
      imageSrc: "/lovable-uploads/dd7b86f5-cc61-4c8c-b907-db217cdce5eb.png",
    }
  ];

  const handleCardHover = (id: string | null) => {
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

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {createServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            isHighlighted={hoveredSection === service.id}
            hoveredSection={hoveredSection}
            onMouseEnter={() => handleCardHover(service.id)}
            onMouseLeave={() => handleCardHover(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default CreateBusinessTab;
