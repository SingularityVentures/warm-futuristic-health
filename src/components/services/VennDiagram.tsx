
import { useState } from 'react';
import { CircleCheck } from 'lucide-react';

interface VennDiagramProps {
  hoveredSection: string | null;
  handleCircleHover: (id: string | null) => void;
  isMobile: boolean;
}

const VennDiagram = ({
  hoveredSection,
  handleCircleHover,
  isMobile
}: VennDiagramProps) => {
  const isHighlighted = (id: string) => {
    return hoveredSection === id;
  };

  // Define tile data
  const tiles = [
    {
      id: "technology",
      title: "TECHNOLOGY",
      image: "/lovable-uploads/387031f2-b62f-42f7-88f6-51955a71c962.png",
      position: "top"
    },
    {
      id: "processes",
      title: "PROCESSES",
      image: "/lovable-uploads/dd7b86f5-cc61-4c8c-b907-db217cdce5eb.png",
      position: "bottom-left"
    },
    {
      id: "people",
      title: "PEOPLE",
      image: "/lovable-uploads/d0421a57-955d-4a3d-95fa-8c11795966d5.png",
      position: "bottom-right"
    }
  ];

  return (
    <div className="relative w-full max-w-md aspect-square mx-auto py-4">
      {/* Connecting line to visually link diagram with cards */}
      {!isMobile && (
        <div className="absolute right-0 top-1/2 transform translate-x-[95%] -translate-y-1/2 w-16 h-0.5 bg-green-200 z-0"></div>
      )}
      
      {/* Pyramid layout container */}
      <div className="relative h-full w-full">
        {/* Top tile - Technology */}
        <div 
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-[70%] aspect-video
                     rounded-xl overflow-hidden shadow-lg cursor-pointer border-2 border-green-300
                     transition-all duration-300
                     ${isHighlighted("technology") 
                       ? "shadow-[0_0_20px_rgba(34,197,94,0.5)] z-20" 
                       : hoveredSection ? "opacity-70" : ""}`}
          onMouseEnter={() => handleCircleHover("technology")}
          onMouseLeave={() => handleCircleHover(null)}
          style={{ zIndex: isHighlighted("technology") ? 10 : 2 }}
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/387031f2-b62f-42f7-88f6-51955a71c962.png" 
              alt="Technology" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-green-700/70 to-green-900/90"></div>
          </div>
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <h4 className="text-white font-bold text-xl md:text-2xl z-10 tracking-wider text-shadow">
              TECHNOLOGY
            </h4>
            {isHighlighted("technology") && (
              <CircleCheck className="text-green-300 mt-2 animate-fade-in" size={28} />
            )}
          </div>
        </div>

        {/* Bottom tiles container */}
        <div className="absolute bottom-0 w-full flex justify-between" style={{ height: "45%" }}>
          {/* Bottom left tile - Processes */}
          <div 
            className={`w-[48%] h-full rounded-xl overflow-hidden shadow-lg cursor-pointer border-2 border-green-300
                       transition-all duration-300
                       ${isHighlighted("processes") 
                         ? "shadow-[0_0_20px_rgba(34,197,94,0.5)] z-20" 
                         : hoveredSection ? "opacity-70" : ""}`}
            onMouseEnter={() => handleCircleHover("processes")}
            onMouseLeave={() => handleCircleHover(null)}
            style={{ zIndex: isHighlighted("processes") ? 10 : 2 }}
          >
            {/* Background image with overlay */}
            <div className="absolute inset-0">
              <img 
                src="/lovable-uploads/dd7b86f5-cc61-4c8c-b907-db217cdce5eb.png" 
                alt="Processes" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-700/70 to-green-900/90"></div>
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <h4 className="text-white font-bold text-xl md:text-2xl z-10 tracking-wider text-shadow">
                PROCESSES
              </h4>
              {isHighlighted("processes") && (
                <CircleCheck className="text-green-300 mt-2 animate-fade-in" size={28} />
              )}
            </div>
          </div>
          
          {/* Bottom right tile - People */}
          <div 
            className={`w-[48%] h-full rounded-xl overflow-hidden shadow-lg cursor-pointer border-2 border-green-300
                       transition-all duration-300
                       ${isHighlighted("people") 
                         ? "shadow-[0_0_20px_rgba(34,197,94,0.5)] z-20" 
                         : hoveredSection ? "opacity-70" : ""}`}
            onMouseEnter={() => handleCircleHover("people")}
            onMouseLeave={() => handleCircleHover(null)}
            style={{ zIndex: isHighlighted("people") ? 10 : 2 }}
          >
            {/* Background image with overlay */}
            <div className="absolute inset-0">
              <img 
                src="/lovable-uploads/d0421a57-955d-4a3d-95fa-8c11795966d5.png" 
                alt="People" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-700/70 to-green-900/90"></div>
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <h4 className="text-white font-bold text-xl md:text-2xl z-10 tracking-wider text-shadow">
                PEOPLE
              </h4>
              {isHighlighted("people") && (
                <CircleCheck className="text-green-300 mt-2 animate-fade-in" size={28} />
              )}
            </div>
          </div>
        </div>

        {/* Digital Transformation pill in center - with subtle animation */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30
                      bg-green-700 text-white rounded-full py-2 px-6 w-[55%] text-center
                      shadow-lg border border-green-500 animate-float">
          <div className="leading-tight">
            <p className="text-sm sm:text-base font-bold">DIGITAL</p>
            <p className="text-sm sm:text-base font-bold">TRANSFORMATION</p>
          </div>
        </div>

        {/* Connecting lines between tiles */}
        <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Line from top tile to bottom left */}
          <line 
            x1="50" y1="25" 
            x2="25" y2="75" 
            stroke={hoveredSection === null || hoveredSection === "technology" || hoveredSection === "processes" ? "#22c55e" : "#22c55e50"} 
            strokeWidth="1"
            strokeDasharray={hoveredSection === "technology" || hoveredSection === "processes" ? "none" : "3,3"}
          />
          
          {/* Line from top tile to bottom right */}
          <line 
            x1="50" y1="25" 
            x2="75" y2="75" 
            stroke={hoveredSection === null || hoveredSection === "technology" || hoveredSection === "people" ? "#22c55e" : "#22c55e50"} 
            strokeWidth="1"
            strokeDasharray={hoveredSection === "technology" || hoveredSection === "people" ? "none" : "3,3"}
          />
          
          {/* Line connecting bottom tiles */}
          <line 
            x1="25" y1="75" 
            x2="75" y2="75" 
            stroke={hoveredSection === null || hoveredSection === "processes" || hoveredSection === "people" ? "#22c55e" : "#22c55e50"} 
            strokeWidth="1"
            strokeDasharray={hoveredSection === "processes" || hoveredSection === "people" ? "none" : "3,3"}
          />
        </svg>
      </div>
    </div>
  );
};

export default VennDiagram;
