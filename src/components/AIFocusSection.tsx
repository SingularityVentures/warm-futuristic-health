
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Database, Users, Wrench, CheckCircle2, Target } from "lucide-react";

interface AIAreaProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
  color: string;
}

const AIArea = ({ title, description, icon, items, color }: AIAreaProps) => {
  return (
    <div className={`bg-white rounded-xl border border-${color}-200 shadow-lg relative overflow-hidden`}>
      <div className={`absolute top-0 left-0 w-full h-1 bg-${color}-500`}></div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-lg bg-${color}-100 text-${color}-600`}>
            {icon}
          </div>
          <h3 className={`text-xl font-bold text-${color}-800`}>{title}</h3>
        </div>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 className={`h-4 w-4 text-${color}-500`} />
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AIFocusSection = () => {
  const [isVisible] = useState(true);
  
  const aiAreas = [
    { 
      title: "AI Strategy", 
      description: "Define your AI vision and roadmap", 
      icon: <Target size={24} />, 
      color: "green",
      items: ["Needs Assessment", "Solution Design", "Implementation Roadmap", "Technology Selection"],
    },
    { 
      title: "AI Implementation", 
      description: "Execute your AI initiatives effectively", 
      icon: <Wrench size={24} />, 
      color: "blue",
      items: ["Vendor Selection", "Regulatory Compliance", "Technical Integration", "Deployment"],
    },
    { 
      title: "Processes", 
      description: "Optimize workflows for AI integration", 
      icon: <Database size={24} />, 
      color: "purple",
      items: ["Process Mapping", "Workflow Optimization", "Automation Potential", "Quality Management"],
    },
    { 
      title: "Organizational Change", 
      description: "Prepare your teams for AI transformation", 
      icon: <Users size={24} />, 
      color: "orange",
      items: ["Workforce Training", "Process Redesign", "Adoption Management", "Stakeholder Management"],
    }
  ];
  
  return (
    <section id="ai-focus" className="section bg-white overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Focus Topic – AI
          </h2>
          <p className="text-gray-600 text-lg">
            Transforming pharmaceutical and healthcare operations through strategic AI implementation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[550px] w-full">
              {/* Center Circle - AI Transformation */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white text-center p-4 shadow-lg z-10 border-4 border-white">
                <div className="text-center">
                  <span className="font-bold text-lg">AI</span>
                  <br />
                  <span className="font-bold text-lg">Transformation</span>
                </div>
              </div>
              
              {/* AI Strategy - Top Left */}
              <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-green-100 border-2 border-green-500 flex items-center justify-center text-center p-2 shadow-lg">
                <div className="text-center">
                  <Target className="mx-auto text-green-600 mb-1" size={24} />
                  <span className="text-green-800 font-bold text-sm">AI Strategy</span>
                </div>
              </div>
              {/* Connecting Line from Strategy to Center */}
              <div className="absolute top-[52px] left-[52px] w-[120px] border-t-2 border-green-300" 
                   style={{ transform: 'rotate(45deg)', transformOrigin: '0 0' }}></div>
              
              {/* AI Implementation - Top Right */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center text-center p-2 shadow-lg">
                <div className="text-center">
                  <Wrench className="mx-auto text-blue-600 mb-1" size={24} />
                  <span className="text-blue-800 font-bold text-sm">AI Implementation</span>
                </div>
              </div>
              {/* Connecting Line from Implementation to Center */}
              <div className="absolute top-[52px] right-[52px] w-[120px] border-t-2 border-blue-300" 
                   style={{ transform: 'rotate(-45deg)', transformOrigin: '100% 0' }}></div>
              
              {/* Processes - Bottom Left */}
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-purple-100 border-2 border-purple-500 flex items-center justify-center text-center p-2 shadow-lg">
                <div className="text-center">
                  <Database className="mx-auto text-purple-600 mb-1" size={24} />
                  <span className="text-purple-800 font-bold text-sm">Processes</span>
                </div>
              </div>
              {/* Connecting Line from Processes to Center */}
              <div className="absolute bottom-[52px] left-[52px] w-[120px] border-t-2 border-purple-300" 
                   style={{ transform: 'rotate(-45deg)', transformOrigin: '0 100%' }}></div>
              
              {/* Organizational Change - Bottom Right */}
              <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-orange-100 border-2 border-orange-500 flex items-center justify-center text-center p-2 shadow-lg">
                <div className="text-center">
                  <Users className="mx-auto text-orange-600 mb-1" size={24} />
                  <span className="text-orange-800 font-bold text-sm">Organizational Change</span>
                </div>
              </div>
              {/* Connecting Line from Organizational Change to Center */}
              <div className="absolute bottom-[52px] right-[52px] w-[120px] border-t-2 border-orange-300" 
                   style={{ transform: 'rotate(45deg)', transformOrigin: '100% 100%' }}></div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-green-700">
              Unlocking AI's Potential in Healthcare
            </h3>
            
            <p className="text-gray-700">
              Artificial intelligence is transforming pharma and healthcare, from drug discovery to patient care. However, implementing AI in these regulated industries requires specialized expertise to balance innovation with compliance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aiAreas.map((area, index) => (
                <AIArea 
                  key={index}
                  title={area.title}
                  description={area.description}
                  icon={area.icon}
                  items={area.items}
                  color={area.color}
                />
              ))}
            </div>
            
            <Button asChild className="bg-green-600 hover:bg-green-700 mt-6">
              <a href="#contact">Discuss Your AI Strategy</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFocusSection;
