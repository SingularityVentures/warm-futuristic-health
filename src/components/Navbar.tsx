
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/" || location.pathname === "";
  const isLegalPage = location.pathname.includes("/legal");

  useEffect(() => {
    const handleScroll = () => {
      // Basic scroll detection
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Hero section height detection - only on main page
      if (isHomePage) {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
          const heroHeight = heroSection.offsetHeight;
          setIsPastHero(window.scrollY > heroHeight - 100); // -100 for a slight overlap
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  // If not on home page or on legal page, always show the background
  useEffect(() => {
    if (!isHomePage || isLegalPage) {
      setIsPastHero(true);
    }
  }, [isHomePage, isLegalPage]);

  // Handle scroll to section
  const handleSectionClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isHomePage) {
      // If we're already on the homepage, just scroll to the section
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80, // Offset for the navbar
          behavior: 'smooth'
        });
        setIsMenuOpen(false); // Close mobile menu if open
      }
    } else {
      // If we're not on the homepage, navigate to homepage with hash
      // and handle scrolling after navigation
      navigate(`/#${sectionId}`);
      setIsMenuOpen(false); // Close mobile menu if open
      
      // Give a small delay to allow the navigation to complete
      // before attempting to scroll to the element
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  // Handle logo or home button click 
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isHomePage) {
      // If already on homepage, scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Navigate to homepage
      navigate("/");
      // After navigation, ensure we're at the top of the page
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    }
    
    setIsMenuOpen(false); // Close mobile menu if open
  };

  // Create nav links - make sure they match the exact IDs of the sections on the homepage
  const navItems = [
    { name: "Home", href: "/", sectionId: "" },
    { name: "Services", href: "/#services", sectionId: "services" },
    { name: "About", href: "/#about", sectionId: "about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isPastHero ? "bg-gradient-to-r from-black/70 to-green-950/70 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="/" 
            onClick={handleHomeClick} 
            className="flex items-center space-x-2"
          >
            <img 
              src="/lovable-uploads/fe98110a-0afd-4d76-929c-a08b9e6e2884.png" 
              alt="Singularity Ventures Logo" 
              className="h-10 w-10"
            />
            <div className={`font-oswald font-bold text-2xl text-white tracking-wider letter-spacing-wide hidden md:block`}>
              <span className="text-green-600">S</span>
              <span>INGULARITY </span>
              <span className="text-green-600">V</span>
              <span>ENTURES</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.sectionId ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleSectionClick(item.sectionId)}
                  className="font-raleway text-white hover:text-green-300 transition-colors text-sm font-medium"
                >
                  {item.name}
                </a>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleHomeClick}
                  className="font-raleway text-white hover:text-green-300 transition-colors text-sm font-medium"
                >
                  {item.name}
                </a>
              )
            ))}
            <Button 
              asChild 
              className="bg-green-600 hover:bg-green-700 font-raleway"
            >
              <a href="/#contact" onClick={handleSectionClick("contact")}>Contact</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-green-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with solid background */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-950">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.sectionId ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={handleSectionClick(item.sectionId)}
                    className="font-raleway text-white hover:text-green-300 transition-colors py-2 text-sm font-medium"
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={handleHomeClick}
                    className="font-raleway text-white hover:text-green-300 transition-colors py-2 text-sm font-medium"
                  >
                    {item.name}
                  </a>
                )
              ))}
              <a 
                href="/#contact" 
                onClick={handleSectionClick("contact")}
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-center font-raleway text-sm font-medium"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
