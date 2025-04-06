
import { BrainCircuit, Beaker, Users } from "lucide-react";

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

  return (
    <div className="relative w-full max-w-md mx-auto py-8">
      {/* Connecting line to visually link diagram with cards */}
      {!isMobile && (
        <div className="absolute right-0 top-1/2 transform translate-x-[95%] -translate-y-1/2 w-16 h-0.5 bg-green-200 z-0"></div>
      )}
      
      {/* Pyramid layout with cards */}
      <div className="relative h-[450px] flex flex-col items-center">
        {/* Technology Card - Top of Pyramid */}
        <div 
          className={`absolute top-0 w-[85%] h-[200px] rounded-2xl overflow-hidden shadow-lg
                      transition-all duration-300 cursor-pointer border border-green-200
                      ${isHighlighted("technology") 
                        ? "shadow-[0_0_25px_rgba(34,197,94,0.6)] z-20" 
                        : hoveredSection ? "opacity-60" : ""}`}
          onMouseEnter={() => handleCircleHover("technology")}
          onMouseLeave={() => handleCircleHover(null)}
          style={{ zIndex: isHighlighted("technology") ? 20 : 10 }}
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/387031f2-b62f-42f7-88f6-51955a71c962.png" 
              alt="Technology" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-green-800/70 to-green-600/70"></div>
          </div>
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <BrainCircuit className="w-12 h-12 text-white mb-2" />
            <h4 className="text-white font-bold text-2xl tracking-wider text-center">TECHNOLOGY</h4>
          </div>
        </div>

        {/* Center pill - Digital Transformation */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30
                      animate-float bg-green-700 text-white rounded-full py-3 px-6 shadow-lg
                      border-2 border-green-500/30 w-[60%] text-center">
          <div className="leading-tight">
            <p className="text-sm sm:text-base font-bold">DIGITAL</p>
            <p className="text-sm sm:text-base font-bold">TRANSFORMATION</p>
          </div>
        </div>

        {/* Bottom row - Processes and People side by side */}
        <div className="absolute bottom-0 w-full flex justify-between">
          {/* Processes Card */}
          <div 
            className={`w-[48%] h-[180px] rounded-2xl overflow-hidden shadow-lg
                        transition-all duration-300 cursor-pointer border border-green-200
                        ${isHighlighted("processes") 
                          ? "shadow-[0_0_25px_rgba(34,197,94,0.6)] z-20" 
                          : hoveredSection ? "opacity-60" : ""}`}
            onMouseEnter={() => handleCircleHover("processes")}
            onMouseLeave={() => handleCircleHover(null)}
            style={{ zIndex: isHighlighted("processes") ? 20 : 10 }}
          >
            {/* Background image with overlay */}
            <div className="absolute inset-0">
              <img 
                src="/lovable-uploads/dd7b86f5-cc61-4c8c-b907-db217cdce5eb.png" 
                alt="Processes" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-green-800/70 to-green-600/70"></div>
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <Beaker className="w-10 h-10 text-white mb-2" />
              <h4 className="text-white font-bold text-xl tracking-wider text-center">PROCESSES</h4>
            </div>
          </div>

          {/* People Card */}
          <div 
            className={`w-[48%] h-[180px] rounded-2xl overflow-hidden shadow-lg
                        transition-all duration-300 cursor-pointer border border-green-200
                        ${isHighlighted("people") 
                          ? "shadow-[0_0_25px_rgba(34,197,94,0.6)] z-20" 
                          : hoveredSection ? "opacity-60" : ""}`}
            onMouseEnter={() => handleCircleHover("people")}
            onMouseLeave={() => handleCircleHover(null)}
            style={{ zIndex: isHighlighted("people") ? 20 : 10 }}
          >
            {/* Background image with overlay */}
            <div className="absolute inset-0">
              <img 
                src="/lovable-uploads/d0421a57-955d-4a3d-95fa-8c11795966d5.png" 
                alt="People" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-green-800/70 to-green-600/70"></div>
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <Users className="w-10 h-10 text-white mb-2" />
              <h4 className="text-white font-bold text-xl tracking-wider text-center">PEOPLE</h4>
            </div>
          </div>
        </div>

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full z-5 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Line from Technology to Processes */}
          <line x1="42" y1="35" x2="25" y2="65" stroke="#22c55e" strokeWidth="0.5" strokeDasharray="2,2" />
          
          {/* Line from Technology to People */}
          <line x1="58" y1="35" x2="75" y2="65" stroke="#22c55e" strokeWidth="0.5" strokeDasharray="2,2" />
          
          {/* Line from Processes to People */}
          <line x1="30" y1="70" x2="70" y2="70" stroke="#22c55e" strokeWidth="0.5" strokeDasharray="2,2" />
        </svg>
      </div>
    </div>
  );
};

export default VennDiagram;
