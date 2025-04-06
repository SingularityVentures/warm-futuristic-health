
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
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
      imageSrc: "/lovable-uploads/387031f2-b62f-42f7-88f6-51955a71c962.png"
    },
    {
      id: "processes",
      title: "Processes",
      subtitle: "Business Process Transformation",
      description: "Redesign of core workflows, systems, and operations to improve efficiency, reduce costs, and enhance customer value by leveraging technology (AI) and data analytics.",
      badges: ["AI", "RPA", "Automation"],
      imageSrc: "/lovable-uploads/dd7b86f5-cc61-4c8c-b907-db217cdce5eb.png"
    },
    {
      id: "people",
      title: "People",
      subtitle: "Change Management & Organizational Change",
      description: "Transitioning individuals, teams, and organizations from a current state to a desired future state while minimizing resistance and maximizing adoption.",
      badges: ["Trainings", "Workshops", "Communication", "Multiplier"],
      imageSrc: "/lovable-uploads/d0421a57-955d-4a3d-95fa-8c11795966d5.png"
    },
  ];

  const handleTileHover = (id: string | null) => {
    setHoveredSection(id);
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

      {/* Two-column layout: Image tiles on left, Service Cards on right */}
      <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-8 items-start`}>
        {/* First column: Service Tiles */}
        <div className="flex flex-col space-y-4">
          {/* Digital Transformation label in middle */}
          <div className="relative">
            {/* Service Tiles */}
            {transformServices.map((service, index) => (
              <div 
                key={index}
                className={`relative rounded-2xl overflow-hidden mb-4 h-48 cursor-pointer transition-all duration-300
                          ${hoveredSection === service.id ? "ring-2 ring-green-500 shadow-lg" : ""}`}
                onMouseEnter={() => handleTileHover(service.id)}
                onMouseLeave={() => handleTileHover(null)}
              >
                <img 
                  src={service.imageSrc} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                  <h4 className="text-2xl font-bold uppercase tracking-wider text-shadow">{service.title}</h4>
                  <p className="text-sm mt-2 text-center max-w-[80%] text-shadow">{service.subtitle}</p>
                </div>
              </div>
            ))}

            {/* Digital Transformation Pill in Center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20
                           bg-green-700 text-white rounded-full py-2 px-4 text-center shadow-lg">
              <div className="leading-tight whitespace-nowrap">
                <p className="text-sm sm:text-base font-bold">DIGITAL</p>
                <p className="text-sm sm:text-base font-bold">TRANSFORMATION</p>
              </div>
            </div>

            {/* Connecting lines */}
            <div className="absolute top-[22%] left-1/2 w-1 h-[28%] bg-green-500 -translate-x-1/2"></div>
            <div className="absolute bottom-[22%] left-1/2 w-1 h-[28%] bg-green-500 -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-[30%] w-[20%] h-1 bg-green-500 -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-[30%] w-[20%] h-1 bg-green-500 -translate-y-1/2"></div>
          </div>
        </div>

        {/* Second column: Service Cards */}
        <div className="space-y-6">
          {transformServices.map((service, index) => (
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
    </div>
  );
};

export default TransformBusinessTab;
