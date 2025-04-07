
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Target, Wrench, Database, Users } from "lucide-react";

interface QuoteProps {
  text: string;
  author: string;
  position?: string;
}

const Quote = ({ text, author, position }: QuoteProps) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-lg border border-gray-100 relative">
      {/* Hexagonal background pattern similar to achievements cards */}
      <div className="absolute -right-6 -bottom-6 w-32 h-32 opacity-5">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-gray-900">
          <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0z" />
        </svg>
      </div>
      
      <CardContent className="p-6 relative z-10">
        <blockquote className="relative">
          <span className="absolute top-0 left-0 text-7xl font-serif text-green-400 leading-none -translate-x-2 -translate-y-3">"</span>
          <p className="text-gray-800 italic text-lg md:text-xl relative z-10 pt-6 pl-6 font-medium mb-4">
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
    <div className="bg-white rounded-xl border border-green-200 shadow-sm relative overflow-hidden h-full flex flex-col">
      <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-green-100 text-green-600">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-green-800">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6 text-sm">{description}</p>
        <div className="space-y-2 mt-auto">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
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
      text: "Artificial intelligence and generative AI may be the most important technology of any lifetime.",
      author: "Marc Benioff",
      position: "Salesforce"
    },
    {
      text: "AI is the solution, enhancing every stage of patient care from research and discovery to diagnosis and therapy selection.",
      author: "Ronald M. Razmi",
      position: "Author"
    },
    {
      text: "AI will not only help to deliver new and cheaper drugs but also expand the possibilities of what medicines can do.",
      author: "Forbes Technology Council",
      position: "Forbes"
    }
  ];
  
  const aiAreas = [
    { 
      title: "AI Strategy", 
      description: "Define a holistic AI strategy and roadmap", 
      icon: <Target size={24} />, 
      items: ["AI Maturity Assessment", "AI Strategy", "Implementation Roadmap", "Technology Selection"],
    },
    { 
      title: "AI Implementation", 
      description: "Execute your AI initiatives effectively and compliantly", 
      icon: <Wrench size={24} />, 
      items: ["Solution Design", "Implementation", "Project Management", "Regulatory Compliance"],
    },
    { 
      title: "Process Automation", 
      description: "Improve your workflows through AI automation", 
      icon: <Database size={24} />, 
      items: ["Process Mapping", "Process Redesign", "AI Automation", "AI Tools"],
    },
    { 
      title: "Organizational Change", 
      description: "Enable your organization to harness the full power of AI", 
      icon: <Users size={24} />, 
      items: ["AI CoE", "Leadership Workshops", "Workforce Training", "Change Management"],
    }
  ];
  
  return (
    <section id="ai-focus" className="section bg-gradient-to-b from-gray-50 to-white overflow-hidden py-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Main section heading in separate div - restructured to match other sections */}
        <div className="max-w-full mx-auto mb-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
              Unlocking AI's Potential in Pharma and Healthcare
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-7xl mx-auto">
              Artificial intelligence is transforming how pharmaceutical and healthcare organizations operate -<br />
              from pharma R&D to in-hospital patient care, AI will impact every single process in the next years.
            </p>
          </div>
        </div>
        
        {/* Quotes section with enhanced design */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quotes.map((quote, index) => (
              <Quote
                key={index}
                text={quote.text}
                author={quote.author}
                position={quote.position}
              />
            ))}
          </div>
        </div>
        
        {/* How I can help heading */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-green-700">How I Can Help You To Become an AI Organization</h3>
          <div className="h-1 w-16 bg-gradient-to-r from-green-400 to-green-600 mx-auto mt-3 mb-6"></div>
        </div>
        
        {/* AI Areas */}
        <div className="mb-8">
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
        <div className="text-center mt-8">
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-6 text-base">
            <a href="#contact">Discuss Your AI Strategy</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIFocusSection;
