import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo  from "./logo 4.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-brand-black/95 backdrop-blur-sm border-b border-brand-gray" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
<div className="flex items-center justify-between nav-container">
  <div className=" h-20 w-32 flex items-center justify-center ">
    <img
      src={logo}
      alt="Logo"
      className=" h-full w-auto object-contain scale-125 "
    />
  </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-brand-gold transition-colors"
                data-testid={`nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:text-brand-gold"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-brand-gray mt-4 rounded-lg">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left hover:text-brand-gold transition-colors"
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
