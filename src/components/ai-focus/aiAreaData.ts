
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
    description: "Define a holistic AI strategy and implementation roadmap", 
    icon: Target, 
    items: ["AI Maturity Assessment", "AI Strategy", "Implementation Roadmap", "Technology Selection"],
    image: "/lovable-uploads/387031f2-b62f-42f7-88f6-51955a71c962.png"
  },
  { 
    title: "AI Implementation", 
    description: "Execute your AI initiatives effectively and compliantly", 
    icon: Wrench, 
    items: ["Solution Design", "Implementation", "Project Management", "Regulatory Compliance"],
    image: "/lovable-uploads/63dd6c0f-8f03-4fda-b63f-ce2841f00bea.png"
  },
  { 
    title: "Process Automation", 
    description: "Improve your workflows through AI automation", 
    icon: Database, 
    items: ["Process Mapping", "Process Redesign", "AI Automation", "AI Tools"],
    image: "/lovable-uploads/403f462f-eaae-4c3e-88cb-26873bc3e6af.png"
  },
  { 
    title: "Organizational Change", 
    description: "Enable your organization to harness the full power of AI", 
    icon: Users, 
    items: ["AI CoE", "Leadership Workshops", "Workforce Training", "Change Management"],
    image: "/lovable-uploads/67d7eee5-4351-4a4c-a5a0-53126a8638de.png"
  }
];
