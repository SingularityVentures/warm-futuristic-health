
import { Check, Award, Lightbulb, ArrowRight, Target, Shield, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ExpertiseSection = () => {
  const { scrollToSection } = useScrollToSection();
  
  const expertiseAreas = [
    {
      icon: <Target className="h-12 w-12 text-green-600 p-2 bg-green-50 rounded-lg" />,
      title: "IT Project Management",
      description: "Expert leadership for regulated industry projects with strict compliance requirements",
    },
    {
      icon: <Shield className="h-12 w-12 text-green-600 p-2 bg-green-50 rounded-lg" />,
      title: "Compliance & Validation",
      description: "Computer System Validation (CSV), GxP expertise, and healthcare data protection",
    },
    {
      icon: <Cpu className="h-12 w-12 text-green-600 p-2 bg-green-50 rounded-lg" />,
      title: "Healthcare Tech",
      description: "In-depth knowledge of pharma & healthcare value chains and industry requirements",
    },
  ];

  const keyBenefits = [
    "Navigate complex regulatory landscapes",
    "Ensure patient safety and data integrity",
    "Accelerate delivery without compromising quality",
    "Seamlessly integrate AI and digital innovation"
  ];
  
  return (
    <section id="expertise" className="section bg-gradient-to-b from-white to-green-50 pt-16 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Healthcare & Pharma IT Expertise
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Specialized knowledge to navigate the unique challenges of healthcare and pharmaceutical industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -z-10 group-hover:bg-green-100 transition-colors"></div>
              <CardContent className="p-6">
                <div className="mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-700">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-4xl mx-auto border border-green-100">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <Lightbulb className="h-5 w-5 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-green-700">Why It Matters</h3>
              </div>
              
              <p className="text-gray-700 mb-4">
                Healthcare and Life Sciences face unique challenges that require specialized IT expertise:
              </p>
              
              <ul className="space-y-2 mb-6">
                {keyBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <Award className="h-5 w-5 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-green-700">My Approach</h3>
              </div>
              
              <p className="text-gray-700 mb-4">
                With extensive experience in healthcare, pharma and IT, I help teams:
              </p>
              
              <ul className="space-y-3">
                <li className="bg-green-50 p-3 rounded-lg flex items-center">
                  <span className="text-gray-700">Navigate regulations while innovating</span>
                </li>
                <li className="bg-green-50 p-3 rounded-lg flex items-center">
                  <span className="text-gray-700">Implement compliant AI solutions</span>
                </li>
                <li className="bg-green-50 p-3 rounded-lg flex items-center">
                  <span className="text-gray-700">Maintain quality at accelerated speeds</span>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-green-100" />
          
          <div className="flex flex-col sm:flex-row justify-center items-center mt-2 gap-4">
            <Button 
              asChild 
              className="bg-green-600 hover:bg-green-700 shadow-lg shadow-green-700/20 w-full sm:w-auto"
            >
              <a href="#contact" onClick={scrollToSection("contact")} className="flex items-center gap-2">
                Schedule a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline"
              className="border-green-200 hover:bg-green-50 hover:text-green-700 w-full sm:w-auto"
            >
              <a href="#services" onClick={scrollToSection("services")}>View My Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
