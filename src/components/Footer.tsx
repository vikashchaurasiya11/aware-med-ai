import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const links = {
    health: [
      { label: "Disease Prevention", href: "#" },
      { label: "Symptoms Checker", href: "#" },
      { label: "Treatment Options", href: "#" },
      { label: "Health Resources", href: "#" }
    ],
    support: [
      { label: "Contact Support", href: "#" },
      { label: "Emergency Help", href: "#" },
      { label: "Health Professionals", href: "#" },
      { label: "Medical Guidelines", href: "#" }
    ],
    company: [
      { label: "About HealthBot AI", href: "#" },
      { label: "Our Mission", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">HealthBot AI</h3>
            </div>
            <p className="text-primary-foreground/80 mb-6 text-sm leading-relaxed">
              Your trusted AI health companion providing verified medical information, 
              symptom guidance, and wellness support 24/7.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>1-800-HEALTH-AI</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@healthbot.ai</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>

          {/* Health Topics */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Health Topics</h4>
            <ul className="space-y-2">
              {links.health.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {links.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 mb-6">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground/80 hover:text-white hover:bg-white/10 p-2"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 HealthBot AI. All rights reserved. 
              <span className="block md:inline md:ml-2">
                Medical information for educational purposes only.
              </span>
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-primary-foreground/80 hover:text-white hover:bg-white/10 px-3 py-1 h-auto"
              >
                🚨 Emergency: Call 911
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;