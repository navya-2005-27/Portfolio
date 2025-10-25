import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const roles = ["Developer", "Designer", "Problem Solver"];

export default function Hero() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/navya-2005-27",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/navya-n-43242529b",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:navya200527@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in">
            {/* Greeting */}
            <div className="flex items-center gap-2">
              <span className="text-3xl">👋</span>
              <p className="text-primary font-semibold">Hey there! Welcome to my portfolio</p>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                I'm <span className="gradient-text">Navya N</span>
              </h1>
              <div className="h-12 flex items-center">
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  <span className="inline-block">
                    <span className="gradient-text font-bold">
                      Computer Science Student
                    </span>
                  </span>
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              Passionate about web development and creating beautiful, responsive applications.
              I love learning new technologies and building projects that solve real problems with clean,
              efficient code.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass rounded-xl p-4">
                <div className="text-2xl font-bold gradient-text">6+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-2xl font-bold gradient-text">Fresher</div>
                <div className="text-sm text-muted-foreground">Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-full bg-gradient-cyan text-background font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 group"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full glass glass-hover font-semibold flex items-center gap-2"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-muted-foreground text-sm">Connect:</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass rounded-full p-3 glass-hover group"
                      title={social.label}
                    >
                      <Icon className="w-5 h-5 text-primary group-hover:text-primary transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Floating Cards */}
          <div className="hidden md:flex items-center justify-center relative h-96">
            {/* Avatar Container */}
            <div className="relative">
              {/* Main Profile Card */}
              <div className="glass rounded-2xl p-8 w-64 h-80 flex flex-col items-center justify-center relative z-10 animate-float">
                <div className="w-32 h-32 rounded-full bg-gradient-cyan/20 flex items-center justify-center text-5xl mb-4">
                  👩‍💻
                </div>
                <h3 className="text-center font-bold text-lg">
                  CS Student <br /> Developer
                </h3>
              </div>

              {/* Floating Tag 1 - Python */}
              <div className="absolute top-0 right-0 glass rounded-xl px-4 py-2 text-sm whitespace-nowrap animate-float"
                style={{ animationDelay: "0.2s" }}>
                <span className="gradient-text font-semibold">Python</span>
              </div>

              {/* Floating Tag 2 - Java */}
              <div className="absolute bottom-0 left-0 glass rounded-xl px-4 py-2 text-sm whitespace-nowrap animate-float"
                style={{ animationDelay: "0.4s" }}>
                <span className="gradient-text font-semibold">Java</span>
              </div>

              {/* Floating Tag 3 - HTML */}
              <div className="absolute top-16 left-0 glass rounded-xl px-4 py-2 text-sm whitespace-nowrap animate-float"
                style={{ animationDelay: "0.6s" }}>
                <span className="gradient-text font-semibold">HTML</span>
              </div>

              {/* Floating Tag 4 - CSS */}
              <div className="absolute bottom-12 right-10 glass rounded-xl px-4 py-2 text-sm whitespace-nowrap animate-float"
                style={{ animationDelay: "0.8s" }}>
                <span className="gradient-text font-semibold">CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
