
import { Mail, MapPin, Calendar } from "lucide-react";
import { obfuscateEmail, generateMailtoLink } from "@/utils/emailProtection";

const ContactInfo = () => {
  const contactEmail = "jan@singularity-ventures.com";
  
  return (
    <div className="tech-card bg-white p-12 rounded-2xl shadow-xl border border-green-100 relative overflow-hidden">
      <div className="tech-pattern"></div>
      <div className="relative z-10">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold heading-gradient mb-3">
            Get In Touch
          </h3>
          <div className="technoline mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl inline-block mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 glow-effect">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
            <div className="text-gray-600">
              <a href={generateMailtoLink(contactEmail)} className="hover:text-green-700 transition-colors duration-200 story-link">
                {obfuscateEmail(contactEmail)}
              </a>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl inline-block mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 glow-effect">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
            <p className="text-gray-600">Berlin, Germany</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl inline-block mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 glow-effect">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Available for</h4>
            <p className="text-gray-600">Projects, Workshops, Speaker Engagements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
