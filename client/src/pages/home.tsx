import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import PortfolioSection from "@/components/portfolio-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import LogoAnimation from '../components/abc'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide animation after 4 seconds (or when your app finishes loading)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    // Scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Apply fade-in animation to sections
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
      section.style.opacity = "0";
      section.style.transform = "translateY(30px)";
      section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(section);
    });

    // Add animate-in class styles
    const style = document.createElement("style");
    style.textContent = `
      .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="App">
      {isLoading ? <LogoAnimation /> :<div className="min-h-screen bg-brand-black text-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      {/* <PortfolioSection /> */}
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>}
    </div>
    
  );
};

export default Home;
