
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LanguageSwitch from "@/components/legal/LanguageSwitch";
import LegalTabs from "@/components/legal/LegalTabs";

const Legal = () => {
  const { tab = "imprint" } = useParams<{ tab: string }>();
  const navigate = useNavigate();
  const [language, setLanguage] = useState<"en" | "de">("de");

  const handleTabChange = (value: string) => {
    navigate(`/legal/${value}`);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "de" : "en");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">
              {tab === "imprint" ? (language === "de" ? "Impressum" : "Imprint") : 
                                  (language === "de" ? "Datenschutz" : "Data Privacy")}
            </h1>
            <LanguageSwitch language={language} toggleLanguage={toggleLanguage} />
          </div>

          <LegalTabs tab={tab} language={language} handleTabChange={handleTabChange} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Legal;
