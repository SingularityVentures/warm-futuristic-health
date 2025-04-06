
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import TransformBusinessTab from "./services/TransformBusinessTab";
import CreateBusinessTab from "./services/CreateBusinessTab";
import CallToAction from "./services/CallToAction";

const ServicesSection = () => {
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

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <TabsContent value="transform" className="animate-fade-in mt-0">
              <TransformBusinessTab />
            </TabsContent>

            <TabsContent value="create" className="animate-fade-in mt-0">
              <CreateBusinessTab />
            </TabsContent>

            {/* CTA - Now inside the same container */}
            <CallToAction />
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;
