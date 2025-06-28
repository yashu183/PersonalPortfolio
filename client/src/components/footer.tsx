import { Button } from "@/components/ui/button";
import { Linkedin, Github, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">John Smith</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Full-Stack Software Engineer passionate about building scalable applications and solving complex problems with modern technologies.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="w-10 h-10 bg-white/10 hover:bg-primary">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-10 h-10 bg-white/10 hover:bg-primary">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-10 h-10 bg-white/10 hover:bg-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-10 h-10 bg-white/10 hover:bg-primary">
                <i className="fab fa-dev"></i>
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Mail className="mr-2 text-primary h-4 w-4" />
                john.smith@example.com
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-primary h-4 w-4" />
                +1 (234) 567-8900
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 text-primary h-4 w-4" />
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-8 mt-8 text-center">
          <p className="text-gray-300">
            © 2024 John Smith. All rights reserved. Built with modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
