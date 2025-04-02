
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            About Me
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-5xl mx-auto">
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="rounded-full overflow-hidden border-4 border-green-500 w-64 h-64 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                alt="Profile Photo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-2/3">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Dedicated to Driving Digital Innovation in Healthcare
            </h3>
            
            <p className="text-gray-700 mb-4">
              With over a decade of experience in digital transformation specifically tailored to pharmaceutical and healthcare sectors, I bring a unique combination of technical expertise and deep industry knowledge to every project.
            </p>
            
            <p className="text-gray-700 mb-6">
              My background spans project management, regulatory compliance, and technological implementation—allowing me to bridge the gap between innovative digital solutions and the strict regulatory requirements of healthcare environments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin size={18} />
                  <span>Connect on LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
