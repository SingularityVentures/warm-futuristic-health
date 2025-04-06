
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Target, Wrench, Database, Users } from "lucide-react";

interface QuoteProps {
  text: string;
  author: string;
  position?: string;
  imageSrc?: string;
}

const Quote = ({ text, author, position, imageSrc }: QuoteProps) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-green-100">
      <div className="relative">
        {imageSrc && (
          <div className="absolute inset-0 opacity-10">
            <img src={imageSrc} alt="" className="w-full h-full object-cover" />
          </div>
        )}
        <CardContent className="p-6 backdrop-blur-sm relative z-10">
          <blockquote className="relative">
            <span className="absolute top-0 left-0 text-6xl text-green-300 leading-none -translate-x-2 -translate-y-3">"</span>
            <p className="text-gray-800 italic text-lg relative z-10 pt-5 pl-5 font-medium">
              {text}
            </p>
            <footer className="mt-4 text-right">
              <cite className="font-medium text-green-700 not-italic">
                {author}
                {position && <span className="block text-sm text-gray-500 mt-1">{position}</span>}
              </cite>
            </footer>
          </blockquote>
        </CardContent>
      </div>
    </Card>
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
      position: "Insilico Medicine",
      imageSrc: "/lovable-uploads/bc6e2537-9ddc-4599-a096-bae35e651555.png"
    },
    {
      text: "AI is the solution, enhancing every stage of patient care from research and discovery to diagnosis and therapy selection.",
      author: "Ronald M. Razmi",
      position: "Author",
      imageSrc: "/lovable-uploads/dd7b86f5-cc61-4c8c-b907-db217cdce5eb.png"
    },
    {
      text: "AI will not only help to deliver new and cheaper drugs but also expand the possibilities of what medicines can do",
      author: "Forbes Technology Council",
      imageSrc: "/lovable-uploads/66c744b1-0763-459f-82a5-48ff3f186a1c.png"
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
    <section id="ai-focus" className="section bg-gradient-to-b from-gray-50 to-white overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Focus Topic – AI
          </h2>
          <p className="text-gray-600 text-lg">
            Transforming pharmaceutical and healthcare operations through strategic AI implementation
          </p>
        </div>
        
        {/* Quotes section with enhanced design */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quotes.map((quote, index) => (
              <Quote
                key={index}
                text={quote.text}
                author={quote.author}
                position={quote.position}
                imageSrc={quote.imageSrc}
              />
            ))}
          </div>
        </div>
        
        {/* AI Areas */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-green-700 text-center mb-8">
            Unlocking AI's Potential in Healthcare
          </h3>
          
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
            Artificial intelligence is transforming pharma and healthcare, from drug discovery to patient care. However, implementing AI in these regulated industries requires specialized expertise to balance innovation with compliance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
        
        {/* Centered CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-6 text-base">
            <a href="#contact">Discuss Your AI Strategy</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIFocusSection;
