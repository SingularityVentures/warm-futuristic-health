
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import VennDiagram from "./VennDiagram";
import ServiceCard from "./ServiceCard";

const TransformBusinessTab = () => {
  const isMobile = useIsMobile();
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  
  const transformServices = [
    {
      id: "technology",
      title: "Technology",
      subtitle: "(GxP) Software Implementation",
      description: "Specialized support for implementing and validating GxP-compliant systems. From vendor selection to deployment, I ensure alignment with regulatory standards.",
      badges: ["Validation", "Qualification", "Compliance", "GxP", "Stakeholder Mgmt", "End-To-End"],
    },
    {
      id: "processes",
      title: "Processes",
      subtitle: "Business Process Transformation",
      description: "Redesign of core workflows, systems, and operations to improve efficiency, reduce costs, and enhance customer value by leveraging technology (AI) and data analytics.",
      badges: ["AI", "RPA", "Automation"],
    },
    {
      id: "people",
      title: "People",
      subtitle: "Change Management & Organizational Change",
      description: "Transitioning individuals, teams, and organizations from a current state to a desired future state while minimizing resistance and maximizing adoption.",
      badges: ["Trainings", "Workshops", "Communication", "Multiplier"],
    },
  ];

  const handleCircleHover = (id: string | null) => {
    setHoveredSection(id);
  };

  const isHighlighted = (id: string) => {
    return hoveredSection === id;
  };

  return (
    <div className="mb-12">
      <h3 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-4">
        How I help you to transform your existing business
      </h3>
      <p className="text-center text-gray-600 max-w-4xl mx-auto mb-8">
        Successful digital transformation needs to encompass all of the three sections: Technology, Processes and People. 
        I offer services to do each individual section or all of the three combined.
      </p>

      {/* Two-column layout: Venn diagram on left, Service Cards on right */}
      <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-8 items-center`}>
        {/* First column: Venn Diagram */}
        <div className={`flex justify-center items-center ${isMobile ? "order-1" : "order-1"}`}>
          <VennDiagram 
            hoveredSection={hoveredSection}
            handleCircleHover={handleCircleHover}
            isMobile={isMobile}
          />
        </div>

        {/* Second column: Service Cards */}
        <div className={`space-y-6 ${isMobile ? "order-2" : "order-2"}`}>
          {transformServices.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isHighlighted={isHighlighted(service.id)}
              hoveredSection={hoveredSection}
              onMouseEnter={() => handleCircleHover(service.id)}
              onMouseLeave={() => handleCircleHover(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransformBusinessTab;
