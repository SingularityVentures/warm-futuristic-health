
import { ArrowRight } from "lucide-react";

interface JourneyStep {
  number: number;
  title: string;
  description: string;
}

interface JourneyVisualizationProps {
  steps: JourneyStep[];
  isHighlighted: boolean;
  isMobile: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const JourneyVisualization = ({ 
  steps, 
  isHighlighted, 
  isMobile,
  onMouseEnter,
  onMouseLeave
}: JourneyVisualizationProps) => {
  return (
    <div 
      className={`relative py-8 max-w-md w-full mx-auto
                  ${isHighlighted ? "z-10" : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Connecting line to visually link journey with card */}
      {!isMobile && (
        <div className="absolute right-0 top-1/2 transform translate-x-[95%] -translate-y-1/2 w-16 h-0.5 bg-green-200 z-0"></div>
      )}
      
      {/* Journey steps */}
      <div className={`flex flex-col space-y-24 relative ${isHighlighted ? "scale-105 transition-transform duration-300" : ""}`}>
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`relative z-10 ${isHighlighted ? "scale-105" : ""} transition-all duration-300`}
          >
            <div className="flex items-center gap-6">
              {/* Step number in box */}
              <div className={`rounded-lg overflow-hidden shadow-lg ${isHighlighted ? "shadow-[0_0_25px_rgba(34,197,94,0.3)]" : ""}`}>
                <div className="relative w-20 h-20 flex items-center justify-center">
                  {/* Background for step box */}
                  <div className="absolute inset-0">
                    <div className="w-full h-full bg-gradient-to-br from-green-500 to-green-700"></div>
                  </div>
                  {/* Number */}
                  <span className="relative z-10 text-white text-3xl font-bold">{step.number}</span>
                </div>
              </div>
              
              {/* Step content */}
              <div className="flex-1">
                <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-md">
                  <h4 className="font-bold text-green-800 text-lg">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
            
            {/* Add arrow between steps (except after the last step) */}
            {index < steps.length - 1 && (
              <div className="absolute left-10 top-[90px] h-[95px]">
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="h-full w-0.5 bg-gradient-to-b from-green-500 to-green-600"></div>
                  <div className="absolute bottom-0 -mb-2.5">
                    <div className="rounded-full bg-green-600 p-1.5 shadow-md">
                      <ArrowRight 
                        className="text-white transform rotate-90" 
                        size={16} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneyVisualization;
