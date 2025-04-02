
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="relative group"
          aria-label="Scroll to top"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-200"></div>
          <div className="relative bg-green-600 p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors flex items-center justify-center text-white">
            <ArrowUp size={20} />
          </div>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
