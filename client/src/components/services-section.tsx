import { Share2, Code, PieChart, Video } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import pic from './visua.jpeg'
const ServicesSection = () => {
  const services = [
    {
      id: "social-media",
      title: "Social Media Management",
      description: "Strategic content creation, community engagement, and brand growth across all major social platforms.",
      icon: Share2,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Social media management team"
    },
    {
      id: "web-development",
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies and responsive design.",
      icon: Code,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Web development workspace"
    },
    {
      id: "Visual Branding Identity",
      title: "Visual Branding Identity",
      description: "Data visualization and information design that transforms complex data into compelling visual stories.",
      icon: PieChart,
      image:pic,
      alt: "Infographic design examples"
    },
    {
      id: "video-editing",
      title: "Video Editing",
      description: "Professional video production and post-production services for marketing, corporate, and creative content.",
      icon: Video,
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Video editing setup"
    }
  ];

  return (
    <section id="services" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-brand-gold">Our</span> <span className="text-white">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand and drive meaningful engagement across all platforms.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id}
                className="service-card bg-brand-gray-light p-8 rounded-xl hover:bg-brand-brown transition-all duration-300 cursor-pointer border-none"
                data-testid={`service-card-${service.id}`}
              >
                <CardContent className="p-0">
                  <div className="mb-6">
                    <img 
                      src={service.image} 
                      alt={service.alt} 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="text-center">
                    <IconComponent className="w-8 h-8 text-brand-gold mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
