
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExpertiseSection = () => {
  const expertisePoints = [
    {
      text: "IT Project Management in Regulated Industries",
      icon: <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
    },
    {
      text: "In-depth Knowledge of Pharma & Healthcare Value Chains",
      icon: <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
    },
    {
      text: "Computer System Validation (CSV) & GxP Expertise",
      icon: <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
    },
    {
      text: "Healthcare Data Protection & GDPR Compliance",
      icon: <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
    }
  ];
  
  return (
    <section id="expertise" className="section bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            My Focus - IT in Pharma and Healthcare
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="p-6 h-full bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100 shadow-sm flex flex-col justify-between">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Healthcare and Life Sciences are the world's most vital industries, but their high stakes create unique challenges. IT projects in these sectors face significant hurdles:<br />
                 <li>Stringent regulations (GxP, GDPR, EU AI Act)</li>
                 <li>Patient safety concerns</li>
                 <li>Constant pressure to innovate and deliver faster</li>
                </p>
                
                <p className="text-lg text-gray-700 mb-6">
                 This combination of importance and complexity makes these projects both challenging and deeply meaningful. With my extensive experience in both domains, I help teams navigate these complexities.
                </p>
              </div>
              
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <Check className="h-5 w-5 text-green-700" />
                    </div>
                    My Expertise
                  </h3>
                  <ul className="space-y-3 pl-2">
                    {expertisePoints.map((point, index) => (
                      <li key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-gray-50">
                        {point.icon}
                        <span className="text-gray-700">{point.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button asChild className="bg-green-600 hover:bg-green-700 shadow-lg shadow-green-700/20">
                  <a href="#services">Explore My Services</a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 h-full">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-full">
              <img 
                src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                alt="Medical technology and healthcare innovation" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
