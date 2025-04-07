
import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Contact Me
          </h2>
          <p className="text-gray-600 text-lg">
            Let's discuss how I can support your digital transformation journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
          
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
