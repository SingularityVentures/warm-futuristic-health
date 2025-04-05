
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Rocket, ArrowRight, CheckCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const ServicesSection = () => {
  const isMobile = useIsMobile();
  
  const transformServices = [
    {
      title: "Technology",
      subtitle: "(GxP) Software Implementation",
      description: "Specialized support for implementing and validating GxP-compliant systems. From vendor selection to deployment, I ensure alignment with regulatory standards.",
      badges: ["Validation", "Qualification", "Compliance", "GxP", "Stakeholder Mgmt", "End-To-End"],
    },
    {
      title: "Processes",
      subtitle: "Business Process Transformation",
      description: "Redesign of core workflows, systems, and operations to improve efficiency, reduce costs, and enhance customer value by leveraging technology (AI) and data analytics.",
      badges: ["AI", "RPA", "Automation"],
    },
    {
      title: "People",
      subtitle: "Change Management & Organizational Change",
      description: "Transitioning individuals, teams, and organizations from a current state to a desired future state while minimizing resistance and maximizing adoption.",
      badges: ["Trainings", "Workshops", "Communication", "Multiplier"],
    },
  ];

  const createServices = {
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
        <div className="text-center max-w-full mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Digital Transformation Services
          </h2>
          <div className="technoline mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            Comprehensive services tailored specifically for pharmaceutical and healthcare organizations.
          </p>
        </div>

        {/* Services tabs - using shadcn Tabs for better accessibility and styling */}
        <Tabs defaultValue="transform" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-green-50 p-2 gap-4 h-auto w-full max-w-xl flex">
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

          <TabsContent value="transform" className="animate-fade-in mt-0">
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-4">
                How I help you to transform your existing business
              </h3>
              <p className="text-center text-gray-600 max-w-4xl mx-auto mb-8">
                Successful digital transformation needs to encompass all of the three sections: Technology, Processes and People. 
                I offer services to do each individual section or all of the three combined.
              </p>

              {/* Centered Venn diagram with cards around it */}
              <div className="relative max-w-7xl mx-auto">
                {/* For mobile, stack everything vertically */}
                {isMobile ? (
                  <div className="space-y-8">
                    {/* Technology Card */}
                    <Card className="border-l-4 border-l-green-600 hover:shadow-lg transition-all w-full">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-[60px_1fr] items-stretch">
                          <div className="bg-green-50 p-3 flex flex-col items-center justify-center h-full border-r border-green-100">
                            <h4 className="font-bold text-base md:text-lg text-green-800">{transformServices[0].title}</h4>
                          </div>
                          <div className="p-5">
                            <h4 className="font-bold text-xl text-green-700 mb-2">{transformServices[0].subtitle}</h4>
                            <p className="text-gray-600 mb-3">{transformServices[0].description}</p>
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {transformServices[0].badges.map((badge, i) => (
                                <Badge key={i} variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                                  {badge}
                                </Badge>
                              ))}
                            </div>
                            <Button 
                              className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors"
                            >
                              Learn more
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Venn Diagram */}
                    <div className="relative w-full aspect-square max-w-md mx-auto my-8">
                      {/* Technology Circle */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 
                                    bg-green-50 border-2 border-green-300 rounded-full 
                                    h-[65%] w-[65%] flex items-center justify-center
                                    shadow-[0_0_25px_rgba(34,197,94,0.2)]">
                        <h4 className="text-green-800 font-bold text-2xl absolute top-[30%]">TECHNOLOGY</h4>
                      </div>

                      {/* Processes Circle */}
                      <div className="absolute bottom-0 left-[25%] transform -translate-x-1/2 
                                    bg-green-50 border-2 border-green-300 rounded-full 
                                    h-[65%] w-[65%] flex items-center justify-center
                                    shadow-[0_0_25px_rgba(34,197,94,0.2)]">
                        <h4 className="text-green-800 font-bold text-2xl absolute bottom-[30%]">PROCESSES</h4>
                      </div>

                      {/* People Circle */}
                      <div className="absolute bottom-0 right-[25%] transform translate-x-1/2 
                                    bg-green-50 border-2 border-green-300 rounded-full 
                                    h-[65%] w-[65%] flex items-center justify-center
                                    shadow-[0_0_25px_rgba(34,197,94,0.2)]">
                        <h4 className="text-green-800 font-bold text-2xl absolute bottom-[30%]">PEOPLE</h4>
                      </div>

                      {/* Digital Transformation pill in center */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20
                                    bg-green-700 text-white rounded-full py-4 px-8 w-[70%] text-center
                                    shadow-lg">
                        <div className="leading-tight">
                          <p className="text-lg sm:text-xl font-bold">DIGITAL</p>
                          <p className="text-lg sm:text-xl font-bold">TRANSFORMATION</p>
                        </div>
                      </div>
                    </div>

                    {/* Process Card */}
                    <Card className="border-l-4 border-l-green-600 hover:shadow-lg transition-all w-full">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-[60px_1fr] items-stretch">
                          <div className="bg-green-50 p-3 flex flex-col items-center justify-center h-full border-r border-green-100">
                            <h4 className="font-bold text-base md:text-lg text-green-800">{transformServices[1].title}</h4>
                          </div>
                          <div className="p-5">
                            <h4 className="font-bold text-xl text-green-700 mb-2">{transformServices[1].subtitle}</h4>
                            <p className="text-gray-600 mb-3">{transformServices[1].description}</p>
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {transformServices[1].badges.map((badge, i) => (
                                <Badge key={i} variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                                  {badge}
                                </Badge>
                              ))}
                            </div>
                            <Button 
                              className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors"
                            >
                              Learn more
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* People Card */}
                    <Card className="border-l-4 border-l-green-600 hover:shadow-lg transition-all w-full">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-[60px_1fr] items-stretch">
                          <div className="bg-green-50 p-3 flex flex-col items-center justify-center h-full border-r border-green-100">
                            <h4 className="font-bold text-base md:text-lg text-green-800">{transformServices[2].title}</h4>
                          </div>
                          <div className="p-5">
                            <h4 className="font-bold text-xl text-green-700 mb-2">{transformServices[2].subtitle}</h4>
                            <p className="text-gray-600 mb-3">{transformServices[2].description}</p>
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {transformServices[2].badges.map((badge, i) => (
                                <Badge key={i} variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                                  {badge}
                                </Badge>
                              ))}
                            </div>
                            <Button 
                              className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors"
                            >
                              Learn more
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  /* Desktop layout with Venn diagram in the center */
                  <div className="grid grid-cols-1 grid-rows-3 gap-10 mx-auto max-w-7xl relative min-h-[750px]">
                    {/* Technology card - Top */}
                    <div className="row-start-1 mx-auto w-full max-w-4xl">
                      <Card className="border-l-4 border-l-green-600 hover:shadow-lg transition-all h-full">
                        <CardContent className="p-0">
                          <div className="grid grid-cols-[60px_1fr] items-stretch h-full">
                            <div className="bg-green-50 p-3 flex flex-col items-center justify-center h-full border-r border-green-100">
                              <h4 className="font-bold text-base md:text-lg text-green-800">{transformServices[0].title}</h4>
                            </div>
                            <div className="p-6">
                              <h4 className="font-bold text-xl md:text-2xl text-green-700 mb-3">{transformServices[0].subtitle}</h4>
                              <p className="text-gray-600 mb-4">{transformServices[0].description}</p>
                              <div className="flex flex-wrap gap-1.5 mb-4">
                                {transformServices[0].badges.map((badge, i) => (
                                  <Badge key={i} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                    {badge}
                                  </Badge>
                                ))}
                              </div>
                              <Button 
                                className="bg-green-600 hover:bg-green-700 text-white transition-colors"
                              >
                                Learn more
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Venn diagram in the center - Row 2 */}
                    <div className="row-start-2 mx-auto">
                      <div className="relative w-[500px] h-[500px]">
                        {/* Technology Circle */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 
                                      bg-green-50 border-2 border-green-300 rounded-full 
                                      h-[65%] w-[65%] flex items-center justify-center
                                      shadow-[0_0_30px_rgba(34,197,94,0.25)]">
                          <h4 className="text-green-800 font-bold text-2xl absolute top-[30%]">TECHNOLOGY</h4>
                        </div>

                        {/* Processes Circle */}
                        <div className="absolute bottom-0 left-[25%] transform -translate-x-1/2 
                                      bg-green-50 border-2 border-green-300 rounded-full 
                                      h-[65%] w-[65%] flex items-center justify-center
                                      shadow-[0_0_30px_rgba(34,197,94,0.25)]">
                          <h4 className="text-green-800 font-bold text-2xl absolute bottom-[30%]">PROCESSES</h4>
                        </div>

                        {/* People Circle */}
                        <div className="absolute bottom-0 right-[25%] transform translate-x-1/2 
                                      bg-green-50 border-2 border-green-300 rounded-full 
                                      h-[65%] w-[65%] flex items-center justify-center
                                      shadow-[0_0_30px_rgba(34,197,94,0.25)]">
                          <h4 className="text-green-800 font-bold text-2xl absolute bottom-[30%]">PEOPLE</h4>
                        </div>

                        {/* Digital Transformation pill in center */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20
                                      bg-green-700 text-white rounded-full py-4 px-8 w-[70%] text-center
                                      shadow-lg">
                          <div className="leading-tight">
                            <p className="text-xl font-bold">DIGITAL</p>
                            <p className="text-xl font-bold">TRANSFORMATION</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom row with Process and People cards side by side */}
                    <div className="row-start-3 grid grid-cols-2 gap-8 mx-auto w-full max-w-6xl">
                      {/* Process card */}
                      <Card className="border-l-4 border-l-green-600 hover:shadow-lg transition-all h-full">
                        <CardContent className="p-0">
                          <div className="grid grid-cols-[60px_1fr] items-stretch h-full">
                            <div className="bg-green-50 p-3 flex flex-col items-center justify-center h-full border-r border-green-100">
                              <h4 className="font-bold text-base md:text-lg text-green-800">{transformServices[1].title}</h4>
                            </div>
                            <div className="p-6">
                              <h4 className="font-bold text-xl md:text-2xl text-green-700 mb-3">{transformServices[1].subtitle}</h4>
                              <p className="text-gray-600 mb-4">{transformServices[1].description}</p>
                              <div className="flex flex-wrap gap-1.5 mb-4">
                                {transformServices[1].badges.map((badge, i) => (
                                  <Badge key={i} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                    {badge}
                                  </Badge>
                                ))}
                              </div>
                              <Button 
                                className="bg-green-600 hover:bg-green-700 text-white transition-colors"
                              >
                                Learn more
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* People card */}
                      <Card className="border-l-4 border-l-green-600 hover:shadow-lg transition-all h-full">
                        <CardContent className="p-0">
                          <div className="grid grid-cols-[60px_1fr] items-stretch h-full">
                            <div className="bg-green-50 p-3 flex flex-col items-center justify-center h-full border-r border-green-100">
                              <h4 className="font-bold text-base md:text-lg text-green-800">{transformServices[2].title}</h4>
                            </div>
                            <div className="p-6">
                              <h4 className="font-bold text-xl md:text-2xl text-green-700 mb-3">{transformServices[2].subtitle}</h4>
                              <p className="text-gray-600 mb-4">{transformServices[2].description}</p>
                              <div className="flex flex-wrap gap-1.5 mb-4">
                                {transformServices[2].badges.map((badge, i) => (
                                  <Badge key={i} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                    {badge}
                                  </Badge>
                                ))}
                              </div>
                              <Button 
                                className="bg-green-600 hover:bg-green-700 text-white transition-colors"
                              >
                                Learn more
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Add connecting lines */}
                    <div className="absolute top-[26%] left-1/2 w-0.5 h-[70px] bg-gradient-to-b from-green-500/0 to-green-500/30 -translate-x-1/2"></div>
                    <div className="absolute bottom-[37%] left-[30%] w-[70px] h-0.5 bg-gradient-to-r from-green-500/30 to-green-500/0 transform rotate-45"></div>
                    <div className="absolute bottom-[37%] right-[30%] w-[70px] h-0.5 bg-gradient-to-l from-green-500/30 to-green-500/0 transform -rotate-45"></div>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="create" className="animate-fade-in mt-0">
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-4">
                How I help you to create new business
              </h3>
              <p className="text-center text-gray-600 max-w-4xl mx-auto mb-8">
                Strategic guidance for launching healthcare and life science ventures—from concept validation to market entry and scaling.
              </p>

              {/* Two-column layout: Journey visualization on left, Service Cards on right */}
              <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-12 items-center max-w-7xl mx-auto`}>
                {/* First column: Journey visualization */}
                <div className={`flex justify-center items-center ${isMobile ? "order-1" : "order-1"}`}>
                  <div className="relative py-8 w-full">
                    {/* Journey steps with arrows connecting them */}
                    <div className="flex flex-col space-y-20 relative">
                      {createServices.steps.map((step, index) => (
                        <div key={index} className="flex items-center relative z-10">
                          <div className="rounded-full bg-green-600 text-white w-14 h-14 flex items-center justify-center text-2xl font-bold shadow-lg">
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
                  <Card className="border-l-4 border-l-green-600 hover:shadow-lg transition-all h-full">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-[60px_1fr] items-stretch h-full">
                        <div className="bg-green-50 p-3 flex flex-col items-center justify-center h-full border-r border-green-100">
                          <h4 className="font-bold text-base md:text-lg text-green-800">{createServices.title}</h4>
                        </div>
                        <div className="p-6">
                          <h4 className="font-bold text-xl md:text-2xl text-green-700 mb-3">{createServices.subtitle}</h4>
                          <p className="text-gray-600 mb-4">{createServices.description}</p>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {createServices.badges.map((badge, i) => (
                              <Badge key={i} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                {badge}
                              </Badge>
                            ))}
                          </div>
                          <Button 
                            className="bg-green-600 hover:bg-green-700 text-white transition-colors"
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
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
