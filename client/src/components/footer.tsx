import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      return await apiRequest("POST", "/api/newsletter", { email });
    },
    onSuccess: () => {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Subscription failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    newsletterMutation.mutate(email);
  };

  const services = [
    "Social Media Handling",
    "Content Production",
    "Web Development", 
    "Visual Branding Identity",
  ];

  const companyLinks = [
    "About Us",
    "Portfolio",
    "Careers",
    "Contact"
  ];

  const legalLinks = [
    "Privacy Policy",
    "Terms of Service", 
    "Cookie Policy"
  ];

  return (
    <footer className="bg-brand-black border-t border-brand-gray py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-brand-gold mb-4">
              ZENTIX
            </div>
            <p className="text-gray-400 text-sm">
              Transforming brands through innovative digital solutions and creative excellence.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="hover:text-brand-gold transition-colors" data-testid={`footer-service-${service.toLowerCase().replace(' ', '-')}`}>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-brand-gold transition-colors" data-testid={`footer-company-${link.toLowerCase().replace(' ', '-')}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Stay updated with our latest projects and insights.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-brand-gray text-white border-transparent focus:border-brand-gold text-sm rounded-r-none"
                data-testid="input-newsletter-email"
              />
              <Button 
                type="submit"
                className="bg-brand-gold text-brand-black px-4 py-2 rounded-l-none hover:bg-yellow-500 transition-colors"
                disabled={newsletterMutation.isPending}
                data-testid="button-newsletter-submit"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-brand-gray pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 ZENTIX Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
            {legalLinks.map((link) => (
              <a 
                key={link}
                href="#" 
                className="hover:text-brand-gold transition-colors"
                data-testid={`footer-legal-${link.toLowerCase().replace(' ', '-')}`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
