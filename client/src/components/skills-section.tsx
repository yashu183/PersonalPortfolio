import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "fab fa-react",
      bgColor: "from-blue-500 to-blue-600",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
      ],
    },
    {
      title: "Backend",
      icon: "fas fa-server",
      bgColor: "from-green-500 to-green-600",
      skills: [
        { name: "Node.js", level: 93 },
        { name: "Python", level: 88 },
        { name: "Express.js", level: 90 },
        { name: "GraphQL", level: 80 },
      ],
    },
    {
      title: "Database & Cloud",
      icon: "fas fa-database",
      bgColor: "from-purple-500 to-purple-600",
      skills: [
        { name: "AWS", level: 87 },
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Docker", level: 83 },
      ],
    },
    {
      title: "Tools & Others",
      icon: "fas fa-tools",
      bgColor: "from-orange-500 to-orange-600",
      skills: [
        { name: "Git", level: 95 },
        { name: "Jest", level: 88 },
        { name: "Webpack", level: 82 },
        { name: "CI/CD", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I work with modern technologies to build robust, scalable applications. Here are the tools and languages I use to bring ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                  <i className={`${category.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 text-sm">{skill.name}</span>
                        <span className="text-gray-500 text-xs">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
