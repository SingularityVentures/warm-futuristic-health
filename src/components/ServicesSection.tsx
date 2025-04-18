
import { TabsContent } from "@/components/ui/tabs";
import TransformBusinessTab from "./services/TransformBusinessTab";
import CreateBusinessTab from "./services/CreateBusinessTab";
import { useIsMobile } from "@/hooks/use-mobile";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";

const ServicesSection = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("transform");
  
  return (
    <section id="services" className="section py-8 pb-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-full mx-auto mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            My Digital Transformation Services
          </h2>
          <div className="technoline mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            End-to-end IT project management (GxP) and consulting tailored specifically to pharmaceutical and healthcare organizations.
          </p>
        </div>

        {/* Services toggle group */}
        <div className="flex justify-center mb-4">
          <div className={`flex items-center gap-4 ${isMobile ? 'flex-col' : ''} max-w-xl w-full`}>
            <div className="text-green-700 font-medium whitespace-nowrap">Transform Existing Business</div>
            <ToggleGroup 
              type="single" 
              value={activeTab}
              onValueChange={(value) => value && setActiveTab(value)}
              className="bg-green-50 p-2"
            >
              <ToggleGroupItem 
                value="transform" 
                className="data-[state=on]:bg-green-600 data-[state=on]:text-white px-4"
                aria-label="Transform Existing Business"
              />
              <ToggleGroupItem 
                value="create" 
                className="data-[state=on]:bg-green-600 data-[state=on]:text-white px-4"
                aria-label="Create New Business"
              />
            </ToggleGroup>
            <div className="text-green-700 font-medium whitespace-nowrap">Create New Business</div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-sm mb-0">
          <div className={`${activeTab === 'transform' ? 'block' : 'hidden'} animate-fade-in`}>
            <TransformBusinessTab />
          </div>
          <div className={`${activeTab === 'create' ? 'block' : 'hidden'} animate-fade-in`}>
            <CreateBusinessTab />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
