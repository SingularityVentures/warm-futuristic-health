
import { Button } from "@/components/ui/button";

const AIFocusSection = () => {
  const aiCapabilities = [
    { title: "AI Strategy", items: ["Needs Assessment", "Solution Design", "Implementation Roadmap"] },
    { title: "Organizational Change", items: ["Workforce Training", "Process Redesign", "Adoption Management"] },
    { title: "AI Implementation", items: ["Vendor Selection", "Regulatory Compliance", "Technical Integration"] }
  ];
  
  return (
    <section id="ai-focus" className="section bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Focus Topic – AI
          </h2>
          <p className="text-gray-600 text-lg">
            Transforming pharmaceutical and healthcare operations through strategic AI implementation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative p-4">
              {/* Main Circle */}
              <div className="relative mx-auto w-72 h-72 md:w-80 md:h-80 rounded-full bg-green-100 flex items-center justify-center shadow-md">
                <span className="text-xl md:text-2xl font-semibold text-green-800 text-center">
                  AI Transformation
                </span>
                
                {/* Connecting Lines */}
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="absolute w-28 md:w-36 h-0.5 bg-green-300"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${index * 120}deg)`,
                      transformOrigin: '0 0'
                    }}
                  ></div>
                ))}
                
                {/* Surrounding Circles */}
                {aiCapabilities.map((capability, index) => (
                  <div
                    key={index}
                    className="absolute bg-white border-2 border-green-500 rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-lg p-2 text-center"
                    style={{
                      transform: `translate(${Math.cos((index * 120 * Math.PI) / 180) * 180}px, ${
                        Math.sin((index * 120 * Math.PI) / 180) * 180
                      }px)`
                    }}
                  >
                    <h3 className="font-bold text-green-700 mb-1">{capability.title}</h3>
                    <ul className="text-xs text-gray-600">
                      {capability.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-green-700">
              Unlocking AI's Potential in Healthcare
            </h3>
            
            <p className="text-gray-700">
              Artificial intelligence is transforming pharma and healthcare, from drug discovery to patient care. However, implementing AI in these regulated industries requires specialized expertise to balance innovation with compliance.
            </p>
            
            <p className="text-gray-700">
              Our holistic approach to AI transformation addresses the three critical dimensions of successful implementation: strategic planning, organizational readiness, and technical execution—all within the context of healthcare's unique regulatory environment.
            </p>
            
            <p className="text-gray-700 mb-6">
              We partner with pharmaceutical and healthcare organizations to develop tailored AI solutions that drive efficiency, improve outcomes, and maintain strict compliance with industry regulations.
            </p>
            
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <a href="#contact">Discuss Your AI Strategy</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFocusSection;
