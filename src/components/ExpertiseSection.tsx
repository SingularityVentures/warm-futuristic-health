
import { Check, Beaker, ShieldCheck, FileCheck, Lock, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExpertiseSection = () => {
  const expertisePoints = [
    {
      text: "IT Project Management in Regulated Industries",
      icon: <FileCheck className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
    },
    {
      text: "In-depth Knowledge of Pharma & Healthcare Value Chains",
      icon: <Lock className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
    },
    {
      text: "Computer System Validation (CSV) & GxP Expertise",
      icon: <Microscope className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
    },
    {
      text: "Healthcare Data Protection & GDPR Compliance",
      icon: <Beaker className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
    }
  ];
  
  return (
    <section id="expertise" className="section bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            My Focus - IT in Pharma and Healthcare
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100 shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                Healthcare and Life Sciences are the world's most vital industries, but their high stakes create unique challenges. IT projects in these sectors face significant hurdles:<br />
               <li>Stringent regulations (GxP, GDPR, EU AI Act)</li>
               <li>Patient safety concerns</li>
               <li>Constant pressure to innovate and deliver faster</li>
              </p>
              
              <p className="text-lg text-gray-700 mb-8">
               This combination of importance and complexity makes these projects both challenging and deeply meaningful. With my extensive experience in both domains, I help teams navigate these complexities.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-6 text-green-700 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <ShieldCheck className="h-5 w-5 text-green-700" />
                  </div>
                  My Expertise
                </h3>
                <ul className="space-y-4 pl-2">
                  {expertisePoints.map((point, index) => (
                    <li key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-gray-50 transition-all hover:shadow-md hover:border-green-100">
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
          
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2532&auto=format&fit=crop"
                alt="Healthcare professional using digital technology" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">GxP Compliant</span>
                <h4 className="text-white text-xl font-bold mt-2">Technology that meets healthcare standards</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
