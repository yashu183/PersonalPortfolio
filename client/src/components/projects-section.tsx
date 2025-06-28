import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React frontend, Node.js backend, and PostgreSQL database. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["Next.js", "Socket.io", "MongoDB", "Redis"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with interactive data visualizations, custom reporting, and API integrations. Handles large datasets with optimized performance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["Python", "Django", "Chart.js", "AWS"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Mobile Finance App",
      description: "Cross-platform mobile application for personal finance management with budget tracking, expense categorization, and financial insights powered by AI.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["React Native", "Express", "Firebase", "ML Kit"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Microservices API",
      description: "Scalable microservices architecture with Docker containerization, API gateway, load balancing, and comprehensive monitoring solutions.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["Docker", "Kubernetes", "GraphQL", "AWS"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content generation platform using natural language processing to create articles, summaries, and marketing copy with custom fine-tuning capabilities.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["Python", "TensorFlow", "FastAPI", "OpenAI"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  const techColors: Record<string, string> = {
    React: "bg-blue-100 text-blue-800",
    "Node.js": "bg-green-100 text-green-800",
    PostgreSQL: "bg-purple-100 text-purple-800",
    Stripe: "bg-orange-100 text-orange-800",
    "Next.js": "bg-blue-100 text-blue-800",
    "Socket.io": "bg-yellow-100 text-yellow-800",
    MongoDB: "bg-green-100 text-green-800",
    Redis: "bg-red-100 text-red-800",
    Python: "bg-purple-100 text-purple-800",
    Django: "bg-blue-100 text-blue-800",
    "Chart.js": "bg-green-100 text-green-800",
    AWS: "bg-orange-100 text-orange-800",
    "React Native": "bg-cyan-100 text-cyan-800",
    Express: "bg-green-100 text-green-800",
    Firebase: "bg-purple-100 text-purple-800",
    "ML Kit": "bg-yellow-100 text-yellow-800",
    Docker: "bg-blue-100 text-blue-800",
    Kubernetes: "bg-orange-100 text-orange-800",
    GraphQL: "bg-green-100 text-green-800",
    TensorFlow: "bg-yellow-100 text-yellow-800",
    FastAPI: "bg-green-100 text-green-800",
    OpenAI: "bg-blue-100 text-blue-800",
  };

  return (
    <section id="projects" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, system design, and problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover overflow-hidden border border-gray-100">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-secondary">{project.title}</h3>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className={`text-xs font-medium ${techColors[tech] || "bg-gray-100 text-gray-800"}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button className="w-full">
                  View Project
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-4 text-base font-medium rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
