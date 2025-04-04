
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Beaker, Users, Rocket, ChevronRight, Lightbulb, CheckCircle, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="services" className="section bg-gradient-to-b from-gray-50 to-white py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main Services Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Digital Transformation Services
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Successful digital transformation needs to encompass all of the three sections: 
            Technology, Processes and People. I offer services to do each individual section or all of the three combined.
          </p>
        </div>

        {/* Digital Transformation Venn Diagram */}
        <div className="relative hidden lg:block w-full max-w-lg mx-auto mb-16">
          <div className="venn-diagram relative h-[400px]">
            {/* Technology Circle */}
            <div className="absolute w-64 h-64 rounded-full border-4 border-green-700 bg-green-50/40 backdrop-blur-sm flex items-center justify-center transform -translate-x-1/4 transition-all duration-300 hover:bg-green-50/60 hover:shadow-lg">
              <span className="text-xl font-bold text-green-800">TECHNOLOGY</span>
            </div>
            
            {/* Process Circle */}
            <div className="absolute w-64 h-64 rounded-full border-4 border-green-700 bg-green-50/40 backdrop-blur-sm flex items-center justify-center transform translate-x-1/4 translate-y-3/4 transition-all duration-300 hover:bg-green-50/60 hover:shadow-lg">
              <span className="text-xl font-bold text-green-800">PROCESSES</span>
            </div>
            
            {/* People Circle */}
            <div className="absolute w-64 h-64 rounded-full border-4 border-green-700 bg-green-50/40 backdrop-blur-sm flex items-center justify-center transform translate-x-3/4 transition-all duration-300 hover:bg-green-50/60 hover:shadow-lg">
              <span className="text-xl font-bold text-green-800">PEOPLE</span>
            </div>
            
            {/* Center Overlap */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-center">
              <div className="bg-green-700 text-white px-5 py-3 rounded-full shadow-lg animate-pulse-slow">
                <span className="text-xl font-bold whitespace-nowrap">DIGITAL TRANSFORMATION</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {/* First section: How I help you transform your existing business */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-green-800 text-center md:text-left">
              How I help you to transform your existing business
            </h3>
            
            {/* Technology Card */}
            <div className="service-card bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="flex">
                <div className="bg-green-700 text-white px-4 py-3 flex items-center justify-center">
                  <span className="font-bold writing-vertical">Technology</span>
                </div>
                <div className="p-5 w-full">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-bold text-green-800 mb-3">(GxP) Software Implementation</h4>
                    <div className="p-2 rounded-full bg-green-100">
                      <Beaker className="h-6 w-6 text-green-700" />
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Specialized support for implementing and validating GxP-compliant systems. From 
                    vendor selection to deployment, I ensure alignment with regulatory standards.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["Validation", "Qualification", "Compliance", "GxP", "Stakeholder Mgmt", "End-To-End"].map((tag, i) => (
                      <Badge key={i} variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-green-700 p-0 hover:bg-transparent hover:text-green-800 flex items-center gap-1">
                    Learn more <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Processes Card */}
            <div className="service-card bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="flex">
                <div className="bg-green-700 text-white px-4 py-3 flex items-center justify-center">
                  <span className="font-bold writing-vertical">Processes</span>
                </div>
                <div className="p-5 w-full">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-bold text-green-800 mb-3">Business Process Transformation</h4>
                    <div className="p-2 rounded-full bg-green-100">
                      <BrainCircuit className="h-6 w-6 text-green-700" />
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Redesign of core workflows, systems, and operations to improve efficiency, reduce
                    costs, and enhance customer value by leveraging technology (AI) and data analytics.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["AI", "RPA", "Automation"].map((tag, i) => (
                      <Badge key={i} variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-green-700 p-0 hover:bg-transparent hover:text-green-800 flex items-center gap-1">
                    Learn more <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* People Card */}
            <div className="service-card bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="flex">
                <div className="bg-green-700 text-white px-4 py-3 flex items-center justify-center">
                  <span className="font-bold writing-vertical">People</span>
                </div>
                <div className="p-5 w-full">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-bold text-green-800 mb-3">Change Management & Organizational Change</h4>
                    <div className="p-2 rounded-full bg-green-100">
                      <Users className="h-6 w-6 text-green-700" />
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Transitioning individuals, teams, and organizations from a current state to a desired
                    future state while minimizing resistance and maximizing adoption.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["Trainings", "Workshops", "Communication", "Multiplier"].map((tag, i) => (
                      <Badge key={i} variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-green-700 p-0 hover:bg-transparent hover:text-green-800 flex items-center gap-1">
                    Learn more <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Second section: How I help you to create new business */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-green-800 text-center md:text-left">
              How I help you to create new business
            </h3>
            
            <div className="service-card bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="flex">
                <div className="bg-green-700 text-white px-4 py-3 flex items-center justify-center">
                  <span className="font-bold writing-vertical">1-2-3</span>
                </div>
                <div className="p-5 w-full">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-bold text-green-800 mb-3">Venture Building & Go-To-Market</h4>
                    <div className="p-2 rounded-full bg-green-100">
                      <Rocket className="h-6 w-6 text-green-700" />
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Strategic guidance for launching healthcare and life science ventures—from concept validation to market entry and scaling.
                    I help you to create bold ideas that can turn into digital, scalable business models and validate them. Finally, I create go-to-market strategies and execute them: I build, launch, and scale ventures that win markets.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["Ideation", "Design Thinking", "Hypothesis Testing", "Go-To-Market", "Venture Building"].map((tag, i) => (
                      <Badge key={i} variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-green-700 p-0 hover:bg-transparent hover:text-green-800 flex items-center gap-1">
                    Learn more <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* New Business Journey */}
            <div className="mt-4">
              <h4 className="text-xl font-bold text-green-800 mb-3 text-center">The Journey to New Business</h4>
              <div className="relative flex justify-center my-8">
                {/* Step 1 */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center mb-2 glow-effect">
                    <span className="font-bold">1</span>
                  </div>
                  <div className="text-center">
                    <h5 className="font-bold text-green-800">Ideation</h5>
                    <div className="mt-1">
                      <Lightbulb className="w-5 h-5 text-green-600 mx-auto" />
                    </div>
                  </div>
                </div>
                
                {/* Connector */}
                <div className="absolute top-[24px] left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-green-600 z-0 flex items-center">
                  <ArrowRight className="text-green-600 absolute right-0" />
                </div>
                
                {/* Step 2 */}
                <div className="relative z-10 flex flex-col items-center mx-20">
                  <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center mb-2 glow-effect">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="text-center">
                    <h5 className="font-bold text-green-800">Validation</h5>
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center mb-2 glow-effect">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="text-center">
                    <h5 className="font-bold text-green-800">Go-to-Market</h5>
                    <div className="mt-1">
                      <Rocket className="w-5 h-5 text-green-600 mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-gray-600">
                  A systematic approach to create, validate and launch successful ventures in the healthcare and life sciences industry.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="inline-block relative bg-gradient-to-r from-green-100 to-green-50 px-8 py-6 rounded-xl shadow-md border border-green-200">
            <h3 className="text-2xl font-bold text-green-800 mb-3">Ready to transform your business?</h3>
            <p className="text-gray-600 mb-4">Let's discuss how my services can help you achieve your digital transformation goals.</p>
            <Button className="bg-green-700 hover:bg-green-800 text-white px-6">
              Contact Me Now
            </Button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
        
        .venn-diagram::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 80%;
          height: 80%;
          background-image: radial-gradient(circle, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0) 70%);
          transform: translate(-50%, -50%);
          z-index: -1;
          filter: blur(20px);
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
