
"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type AnimatedTile = {
  content: React.ReactNode;
  src: string;
};

export const AnimatedTestimonials = ({
  tiles,
  autoplay = false,
  className,
}: {
  tiles: AnimatedTile[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % tiles.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + tiles.length) % tiles.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-12", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {tiles.map((tile, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : tiles.length + 2 - index,
                    y: isActive(index) ? [0, -40, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={tile.src}
                    alt="AI Focus Area"
                    className="h-full w-full rounded-xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-0">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="h-full"
          >
            {tiles[active]?.content}
          </motion.div>
          <div className="flex gap-4 pt-6 justify-center md:justify-start border-t border-green-100">
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center group/button hover:bg-green-100 transition-all duration-300 hover:shadow-md"
            >
              <IconArrowLeft className="h-5 w-5 text-green-700 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center group/button hover:bg-green-100 transition-all duration-300 hover:shadow-md"
            >
              <IconArrowRight className="h-5 w-5 text-green-700 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
