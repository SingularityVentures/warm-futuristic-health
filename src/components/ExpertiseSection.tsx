
import { Check, Award, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExpertiseSection = () => {
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
    <section id="expertise" className="section bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            I specialize in IT for Pharma and Healthcare
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="order-2 lg:order-1">
            <div className="p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100 shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <Lightbulb className="h-5 w-5 text-green-700" />
                  </div>
                  Why It Matters
                </h3>
                
                <p className="text-lg text-gray-700 mb-4">
                  Healthcare and Life Sciences are the world's most vital industries, but their high stakes create unique challenges. IT projects in these sectors face significant hurdles:
                </p>
                <ul className="pl-8 list-disc mb-4 text-lg text-gray-700">
                  <li>Stringent regulations (GxP, GDPR, EU AI Act)</li>
                  <li>Patient safety concerns</li>
                  <li>Constant pressure to innovate and deliver faster</li>
                </ul>
                
                <p className="text-lg text-gray-700 mb-4">
                  With my extensive experience in healthcare, pharma and IT, I help teams navigate these complexities.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-green-700 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <Award className="h-5 w-5 text-green-700" />
                  </div>
                  My Expertise
                </h3>
                <ul className="space-y-0.5 pl-2">
                  {expertisePoints.map((point, index) => (
                    <li key={index} className="flex items-start p-1">
                      {point.icon}
                      <span className="text-lg text-gray-700">{point.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button asChild className="bg-green-600 hover:bg-green-700 shadow-lg shadow-green-700/20">
                <a href="#contact">Schedule a Free Consultation</a>
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex items-center h-full">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-full w-full">
              <img 
                alt="Compliance dashboard showing 100% compliance with project timelines, checklists, and audit reports" 
                className="w-full h-full object-cover" 
                src="/lovable-uploads/58b03ce5-a7a6-465f-8f0a-76560d128060.png" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
