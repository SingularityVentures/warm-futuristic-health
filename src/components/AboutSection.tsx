
import { Button } from "@/components/ui/button";
import { Linkedin, Target, BookOpen, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mx-auto mb-12">
          <h2 className="text-4xl font-bold text-green-600 mb-2">
            About Me
          </h2>
          <div className="h-1 w-24 bg-green-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-6xl mx-auto">
          <div className="w-full lg:w-2/5">
            <img 
              src="/lovable-uploads/bfbb1e1e-799a-4916-9f0b-f26f853aa17b.png"
              alt="Jan Kroschinski" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          <div className="w-full lg:w-3/5">
            <Card className="border-0 shadow-lg h-full p-8">
              <div className="space-y-8">
                {/* Dedicated section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-green-100">
                      <Target className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-600">
                      Dedicated to Driving Digital Innovation in Healthcare
                    </h3>
                  </div>
                  
                  <p className="text-gray-700">
                    With over a decade of experience in digital transformation specifically 
                    tailored to pharmaceutical and healthcare sectors, I bring a unique 
                    combination of technical expertise and deep industry knowledge to 
                    every project.
                  </p>
                </div>
                
                {/* Background section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-green-100">
                      <BookOpen className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-600">
                      My Background
                    </h3>
                  </div>
                  
                  <p className="text-gray-700">
                    My background spans project management, regulatory compliance, 
                    and technological implementation—allowing me to bridge the gap 
                    between innovative digital solutions and the strict regulatory 
                    requirements of healthcare environments.
                  </p>
                </div>
                
                {/* Approach section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-green-100">
                      <Lightbulb className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-600">
                      My Approach
                    </h3>
                  </div>
                  
                  <p className="text-gray-700">
                    My background spans project management, regulatory compliance, 
                    and technological implementation—allowing me to bridge the gap 
                    between innovative digital solutions and the strict regulatory 
                    requirements of healthcare environments.
                  </p>
                </div>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Contact Me
                  </Button>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    <Linkedin size={18} className="mr-2" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
