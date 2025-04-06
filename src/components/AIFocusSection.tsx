
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Target, Wrench, Database, Users } from "lucide-react";

interface QuoteProps {
  text: string;
  author: string;
  position?: string;
}

const Quote = ({ text, author, position }: QuoteProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-green-100">
      <blockquote className="relative">
        <span className="absolute top-0 left-0 text-6xl text-green-200 leading-none -translate-x-2 -translate-y-3">"</span>
        <p className="text-gray-700 italic text-lg relative z-10 pt-4 pl-4">
          {text}
        </p>
        <footer className="mt-3 text-right">
          <cite className="font-medium text-green-700 not-italic">
            {author}
            {position && <span className="block text-sm text-gray-500 mt-1">{position}</span>}
          </cite>
        </footer>
      </blockquote>
    </div>
  );
};

interface AIAreaProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
}

const AIArea = ({ title, description, icon, items }: AIAreaProps) => {
  return (
    <div className="bg-white rounded-xl border border-green-200 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-green-100 text-green-600">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-green-800">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AIFocusSection = () => {
  const quotes = [
    {
      text: "This is the single most powerful force of our time",
      author: "Alex Thavoronko",
      position: "Insilico Medicine"
    },
    {
      text: "AI is the solution, enhancing every stage of patient care from research and discovery to diagnosis and therapy selection.",
      author: "Ronald M. Razmi",
      position: "Author"
    },
    {
      text: "AI will not only help to deliver new and cheaper drugs but also expand the possibilities of what medicines can do",
      author: "Forbes Technology Council"
    }
  ];
  
  const aiAreas = [
    { 
      title: "AI Strategy", 
      description: "Define your AI vision and roadmap", 
      icon: <Target size={24} />, 
      items: ["Needs Assessment", "Solution Design", "Implementation Roadmap", "Technology Selection"],
    },
    { 
      title: "AI Implementation", 
      description: "Execute your AI initiatives effectively", 
      icon: <Wrench size={24} />, 
      items: ["Vendor Selection", "Regulatory Compliance", "Technical Integration", "Deployment"],
    },
    { 
      title: "Processes", 
      description: "Optimize workflows for AI integration", 
      icon: <Database size={24} />, 
      items: ["Process Mapping", "Workflow Optimization", "Automation Potential", "Quality Management"],
    },
    { 
      title: "Organizational Change", 
      description: "Prepare your teams for AI transformation", 
      icon: <Users size={24} />, 
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
          {/* Left side - Quotes */}
          <div className="space-y-6">
            <div className="relative">
              {/* Background pattern for aesthetics */}
              <div className="absolute inset-0 tech-pattern opacity-5 rounded-xl"></div>
              
              {/* Quotes section */}
              <div className="relative space-y-6 z-10">
                {quotes.map((quote, index) => (
                  <Quote
                    key={index}
                    text={quote.text}
                    author={quote.author}
                    position={quote.position}
                  />
                ))}
              </div>
              
              {/* Background image subtle overlay */}
              <div className="absolute bottom-0 right-0 opacity-10">
                <img 
                  src="/lovable-uploads/bc6e2537-9ddc-4599-a096-bae35e651555.png" 
                  alt="AI Technology" 
                  className="w-44 h-44 object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Right side - AI Areas (updated to green only) */}
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
