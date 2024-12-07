import React, { useState, useEffect } from "react";

const NavBar = ({ sections }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Ajustar según la altura del navbar
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false); // Cerrar el menú al seleccionar una sección
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 90; // Ajustar según la altura del navbar

      // Calcular la sección activa
      const currentSection = sections.reduce((active, section) => {
        const element = document.getElementById(section);
        if (!element) return active;

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          return section;
        }

        return active;
      }, "");

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, activeSection]);

  return (
    <nav className="bg-me-200 shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-700">Mi Portfolio</div>
        
        {/* Botón Hamburguesa */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Menú de navegación */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex space-x-4 absolute md:relative top-16 left-0 right-0 bg-me-200 md:bg-transparent md:top-0 px-4 py-2 md:p-0 shadow-md md:shadow-none`}
        >
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`block md:inline-block text-gray-600 hover:text-me-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                activeSection === section ? "text-me-500 bg-me-300" : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
