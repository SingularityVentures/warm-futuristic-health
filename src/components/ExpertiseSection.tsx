
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
    <section id="expertise" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white -z-10"></div>
      <div className="absolute inset-0 molecular-bg opacity-5 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            I specialize in IT for Pharma and Healthcare
          </h2>
          <div className="technoline mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            Strict regulations and patient safety make IT projects in Healthcare and Life Sciences uniquely challenging.<br/>
            I use my experience in healthcare, pharma, and IT to help companies handle these complex issues.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {expertisePoints.map((point, index) => (
            <Card key={index} className="border-green-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
              <CardContent className="p-10 h-full">
                <div className="flex items-start h-full">
                  <div className="flex-shrink-0 mr-6 p-4 bg-green-50 rounded-lg">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-green-700 mb-3">{point.title}</h3>
                    <p className="text-gray-600 text-lg">{point.description}</p>
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
