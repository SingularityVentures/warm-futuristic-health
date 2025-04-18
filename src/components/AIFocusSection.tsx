
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Target, Wrench, Database, Users } from "lucide-react";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface AIAreaProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
  image: string;
}

const AIFocusSection = () => {
  const { scrollToSection } = useScrollToSection();
  
  const aiAreas = [
    { 
      title: "AI Strategy", 
      description: "Define a holistic AI strategy and roadmap", 
      icon: <Target size={24} />, 
      items: ["AI Maturity Assessment", "AI Strategy", "Implementation Roadmap", "Technology Selection"],
      image: "/lovable-uploads/387031f2-b62f-42f7-88f6-51955a71c962.png"
    },
    { 
      title: "AI Implementation", 
      description: "Execute your AI initiatives effectively and compliantly", 
      icon: <Wrench size={24} />, 
      items: ["Solution Design", "Implementation", "Project Management", "Regulatory Compliance"],
      image: "/lovable-uploads/bfbb1e1e-799a-4916-9f0b-f26f853aa17b.png"
    },
    { 
      title: "Process Automation", 
      description: "Improve your workflows through AI automation", 
      icon: <Database size={24} />, 
      items: ["Process Mapping", "Process Redesign", "AI Automation", "AI Tools"],
      image: "/lovable-uploads/d0421a57-955d-4a3d-95fa-8c11795966d5.png"
    },
    { 
      title: "Organizational Change", 
      description: "Enable your organization to harness the full power of AI", 
      icon: <Users size={24} />, 
      items: ["AI CoE", "Leadership Workshops", "Workforce Training", "Change Management"],
      image: "/lovable-uploads/58b03ce5-a7a6-465f-8f0a-76560d128060.png"
    }
  ];

  const animatedTiles = aiAreas.map(area => ({
    content: <div className="bg-white rounded-xl border border-green-200 shadow-sm relative overflow-hidden h-full flex flex-col">
      <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-green-100 text-green-600">
            {area.icon}
          </div>
          <h3 className="text-xl font-bold text-green-800">{area.title}</h3>
        </div>
        <p className="text-gray-600 mb-6 text-sm">{area.description}</p>
        <div className="space-y-2 mt-auto">
          {area.items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>,
    src: area.image
  }));

  return (
    <section id="ai" className="section bg-gradient-to-b from-gray-50 to-white overflow-hidden py-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-full mx-auto mb-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
              Unlocking AI's Potential in Pharma and Healthcare
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-7xl mx-auto">
              Artificial intelligence is transforming life sciences and healthcare - from pharma R&D to patient care, AI will impact every single process. <br />
              Let me help you evolve into an AI-driven organization:
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <AnimatedTestimonials 
            tiles={animatedTiles}
            autoplay={true}
            className="bg-white rounded-xl shadow-sm"
          />
        </div>
        
        <div className="text-center mt-8">
          <Button 
            asChild 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 px-8 py-6 text-base"
          >
            <a href="#contact" onClick={scrollToSection("contact")}>Discuss Your AI Strategy</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIFocusSection;
