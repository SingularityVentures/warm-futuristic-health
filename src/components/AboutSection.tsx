
import { Button } from "@/components/ui/button";
import { Linkedin, Zap, Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-5xl mx-auto">
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="rounded-full overflow-hidden border-4 border-green-500 w-64 h-64 shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                  alt="Profile Photo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg z-20">
                <div className="bg-green-600 text-white rounded-full p-2">
                  <Zap className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-lg bg-green-100 mr-4">
                  <Target className="h-5 w-5 text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-green-700">
                  Dedicated to Driving Digital Innovation in Healthcare
                </h3>
              </div>
              
              <p className="text-gray-700 mb-4">
                With over a decade of experience in digital transformation specifically tailored to pharmaceutical and healthcare sectors, I bring a unique combination of technical expertise and deep industry knowledge to every project.
              </p>
              
              <div className="flex items-center mb-6 mt-8">
                <div className="p-2 rounded-lg bg-green-100 mr-4">
                  <Lightbulb className="h-5 w-5 text-green-700" />
                </div>
                <h4 className="text-xl font-semibold text-green-700">My Approach</h4>
              </div>
              
              <p className="text-gray-700 mb-6">
                My background spans project management, regulatory compliance, and technological implementation—allowing me to bridge the gap between innovative digital solutions and the strict regulatory requirements of healthcare environments.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-green-600 hover:bg-green-700 shadow-lg shadow-green-700/20">
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
      </div>
    </section>
  );
};

export default AboutSection;
