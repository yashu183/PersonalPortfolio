import { GraduationCap, Briefcase, MapPin, Building, Rocket } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">About Me</h2>
              <div className="w-20 h-1 bg-primary mx-auto lg:mx-0 mb-8"></div>
            </div>
            
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="mb-6">
                I'm a passionate software engineer with over 5 years of experience building scalable web applications and distributed systems. My journey started with a Computer Science degree from Stanford University, and I've since worked with innovative startups and established tech companies.
              </p>
              
              <p className="mb-6">
                I specialize in full-stack development using modern technologies like React, Node.js, Python, and cloud platforms. I'm particularly passionate about creating clean, maintainable code and solving complex technical challenges.
              </p>
              
              <p className="mb-8">
                When I'm not coding, you can find me contributing to open-source projects, mentoring junior developers, or exploring the latest trends in technology and software architecture.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-gray-50 rounded-lg px-4 py-2">
                <GraduationCap className="text-primary mr-3 h-5 w-5" />
                <span className="font-medium">CS @ Stanford</span>
              </div>
              <div className="flex items-center bg-gray-50 rounded-lg px-4 py-2">
                <Briefcase className="text-primary mr-3 h-5 w-5" />
                <span className="font-medium">5+ Years Experience</span>
              </div>
              <div className="flex items-center bg-gray-50 rounded-lg px-4 py-2">
                <MapPin className="text-primary mr-3 h-5 w-5" />
                <span className="font-medium">San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">Experience Highlights</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Building className="text-white h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-secondary">Senior Software Engineer</h4>
                    <p className="text-accent font-medium">TechCorp Inc. • 2021 - Present</p>
                    <p className="text-gray-600 mt-2">Led development of microservices architecture serving 1M+ users</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Rocket className="text-white h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-secondary">Full-Stack Developer</h4>
                    <p className="text-accent font-medium">StartupXYZ • 2019 - 2021</p>
                    <p className="text-gray-600 mt-2">Built scalable web applications from concept to production</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center">
                    <i className="fas fa-code text-white"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-secondary">Software Engineer</h4>
                    <p className="text-accent font-medium">DevCompany • 2018 - 2019</p>
                    <p className="text-gray-600 mt-2">Developed REST APIs and database optimization solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
