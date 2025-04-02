
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, AreaChart, Users, Rocket } from "lucide-react";

const services = [
  {
    title: "AI and Automation Strategy",
    description: "Design and implement intelligent automation solutions tailored for pharmaceutical and healthcare environments—improving efficiency while staying compliant.",
    icon: <BrainCircuit className="h-12 w-12 text-green-500" />,
  },
  {
    title: "(GxP) Software Implementation",
    description: "Specialized support for implementing and validating GxP-compliant systems. From vendor selection to deployment, I ensure alignment with regulatory standards.",
    icon: <AreaChart className="h-12 w-12 text-green-500" />,
  },
  {
    title: "Change Management & Organizational Change",
    description: "Drive successful adoption of new technologies and processes. I help organizations navigate change with minimal disruption and maximum engagement.",
    icon: <Users className="h-12 w-12 text-green-500" />,
  },
  {
    title: "Go-To-Market & New Venture Development",
    description: "Strategic guidance for launching healthcare and life science ventures—from concept validation to market entry and scaling.",
    icon: <Rocket className="h-12 w-12 text-green-500" />,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Core Service - Digital Transformation
          </h2>
          <p className="text-gray-600 text-lg">
            We offer comprehensive digital transformation services tailored specifically for pharmaceutical and healthcare organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="p-2 mb-4 inline-flex rounded-full bg-green-50">
                  {service.icon}
                </div>
                <CardTitle className="text-xl md:text-2xl text-green-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
