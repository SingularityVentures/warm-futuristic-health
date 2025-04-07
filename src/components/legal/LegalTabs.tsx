
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImprintGerman from "./ImprintGerman";
import ImprintEnglish from "./ImprintEnglish";
import PrivacyGerman from "./PrivacyGerman";
import PrivacyEnglish from "./PrivacyEnglish";

interface LegalTabsProps {
  tab: string;
  language: "en" | "de";
  handleTabChange: (value: string) => void;
}

const LegalTabs: React.FC<LegalTabsProps> = ({ tab, language, handleTabChange }) => {
  return (
    <Tabs defaultValue={tab} onValueChange={handleTabChange} className="w-full">
      <TabsList className="mb-8">
        <TabsTrigger value="imprint">{language === "de" ? "Impressum" : "Imprint"}</TabsTrigger>
        <TabsTrigger value="privacy">{language === "de" ? "Datenschutz" : "Data Privacy"}</TabsTrigger>
      </TabsList>
      
      <TabsContent value="imprint" className="animate-fade-in">
        {language === "de" ? <ImprintGerman /> : <ImprintEnglish />}
      </TabsContent>
      
      <TabsContent value="privacy" className="animate-fade-in">
        {language === "de" ? <PrivacyGerman /> : <PrivacyEnglish />}
      </TabsContent>
    </Tabs>
  );
};

export default LegalTabs;
