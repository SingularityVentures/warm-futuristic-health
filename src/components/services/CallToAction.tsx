
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <div className="mt-12 text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
        Let's work together to achieve your digital transformation goals
      </h3>
      <Button asChild className="bg-green-600 hover:bg-green-700 text-white transition-colors">
        <a href="#contact">
          Get in Touch
        </a>
      </Button>
    </div>
  );
};

export default CallToAction;
