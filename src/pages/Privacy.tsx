
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LanguageSwitch from "@/components/legal/LanguageSwitch";
import PrivacyGerman from "@/components/legal/PrivacyGerman";
import PrivacyEnglish from "@/components/legal/PrivacyEnglish";

const Privacy = () => {
  const [language, setLanguage] = useState<"en" | "de">("de");

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
              {language === "de" ? "Datenschutz" : "Data Privacy"}
            </h1>
            <LanguageSwitch language={language} toggleLanguage={toggleLanguage} />
          </div>

          <div className="animate-fade-in">
            {language === "de" ? <PrivacyGerman /> : <PrivacyEnglish />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
