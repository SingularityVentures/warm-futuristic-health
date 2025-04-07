
import { Mail, MapPin, Calendar } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-md h-full">
      <h3 className="text-xl font-bold text-green-700 mb-6">
        Get In Touch
      </h3>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="bg-green-100 p-3 rounded-full">
            <Mail className="h-5 w-5 text-green-700" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Email</h4>
            <p className="text-gray-600">jan@singularity-ventures.com</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-green-100 p-3 rounded-full">
            <MapPin className="h-5 w-5 text-green-700" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Location</h4>
            <p className="text-gray-600">Berlin, Germany</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-green-100 p-3 rounded-full">
            <Calendar className="h-5 w-5 text-green-700" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Available for</h4>
            <p className="text-gray-600">Projects, Workshops, Speaker Engagements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
