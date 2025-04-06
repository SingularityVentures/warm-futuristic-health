
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Target, Wrench, Database, Users, Quote as QuoteIcon } from "lucide-react";

interface QuoteProps {
  text: string;
  author: string;
  position?: string;
  imgSrc?: string;
}

const Quote = ({ text, author, position, imgSrc }: QuoteProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-green-50 border-green-100">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {imgSrc && (
            <div className="w-full md:w-1/3 h-48 md:h-auto overflow-hidden">
              <img 
                src={imgSrc} 
                alt="AI in Healthcare" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
          )}
          <div className={`p-6 ${imgSrc ? 'md:w-2/3' : 'w-full'} relative`}>
            <QuoteIcon className="absolute top-4 left-4 text-green-200 h-8 w-8 opacity-50" />
            <blockquote className="pt-6 pl-6">
              <p className="text-gray-700 italic text-lg relative z-10">
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
        </div>
      </CardContent>
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
      imgSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
    },
    {
      text: "AI is the solution, enhancing every stage of patient care from research and discovery to diagnosis and therapy selection.",
      author: "Ronald M. Razmi",
      position: "Author",
      imgSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800"
    },
    {
      text: "AI will not only help to deliver new and cheaper drugs but also expand the possibilities of what medicines can do",
      author: "Forbes Technology Council",
      imgSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
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
        
        <div className="space-y-12">
          {/* Quotes with images - enhanced design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quotes.map((quote, index) => (
              <Quote
                key={index}
                text={quote.text}
                author={quote.author}
                position={quote.position}
                imgSrc={quote.imgSrc}
              />
            ))}
            
            <div className="md:col-span-2 bg-white/80 backdrop-blur-md rounded-xl border border-green-100 shadow-md p-8">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-green-700 mb-6">
                  Unlocking AI's Potential in Healthcare
                </h3>
                
                <p className="text-gray-700 mb-8">
                  Artificial intelligence is transforming pharma and healthcare, from drug discovery to patient care. 
                  However, implementing AI in these regulated industries requires specialized expertise to balance innovation with compliance.
                </p>
                
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 mx-auto">
                  <a href="#contact">Discuss Your AI Strategy</a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* AI Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
      </div>
    </section>
  );
};

export default AIFocusSection;
