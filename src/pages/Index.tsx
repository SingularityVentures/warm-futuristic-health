
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BackToTop from "@/components/BackToTop";

// Lazy load components that are not immediately visible
const AchievementsSection = lazy(() => import("@/components/AchievementsSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ExpertiseSection = lazy(() => import("@/components/ExpertiseSection"));
const AIFocusSection = lazy(() => import("@/components/AIFocusSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading placeholders for each section
const SectionLoading = () => (
  <div className="w-full py-20 flex items-center justify-center">
    <div className="w-12 h-12 rounded-full border-4 border-green-200 border-t-green-600 animate-spin"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="space-y-0">
        <Suspense fallback={<SectionLoading />}>
          <AchievementsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <ServicesSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <ExpertiseSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <AIFocusSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <AboutSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <ContactSection />
        </Suspense>
      </div>
      
      <Suspense fallback={<SectionLoading />}>
        <Footer />
      </Suspense>
      
      <BackToTop />
    </div>
  );
};

export default Index;
