import {
  Code2,
  Database,
  Palette,
  Zap,
  Layout,
  Server,
} from "lucide-react";

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      icon: <Layout className="w-6 h-6" />,
      skills: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
    },
    {
      name: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: ["Node.js", "Express", "Python", "REST APIs", "Authentication", "Server Architecture"],
    },
    {
      name: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Data Design", "Query Optimization"],
    },
    {
      name: "Tools & DevOps",
      icon: <Zap className="w-6 h-6" />,
      skills: ["Git", "GitHub", "Docker", "VS Code", "Postman", "CI/CD"],
    },
    {
      name: "Design",
      icon: <Palette className="w-6 h-6" />,
      skills: ["Figma", "UI Design", "UX Principles", "Responsive Design", "Accessibility", "Prototyping"],
    },
    {
      name: "Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            I've developed a diverse skill set across frontend, backend, and
            design, with a focus on building scalable and user-friendly
            applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Icon & Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/20 text-primary group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 group-hover:bg-muted transition-colors duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-cyan"></div>
                    <span className="text-foreground font-medium text-sm">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">6+</div>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">1+</div>
            <p className="text-muted-foreground">Years of Experience</p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">20+</div>
            <p className="text-muted-foreground">Technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
}
