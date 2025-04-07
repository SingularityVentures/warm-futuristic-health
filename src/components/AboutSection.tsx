
import { Button } from "@/components/ui/button";
import { Linkedin, BookOpen, Lightbulb, WavingHand } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-gray-50 pt-12 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mx-auto mb-10">
          <h2 className="text-4xl font-bold text-green-600 mb-2">
            About Me
          </h2>
          <div className="h-1 w-24 bg-green-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-6xl mx-auto">
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img 
              src="/lovable-uploads/a68067c5-ca94-4eb4-8c90-b322067b0600.png"
              alt="Jan Kroschinski" 
              className="w-full h-auto max-w-full object-contain mix-blend-multiply"
            />
          </div>
          
          <div className="w-full lg:w-1/2">
            <Card className="border-0 shadow-lg h-full p-8">
              <div className="space-y-8">
                {/* Dedicated section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-green-100">
                      <WavingHand className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-600">
                      Hi, I'm Jan Kroschinski
                    </h3>
                  </div>
                  
                  <p className="text-gray-700">
                    I'm a freelancer, entrepreneur, and technology enthusiast. 
                    What drives me is a deep passion for technology, 
                    the joy of collaborating with exceptional people, 
                    and ultimately to positively affect people's lives.
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
                    Growing up in a medical family, I considered becoming a doctor — 
                    but chose to study business at Rotterdam School of Management.
                    Since then, I've been fortunate to launch a venture that reached over a million users and
                    to lead a variety of transformation projects across startups, SMEs, and Fortune 500 companies.
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
                    I strive to deliver the quality and strategic insight of a top-tier consultancy — 
                    while staying more hands-on, and human in my approach.  
                  </p>
                </div>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild className="bg-green-600 hover:bg-green-700">
                    <a href="#contact">Contact Me</a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-green-600 text-green-600 hover:bg-green-50"
                    asChild
                  >
                    <a 
                      href="https://www.linkedin.com/in/jankroschinski/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={18} className="mr-2" />
                      Connect on LinkedIn
                    </a>
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
