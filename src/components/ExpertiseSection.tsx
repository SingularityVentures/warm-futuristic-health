
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const ExpertiseSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const expertisePoints = [{
    text: "IT Project Management for Regulated Industries",
    icon: <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
  }, {
    text: "In-depth Knowledge of Pharma & Healthcare Value Chains",
    icon: <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
  }, {
    text: "Computer System Validation (CSV) & GxP Expertise",
    icon: <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
  }, {
    text: "Healthcare Data Protection & GDPR Compliance",
    icon: <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
  }];

  return (
    <section id="expertise" className="section bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 heading-gradient">
            My Expertise: IT in Pharma and Healthcare
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Introduction Column */}
          <div className="bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100 shadow-sm p-5">
            <p className="text-lg text-gray-700">
              Healthcare and Life Sciences are the world's most vital industries, but their high stakes create unique challenges.
            </p>
            
            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className="mt-2"
            >
              <div className="flex items-center justify-between">
                <p className="text-lg text-gray-700 font-medium">IT projects in these sectors face significant hurdles</p>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-0 h-7 w-7">
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </CollapsibleTrigger>
              </div>
              
              <CollapsibleContent>
                <ul className="mt-2 pl-4 space-y-1">
                  <li className="text-gray-700">Stringent regulations (GxP, GDPR, EU AI Act)</li>
                  <li className="text-gray-700">Patient safety concerns</li>
                  <li className="text-gray-700">Constant pressure to innovate and deliver faster</li>
                </ul>
                <p className="text-lg text-gray-700 mt-3">
                  This combination of importance and complexity makes these projects both challenging and deeply meaningful.
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
          
          {/* Expertise Points Column */}
          <div className="bg-white rounded-xl border border-green-100 shadow-sm p-5">
            <h3 className="text-xl font-semibold mb-3 text-green-700 flex items-center">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                <Check className="h-4 w-4 text-green-700" />
              </div>
              My Expertise
            </h3>
            <ul className="space-y-2">
              {expertisePoints.map((point, index) => (
                <li key={index} className="flex items-start bg-white p-2 rounded-lg shadow-sm border border-gray-50">
                  {point.icon}
                  <span className="text-gray-700">{point.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Image Column */}
          <div className="flex flex-col rounded-2xl overflow-hidden shadow-xl h-full">
            <div className="flex-1 overflow-hidden">
              <img 
                alt="Medical technology and healthcare innovation" 
                className="w-full h-full object-cover"
                src="/lovable-uploads/c23dfbf6-b5bc-42e9-b68b-12f67aadb072.png" 
              />
            </div>
            <div className="p-4 bg-gradient-to-br from-green-50 to-white">
              <p className="text-gray-700 mb-3">
                With my extensive experience in both domains, I help teams navigate these complexities.
              </p>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700 shadow-lg shadow-green-700/20">
                <a href="#contact">Schedule a free consultation</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
