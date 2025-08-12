import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: "fashion-ecommerce",
      title: "Fashion E-commerce",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "E-commerce website design"
    },
    {
      id: "restaurant-campaign",
      title: "Restaurant Campaign",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Restaurant social media campaign"
    },
    {
      id: "growth-analytics",
      title: "Growth Analytics",
      category: "Infographics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Data visualization infographic"
    },
    {
      id: "corporate-video",
      title: "Corporate Video",
      category: "Video Editing",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Corporate video production"
    },
    {
      id: "tech-platform",
      title: "Tech Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Tech startup website"
    },
    {
      id: "healthcare-data",
      title: "Healthcare Data",
      category: "Infographics",
      image: "https://pixabay.com/get/g9f8b5f2c7ad36097d0f630e032d18f4da85bc1ad1e552bf2764a8d3b7490041163d150e0315a0bb68d79b393a4f3f99ae84b5c7664034ac8324d7d35429c19c8_1280.jpg",
      alt: "Healthcare infographic design"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Featured</span> <span className="text-brand-gold">Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our diverse portfolio showcasing successful campaigns, innovative web solutions, and creative content across various industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="portfolio-item relative group cursor-pointer"
              data-testid={`portfolio-item-${item.id}`}
            >
              <img 
                src={item.image} 
                alt={item.alt} 
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="portfolio-overlay absolute inset-0 bg-brand-brown/90 opacity-0 rounded-lg flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-2 text-white">{item.title}</h4>
                  <p className="text-sm mb-4 text-gray-200">{item.category}</p>
                  <Button 
                    className="bg-brand-gold text-brand-black px-4 py-2 text-sm font-semibold hover:bg-yellow-500"
                    data-testid={`button-view-project-${item.id}`}
                  >
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
