
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Legal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/" className="flex items-center text-green-600 hover:text-green-700 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Imprint & Data Privacy</h1>
          <Separator className="mb-8" />
          
          <section id="imprint" className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Imprint (Impressum)</h2>
            
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-semibold mt-6 mb-2">Information according to § 5 TMG</h3>
              <p>
                Jan Neufeld<br />
                Singularity Ventures<br />
                Berlin, Germany
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">Contact</h3>
              <p>
                Email: jan@singularity-ventures.com
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">VAT ID</h3>
              <p>
                DE349978251
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">Responsible for content according to § 55 Abs. 2 RStV</h3>
              <p>
                Jan Neufeld<br />
                Berlin, Germany
              </p>
            </div>
          </section>
          
          <Separator className="mb-8" />
          
          <section id="data-privacy" className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Data Privacy Policy</h2>
            
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-semibold mt-6 mb-2">1. Data Protection Overview</h3>
              <p>
                The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.
              </p>
              <p>
                The use of our website is generally possible without providing personal data. As far as personal data (such as name, address, or e-mail addresses) is collected on our pages, this is always done, as far as possible, on a voluntary basis. This data will not be passed on to third parties without your explicit consent.
              </p>
              <p>
                Please note that data transmission over the Internet (e.g., when communicating by e-mail) may have security gaps. Complete protection of data against access by third parties is not possible.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">2. Responsible Party</h3>
              <p>
                The data processing on this website is carried out by the website operator. Its contact details can be found in the imprint of this website.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">3. Data Collection on our Website</h3>
              <h4 className="text-lg font-medium mt-4 mb-2">Server Log Files</h4>
              <p>
                The website provider automatically collects and stores information that your browser automatically transmits to us in "server log files". These are:
              </p>
              <ul className="list-disc pl-6 my-2">
                <li>Browser type and browser version</li>
                <li>Operating system used</li>
                <li>Referrer URL</li>
                <li>Host name of the accessing computer</li>
                <li>Time of the server request</li>
                <li>IP address</li>
              </ul>
              <p>
                This data is not merged with other data sources. The basis for data processing is Art. 6 (1) (f) GDPR, which allows the processing of data to fulfill a contract or for measures preliminary to a contract.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2">Contact Form</h4>
              <p>
                If you send us inquiries via the contact form, your details from the inquiry form, including the contact details you provided there, will be stored by us for the purpose of processing the inquiry and in the event of follow-up questions. We do not pass on this data without your consent.
              </p>
              <p>
                The processing of this data is based on Art. 6 (1) (b) GDPR, if your request is related to the execution of a contract or if it is necessary to carry out pre-contractual measures.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">4. Your Rights</h3>
              <p>
                You have the following rights with respect to your personal data:
              </p>
              <ul className="list-disc pl-6 my-2">
                <li>Right to information</li>
                <li>Right to correction or deletion</li>
                <li>Right to restriction of processing</li>
                <li>Right to object to processing</li>
                <li>Right to data portability</li>
              </ul>
              <p>
                If you have any questions about data protection, please send us an email or contact the person responsible for data protection in our organization specified in the imprint.
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Legal;
