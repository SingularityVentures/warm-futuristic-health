
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExpertiseSection = () => {
  const expertisePoints = [
    "Deep understanding of GxP compliance requirements",
    "GDPR data protection expertise for sensitive health data",
    "Experience with regulatory submissions and audits",
    "Knowledge of healthcare IT security frameworks",
    "Specialized in pharma and medical device regulations"
  ];
  
  return (
    <section id="expertise" className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Our Expertise - Pharma and Healthcare
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-lg text-gray-700 mb-6">
              Pharma and healthcare industries operate under unique constraints, facing intense regulatory scrutiny and compliance requirements. Our specialized expertise ensures your digital transformation initiatives remain compliant while driving innovation.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              With comprehensive knowledge of regulatory frameworks including GxP and GDPR, we provide solutions that balance technological advancement with strict compliance standards essential to these highly regulated sectors.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-green-700">
                Regulatory Expertise
              </h3>
              <ul className="space-y-3">
                {expertisePoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <a href="#services">Explore Our Services</a>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2532&auto=format&fit=crop"
                alt="Healthcare professional using digital technology" 
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
