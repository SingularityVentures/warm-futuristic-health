
import { Check, Award, Lightbulb, ArrowRight, Shield, BarChart4 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useIsMobile } from "@/hooks/use-mobile";

const ExpertiseSection = () => {
  const { scrollToSection } = useScrollToSection();
  const isMobile = useIsMobile();
  
  const expertisePoints = [
    {
      title: "IT Project Management",
      description: "Specialized in regulated industries with focus on compliance and efficiency",
      icon: <BarChart4 className="h-6 w-6 text-green-600" />
    },
    {
      title: "Pharma & Healthcare Knowledge",
      description: "In-depth understanding of the complete value chain and business processes",
      icon: <Shield className="h-6 w-6 text-green-600" />
    },
    {
      title: "Computer System Validation",
      description: "GxP expertise to ensure regulatory compliance for critical systems",
      icon: <Check className="h-6 w-6 text-green-600" />
    },
    {
      title: "Data Protection & GDPR",
      description: "Implementing healthcare data protection and privacy requirements",
      icon: <Award className="h-6 w-6 text-green-600" />
    }
  ];
  
  return (
    <section id="expertise" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white -z-10"></div>
      <div className="absolute inset-0 molecular-bg opacity-5 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            I specialize in IT for Pharma and Healthcare
          </h2>
          <div className="technoline mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Healthcare and Life Sciences face unique challenges for IT projects due to stringent regulations, patient safety concerns, and innovation pressure. My expertise helps navigate these complexities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {expertisePoints.map((point, index) => (
            <Card key={index} className="border-green-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 p-2 bg-green-50 rounded-lg">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-700 mb-2">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto border border-green-100">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="h-8 w-8 text-green-700" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Why Industry Expertise Matters</h3>
              
              <p className="text-gray-700 mb-4">
                Healthcare and pharmaceutical IT projects face unique challenges that require specialized knowledge:
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span className="text-gray-700">Stringent regulations (GxP, GDPR, EU AI Act)</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span className="text-gray-700">Patient safety as top priority</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span className="text-gray-700">Complex validation requirements</span>
                </li>
                <li className="flex">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span className="text-gray-700">Constant innovation pressure</span>
                </li>
              </ul>
              
              <Separator className="my-6 bg-green-100" />
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  className="bg-green-600 hover:bg-green-700 shadow-lg shadow-green-700/20"
                >
                  <a href="#contact" onClick={scrollToSection("contact")}>
                    Schedule a Consultation
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline"
                  className="border-green-200 text-green-700 hover:bg-green-50"
                >
                  <a href="#services" onClick={scrollToSection("services")}>
                    View Services
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
