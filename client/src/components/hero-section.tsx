import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Laptop } from "lucide-react";

export default function HeroSection() {
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
    <section id="home" className="pt-20 pb-16 sm:pt-24 sm:pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
              Hi, I'm <span className="text-primary">John Smith</span>
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-gray-600 leading-relaxed">
              Full-Stack Software Engineer specializing in modern web technologies and cloud architecture
            </p>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl">
              I build scalable applications and robust systems that solve real-world problems. With expertise in React, Node.js, and AWS, I transform ideas into high-performance digital solutions.
            </p>
            
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="px-8 py-4 text-base font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 text-base font-medium rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-xl shadow-2xl lg:max-w-md">
              <div className="aspect-square bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <div className="text-white text-6xl">
                  <i className="fas fa-user-tie"></i>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white shadow-lg">
                <Code className="text-xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
                <Laptop className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
