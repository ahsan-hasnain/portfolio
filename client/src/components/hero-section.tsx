import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern creative agency office" 
          className="w-full h-full object-cover"
        />
        <div className="gradient-overlay absolute inset-0"></div>
      </div>
      
      <div className="relative container mx-auto px-6 z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Creative Solutions</span><br />
            <span className="text-brand-gold">Digital Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
            We craft exceptional digital experiences through social media management, web development, stunning infographics, and professional video editing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-brand-gold text-brand-black px-8 py-4 text-lg font-semibold hover:bg-yellow-500 transition-colors"
              onClick={() => scrollToSection("#services")}
              data-testid="button-explore-services"
            >
              Explore Our Services
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-brand-brown text-white px-8 py-4 text-lg font-semibold hover:bg-brand-brown transition-colors"
              onClick={() => scrollToSection("#portfolio")}
              data-testid="button-view-work"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
