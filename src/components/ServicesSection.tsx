
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Beaker, Users, Rocket, ArrowRight, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("transform");
  
  const transformServices = [
    {
      icon: <Beaker className="h-8 w-8 text-green-600" strokeWidth={1.5} />,
      title: "Technology",
      subtitle: "(GxP) Software Implementation",
      description: "Specialized support for implementing and validating GxP-compliant systems. From vendor selection to deployment, I ensure alignment with regulatory standards.",
      badges: ["Validation", "Qualification", "Compliance", "GxP", "Stakeholder Mgmt", "End-To-End"],
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-green-600" strokeWidth={1.5} />,
      title: "Processes",
      subtitle: "Business Process Transformation",
      description: "Redesign of core workflows, systems, and operations to improve efficiency, reduce costs, and enhance customer value by leveraging technology (AI) and data analytics.",
      badges: ["AI", "RPA", "Automation"],
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" strokeWidth={1.5} />,
      title: "People",
      subtitle: "Change Management & Organizational Change",
      description: "Transitioning individuals, teams, and organizations from a current state to a desired future state while minimizing resistance and maximizing adoption.",
      badges: ["Trainings", "Workshops", "Communication", "Multiplier"],
    },
  ];

  const createServices = {
    icon: <Rocket className="h-8 w-8 text-green-600" strokeWidth={1.5} />,
    title: "Innovation",
    subtitle: "Venture Building & Go-To-Market",
    description: "I help you to create bold ideas that can turn into digital, scalable business models and validate them. Finally, I create go-to-market strategies and execute them. I build, launch, and scale ventures that win markets.",
    badges: ["Ideation", "Design Thinking", "Hypothesis Testing", "Go-To-Market", "Venture Building"],
    steps: [
      { number: 1, title: "Ideation", description: "Generate innovative concepts" },
      { number: 2, title: "Validation", description: "Test and refine ideas" },
      { number: 3, title: "Go-to-Market", description: "Launch and scale" },
    ]
  };

  return (
    <section id="services" className="section py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Digital Transformation Services
          </h2>
          <div className="technoline mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Comprehensive services tailored specifically for pharmaceutical and healthcare organizations.
          </p>
        </div>

        {/* Services tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-green-50 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("transform")}
              className={`px-6 py-2.5 rounded-md transition-all text-sm font-medium ${
                activeTab === "transform" 
                  ? "bg-green-600 text-white shadow-md" 
                  : "text-green-700 hover:bg-green-100"
              }`}
            >
              Transform Existing Business
            </button>
            <button
              onClick={() => setActiveTab("create")}
              className={`px-6 py-2.5 rounded-md transition-all text-sm font-medium ${
                activeTab === "create" 
                  ? "bg-green-600 text-white shadow-md" 
                  : "text-green-700 hover:bg-green-100"
              }`}
            >
              Create New Business
            </button>
          </div>
        </div>

        {activeTab === "transform" && (
          <div className="animate-fade-in">
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-4">
                How I help you to transform your existing business
              </h3>
              <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12">
                Successful digital transformation needs to encompass all of the three sections: Technology, Processes and People. 
                I offer services to do each individual section or all of the three combined.
              </p>

              {/* Venn Diagram */}
              <div className="flex justify-center mb-16">
                <div className="relative w-full max-w-2xl h-[400px]">
                  {/* Digital Transformation Center */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-white rounded-full h-40 w-40 flex items-center justify-center shadow-lg border-4 border-green-600">
                    <div className="text-center p-2">
                      <h4 className="text-green-700 font-bold text-lg">DIGITAL</h4>
                      <h4 className="text-green-700 font-bold text-lg">TRANSFORMATION</h4>
                    </div>
                  </div>

                  {/* Technology Circle */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 
                                 bg-gradient-to-b from-green-50 to-green-100 
                                 border-2 border-green-300 rounded-full h-64 w-64 
                                 flex items-center justify-center opacity-90">
                    <div className="absolute top-10 text-center">
                      <h4 className="text-green-800 font-bold text-2xl">TECHNOLOGY</h4>
                    </div>
                  </div>

                  {/* Process Circle */}
                  <div className="absolute bottom-0 left-[25%] transform -translate-x-1/2 z-10 
                                 bg-gradient-to-b from-green-50 to-green-100 
                                 border-2 border-green-300 rounded-full h-64 w-64 
                                 flex items-center justify-center opacity-90">
                    <div className="absolute bottom-10 text-center">
                      <h4 className="text-green-800 font-bold text-2xl">PROCESSES</h4>
                    </div>
                  </div>

                  {/* People Circle */}
                  <div className="absolute bottom-0 left-[75%] transform -translate-x-1/2 z-10 
                                 bg-gradient-to-b from-green-50 to-green-100 
                                 border-2 border-green-300 rounded-full h-64 w-64 
                                 flex items-center justify-center opacity-90">
                    <div className="absolute bottom-10 text-center">
                      <h4 className="text-green-800 font-bold text-2xl">PEOPLE</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Cards */}
              <div className="space-y-8">
                {transformServices.map((service, index) => (
                  <Card key={index} className="border-l-4 border-l-green-600 hover:shadow-lg transition-all">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-[200px_1fr] items-center">
                        <div className="bg-green-50 p-6 flex flex-col items-center justify-center h-full border-r border-green-100">
                          <div className="bg-white rounded-full p-4 shadow-sm mb-3">
                            {service.icon}
                          </div>
                          <h4 className="font-bold text-xl text-green-800">{service.title}</h4>
                        </div>
                        <div className="p-6">
                          <h4 className="font-bold text-xl text-green-700 mb-2">{service.subtitle}</h4>
                          <p className="text-gray-600 mb-4">{service.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.badges.map((badge, i) => (
                              <Badge key={i} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                {badge}
                              </Badge>
                            ))}
                          </div>
                          <Button variant="ghost" className="text-green-700 hover:text-green-800 hover:bg-green-50 p-0 mt-2">
                            Learn more
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "create" && (
          <div className="animate-fade-in">
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-4">
                How I help you to create new business
              </h3>
              <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12">
                Strategic guidance for launching healthcare and life science ventures—from concept validation to market entry and scaling.
              </p>

              {/* Journey visualization */}
              <div className="flex justify-center mb-16">
                <div className="relative py-12 max-w-4xl w-full">
                  {/* Journey steps */}
                  <div className="flex justify-between items-center">
                    {createServices.steps.map((step, index) => (
                      <div key={index} className="flex flex-col items-center relative z-10 w-36">
                        <div className="rounded-full bg-green-600 text-white w-14 h-14 flex items-center justify-center text-2xl font-bold mb-3 shadow-lg">
                          {step.number}
                        </div>
                        <h4 className="font-bold text-green-800 text-lg mb-1">{step.title}</h4>
                        <p className="text-gray-600 text-sm text-center">{step.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Connecting line */}
                  <div className="absolute top-[44px] left-[25%] right-[25%] h-1 bg-gradient-to-r from-green-400 to-green-600 z-0">
                    <div className="absolute left-0 top-1/2 w-3 h-3 -mt-1.5 -ml-1.5 bg-green-600 rounded-full"></div>
                    <div className="absolute right-0 top-1/2 w-3 h-3 -mt-1.5 -mr-1.5 bg-green-600 rounded-full"></div>
                  </div>

                  {/* Arrow indicators */}
                  <div className="absolute top-[44px] left-[calc(33%-10px)] right-[calc(33%-10px)] flex justify-between z-0 text-green-600">
                    <ArrowRight size={20} className="transform -translate-y-1/2" />
                    <ArrowRight size={20} className="transform -translate-y-1/2" />
                  </div>
                </div>
              </div>

              {/* Service Card */}
              <Card className="border-l-4 border-l-green-600 hover:shadow-lg transition-all">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[200px_1fr] items-center">
                    <div className="bg-green-50 p-6 flex flex-col items-center justify-center h-full border-r border-green-100">
                      <div className="bg-white rounded-full p-4 shadow-sm mb-3">
                        {createServices.icon}
                      </div>
                      <h4 className="font-bold text-xl text-green-800">{createServices.title}</h4>
                    </div>
                    <div className="p-6">
                      <h4 className="font-bold text-xl text-green-700 mb-2">{createServices.subtitle}</h4>
                      <p className="text-gray-600 mb-4">{createServices.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {createServices.badges.map((badge, i) => (
                          <Badge key={i} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="ghost" className="text-green-700 hover:text-green-800 hover:bg-green-50 p-0 mt-2">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-6">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-green-700 font-medium">Ready to transform your business?</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
            Let's work together to achieve your digital transformation goals
          </h3>
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
