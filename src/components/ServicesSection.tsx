
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

// First section content - Transform existing business
const existingBusinessServices = [
  {
    category: "Technology",
    title: "(GxP) Software Implementation",
    description: "Specialized support for implementing and validating GxP-compliant systems. From vendor selection to deployment, I ensure alignment with regulatory standards.",
    pills: ["Validation", "Qualification", "Compliance", "GxP", "Stakeholder Mgmt.", "End-To-End"],
    icon: "technology",
    color: "green-800"
  },
  {
    category: "Processes",
    title: "Business Process Transformation",
    description: "Redesign of core workflows, systems, and operations to improve efficiency, reduce costs, and enhance customer value by leveraging technology (AI) and data analytics.",
    pills: ["AI", "RPA", "Automation"],
    icon: "processes",
    color: "green-700"
  },
  {
    category: "People",
    title: "Change Management & Organizational Change",
    description: "Transitioning individuals, teams, and organizations from a current state to a desired future state while minimizing resistance and maximizing adoption.",
    pills: ["Trainings", "Workshops", "Communication", "Multiplier"],
    icon: "people",
    color: "green-600"
  }
];

// Second section content - Create new business
const newBusinessServices = [
  {
    step: 1,
    category: "Ideation",
    title: "Business Model Ideation",
    description: "Create a hunch into bold ideas with sustainable value that can turn into digital, scalable business models.",
    pills: ["Ideation", "Design Thinking"],
    color: "green-800"
  },
  {
    step: 2,
    category: "Validation",
    title: "Business Model Validation",
    description: "Test your business model before investing millions to build it - Turn assumptions into insights by testing what truly matters.",
    pills: ["Hypothesis Testing", "Prototyping", "Lean Startup"],
    color: "green-700"
  },
  {
    step: 3,
    category: "Go-to-Market",
    title: "Venture Building & Go-To-Market",
    description: "From zero to traction—I create go-to-market strategies and execute them. I build, launch, and scale ventures that win markets.",
    pills: ["Market Entry", "Venture Building", "Go-To-Market"],
    color: "green-600"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            What I Do - Digital Transformation
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            I offer comprehensive digital transformation and IT Project Management services tailored specifically to pharmaceutical and healthcare organizations.
          </p>
        </div>

        {/* First transformation section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-3">
              Transforming Your Existing Business
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Successful digital transformation needs to encompass all three dimensions: Technology, Processes and People.
            </p>
          </div>

          {/* Services cards and diagram in flex layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left side: Services cards */}
            <div className="lg:w-7/12 space-y-4">
              {existingBusinessServices.map((service, idx) => (
                <Card key={idx} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center p-4 border-b border-gray-100 bg-gradient-to-r from-green-50 to-white">
                    <Badge className={`bg-green-${service.color.split('-')[1]} hover:bg-green-${parseInt(service.color.split('-')[1])-100} mr-3`}>
                      {service.category}
                    </Badge>
                    <h4 className="font-bold text-xl text-green-800">
                      {service.title}
                    </h4>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.pills.map((pill, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full flex items-center gap-1"
                        >
                          <Check size={12} className="text-green-700" />
                          {pill}
                        </span>
                      ))}
                    </div>
                    <Button variant="ghost" className="text-green-700 hover:text-green-800 hover:bg-green-50 p-0 group">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right side: Interactive Venn diagram */}
            <div className="lg:w-5/12 flex items-center justify-center p-4">
              <div className="relative w-full max-w-md">
                <svg viewBox="0 0 500 500" className="w-full h-auto drop-shadow-md">
                  {/* Technology circle */}
                  <circle 
                    cx="250" cy="170" r="120" 
                    fill="rgba(240, 253, 244, 0.8)" 
                    stroke="#166534" 
                    strokeWidth="2" 
                    className="transition-all hover:fill-green-100"
                  />
                  <text x="250" y="170" textAnchor="middle" fill="#166534" fontSize="22" fontWeight="bold">TECHNOLOGY</text>
                  
                  {/* Processes circle */}
                  <circle 
                    cx="170" cy="330" r="120" 
                    fill="rgba(240, 253, 244, 0.8)" 
                    stroke="#166534" 
                    strokeWidth="2" 
                    className="transition-all hover:fill-green-100"
                  />
                  <text x="170" y="330" textAnchor="middle" fill="#166534" fontSize="22" fontWeight="bold">PROCESSES</text>
                  
                  {/* People circle */}
                  <circle 
                    cx="330" cy="330" r="120" 
                    fill="rgba(240, 253, 244, 0.8)" 
                    stroke="#166534" 
                    strokeWidth="2" 
                    className="transition-all hover:fill-green-100"
                  />
                  <text x="330" y="330" textAnchor="middle" fill="#166534" fontSize="22" fontWeight="bold">PEOPLE</text>
                  
                  {/* Center text */}
                  <text x="250" y="250" textAnchor="middle" fill="#166534" fontSize="24" fontWeight="bold">DIGITAL</text>
                  <text x="250" y="280" textAnchor="middle" fill="#166534" fontSize="24" fontWeight="bold">TRANSFORMATION</text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Second transformation section */}
        <div className="pt-8 border-t border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-3">
              Creating New Business
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Strategic guidance for launching healthcare and life science ventures—from concept validation to market entry and scaling.
            </p>
          </div>

          {/* Services journey layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left side: Journey visualization */}
            <div className="lg:w-4/12 flex flex-col items-center justify-center space-y-0 relative">
              {/* Vertical path */}
              <div className="absolute h-full w-1 bg-gradient-to-b from-green-200 via-green-400 to-green-600 left-1/2 transform -translate-x-1/2 rounded-full"></div>
              
              {[1, 2, 3].map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center justify-center h-1/3 w-full">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-green-${600 - idx * 100} to-green-${700 - idx * 100} shadow-lg flex items-center justify-center text-white text-2xl font-bold`}>
                    {step}
                  </div>
                  <h4 className="text-xl font-bold text-green-700 mt-2">
                    {idx === 0 ? "Ideation" : idx === 1 ? "Validation" : "Go-to-Market"}
                  </h4>
                </div>
              ))}
            </div>

            {/* Right side: Service details */}
            <div className="lg:w-8/12 space-y-4">
              {newBusinessServices.map((service, idx) => (
                <Card 
                  key={idx} 
                  className={`overflow-hidden border-l-4 border-l-green-${600 - idx * 100} shadow-md hover:shadow-lg transition-shadow`}
                >
                  <div className="flex items-center p-4 border-b border-gray-100 bg-gradient-to-r from-green-50 to-white">
                    <Badge className={`bg-green-${600 - idx * 100} hover:bg-green-${500 - idx * 100} mr-3`}>
                      Step {service.step}: {service.category}
                    </Badge>
                    <h4 className="font-bold text-xl text-green-800">
                      {service.title}
                    </h4>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.pills.map((pill, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full flex items-center gap-1"
                        >
                          <Check size={12} className="text-green-700" />
                          {pill}
                        </span>
                      ))}
                    </div>
                    <Button variant="ghost" className="text-green-700 hover:text-green-800 hover:bg-green-50 p-0 group">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
