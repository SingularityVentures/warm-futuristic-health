
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Singularity Ventures</h2>
            <p className="text-gray-400 mt-2">Digital Transformation for Pharma and Healthcare</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/jankroschinski/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 rounded-full hover:bg-green-700 transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a 
              href="mailto:jan@singularity-ventures.com" 
              className="bg-gray-800 p-2 rounded-full hover:bg-green-700 transition-colors"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">Services</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">IT Project Management (GxP)</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Business Process Transformation</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Change Management</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Business Model Ideation</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Business Model Validation</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Venture Building / Go-To-Market</a></li>
                <li><a href="#ai" className="text-gray-400 hover:text-white transition-colors">AI Strategy & Implementation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">Learn More</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">My Services</a></li>
                <li><a href="#expertise" className="text-gray-400 hover:text-white transition-colors">Industry Expertise</a></li>
                <li><a href="#ai" className="text-gray-400 hover:text-white transition-colors">AI's Potential in Pharma & Healthcare</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Me</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-400">Contact Me</h3>
              <address className="not-italic text-gray-400">
                <p>Berlin, Germany</p>
                <p className="mt-2">Email: jan@singularity-ventures.com</p>
              </address>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} Singularity Ventures. All rights reserved.</p>
            <span className="hidden md:inline">|</span>
            <Link to="/imprint" className="hover:text-green-400 transition-colors">Imprint</Link>
            <span className="hidden md:inline">|</span>
            <Link to="/privacy" className="hover:text-green-400 transition-colors">Data Privacy</Link>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-green-700 p-2 rounded-full hover:bg-green-600 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
