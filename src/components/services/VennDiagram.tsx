
import { BrainCircuit, Beaker, Users } from "lucide-react";

interface VennDiagramProps {
  hoveredSection: string | null;
  handleCircleHover: (id: string | null) => void;
  isMobile: boolean;
}

const VennDiagram = ({ hoveredSection, handleCircleHover, isMobile }: VennDiagramProps) => {
  const isHighlighted = (id: string) => {
    return hoveredSection === id;
  };

  return (
    <div className="relative w-full max-w-md aspect-square mx-auto">
      {/* Connecting lines to visually link diagram with cards */}
      {!isMobile && (
        <div className="absolute right-0 top-1/2 transform translate-x-[95%] -translate-y-1/2 w-16 h-0.5 bg-green-200 z-0"></div>
      )}
      
      {/* Technology Circle - with green halo effect when highlighted */}
      <div 
        className={`absolute top-0 left-1/2 transform -translate-x-1/2 
                    bg-green-50 border-2 border-green-300 rounded-full 
                    h-[65%] w-[65%] flex items-center justify-center
                    transition-all duration-300 cursor-pointer
                    ${isHighlighted("technology") 
                      ? "shadow-[0_0_20px_rgba(34,197,94,0.5)] z-10" 
                      : hoveredSection ? "opacity-50" : ""}`}
        onMouseEnter={() => handleCircleHover("technology")}
        onMouseLeave={() => handleCircleHover(null)}
      >
        <h4 className="text-green-800 font-bold text-2xl absolute top-[30%]">TECHNOLOGY</h4>
      </div>

      {/* Processes Circle - with green halo effect when highlighted */}
      <div 
        className={`absolute bottom-0 left-[25%] transform -translate-x-1/2 
                    bg-green-50 border-2 border-green-300 rounded-full 
                    h-[65%] w-[65%] flex items-center justify-center
                    transition-all duration-300 cursor-pointer
                    ${isHighlighted("processes") 
                      ? "shadow-[0_0_20px_rgba(34,197,94,0.5)] z-10" 
                      : hoveredSection ? "opacity-50" : ""}`}
        onMouseEnter={() => handleCircleHover("processes")}
        onMouseLeave={() => handleCircleHover(null)}
      >
        <h4 className="text-green-800 font-bold text-2xl absolute bottom-[30%]">PROCESSES</h4>
      </div>

      {/* People Circle - with green halo effect when highlighted */}
      <div 
        className={`absolute bottom-0 right-[25%] transform translate-x-1/2 
                    bg-green-50 border-2 border-green-300 rounded-full 
                    h-[65%] w-[65%] flex items-center justify-center
                    transition-all duration-300 cursor-pointer
                    ${isHighlighted("people") 
                      ? "shadow-[0_0_20px_rgba(34,197,94,0.5)] z-10" 
                      : hoveredSection ? "opacity-50" : ""}`}
        onMouseEnter={() => handleCircleHover("people")}
        onMouseLeave={() => handleCircleHover(null)}
      >
        <h4 className="text-green-800 font-bold text-2xl absolute bottom-[30%]">PEOPLE</h4>
      </div>

      {/* Digital Transformation pill in center - no animation */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20
                    bg-green-700 text-white rounded-full py-4 px-8 w-[70%] text-center
                    shadow-lg">
        <div className="leading-tight">
          <p className="text-lg sm:text-xl font-bold">DIGITAL</p>
          <p className="text-lg sm:text-xl font-bold">TRANSFORMATION</p>
        </div>
      </div>
    </div>
  );
};

export default VennDiagram;
