
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <div className="mt-12 text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
        Let's work together to achieve your digital transformation goals
      </h3>
      <Button asChild className="bg-green-600 hover:bg-green-700 text-white transition-colors px-6">
        <a href="#contact">
          Get in Touch
          <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </Button>
    </div>
  );
};

export default CallToAction;
