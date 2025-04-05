
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Database, Users, Wrench, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface AIAreaProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
  color: string;
  delay: number;
}

const AIArea = ({ title, description, icon, items, color, delay }: AIAreaProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay, 
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: delay + 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };
  
  return (
    <motion.div
      className={`bg-white rounded-xl border border-${color}-200 shadow-lg relative overflow-hidden`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
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
            <motion.div 
              key={i} 
              className="flex items-center gap-2"
              variants={itemVariants}
            >
              <CheckCircle2 className={`h-4 w-4 text-${color}-500`} />
              <span className="text-gray-700 text-sm">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const AIFocusSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timeout);
  }, []);
  
  const aiAreas = [
    { 
      title: "AI Strategy", 
      description: "Define your AI vision and roadmap", 
      icon: <Brain size={24} />, 
      color: "green",
      items: ["Needs Assessment", "Solution Design", "Implementation Roadmap", "Technology Selection"],
      delay: 0.1
    },
    { 
      title: "AI Implementation", 
      description: "Execute your AI initiatives effectively", 
      icon: <Wrench size={24} />, 
      color: "blue",
      items: ["Vendor Selection", "Regulatory Compliance", "Technical Integration", "Deployment"],
      delay: 0.3
    },
    { 
      title: "Processes", 
      description: "Optimize workflows for AI integration", 
      icon: <Database size={24} />, 
      color: "purple",
      items: ["Process Mapping", "Workflow Optimization", "Automation Potential", "Quality Management"],
      delay: 0.5
    },
    { 
      title: "Organizational Change", 
      description: "Prepare your teams for AI transformation", 
      icon: <Users size={24} />, 
      color: "orange",
      items: ["Workforce Training", "Process Redesign", "Adoption Management", "Stakeholder Management"],
      delay: 0.7
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };
  
  const centralCircleVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.1
      }
    }
  };
  
  return (
    <section id="ai-focus" className="section bg-white overflow-hidden">
      <div className="container mx-auto px-4">
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
            <motion.div 
              className="relative h-[500px]"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              {/* Central Circle - AI Transformation */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white text-center p-4 shadow-lg z-10"
                variants={centralCircleVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34, 197, 94, 0.5)" }}
              >
                <span className="font-bold text-sm">AI Transformation</span>
              </motion.div>
              
              {/* AI Strategy - Top Left */}
              <motion.div 
                className="absolute top-0 left-0 md:left-[calc(50%-150px)] transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-40 md:h-40"
                initial={{ opacity: 0, x: -50, y: -50 }}
                animate={isVisible ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -50, y: -50 }}
                transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-full rounded-full bg-green-100 border-2 border-green-500 flex items-center justify-center p-3 shadow-lg">
                  <div className="text-center">
                    <Brain className="mx-auto text-green-600 mb-1" size={24} />
                    <span className="text-green-800 font-bold text-sm">AI Strategy</span>
                  </div>
                </div>
                {/* Connecting Line */}
                <svg className="absolute top-1/2 left-1/2 z-[-1]" width="150" height="150" viewBox="0 0 150 150">
                  <motion.line 
                    x1="75" 
                    y1="75" 
                    x2="150" 
                    y2="150" 
                    stroke="green" 
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isVisible ? 1 : 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  />
                </svg>
              </motion.div>
              
              {/* AI Implementation - Top Right */}
              <motion.div 
                className="absolute top-0 right-0 md:right-[calc(50%-150px)] transform translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-40 md:h-40"
                initial={{ opacity: 0, x: 50, y: -50 }}
                animate={isVisible ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 50, y: -50 }}
                transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-full rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center p-3 shadow-lg">
                  <div className="text-center">
                    <Wrench className="mx-auto text-blue-600 mb-1" size={24} />
                    <span className="text-blue-800 font-bold text-sm">AI Implementation</span>
                  </div>
                </div>
                {/* Connecting Line */}
                <svg className="absolute top-1/2 right-1/2 z-[-1]" width="150" height="150" viewBox="0 0 150 150">
                  <motion.line 
                    x1="75" 
                    y1="75" 
                    x2="0" 
                    y2="150" 
                    stroke="blue" 
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isVisible ? 1 : 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  />
                </svg>
              </motion.div>
              
              {/* Processes - Bottom Left */}
              <motion.div 
                className="absolute bottom-0 left-0 md:left-[calc(50%-150px)] transform -translate-x-1/2 translate-y-1/2 w-36 h-36 md:w-40 md:h-40"
                initial={{ opacity: 0, x: -50, y: 50 }}
                animate={isVisible ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -50, y: 50 }}
                transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-full rounded-full bg-purple-100 border-2 border-purple-500 flex items-center justify-center p-3 shadow-lg">
                  <div className="text-center">
                    <Database className="mx-auto text-purple-600 mb-1" size={24} />
                    <span className="text-purple-800 font-bold text-sm">Processes</span>
                  </div>
                </div>
                {/* Connecting Line */}
                <svg className="absolute bottom-1/2 left-1/2 z-[-1]" width="150" height="150" viewBox="0 0 150 150">
                  <motion.line 
                    x1="75" 
                    y1="75" 
                    x2="150" 
                    y2="0" 
                    stroke="purple" 
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isVisible ? 1 : 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </svg>
              </motion.div>
              
              {/* Organization Change - Bottom Right */}
              <motion.div 
                className="absolute bottom-0 right-0 md:right-[calc(50%-150px)] transform translate-x-1/2 translate-y-1/2 w-36 h-36 md:w-40 md:h-40"
                initial={{ opacity: 0, x: 50, y: 50 }}
                animate={isVisible ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 50, y: 50 }}
                transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-full rounded-full bg-orange-100 border-2 border-orange-500 flex items-center justify-center p-3 shadow-lg">
                  <div className="text-center">
                    <Users className="mx-auto text-orange-600 mb-1" size={24} />
                    <span className="text-orange-800 font-bold text-sm">Organizational Change</span>
                  </div>
                </div>
                {/* Connecting Line */}
                <svg className="absolute bottom-1/2 right-1/2 z-[-1]" width="150" height="150" viewBox="0 0 150 150">
                  <motion.line 
                    x1="75" 
                    y1="75" 
                    x2="0" 
                    y2="0" 
                    stroke="orange" 
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isVisible ? 1 : 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-green-700">
              Unlocking AI's Potential in Healthcare
            </h3>
            
            <p className="text-gray-700">
              Artificial intelligence is transforming pharma and healthcare, from drug discovery to patient care. However, implementing AI in these regulated industries requires specialized expertise to balance innovation with compliance.
            </p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              {aiAreas.map((area, index) => (
                <AIArea 
                  key={index}
                  title={area.title}
                  description={area.description}
                  icon={area.icon}
                  items={area.items}
                  color={area.color}
                  delay={area.delay}
                />
              ))}
            </motion.div>
            
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
