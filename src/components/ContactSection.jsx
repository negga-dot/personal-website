import {
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  Send,
  
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { EnhancedButton } from "./ui/enhanced-button";
import { EnhancedTooltip } from "./ui/enhanced-tooltip";
import XIcon from "@/assets/logo/X_logo.png";


export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      e.target.reset();
    }, 1500);
  };

  const socialLinks = [
    { icon: Linkedin, href: "linkedin.com/in/abhinavphi", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: () => <img src={XIcon} alt="X" className="h-5 w-5" />, href: "x.com/abhinav_phi", label: "X (Twitter)", color: "hover:opacity-70" },
    { icon: Instagram, href: "instagram.com/abhinav.phi", label: "Instagram", color: "hover:text-pink-500" },
    { icon: Github, href: "github.com/abhinav-phi", label: "GitHub", color: "hover:text-gray-300" },

  ];

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I&apos;m always open to discussing new opportunities.
        </p>

        <div className="glass-effect p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-10 items-start justify-between">
          {/* Contact Info */}
          <div className="space-y-8 md:w-1/2 text-center items-center flex flex-col">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="p-3 rounded-full bg-primary/10 enhanced-hover">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:abhinav.phi15@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 enhanced-hover"
                  >
                    abhinav.phi15@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 rounded-full bg-primary/10 enhanced-hover">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+91-98185-97365"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 enhanced-hover"
                  >
                    +91-98185-97365
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 rounded-full bg-primary/10 enhanced-hover">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">
                    New Delhi, India
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <EnhancedTooltip key={index} content={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "p-3 rounded-full bg-secondary/70 text-muted-foreground transition-all duration-300 enhanced-hover",
                          social.color
                        )}
                      >
                        <IconComponent className="h-5 w-5" />
                      </a>
                    </EnhancedTooltip>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Message Form */}
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-2xl font-semibold">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  placeholder="Abhinav"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  placeholder="abhinav.phi15@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none transition-all duration-300"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <EnhancedButton
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </EnhancedButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
