
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
      
      {/* Technology Circle - with technology image */}
      <div 
        className={`absolute top-0 left-1/2 transform -translate-x-1/2 
                    rounded-full overflow-hidden
                    h-[65%] w-[65%] flex items-center justify-center
                    transition-all duration-300 cursor-pointer
                    border-2 border-green-300
                    ${isHighlighted("technology") 
                      ? "shadow-[0_0_20px_rgba(34,197,94,0.5)] z-10" 
                      : hoveredSection ? "opacity-50" : ""}`}
        onMouseEnter={() => handleCircleHover("technology")}
        onMouseLeave={() => handleCircleHover(null)}
        style={{ zIndex: isHighlighted("technology") ? 10 : 2 }}
      >
        {/* Technology image - no overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
            alt="Technology" 
            className="w-full h-full object-cover"
          />
        </div>
        <h4 className="text-white font-bold text-2xl z-10 tracking-[0.15em] text-shadow">TECHNOLOGY</h4>
      </div>

      {/* Processes Circle - with processes image */}
      <div 
        className={`absolute bottom-0 left-[25%] transform -translate-x-1/2 
                    rounded-full overflow-hidden
                    h-[65%] w-[65%] flex items-center justify-center
                    transition-all duration-300 cursor-pointer
                    border-2 border-green-300
                    ${isHighlighted("processes") 
                      ? "shadow-[0_0_20px_rgba(34,197,94,0.5)] z-10" 
                      : hoveredSection ? "opacity-50" : ""}`}
        onMouseEnter={() => handleCircleHover("processes")}
        onMouseLeave={() => handleCircleHover(null)}
        style={{ zIndex: isHighlighted("processes") ? 10 : 2 }}
      >
        {/* Processes image - no overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
            alt="Processes" 
            className="w-full h-full object-cover"
          />
        </div>
        <h4 className="text-white font-bold text-2xl z-10 tracking-[0.15em] text-shadow">PROCESSES</h4>
      </div>

      {/* People Circle - with people image */}
      <div 
        className={`absolute bottom-0 right-[25%] transform translate-x-1/2 
                    rounded-full overflow-hidden
                    h-[65%] w-[65%] flex items-center justify-center
                    transition-all duration-300 cursor-pointer
                    border-2 border-green-300
                    ${isHighlighted("people") 
                      ? "shadow-[0_0_20px_rgba(34,197,94,0.5)] z-10" 
                      : hoveredSection ? "opacity-50" : ""}`}
        onMouseEnter={() => handleCircleHover("people")}
        onMouseLeave={() => handleCircleHover(null)}
        style={{ zIndex: isHighlighted("people") ? 10 : 2 }}
      >
        {/* People image - no overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
            alt="People" 
            className="w-full h-full object-cover"
          />
        </div>
        <h4 className="text-white font-bold text-2xl z-10 tracking-[0.15em] text-shadow">PEOPLE</h4>
      </div>

      {/* Digital Transformation pill in center - no animation */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20
                    bg-green-700 text-white rounded-full py-2 px-4 w-[50%] text-center
                    shadow-lg">
        <div className="leading-tight">
          <p className="text-sm sm:text-base font-bold">DIGITAL</p>
          <p className="text-sm sm:text-base font-bold">TRANSFORMATION</p>
        </div>
      </div>
    </div>
  );
};

export default VennDiagram;
