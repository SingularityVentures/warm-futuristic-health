
import { Check, Award, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const ExpertiseSection = () => {
  const { scrollToSection } = useScrollToSection();
  
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
    <section id="expertise" className="section bg-white pt-4 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            I specialize in IT for Pharma and Healthcare
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100 shadow-sm">
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-green-700 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <Lightbulb className="h-5 w-5 text-green-700" />
                  </div>
                  Why It Matters
                </h3>
                
                <p className="text-lg text-gray-700 mb-4">
                  Healthcare and Life Sciences are among the world's most vital industries but their high stakes create unique challenges for IT projects and new business:
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
                <h3 className="text-xl font-semibold mb-3 text-green-700 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <Award className="h-5 w-5 text-green-700" />
                  </div>
                  My Industry Expertise
                </h3>
                <ul className="space-y-0.5 pl-2">
                  {expertisePoints.map((point, index) => (
                    <li key={index} className="flex items-center justify-center p-1">
                      {point.icon}
                      <span className="text-lg text-gray-700">{point.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <Button 
              asChild 
              className="w-full bg-green-600 hover:bg-green-700 shadow-lg shadow-green-700/20"
            >
              <a href="#contact" onClick={scrollToSection("contact")}>Schedule a Free Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
