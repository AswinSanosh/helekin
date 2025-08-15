import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  FileText, 
  MessageSquare, 
  Users, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  MessageCircle,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const contactInfo = [
    { icon: Phone, text: "+91 89439 63650", href: "tel:+918943963650" },
    { icon: Mail, text: "support@helekin.in", href: "mailto:support@helekin.in" },
    { icon: MapPin, text: "Kerala, India", href: "#" },
  ];

  const supportLinks = [
    { icon: FileText, text: "FAQs", href: "/FAQ" },
    { icon: MessageSquare, text: "Raise a Complaint", href: "/Raise-a-Complaint" },
    { icon: Users, text: "Community Forum", href: "/Community" },
  ];

  const quickLinks = [
    { text: "About Us", href: "/about" },
    { text: "Projects", href: "/projects" },
    { text: "Services", href: "/services" },
    { text: "Careers", href: "/Careers" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "/facebook", hoverColor: "hover:text-blue-500" },
    { icon: Twitter, href: "/twitter", hoverColor: "hover:text-gray-300" },
    { icon: Instagram, href: "https://www.instagram.com/helekin.tech/", hoverColor: "hover:text-pink-500" },
    { icon: Youtube, href: "/youtube", hoverColor: "hover:text-red-500" },
    { icon: MessageCircle, href: "+918943963650", hoverColor: "hover:text-green-400" },
  ];

  const legalLinks = [
    { text: "Privacy Policy", href: "/policy" },
    { text: "Terms & Conditions", href: "/termsandcondition" },
    { text: "Sitemap", href: "/sitemap" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#070707] to-black border-t border-white/20 text-white">

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 text-[hsl(220,9%,65%)] hover:text-[hsl(0,84%,55%)] transition-colors duration-200 group"
                >
                  <item.icon className="h-5 w-5 text-[hsl(0,84%,55%)] group-hover:scale-110 transition-transform" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    {item.text}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Support Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Support
            </h3>
            <div className="space-y-4">
              {supportLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 text-[hsl(220,9%,65%)] hover:text-[hsl(0,84%,55%)] transition-colors duration-200 group"
                >
                  <item.icon className="h-5 w-5 text-[hsl(0,84%,55%)] group-hover:scale-110 transition-transform" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    {item.text}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <div className="space-y-4">
              {quickLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-[hsl(220,9%,65%)] hover:text-[hsl(0,84%,55%)] transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`p-3 bg-[hsl(220,13%,15%)] rounded-lg text-[hsl(220,9%,65%)] ${item.hoverColor} transition-all duration-200 hover:scale-110 hover:shadow-lg group`}
                >
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="pt-6 max-w-screen-sm">
              <p className="text-[hsl(220,9%,65%)] mb-3">Stay updated with our latest news</p>
              <div className="flex md:gap-2 gap-1 mx-auto px-1 max-w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 w-4/5  px-3 py-2 bg-[hsl(220,13%,15%)] border border-white/10 rounded-md text-white placeholder:text-[hsl(220,9%,65%)] focus:outline-none focus:ring-2 focus:ring-[hsl(0,84%,55%)/0.5]"
                />
                <Button className="bg-[hsl(0,84%,55%)] hover:bg-[hsl(0,84%,50%)] w-1/5">
                  <ArrowRight className="h-full w-5 m-auto" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 bg-[hsl(220,13%,6%)/0.5]">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[hsl(220,9%,65%)] text-sm">
              © 2025 Helekin. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-sm text-[hsl(220,9%,65%)] hover:text-[hsl(0,84%,55%)] transition-colors duration-200"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
