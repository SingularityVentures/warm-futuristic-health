
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
  // Mapping of step numbers to background images
  const stepBackgrounds = {
    1: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    2: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    3: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  };

  return (
    <div 
      className={`relative py-8 max-w-md w-full mx-auto flex justify-center transition-all duration-300`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Connecting line to visually link journey with card */}
      {!isMobile && (
        <div className="absolute right-0 top-1/2 transform translate-x-[95%] -translate-y-1/2 w-16 h-0.5 bg-green-200 z-0"></div>
      )}
      
      {/* Journey steps with arrows connecting them */}
      <div className={`flex flex-col space-y-20 relative ${isHighlighted ? "shadow-[0_0_20px_rgba(34,197,94,0.5)] z-10 rounded-xl p-6" : "p-6"}`}>
        {steps.map((step, index) => (
          <div key={index} className="flex items-center relative z-10">
            <div className="rounded-full text-white w-14 h-14 flex items-center justify-center text-2xl font-bold shadow-lg overflow-hidden relative">
              {/* Background image for the step circle */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={stepBackgrounds[step.number as keyof typeof stepBackgrounds] || "https://images.unsplash.com/photo-1518770660439-4636190af475"}
                  alt={`Step ${step.number}`}
                  className="w-full h-full object-cover"
                />
                {/* Overlay to ensure text remains visible */}
                <div className="absolute inset-0 bg-green-600 opacity-70"></div>
              </div>
              {/* Step number */}
              <span className="relative z-10">{step.number}</span>
            </div>
            <div className="ml-4">
              <h4 className="font-bold text-green-800 text-lg">{step.title}</h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
            
            {/* Add arrow between steps (except after the last step) */}
            {index < steps.length - 1 && (
              <div className="absolute top-[58px] left-7 h-20 flex items-center">
                <div className="w-0.5 h-full bg-green-500 relative">
                  <div className="absolute -bottom-4 -left-3 w-7 h-7 flex items-center justify-center">
                    <ArrowRight 
                      className="text-green-600 transform rotate-90" 
                      size={28} 
                    />
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
