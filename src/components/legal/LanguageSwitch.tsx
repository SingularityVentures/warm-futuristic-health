
import React from "react";
import { Globe } from "lucide-react";
import { Switch } from "@/components/ui/switch";

interface LanguageSwitchProps {
  language: "en" | "de";
  toggleLanguage: () => void;
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ language, toggleLanguage }) => {
  return (
    <div className="flex items-center space-x-2">
      <Globe className="text-green-600" size={20} />
      <span className={language === "de" ? "font-bold" : ""}>DE</span>
      <Switch checked={language === "en"} onCheckedChange={toggleLanguage} />
      <span className={language === "en" ? "font-bold" : ""}>EN</span>
    </div>
  );
};

export default LanguageSwitch;
