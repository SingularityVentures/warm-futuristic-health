
import { Button } from "@/components/ui/button";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { AnimatedCards } from "@/components/ui/animated-cards";
import AIFocusSectionHeader from "./ai-focus/AIFocusSectionHeader";
import AIAreaTile from "./ai-focus/AIAreaTile";
import { aiAreas } from "./ai-focus/aiAreaData";

const AIFocusSection = () => {
  const { scrollToSection } = useScrollToSection();

  const animatedTiles = aiAreas.map(area => ({
    content: <AIAreaTile {...area} />,
    src: area.image
  }));

  return (
    <section id="ai" className="section bg-gradient-to-b from-gray-50 to-white overflow-hidden py-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-full mx-auto mb-10">
          <AIFocusSectionHeader />
        </div>
        
        <div className="mt-16">
          <AnimatedCards 
            tiles={animatedTiles}
            autoplay={true}
            className="bg-white rounded-xl shadow-sm"
          />
        </div>
        
        <div className="text-center mt-8">
          <Button 
            asChild 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 px-8 py-6 text-base"
          >
            <a href="#contact" onClick={scrollToSection("contact")}>Discuss Your AI Strategy</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIFocusSection;
