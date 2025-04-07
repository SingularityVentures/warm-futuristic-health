
import { Check, Award, BookOpen, LightbulbIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const ExpertiseSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const expertisePoints = [{
    text: "IT Project Management for Regulated Industries",
    icon: <Award className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
  }, {
    text: "In-depth Knowledge of Pharma & Healthcare Value Chains",
    icon: <BookOpen className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
  }, {
    text: "Computer System Validation (CSV) & GxP Expertise",
    icon: <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
  }, {
    text: "Healthcare Data Protection & GDPR Compliance",
    icon: <LightbulbIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
  }];

  return <section id="expertise" className="section bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 heading-gradient">
            My Expertise: IT in Pharma and Healthcare
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left column - Image */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="rounded-xl overflow-hidden shadow-xl h-full">
              <img 
                alt="Medical technology and healthcare innovation" 
                className="w-full h-full object-cover"
                src="/lovable-uploads/c23dfbf6-b5bc-42e9-b68b-12f67aadb072.png" 
              />
            </div>
          </div>
          
          {/* Right column - Content */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Card className="bg-gradient-to-br from-green-50 to-white border border-green-100 shadow-sm">
              <CardContent className="p-4 space-y-4">
                <div className="flex flex-wrap lg:flex-nowrap gap-4">
                  {/* Main text */}
                  <div className="w-full lg:w-3/5">
                    <p className="text-gray-700">
                      Healthcare and Life Sciences are the world's most vital industries, but their high stakes create unique challenges. IT projects in these sectors face significant hurdles:
                      <span className="inline-block mt-2">
                        <span className="flex items-center mb-1">
                          <Check className="h-4 w-4 text-green-600 mr-1" />
                          <span className="text-gray-700">Stringent regulations (GxP, GDPR, EU AI Act)</span>
                        </span>
                        <span className="flex items-center mb-1">
                          <Check className="h-4 w-4 text-green-600 mr-1" />
                          <span className="text-gray-700">Patient safety concerns</span>
                        </span>
                        <span className="flex items-center">
                          <Check className="h-4 w-4 text-green-600 mr-1" />
                          <span className="text-gray-700">Constant pressure to innovate and deliver faster</span>
                        </span>
                      </span>
                    </p>
                  </div>
                  
                  {/* Expertise points */}
                  <div className="w-full lg:w-2/5">
                    <h3 className="text-xl font-semibold mb-3 text-green-700 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                        <Check className="h-4 w-4 text-green-700" />
                      </div>
                      My Expertise
                    </h3>
                    <ul className="space-y-2">
                      {expertisePoints.map((point, index) => (
                        <li key={index} className="flex items-start bg-white p-2 rounded-md shadow-sm border border-gray-50">
                          {point.icon}
                          <span className="text-gray-700 text-sm">{point.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Collapsible open={isOpen} onOpenChange={setIsOpen} className="pt-2">
                  <CollapsibleTrigger asChild>
                    <button className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center">
                      {isOpen ? "Read less" : "Read more"}
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <p className="text-gray-700 mt-3">
                      This combination of importance and complexity makes these projects both challenging and deeply meaningful. With my extensive experience in both domains, I help teams navigate these complexities.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
                
                <div className="pt-2">
                  <Button asChild className="bg-green-600 hover:bg-green-700 shadow-lg shadow-green-700/20">
                    <a href="#contact">Schedule a free consultation</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};

export default ExpertiseSection;
