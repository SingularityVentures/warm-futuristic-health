
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
    <div className="relative w-full max-w-2xl mx-auto py-10">
      {/* Connecting lines to visually link diagram with cards */}
      {!isMobile && (
        <div className="absolute right-0 top-1/2 transform translate-x-[95%] -translate-y-1/2 w-16 h-0.5 bg-green-200 z-0"></div>
      )}
      
      <div className="relative h-[480px] w-full">
        {/* Technology Circle - Top of Pyramid */}
        <div 
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64
                      transition-all duration-300 cursor-pointer
                      ${isHighlighted("technology") 
                        ? "z-10 scale-105" 
                        : hoveredSection 
                          ? "opacity-70" 
                          : ""}`} 
          onMouseEnter={() => handleCircleHover("technology")} 
          onMouseLeave={() => handleCircleHover(null)}
          style={{ zIndex: isHighlighted("technology") ? 10 : 2 }}
        >
          <div className={`w-full h-full rounded-3xl overflow-hidden shadow-lg 
                          ${isHighlighted("technology") 
                            ? "shadow-[0_0_25px_rgba(34,197,94,0.5)]" 
                            : ""}`}>
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="/lovable-uploads/387031f2-b62f-42f7-88f6-51955a71c962.png" 
                alt="Technology" 
                className="w-full h-full object-cover brightness-[0.85]" 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 to-green-800/70"></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <h4 className="text-white font-bold text-2xl tracking-wide text-shadow">TECHNOLOGY</h4>
              <div className="h-1 w-12 bg-green-400 my-2 rounded-full"></div>
              <p className="text-white/90 text-sm text-center max-w-[80%] text-shadow">
                GxP Software Implementation
              </p>
            </div>
          </div>
        </div>

        {/* Process and People at the bottom of pyramid - side by side */}
        {/* Processes Tile - Bottom Left */}
        <div 
          className={`absolute bottom-0 left-[calc(50%-150px)] transform -translate-x-1/2 w-64 h-64
                      transition-all duration-300 cursor-pointer
                      ${isHighlighted("processes") 
                        ? "z-10 scale-105" 
                        : hoveredSection 
                          ? "opacity-70" 
                          : ""}`} 
          onMouseEnter={() => handleCircleHover("processes")} 
          onMouseLeave={() => handleCircleHover(null)}
          style={{ zIndex: isHighlighted("processes") ? 10 : 2 }}
        >
          <div className={`w-full h-full rounded-3xl overflow-hidden shadow-lg 
                          ${isHighlighted("processes") 
                            ? "shadow-[0_0_25px_rgba(34,197,94,0.5)]" 
                            : ""}`}>
            <div className="absolute inset-0 w-full h-full">
              <img 
                alt="Processes" 
                className="w-full h-full object-cover brightness-[0.85]" 
                src="/lovable-uploads/dd7b86f5-cc61-4c8c-b907-db217cdce5eb.png" 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 to-green-800/70"></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <h4 className="text-white font-bold text-2xl tracking-wide text-shadow">PROCESSES</h4>
              <div className="h-1 w-12 bg-green-400 my-2 rounded-full"></div>
              <p className="text-white/90 text-sm text-center max-w-[80%] text-shadow">
                Business Process Transformation
              </p>
            </div>
          </div>
        </div>

        {/* People Tile - Bottom Right */}
        <div 
          className={`absolute bottom-0 right-[calc(50%-150px)] transform translate-x-1/2 w-64 h-64
                      transition-all duration-300 cursor-pointer
                      ${isHighlighted("people") 
                        ? "z-10 scale-105" 
                        : hoveredSection 
                          ? "opacity-70" 
                          : ""}`} 
          onMouseEnter={() => handleCircleHover("people")} 
          onMouseLeave={() => handleCircleHover(null)}
          style={{ zIndex: isHighlighted("people") ? 10 : 2 }}
        >
          <div className={`w-full h-full rounded-3xl overflow-hidden shadow-lg 
                          ${isHighlighted("people") 
                            ? "shadow-[0_0_25px_rgba(34,197,94,0.5)]" 
                            : ""}`}>
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="/lovable-uploads/d0421a57-955d-4a3d-95fa-8c11795966d5.png" 
                alt="People" 
                className="w-full h-full object-cover brightness-[0.85]" 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 to-green-800/70"></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <h4 className="text-white font-bold text-2xl tracking-wide text-shadow">PEOPLE</h4>
              <div className="h-1 w-12 bg-green-400 my-2 rounded-full"></div>
              <p className="text-white/90 text-sm text-center max-w-[80%] text-shadow">
                Change Management
              </p>
            </div>
          </div>
        </div>

        {/* Digital Transformation Center Element */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-full p-5 w-36 h-36 flex flex-col items-center justify-center animate-float">
            <div className="text-green-800 font-bold leading-tight text-center">
              <p className="text-sm">DIGITAL</p>
              <div className="h-0.5 w-16 bg-green-500 my-1 mx-auto"></div>
              <p className="text-sm">TRANSFORMATION</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VennDiagram;
