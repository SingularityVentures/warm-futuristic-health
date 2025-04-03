
import { useEffect, useState, useRef } from "react";
import { Clock, CheckCircle, BarChart3 } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const Counter = ({ end, suffix = "", prefix = "", duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return (
    <div ref={countRef} className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">
      {prefix}{count}{suffix}
    </div>
  );
};

const AchievementsSection = () => {
  const achievements = [
    {
      value: 10,
      suffix: "+",
      label: "Years Experience",
      icon: <Clock className="h-12 w-12 text-green-500" strokeWidth={1.5} />,
      description: "Dedicated to digital transformation in regulated industries"
    },
    {
      value: 100,
      suffix: "%",
      label: "Client Satisfaction",
      icon: <CheckCircle className="h-12 w-12 text-green-500" strokeWidth={1.5} />,
      description: [
        "Delivering results that exceed expectations",
        "(References available)"
      ]
    },
    {
      value: 20,
      suffix: "+",
      label: "Projects Completed",
      icon: <BarChart3 className="h-12 w-12 text-green-500" strokeWidth={1.5} />,
      description: "From idea to implementation and beyond"
    },
  ];

  return (
    <section id="achievements" className="section bg-gradient-to-b from-white to-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Results-as-a-Service
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-5xl mx-auto">
            For 10+ years, I've been delivering <b>digital solutions</b> that actually ship — as both an entrepreneur and freelance project manager.
            I stay close to the tech, actively leveraging emerging tools like AI to drive real results.<br /> 
            My clients span <b>startups</b>, <b>SMEs</b> and <b>global Fortune 500 companies</b>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="relative bg-white rounded-lg p-8 shadow-lg text-center card-hover overflow-hidden border border-gray-100"
            >
              {/* Hexagonal background pattern */}
              <div className="absolute -right-6 -bottom-6 w-32 h-32 opacity-5">
                <svg viewBox="0 0 100 100" fill="currentColor" className="text-green-900">
                  <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0z" />
                </svg>
              </div>
              
              <div className="mb-6 flex justify-center">{achievement.icon}</div>
              <Counter
                end={achievement.value}
                suffix={achievement.suffix}
                duration={2000}
              />
              <div className="mt-3 text-gray-800 font-semibold text-lg">{achievement.label}</div>
              <p className="mt-2 text-gray-600 text-sm">
                {Array.isArray(achievement.description) ? (
                  achievement.description.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < achievement.description.length - 1 && <br />}
                    </span>
                  ))
                ) : (
                  achievement.description
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
