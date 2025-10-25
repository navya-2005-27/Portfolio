import { ExternalLink, Github } from "lucide-react";

interface Project {
  name: string;
  description: string;
  github: string;
  live?: string;
  tags: string[];
  image?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      name: "BGSIT Hostel Management",
      description:
        "A comprehensive hostel management system for student accommodation, featuring room allocation, complaint tracking, and admin dashboard.",
      github: "https://github.com/navya-2005-27/Bgsit-Hostel-Management",
      live: "https://genuine-moonbeam-4ea567.netlify.app/",
      tags: ["TypeScript", "React", "Tailwind", "Management System"],
      image: "🏢",
    },
    {
      name: "NammaRaitha",
      description:
        "A farmer support platform designed to help farmers with crop guidance, market rates, and agricultural resources.",
      github: "https://github.com/navya-2005-27/NammaRaitha",
      tags: ["TypeScript", "Full Stack", "Agriculture"],
      image: "🌾",
    },
    {
      name: "Digital Healthcare",
      description:
        "A healthcare application for managing patient records, appointments, and medical consultations online.",
      github: "https://github.com/navya-2005-27/digital_healthcare",
      live: "https://digital-healthcare-sooty.vercel.app",
      tags: ["Healthcare", "React", "Patient Management"],
      image: "🏥",
    },
    {
      name: "Translator Hub",
      description:
        "A multilingual translation tool supporting speech-to-text translation, animal voice translation, and storybook conversion.",
      github: "https://github.com/navya-2005-27/Translator-hub",
      tags: ["HTML", "JavaScript", "Translation", "Speech-to-Text"],
      image: "🗣️",
    },
    {
      name: "Study Tracker",
      description:
        "An education management tool to help students track study progress, create schedules, and monitor academic performance.",
      github: "https://github.com/navya-2005-27/Study-Tracker",
      tags: ["HTML", "JavaScript", "Study Tools"],
      image: "📚",
    },
    {
      name: "Student Performance Tracker",
      description:
        "A data analytics tool for tracking and analyzing student academic performance with detailed reports and insights.",
      github: "https://github.com/navya-2005-27/Student-Performance-Tracker-",
      tags: ["Python", "Data Analysis", "Education"],
      image: "📊",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A selection of projects I've built, showcasing my skills in web
            development, full-stack applications, and problem solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex flex-col h-full animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Icon */}
              <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                  {project.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg glass-hover text-sm font-medium group/link"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-cyan text-background text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 group/link"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/navya-2005-27"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass glass-hover font-semibold group"
          >
            View All Projects
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
