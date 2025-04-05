
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BrainCircuit, Beaker, Users, Rocket, ArrowRight, CheckCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const ServicesSection = () => {
  const isMobile = useIsMobile();
  
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
      {/* Background pattern element for cohesion */}
      <div className="absolute inset-0 w-full h-full opacity-5 molecular-bg pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section header with enhanced styling */}
        <div className="text-center max-w-full mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Digital Transformation Services
          </h2>
          <div className="technoline mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto mb-6">
            Comprehensive services tailored specifically for pharmaceutical and healthcare organizations.
          </p>
        </div>

        {/* Services tabs - using shadcn Tabs for better accessibility and styling */}
        <Tabs defaultValue="transform" className="w-full relative">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-green-50 p-2 gap-4 h-auto w-full max-w-xl flex shadow-md">
              <TabsTrigger 
                value="transform" 
                className="flex-1 px-8 py-4 text-base font-medium data-[state=active]:bg-green-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=inactive]:text-green-700 data-[state=inactive]:hover:bg-green-100"
              >
                Transform Existing Business
              </TabsTrigger>
              <TabsTrigger 
                value="create" 
                className="flex-1 px-8 py-4 text-base font-medium data-[state=active]:bg-green-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=inactive]:text-green-700 data-[state=inactive]:hover:bg-green-100"
              >
                Create New Business
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Green connecting line for visual cohesion */}
          <div className="absolute h-[calc(100%-8rem)] w-0.5 bg-gradient-to-b from-green-400 to-green-600 left-1/2 transform -translate-x-1/2 top-32 -z-1 hidden md:block"></div>

          <TabsContent value="transform" className="animate-fade-in mt-0">
            <div className="mb-12 relative">
              <div className="tech-card p-6 mb-8 mx-auto max-w-4xl">
                <h3 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-4">
                  How I help you to transform your existing business
                </h3>
                <p className="text-center text-gray-600 max-w-4xl mx-auto mb-8">
                  Successful digital transformation needs to encompass all of the three sections: Technology, Processes and People. 
                  I offer services to do each individual section or all of the three combined.
                </p>
              </div>

              {/* Two-column layout: Venn diagram on left, Service Cards on right */}
              <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-8 items-center`}>
                {/* First column: Updated Venn Diagram with new animation */}
                <div className={`flex justify-center items-center ${isMobile ? "order-1" : "order-1"}`}>
                  <div className="relative w-full max-w-md aspect-square mx-auto">
                    {/* Technology Circle - with smooth rotation animation */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 
                                  bg-green-50 border-2 border-green-300 rounded-full 
                                  h-[65%] w-[65%] flex items-center justify-center
                                  transition-all duration-500 hover:border-green-500 hover:bg-green-100
                                  hover:translate-y-[-8px] hover:shadow-lg"
                         style={{transition: "all 0.5s ease"}}>
                      <h4 className="text-green-800 font-bold text-2xl absolute top-[30%]">TECHNOLOGY</h4>
                    </div>

                    {/* Processes Circle - with smooth movement animation */}
                    <div className="absolute bottom-0 left-[25%] transform -translate-x-1/2 
                                  bg-green-50 border-2 border-green-300 rounded-full 
                                  h-[65%] w-[65%] flex items-center justify-center
                                  transition-all duration-500 hover:border-green-500 hover:bg-green-100
                                  hover:translate-x-[-8px] hover:shadow-lg"
                         style={{transition: "all 0.5s ease"}}>
                      <h4 className="text-green-800 font-bold text-2xl absolute bottom-[30%]">PROCESSES</h4>
                    </div>

                    {/* People Circle - with smooth movement animation */}
                    <div className="absolute bottom-0 right-[25%] transform translate-x-1/2 
                                  bg-green-50 border-2 border-green-300 rounded-full 
                                  h-[65%] w-[65%] flex items-center justify-center
                                  transition-all duration-500 hover:border-green-500 hover:bg-green-100
                                  hover:translate-x-[8px] hover:shadow-lg"
                         style={{transition: "all 0.5s ease"}}>
                      <h4 className="text-green-800 font-bold text-2xl absolute bottom-[30%]">PEOPLE</h4>
                    </div>

                    {/* Digital Transformation pill in center with subtle glow animation */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20
                                  bg-green-700 text-white rounded-full py-4 px-8 w-[70%] text-center
                                  shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105"
                         style={{
                           boxShadow: "0 0 20px rgba(22, 163, 74, 0.3)",
                           transition: "all 0.5s ease"
                         }}>
                      <div className="leading-tight">
                        <p className="text-lg sm:text-xl font-bold">DIGITAL</p>
                        <p className="text-lg sm:text-xl font-bold">TRANSFORMATION</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second column: Service Cards */}
                <div className={`space-y-6 ${isMobile ? "order-2" : "order-2"}`}>
                  {transformServices.map((service, index) => (
                    <Card key={index} className="border-l-4 border-l-green-600 hover:shadow-lg transition-all">
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-[160px_1fr] items-center">
                          <div className="bg-green-50 p-4 flex flex-col items-center justify-center h-full border-r border-green-100">
                            <div className="bg-white rounded-full p-3 shadow-sm mb-3">
                              {service.icon}
                            </div>
                            <h4 className="font-bold text-xl text-green-800">{service.title}</h4>
                          </div>
                          <div className="p-5">
                            <h4 className="font-bold text-xl md:text-2xl text-green-700 mb-2">{service.subtitle}</h4>
                            <p className="text-gray-600 mb-3 text-sm">{service.description}</p>
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {service.badges.map((badge, i) => (
                                <Badge key={i} variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                                  {badge}
                                </Badge>
                              ))}
                            </div>
                            <Button 
                              className="btn-primary"
                            >
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
          </TabsContent>

          <TabsContent value="create" className="animate-fade-in mt-0">
            <div className="mb-12">
              <div className="tech-card p-6 mb-8 mx-auto max-w-4xl">
                <h3 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-4">
                  How I help you to create new business
                </h3>
                <p className="text-center text-gray-600 max-w-4xl mx-auto mb-8">
                  Strategic guidance for launching healthcare and life science ventures—from concept validation to market entry and scaling.
                </p>
              </div>

              {/* Two-column layout: Journey visualization on left, Service Cards on right */}
              <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-8 items-center`}>
                {/* First column: Journey visualization */}
                <div className={`flex justify-center items-center ${isMobile ? "order-1" : "order-1"}`}>
                  <div className="relative py-8 max-w-md w-full">
                    {/* Journey steps with arrows connecting them */}
                    <div className="flex flex-col space-y-20 relative">
                      {createServices.steps.map((step, index) => (
                        <div key={index} className="flex items-center relative z-10 transition-transform duration-500 hover:translate-x-2">
                          <div className="rounded-full bg-green-600 text-white w-14 h-14 flex items-center justify-center text-2xl font-bold shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-green-700">
                            {step.number}
                          </div>
                          <div className="ml-4">
                            <h4 className="font-bold text-green-800 text-lg">{step.title}</h4>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                          
                          {/* Add arrow between steps (except after the last step) */}
                          {index < createServices.steps.length - 1 && (
                            <div className="absolute top-[58px] left-7 h-20 flex items-center">
                              <div className="w-0.5 h-full bg-green-500 relative">
                                <div className="absolute -bottom-4 -left-3 w-7 h-7 flex items-center justify-center">
                                  <ArrowRight 
                                    className="text-green-600 transform rotate-90" 
                                    size={28} 
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Second column: Service Card */}
                <div className={`${isMobile ? "order-2" : "order-2"}`}>
                  <Card className="border-l-4 border-l-green-600 hover:shadow-lg transition-all">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-[160px_1fr] items-center">
                        <div className="bg-green-50 p-4 flex flex-col items-center justify-center h-full border-r border-green-100">
                          <div className="bg-white rounded-full p-3 shadow-sm mb-3">
                            {createServices.icon}
                          </div>
                          <h4 className="font-bold text-xl text-green-800">{createServices.title}</h4>
                        </div>
                        <div className="p-5">
                          <h4 className="font-bold text-xl md:text-2xl text-green-700 mb-2">{createServices.subtitle}</h4>
                          <p className="text-gray-600 mb-3 text-sm">{createServices.description}</p>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {createServices.badges.map((badge, i) => (
                              <Badge key={i} variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                                {badge}
                              </Badge>
                            ))}
                          </div>
                          <Button 
                            className="btn-primary"
                          >
                            Learn more
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
            Let's work together to achieve your digital transformation goals
          </h3>
          <Button asChild className="btn-primary">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
