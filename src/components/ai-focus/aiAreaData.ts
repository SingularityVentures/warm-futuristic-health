
import { Target, Wrench, Database, Users } from "lucide-react";
import { LucideIcon } from "lucide-react";
import React from 'react';

export interface AIArea {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
  image: string;
}

export const aiAreas: AIArea[] = [
  { 
    title: "AI Strategy", 
    description: "Define a holistic AI strategy and roadmap", 
    icon: Target, 
    items: ["AI Maturity Assessment", "AI Strategy", "Implementation Roadmap", "Technology Selection"],
    image: "/lovable-uploads/387031f2-b62f-42f7-88f6-51955a71c962.png"
  },
  { 
    title: "AI Implementation", 
    description: "Execute your AI initiatives effectively and compliantly", 
    icon: Wrench, 
    items: ["Solution Design", "Implementation", "Project Management", "Regulatory Compliance"],
    image: "/lovable-uploads/bfbb1e1e-799a-4916-9f0b-f26f853aa17b.png"
  },
  { 
    title: "Process Automation", 
    description: "Improve your workflows through AI automation", 
    icon: Database, 
    items: ["Process Mapping", "Process Redesign", "AI Automation", "AI Tools"],
    image: "/lovable-uploads/d0421a57-955d-4a3d-95fa-8c11795966d5.png"
  },
  { 
    title: "Organizational Change", 
    description: "Enable your organization to harness the full power of AI", 
    icon: Users, 
    items: ["AI CoE", "Leadership Workshops", "Workforce Training", "Change Management"],
    image: "/lovable-uploads/58b03ce5-a7a6-465f-8f0a-76560d128060.png"
  }
];
