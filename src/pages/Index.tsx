
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AchievementsSection from "@/components/AchievementsSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ServicesSection from "@/components/ServicesSection";
import AIFocusSection from "@/components/AIFocusSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="space-y-12"> {/* Reduced space between sections */}
        <AchievementsSection />
        <ServicesSection />
        <ExpertiseSection />
        <AIFocusSection />
        <AboutSection />
        <ContactSection />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
