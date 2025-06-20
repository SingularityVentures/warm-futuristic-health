
import ContactInfo from "./contact/ContactInfo";

const ContactSection = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            How can I help you?
          </h2>
          <p className="text-gray-600 text-lg">
            Let's discuss how I can support your digital transformation journey.
          </p>
        </div>
        
        <div className="flex justify-center max-w-4xl mx-auto">
          <div className="w-full max-w-2xl">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
