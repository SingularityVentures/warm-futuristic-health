
import { Button } from "@/components/ui/button";
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
    <section id="services" className="section bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
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

        {/* Digital transformation diagram */}
        <div className="relative mb-16 mt-10">
          {/* First transformation section header */}
          <div className="text-center max-w-4xl mx-auto mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
              How I help you to transform your existing business
            </h3>
            <p className="text-gray-600">
              Successful digital transformation needs to encompass all of the three sections: Technology, Processes and People. 
              I offer services to do each individual section or all of the three combined.
            </p>
          </div>

          {/* Services layout with diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Services cards */}
            <div className="space-y-6">
              {existingBusinessServices.map((service, idx) => (
                <div key={idx} className="flex flex-col bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="flex items-center p-4 border-b border-gray-100">
                    <div className={`py-1.5 px-3 rounded text-white font-medium bg-${service.color} mr-4 text-sm`}>
                      {service.category}
                    </div>
                    <h4 className="font-bold text-xl text-green-800">
                      {service.title}
                    </h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 mb-4">
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
                    <div className="pt-2">
                      <Button variant="ghost" className="text-green-700 hover:text-green-800 hover:bg-green-50 p-0 group">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Venn diagram */}
            <div className="flex items-center justify-center p-4">
              <div className="relative w-full max-w-md">
                <svg viewBox="0 0 500 500" className="w-full h-auto">
                  {/* Technology circle */}
                  <circle cx="250" cy="170" r="120" fill="none" stroke="#166534" strokeWidth="2" />
                  <text x="250" y="170" textAnchor="middle" fill="#166534" fontSize="24" fontWeight="bold">TECHNOLOGY</text>
                  
                  {/* Processes circle */}
                  <circle cx="170" cy="330" r="120" fill="none" stroke="#166534" strokeWidth="2" />
                  <text x="170" y="330" textAnchor="middle" fill="#166534" fontSize="24" fontWeight="bold">PROCESSES</text>
                  
                  {/* People circle */}
                  <circle cx="330" cy="330" r="120" fill="none" stroke="#166534" strokeWidth="2" />
                  <text x="330" y="330" textAnchor="middle" fill="#166534" fontSize="24" fontWeight="bold">PEOPLE</text>
                  
                  {/* Center text */}
                  <text x="250" y="250" textAnchor="middle" fill="#166534" fontSize="20" fontWeight="bold">DIGITAL</text>
                  <text x="250" y="280" textAnchor="middle" fill="#166534" fontSize="20" fontWeight="bold">TRANSFORMATION</text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Second transformation section */}
        <div className="mt-20 pt-8 border-t border-gray-100">
          {/* Second transformation section header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
              How I help you to create new business
            </h3>
            <p className="text-gray-600 mb-8">
              Strategic guidance for launching healthcare and life science ventures—from concept validation to market entry and scaling.
            </p>
          </div>

          {/* New business services layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Steps visualization */}
            <div className="flex flex-col items-center justify-center space-y-8">
              {[1, 2, 3].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-green-700 flex items-center justify-center text-white text-2xl font-bold mb-2">
                    {step}
                  </div>
                  <h4 className="text-xl font-bold text-green-700">
                    {idx === 0 ? "Ideation" : idx === 1 ? "Validation" : "Go-to-Market"}
                  </h4>
                  {idx < 2 && (
                    <div className="h-10 border-l-2 border-green-500 my-2"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Service details */}
            <div className="space-y-6">
              {newBusinessServices.map((service, idx) => (
                <div key={idx} className="flex flex-col bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="flex items-center p-4 border-b border-gray-100">
                    <div className={`py-1.5 px-3 rounded text-white font-medium bg-${service.color} mr-4 text-sm`}>
                      {service.category}
                    </div>
                    <h4 className="font-bold text-xl text-green-800">
                      {service.title}
                    </h4>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 mb-4">
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
                    <div className="pt-2">
                      <Button variant="ghost" className="text-green-700 hover:text-green-800 hover:bg-green-50 p-0 group">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
