import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
            <div className="flex items-center space-x-2">
              <Globe className="text-green-600" size={20} />
              <span className={language === "de" ? "font-bold" : ""}>DE</span>
              <Switch checked={language === "en"} onCheckedChange={toggleLanguage} />
              <span className={language === "en" ? "font-bold" : ""}>EN</span>
            </div>
          </div>

          <Tabs defaultValue={tab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="imprint">{language === "de" ? "Impressum" : "Imprint"}</TabsTrigger>
              <TabsTrigger value="privacy">{language === "de" ? "Datenschutz" : "Data Privacy"}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="imprint" className="animate-fade-in">
              {language === "de" ? (
                <div className="prose max-w-none">
                  <h2>Impressum</h2>
                  <h3>Angaben gemäß § 5 TMG</h3>
                  <p>
                    Jan Kroschinski<br />
                    Singularity Digital Ventures GmbH<br />
                    Mariannenstraße 32<br />
                    10999 Berlin
                  </p>
                  
                  <h3>Kontakt</h3>
                  <p>
                    E-Mail: jan@singularity-ventures.com
                  </p>
                  
                  <h3>Handelsregister-Nummer</h3>
                  <p> 
                    244042B Amtsgericht Charlottenburg
                  </p>
                  
                  <h3>Umsatzsteuer-ID</h3>
                  <p>
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                    DE307669743
                  </p>
                                   
                  <h3>Hinweis zur EU-Streitschlichtung</h3>
                  <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/.<br />
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                  </p>
                                   
                  <h3>Haftung für Inhalte</h3>
                  <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                  <p>
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                  
                  <h3>Haftung für Links</h3>
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                  </p>
                  <p>
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                  
                  <h3>Urheberrecht</h3>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                  </p>
                  <p>
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </div>
              ) : (
                <div className="prose max-w-none">
                  <h2>Imprint</h2>
                  <h3>Information according to § 5 TMG</h3>
                  <p>
                    Jan Kroschinski<br />
                    Singularity Digital Ventures GmbH<br />
                    Mariannenstraße 32<br />
                    10999 Berlin
                  </p>
                  
                  <h3>Contact</h3>
                  <p>
                    E-Mail: jan@singularity-ventures.com
                  </p>

                  <h3>Commercial Register Number</h3>
                  <p>
                    244042B District Court of Charlottenburg
                  </p>
                  
                  <h3>VAT ID</h3>
                  <p>
                    VAT identification number according to § 27 a of the German VAT law:<br />
                    DE307669743
                  </p>
                  
                  <h3>EU Dispute Resolution</h3>
                  <p>
                    The European Commission provides a platform for online dispute resolution (OS): https://ec.europa.eu/consumers/odr/.<br />
                    You can find our email address in the imprint above.
                  </p>
                  
                  <h3>Liability for Content</h3>
                  <p>
                    As a service provider, we are responsible for our own content on these pages in accordance with general legislation pursuant to Section 7 (1) of the German Telemedia Act (TMG). According to Sections 8 to 10 TMG, however, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
                  </p>
                  <p>
                    Obligations to remove or block the use of information under general law remain unaffected. However, liability in this regard is only possible from the point in time at which a concrete legal violation becomes known. If we become aware of any such legal violations, we will remove the relevant content immediately.
                  </p>
                  
                  <h3>Liability for Links</h3>
                  <p>
                    Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking.
                  </p>
                  <p>
                    However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of a violation of law. If we become aware of any legal violations, we will remove such links immediately.
                  </p>
                  
                  <h3>Copyright</h3>
                  <p>
                    The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law requires the written consent of its respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.
                  </p>
                  <p>
                    Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such content immediately.
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="privacy" className="animate-fade-in">
              {language === "de" ? (
                <div className="prose max-w-none">
                  <h2>Datenschutzerklärung</h2>
                  
                  <h3>1. Datenschutz auf einen Blick</h3>
                  <h4>Allgemeine Hinweise</h4>
                  <p>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                  </p>
                  
                  <h4>Datenerfassung auf dieser Website</h4>
                  <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
                  <p>
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                  </p>
                  <p><strong>Wie erfassen wir Ihre Daten?</strong></p>
                  <p>
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                  </p>
                  <p>
                    Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                  </p>
                  <p><strong>Wofür nutzen wir Ihre Daten?</strong></p>
                  <p>
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                  </p>
                  <p><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p>
                  <p>
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                  </p>
                  <p>
                    Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                  </p>
                  
                  <h3>2. Hosting</h3>
                  <h4>Externes Hosting</h4>
                  <p>
                    Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                  </p>
                  <p>
                    Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                  </p>
                  <p>
                    Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
                  </p>
                  <p><strong>Auftragsverarbeitung</strong></p>
                  <p>
                    Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
                  </p>
                  
                  <h3>3. Allgemeine Hinweise und Pflichtinformationen</h3>
                  <h4>Datenschutz</h4>
                  <p>
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                  <p>
                    Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                  </p>
                  <p>
                    Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                  </p>
                  
                  <h4>Hinweis zur verantwortlichen Stelle</h4>
                  <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                  <p>
                    Jan Leinfelder<br />
                    Singularity Ventures<br />
                    Mittenwalder Str. 20<br />
                    10961 Berlin
                  </p>
                  <p>
                    Telefon: +49 172 1099765<br />
                    E-Mail: jan@singularity-ventures.com
                  </p>
                  <p>
                    Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                  </p>
                </div>
              ) : (
                <div className="prose max-w-none">
                  <h2>Privacy Policy</h2>
                  
                  <h3>1. Data Protection at a Glance</h3>
                  <h4>General Information</h4>
                  <p>
                    The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally. For detailed information on the subject of data protection, please refer to our privacy policy listed below this text.
                  </p>
                  
                  <h4>Data Collection on This Website</h4>
                  <p><strong>Who is responsible for data collection on this website?</strong></p>
                  <p>
                    Data processing on this website is carried out by the website operator. You can find their contact details in the "Information about the Responsible Party" section of this privacy policy.
                  </p>
                  <p><strong>How do we collect your data?</strong></p>
                  <p>
                    On the one hand, your data is collected when you provide it to us. This could be data that you enter in a contact form, for example.
                  </p>
                  <p>
                    Other data is collected automatically or with your consent when you visit the website by our IT systems. This is primarily technical data (e.g., internet browser, operating system, or time of page access). This data is collected automatically as soon as you enter this website.
                  </p>
                  <p><strong>What do we use your data for?</strong></p>
                  <p>
                    Some of the data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior.
                  </p>
                  <p><strong>What rights do you have regarding your data?</strong></p>
                  <p>
                    You have the right to receive information about the origin, recipient, and purpose of your stored personal data free of charge at any time. You also have the right to request the correction or deletion of this data. If you have given consent for data processing, you can revoke this consent at any time for the future. You also have the right, under certain circumstances, to request the restriction of the processing of your personal data. You also have the right to file a complaint with the responsible supervisory authority.
                  </p>
                  <p>
                    You are welcome to contact us at any time with any questions on this or any other data protection issue.
                  </p>
                  
                  <h3>2. Hosting</h3>
                  <h4>External Hosting</h4>
                  <p>
                    This website is hosted by an external service provider (host). The personal data collected on this website is stored on the host's servers. This may primarily involve IP addresses, contact requests, meta and communication data, contract data, contact details, names, website access, and other data generated via a website.
                  </p>
                  <p>
                    The host is used for the purpose of fulfilling contracts with our potential and existing customers (Art. 6 para. 1 lit. b GDPR) and in the interest of a secure, fast, and efficient provision of our online offering by a professional provider (Art. 6 para. 1 lit. f GDPR). If appropriate consent has been obtained, the processing is carried out exclusively on the basis of Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TTDSG, insofar as the consent includes the storage of cookies or access to information in the user's end device (e.g., device fingerprinting) as defined in the TTDSG. The consent can be revoked at any time.
                  </p>
                  <p>
                    Our host will only process your data to the extent necessary to fulfill its service obligations and will follow our instructions regarding this data.
                  </p>
                  <p><strong>Data Processing Agreement</strong></p>
                  <p>
                    We have concluded a data processing agreement (DPA) for the use of the above-mentioned service. This is a contract required by data protection law, which ensures that this service processes the personal data of our website visitors only according to our instructions and in compliance with the GDPR.
                  </p>
                  
                  <h3>3. General Information and Mandatory Information</h3>
                  <h4>Data Protection</h4>
                  <p>
                    The operators of this website take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.
                  </p>
                  <p>
                    When you use this website, various personal data is collected. Personal data is data that can be used to identify you personally. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this is done.
                  </p>
                  <p>
                    We would like to point out that data transmission on the Internet (e.g., when communicating by email) may have security gaps. Complete protection of data against access by third parties is not possible.
                  </p>
                  
                  <h4>Information about the Responsible Party</h4>
                  <p>The party responsible for processing data on this website is:</p>
                  <p>
                    Jan Leinfelder<br />
                    Singularity Ventures<br />
                    Mittenwalder Str. 20<br />
                    10961 Berlin
                  </p>
                  <p>
                    Phone: +49 172 1099765<br />
                    Email: jan@singularity-ventures.com
                  </p>
                  <p>
                    The responsible party is the natural or legal person who, alone or jointly with others, decides on the purposes and means of processing personal data (e.g., names, email addresses, etc.).
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Legal;
