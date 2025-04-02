
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Beaker, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "AI and Automation Strategy",
    description: "Design and implement intelligent automation solutions tailored for pharmaceutical and healthcare environments—improving efficiency while staying compliant.",
    icon: <BrainCircuit className="h-12 w-12 text-green-500" strokeWidth={1.5} />,
    pills: ["Machine Learning", "Process Automation", "AI Implementation"]
  },
  {
    title: "(GxP) Software Implementation",
    description: "Specialized support for implementing and validating GxP-compliant systems. From vendor selection to deployment, I ensure alignment with regulatory standards.",
    icon: <Beaker className="h-12 w-12 text-green-500" strokeWidth={1.5} />,
    pills: ["Validation", "Qualification", "Compliance"]
  },
  {
    title: "Change Management & Organizational Change",
    description: "Drive successful adoption of new technologies and processes. I help organizations navigate change with minimal disruption and maximum engagement.",
    icon: <Users className="h-12 w-12 text-green-500" strokeWidth={1.5} />,
    pills: ["Training", "Process Design", "User Adoption"]
  },
  {
    title: "Go-To-Market & New Venture Development",
    description: "Strategic guidance for launching healthcare and life science ventures—from concept validation to market entry and scaling.",
    icon: <Rocket className="h-12 w-12 text-green-500" strokeWidth={1.5} />,
    pills: ["Market Strategy", "Product Launch", "Business Development"]
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Core Service - Digital Transformation
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            We offer comprehensive digital transformation services tailored specifically for pharmaceutical and healthcare organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="relative border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-gradient-to-br from-white to-green-50"
            >
              {/* Tech pattern in the background */}
              <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="50" fill="currentColor" className="text-green-900" />
                </svg>
              </div>
              
              <CardHeader>
                <div className="p-3 mb-4 inline-flex rounded-xl bg-green-100/80 backdrop-blur-sm">
                  {service.icon}
                </div>
                <CardTitle className="text-xl md:text-2xl text-green-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-gray-600 mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.pills.map((pill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-green-100/50 text-green-700 text-xs font-medium rounded-full"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-green-100">
                  <Button variant="ghost" className="text-green-700 hover:text-green-800 hover:bg-green-50 p-0">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
