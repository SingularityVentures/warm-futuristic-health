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
                  
                  <h3>Allgemeine Hinweise und Pflichtinformationen</h3>
                  <h4>Verantwortliche Stelle</h4>
                  <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                  <p>
                    Singularity Digital Ventures GmbH<br />
                    Vertreten durch: Jan Kroschinski<br />
                    Mariannenstraße 32, 10999 Berlin<br />
                    Handelsregisternummer: 244042B, Amtsgericht Charlottenburg
                  </p>
                  <p>
                    Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung personenbezogener Daten (z. B. Name, Kontaktdaten o. Ä.).
                  </p>
                  
                  <h4>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
                  <p>
                    Einige Datenverarbeitungsprozesse erfolgen nur mit Ihrer ausdrücklichen Einwilligung. Eine Kommunikation mit uns, wie z. B. das Schreiben einer E-Mail oder das Versenden einer Nachricht über das Kontaktformular, gilt als ausdrückliche Einwilligung. Sie können Ihre Einwilligung jederzeit durch eine formlose E-Mail an uns widerrufen. Der Widerruf hat keine Auswirkungen auf die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung.
                  </p>
                  
                  <h4>Recht auf Beschwerde bei der Aufsichtsbehörde</h4>
                  <p>
                    Im Falle eines datenschutzrechtlichen Verstoßes steht Ihnen das Recht zu, bei der zuständigen Aufsichtsbehörde Beschwerde einzulegen. Zuständig ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten finden Sie unter folgendem Link:<br />
                    <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank" rel="noopener noreferrer">
                      https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
                    </a>
                  </p>
                  
                  <h4>Recht auf Datenübertragbarkeit</h4>
                  <p>
                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder zur Erfüllung eines Vertrags automatisiert verarbeiten, in einem maschinenlesbaren Format an sich oder an Dritte übermitteln zu lassen. Eine direkte Übertragung an einen anderen Verantwortlichen erfolgt nur, wenn dies technisch möglich ist.
                  </p>
                  
                  <h4>Recht auf Auskunft, Berichtigung, Sperrung und Löschung</h4>
                  <p>
                    Sie haben jederzeit das Recht, unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten, einschließlich der Herkunft der Daten, der Empfänger und des Zwecks der Datenverarbeitung. Sie haben auch das Recht, diese Daten zu berichtigen, zu sperren oder zu löschen, soweit keine gesetzlichen Aufbewahrungspflichten dem entgegenstehen. Für Auskünfte oder weitere Fragen können Sie sich jederzeit an uns über die im Impressum genannten Kontaktmöglichkeiten wenden.
                  </p>
                  
                  <h4>SSL-/TLS-Verschlüsselung</h4>
                  <p>
                    Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie z. B. Anfragen, die Sie an uns als Betreiber der Website senden, verwendet diese Website eine SSL- bzw. TLS-Verschlüsselung. Dies gewährleistet, dass die übermittelten Daten für Dritte nicht lesbar sind. Eine verschlüsselte Verbindung erkennen Sie an dem Schloss-Symbol in der Browserzeile.
                  </p>
                  
                  <h4>Server-Log-Dateien</h4>
                  <p>
                    Der Provider der Website erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dazu gehören:
                  </p>
                  <ul>
                    <li>Besuchte Seiten auf unserer Domain</li>
                    <li>Datum und Uhrzeit der Serveranfrage</li>
                    <li>Browsertyp und -version</li>
                    <li>Verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>IP-Adresse</li>
                  </ul>
                  <p>
                    Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
                  </p>
                  
                  <h4>Kontaktformular</h4>
                  <p>
                    Die über das Kontaktformular übermittelten Daten, einschließlich Ihrer Kontaktdaten, werden gespeichert, um Ihre Anfrage zu bearbeiten oder für Anschlussfragen zur Verfügung zu stehen. Eine Weitergabe dieser Daten erfolgt ohne Ihre ausdrückliche Einwilligung nicht.
                  </p>
                  <p>
                    Die Verarbeitung der Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Diese Einwilligung wird mit dem Absenden des Kontaktformulars erteilt. Ein Widerruf ist jederzeit durch eine formlose Mitteilung per E-Mail möglich. Der Widerruf beeinflusst nicht die Rechtmäßigkeit der bis dahin erfolgten Datenverarbeitung.
                  </p>
                  <p>
                    Die Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung widerrufen oder keine Notwendigkeit der Speicherung mehr besteht. Gesetzliche Aufbewahrungspflichten bleiben unberührt.
                  </p>
                  
                  <h4>Facebook-Seite</h4>
                  <p>
                    Wir nutzen die technische Plattform und die Dienste der Facebook Ireland Ltd. (4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland) für unsere Facebook-Seite. Sie nutzen diese Seite in eigener Verantwortung, insbesondere die interaktiven Funktionen (z. B. Kommentieren, Teilen, Bewerten).
                  </p>
                  <p>
                    Facebook erfasst unter anderem Ihre IP-Adresse und weitere Informationen, die in Cookies auf Ihrem Gerät gespeichert sind. Diese Informationen werden verwendet, um uns statistische Daten zur Nutzung unserer Facebook-Seite zur Verfügung zu stellen. Weitere Informationen hierzu finden Sie unter:<br />
                    <a href="http://de-de.facebook.com/help/pages/insights" target="_blank" rel="noopener noreferrer">
                      http://de-de.facebook.com/help/pages/insights
                    </a>
                  </p>
                  <p>
                    Die erhobenen Daten werden von Facebook verarbeitet und möglicherweise in Länder außerhalb der EU übertragen. Detaillierte Informationen zur Datenverwendung durch Facebook finden Sie in deren Datenschutzerklärung:<br />
                    <a href="https://de-de.facebook.com/full_data_use_policy" target="_blank" rel="noopener noreferrer">
                      https://de-de.facebook.com/full_data_use_policy
                    </a>
                  </p>
                  
                  <h4>Google Fonts</h4>
                  <p>
                    Diese Website verwendet Google Fonts, einen Dienst von Google Inc. Bei der Nutzung von Google Fonts wird die IP-Adresse Ihres Browsers an Google übermittelt. Weitere Informationen zu den Datenschutzbestimmungen von Google finden Sie hier:<br />
                    <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">
                      https://www.google.com/policies/privacy/
                    </a>
                  </p>
                  
                  <h4>Google reCAPTCHA</h4>
                  <p>
                    Zum Schutz vor Missbrauch von Anfragen nutzen wir ggf. den Google reCAPTCHA-Dienst. Dabei werden Ihre IP-Adresse sowie weitere notwendige Daten an Google übermittelt. Weitere Informationen dazu finden Sie in den Datenschutzhinweisen von Google:<br />
                    <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">
                      https://www.google.com/policies/privacy/
                    </a>
                  </p>
                  
                  <h4>Google Workspace</h4>
                  <p>
                    Die im Kontaktformular und bei E-Mail-Anfragen eingegebenen Daten werden in Google Workspace gespeichert, um Ihre Anfragen zu bearbeiten und für eventuelle Anschlussfragen. Weitere Informationen zu den Datenschutzbestimmungen von Google finden Sie hier:<br />
                    <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">
                      https://policies.google.com/privacy?hl=de
                    </a>
                  </p>
                  
                  <h4>Spotify Widget</h4>
                  <p>
                    Für die Darstellung und Wiedergabe von Musik-Inhalten verwendet diese Website ggf. Plugins von Spotify AB. Bei Aufruf einer Seite mit einem Spotify-Plugin wird eine Verbindung zu den Spotify-Servern hergestellt. Dabei erfährt Spotify, welche Seiten Sie besucht haben. Selbst wenn Sie nicht bei Spotify eingeloggt sind, kann Spotify möglicherweise Ihre IP-Adresse erfassen. Weitere Informationen zu den Datenschutzbestimmungen von Spotify finden Sie hier:<br />
                    <a href="https://www.spotify.com/de/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">
                      https://www.spotify.com/de/legal/privacy-policy/
                    </a>
                  </p>
                </div>
              ) : (
                <div className="prose max-w-none">
                  <h2>Privacy Policy</h2>
                  
                  <<h3>General Information and Mandatory Disclosures</h3>
                  <h4>Responsible Entity</h4>
                  <p>The responsible entity for data processing on this website is:</p>
                  <p>
                    Singularity Digital Ventures GmbH<br />
                    Represented by: Jan Kroschinski<br />
                    Mariannenstraße 32, 10999 Berlin<br />
                    Commercial Register Number: 244042B, District Court of Charlottenburg
                  </p>
                  <p>
                    The responsible entity is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g., name, contact details, etc.).
                  </p>
                  
                  <h4>Revocation of Your Consent to Data Processing</h4>
                  <p>
                    Some data processing operations are only possible with your explicit consent. Communicating with us, such as writing an email or sending a message via the contact form, is considered explicit consent. You may revoke your consent at any time by sending us an informal email. The legality of the data processing carried out before the revocation remains unaffected by the revocation.
                  </p>
                  
                  <h4>Right to File Complaints with Regulatory Authorities</h4>
                  <p>
                    If there has been a breach of data protection legislation, you have the right to lodge a complaint with the competent supervisory authority. The competent authority is the data protection officer of the federal state in which our company is headquartered. A list of data protection officers and their contact details can be found at the following link:<br />
                    <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank" rel="noopener noreferrer">
                      https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
                    </a>
                  </p>
                  
                  <h4>Right to Data Portability</h4>
                  <p>
                    You have the right to have data that we process on the basis of your consent or in fulfillment of a contract automatically delivered to yourself or to a third party in a standard, machine-readable format. If you request the direct transfer of data to another controller, this will only be done to the extent that it is technically feasible.
                  </p>
                  
                  <h4>Right to Access, Rectification, Blocking and Erasure</h4>
                  <p>
                    You have the right at any time to obtain free information about your stored personal data, its origin, recipients, and the purpose of the data processing. You also have the right to have this data corrected, blocked, or deleted, provided that no legal retention requirements exist. For this purpose and for any other questions relating to personal data, you can contact us at any time using the contact details provided in the imprint.
                  </p>
                  
                  <h4>SSL/TLS Encryption</h4>
                  <p>
                    For security reasons and to protect the transmission of confidential content, such as inquiries you send to us as the website operator, this website uses SSL or TLS encryption. This ensures that the data you transmit cannot be read by third parties. You can recognize an encrypted connection by the lock symbol in your browser’s address bar.
                  </p>
                  
                  <h4>Server Log Files</h4>
                  <p>
                    The website provider automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These include:
                  </p>
                  <ul>
                    <li>Pages visited on our domain</li>
                    <li>Date and time of the server request</li>
                    <li>Browser type and version</li>
                    <li>Operating system used</li>
                    <li>Referrer URL</li>
                    <li>Host name of the accessing computer</li>
                    <li>IP address</li>
                  </ul>
                  <p>
                    This data is not combined with other data sources. The processing is based on Art. 6(1)(b) GDPR, which permits the processing of data to fulfill a contract or for pre-contractual measures.
                  </p>
                  
                  <h4>Contact Form</h4>
                  <p>
                    The data you enter into the contact form, including your contact details, will be stored in order to process your inquiry or to be available for follow-up questions. This data will not be shared without your explicit consent.
                  </p>
                  <p>
                    The processing of this data is based solely on your consent according to Art. 6(1)(a) GDPR. You give this consent by submitting the contact form. You may revoke this consent at any time with an informal email. The legality of the data processing operations carried out before the revocation remains unaffected.
                  </p>
                  <p>
                    The data you entered will remain with us until you request its deletion, revoke your consent to storage, or the purpose for its storage no longer applies. Mandatory legal provisions—especially retention periods—remain unaffected.
                  </p>
                  
                  <h4>Facebook Page</h4>
                  <p>
                    We use the technical platform and services of Facebook Ireland Ltd. (4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland) for our Facebook page. You use this page at your own responsibility, especially its interactive features (e.g., commenting, sharing, liking).
                  </p>
                  <p>
                    Facebook collects, among other things, your IP address and other information stored on your device in cookies. This information is used to provide us with statistical data on the use of our Facebook page. Further details can be found here:<br />
                    <a href="http://de-de.facebook.com/help/pages/insights" target="_blank" rel="noopener noreferrer">
                      http://de-de.facebook.com/help/pages/insights
                    </a>
                  </p>
                  <p>
                    The data collected by Facebook is processed and may be transferred to countries outside the European Union. More information about how Facebook handles your data can be found in their privacy policy:<br />
                    <a href="https://de-de.facebook.com/full_data_use_policy" target="_blank" rel="noopener noreferrer">
                      https://de-de.facebook.com/full_data_use_policy
                    </a>
                  </p>
                  
                  <h4>Google Fonts</h4>
                  <p>
                    This website uses Google Fonts, a service of Google Inc. When you use Google Fonts, your browser's IP address is transmitted to Google. More information about Google’s privacy policy can be found here:<br />
                    <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">
                      https://www.google.com/policies/privacy/
                    </a>
                  </p>
                  
                  <h4>Google reCAPTCHA</h4>
                  <p>
                    To protect against abuse of our forms, we may use the Google reCAPTCHA service. Your IP address and other required data will be transmitted to Google. Further information can be found in Google’s privacy notices:<br />
                    <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">
                      https://www.google.com/policies/privacy/
                    </a>
                  </p>
                  
                  <h4>Google Workspace</h4>
                  <p>
                    The data entered in the contact form or email inquiries is stored in Google Workspace to process your requests and any follow-up questions. More information about Google’s privacy policy can be found here:<br />
                    <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener noreferrer">
                      https://policies.google.com/privacy?hl=en
                    </a>
                  </p>
                  
                  <h4>Spotify Widget</h4>
                  <p>
                    For the display and playback of music content, this website may use plugins from Spotify AB. When visiting a page containing a Spotify plugin, a connection to Spotify’s servers is established. Spotify will know which pages you visited. Even if you are not logged in to Spotify, Spotify may still collect your IP address. More information about Spotify’s privacy policy can be found here:<br />
                    <a href="https://www.spotify.com/de/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">
                      https://www.spotify.com/de/legal/privacy-policy/
                    </a>
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
