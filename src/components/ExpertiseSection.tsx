import { Shield, FileCheck, Laptop, ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useIsMobile } from "@/hooks/use-mobile";

const ExpertiseSection = () => {
  const { scrollToSection } = useScrollToSection();
  const isMobile = useIsMobile();
  
  const expertisePoints = [
    {
      title: "IT Project Management Expertise",
      description: "Specialized in IT Project Management for regulated industries, both agile and classic",
      icon: <Laptop className="h-7 w-7 text-green-600" />
    },
    {
      title: "Pharma & Healthcare Knowledge",
      description: "In-depth understanding of pharma and healthcare value chains and business processes",
      icon: <Shield className="h-7 w-7 text-green-600" />
    },
    {
      title: "Computer System Validation",
      description: "GxP expertise to ensure regulatory compliance for critical systems",
      icon: <Award className="h-7 w-7 text-green-600" />
    },
    {
      title: "Data Protection & GDPR",
      description: "Well-versed in healthcare data protection and privacy compliance",
      icon: <FileCheck className="h-7 w-7 text-green-600" />
    }
  ];

  return (
    <section id="expertise" className="py-8 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white -z-10"></div>
      <div className="absolute inset-0 molecular-bg opacity-5 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-8 md:mb-16 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 heading-gradient">
            I specialize in IT for Pharma and Healthcare
          </h2>
          <div className="technoline mx-auto mb-4 md:mb-6"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto">
            Strict regulations and patient safety make IT projects in Healthcare and Life Sciences uniquely challenging.<br className="hidden md:block"/>
            I use my experience in healthcare, pharma, and IT to help companies handle these complex issues.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto mb-8 md:mb-12">
          {expertisePoints.map((point, index) => (
            <Card key={index} className="border-green-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
              <CardContent className="p-4 md:p-6 h-full">
                <div className="flex items-start h-full">
                  <div className="flex-shrink-0 mr-3 md:mr-4 p-2 md:p-3 bg-green-50 rounded-lg">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-1 md:mb-2">{point.title}</h3>
                    <p className="text-sm md:text-base text-gray-600">{point.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-green-600 hover:bg-green-700 shadow-lg shadow-green-700/20">
            <a href="#contact" onClick={scrollToSection("contact")}>
              Schedule a Consultation
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
