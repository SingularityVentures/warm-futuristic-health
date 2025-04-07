
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Custom hook to handle section navigation between pages with smooth scrolling
 */
export const useScrollToSection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/" || location.pathname === "";

  // Navigate to a section by ID
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isHomePage) {
      // If we're already on the homepage, just scroll to the section
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80, // Offset for the navbar
          behavior: 'smooth'
        });
      }
    } else {
      // If we're not on the homepage, navigate to homepage with hash
      // and handle scrolling after navigation
      navigate(`/#${sectionId}`);
      
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

  // Handle "Home" click to go to hero section
  const scrollToTop = (e: React.MouseEvent) => {
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
  };

  return { scrollToSection, scrollToTop, isHomePage };
};
