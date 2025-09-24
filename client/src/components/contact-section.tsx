import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    budget: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        service: "",
        budget: "",
        message: ""
      });
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "First name, last name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Township lahore"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+92 323 3566 997"
    },
    {
      icon: Mail,
      title: "Email",
      content: "ahsan@zentix.digital"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Fri: 2:00 PM - 12:00 AM"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1CkuCqNaSL/", label: "Facebook" },
    /* { icon: Twitter, href: "#", label: "Twitter" }, */
    { icon: Instagram, href: "https://www.instagram.com/zentix_pk?igsh=b2RubGVjc2pydnJj&utm_source=qr", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/zentix-pk-035645371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" }
  ];

  return (
    <section id="contact" className="py-20 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Let's</span> <span className="text-brand-gold">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to elevate your digital presence? Get in touch with us to discuss your project and discover how we can bring your vision to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-brand-gold">Get In Touch</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center space-x-4" data-testid={`contact-info-${info.title.toLowerCase().replace(' ', '-')}`}>
                    <div className="bg-brand-brown p-3 rounded-lg">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{info.title}</h4>
                      <p className="text-gray-300">{info.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a 
                      key={social.label}
                      href={social.href} 
                      className="bg-brand-gray-light p-3 rounded-lg hover:bg-brand-brown transition-colors"
                      data-testid={`social-${social.label.toLowerCase()}`}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-brand-gray border-none">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-white">First Name *</label>
                    <Input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="bg-brand-gray-light text-white border-transparent focus:border-brand-gold"
                      placeholder="John"
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-white">Last Name *</label>
                    <Input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="bg-brand-gray-light text-white border-transparent focus:border-brand-gold"
                      placeholder="Doe"
                      data-testid="input-last-name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-white">Email *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-brand-gray-light text-white border-transparent focus:border-brand-gold"
                    placeholder="john.doe@example.com"
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-white">Service Interest</label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger className="bg-brand-gray-light text-white border-transparent focus:border-brand-gold" data-testid="select-service">
                      <SelectValue placeholder="Select a service..." />
                    </SelectTrigger>
                    <SelectContent className="bg-brand-gray-light border-brand-gray">
                      <SelectItem value="social-media">Social Media Management</SelectItem>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="infographics">Visual Branding</SelectItem>
                      <SelectItem value="video-editing">Video Editing</SelectItem>
                      <SelectItem value="full-package">Full Package</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-white">Budget Range</label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                    <SelectTrigger className="bg-brand-gray-light text-white border-transparent focus:border-brand-gold" data-testid="select-budget">
                      <SelectValue placeholder="Select budget range..." />
                    </SelectTrigger>
                    <SelectContent className="bg-brand-gray-light border-brand-gray">
                      <SelectItem value="5k-10k">Rs.10,000</SelectItem>
                      <SelectItem value="10k-25k">Rs.10,000 - Rs.25,000</SelectItem>
                      <SelectItem value="25k-50k">Rs.25,000 - Rs.50,000</SelectItem>
                      <SelectItem value="50k+">Rs.50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-white">Project Details *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="bg-brand-gray-light text-white border-transparent focus:border-brand-gold resize-none"
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-brand-gold text-brand-black py-4 font-semibold hover:bg-yellow-500 transition-colors"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit-contact"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"} <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
