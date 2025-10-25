import { Download, Award, BookOpen, Code2 } from "lucide-react";

export default function Resume() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Your University",
      period: "2022 - Present",
      details:
        "Pursuing a degree with focus on full-stack development and web technologies.",
    },
  ];

  const certifications = [
    {
      name: "Web Development Fundamentals",
      issuer: "Online Platform",
      date: "2024",
    },
    {
      name: "Responsive Web Design",
      issuer: "Online Platform",
      date: "2024",
    },
    {
      name: "JavaScript Programming",
      issuer: "Online Platform",
      date: "2024",
    },
  ];

  const downloadCV = () => {
    // Create a simple resume download
    const resumeContent = `
NAVYA N
navya200527@gmail.com | GitHub: navya-2005-27
LinkedIn: https://www.linkedin.com/in/navya-n-43242529b

OBJECTIVE
Aspiring Computer Science student passionate about web development and building responsive applications.
Eager to gain practical experience and contribute to innovative projects.

EDUCATION
Bachelor of Science in Computer Science
Your University | 2022 - Present

TECHNICAL SKILLS
Languages: Python, Java, HTML, CSS, JavaScript, TypeScript
Frontend: React, Tailwind CSS, Responsive Design
Backend: Express.js, Node.js
Databases: MongoDB, PostgreSQL, MySQL
Tools: Git, GitHub, Docker, VS Code
Other: REST APIs, Figma, Web Design

PROJECTS
1. BGSIT Hostel Management System
   - Hostel management platform with room allocation and complaint tracking
   - Technologies: TypeScript, React, Tailwind CSS

2. NammaRaitha - Farmer Support Platform
   - Agricultural guidance and market rate information system
   - Technologies: TypeScript, Full Stack

3. Digital Healthcare
   - Healthcare application for patient records and consultations
   - Technologies: React, Patient Management System

4. Translator Hub
   - Multilingual translation tool with speech-to-text capabilities
   - Technologies: HTML, JavaScript, Translation APIs

5. Study Tracker
   - Student study progress tracking and scheduling tool
   - Technologies: HTML, JavaScript

6. Student Performance Tracker
   - Data analytics tool for academic performance analysis
   - Technologies: Python, Data Analysis

CERTIFICATIONS & ACHIEVEMENTS
- Web Development Fundamentals (2024)
- Responsive Web Design Certification (2024)
- JavaScript Programming Course (2024)

INTERESTS
Web Development, Problem Solving, UI/UX Design, Open Source Contribution

LANGUAGES
English (Fluent), Hindi (Native)
    `;

    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(resumeContent),
    );
    element.setAttribute("download", "Navya_N_Resume.txt");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section
      id="resume"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Download my resume to learn more about my education, skills, and
            projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Download Card */}
          <div className="lg:row-span-2 flex flex-col justify-start">
            <div className="glass rounded-2xl p-8 sticky top-32 animate-slide-in">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-gradient-cyan/20 flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Download CV</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Get a complete overview of my qualifications and experience
                  </p>
                </div>
                <button
                  onClick={downloadCV}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-cyan text-background font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  Download Resume
                </button>
                <p className="text-xs text-muted-foreground">
                  Updated: {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div
            className="space-y-4 animate-slide-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/20 text-primary">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            {education.map((edu, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                    🎓
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-primary text-sm font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground text-sm mb-2">
                      {edu.period}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {edu.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div
            className="space-y-4 animate-slide-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/20 text-primary">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>

            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                    ✓
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-primary text-xs font-medium">
                      {cert.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div
          className="mt-16 glass rounded-2xl p-8 animate-slide-in"
          style={{ animationDelay: "0.3s" }}
        >
          <h3 className="text-2xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Python",
              "Java",
              "JavaScript",
              "TypeScript",
              "HTML/CSS",
              "React",
              "Express.js",
              "Databases",
              "Responsive Design",
              "Git & GitHub",
              "Problem Solving",
              "Web Development",
            ].map((skill) => (
              <div
                key={skill}
                className="px-4 py-3 rounded-lg bg-muted/50 text-center hover:bg-primary/20 hover:text-primary transition-all duration-300 group cursor-pointer"
              >
                <span className="font-semibold text-sm group-hover:font-bold">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
