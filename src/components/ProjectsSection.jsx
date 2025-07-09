import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { EnhancedButton } from "./ui/enhanced-button";
import { EnhancedTooltip } from "./ui/enhanced-tooltip";

const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/src/assets/projects/portfolio.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "MedicalQ",
    description:
      "Think of it as Quora meets Reddit for Health, powered by verified doctors, real medical data, and AI-driven support",
    image: "/src/assets/projects/medicalq.png",
    tags: ["TypeScript", "React", "Node.js", "TailwindCSS", "Express.js", "MongoDB", "OpenAI", "Firebase"],
    demoUrl: "https://medicalq.vercel.app",
    githubUrl: "https://github.com/abhinav-phi/MedicalQ",
  },
    {
    id: 3,
    title: "CarbonTrack",
    description:
      "A powerful yet minimal carbon footprint tracking platform built for sustainability-focused individuals and organizations.",
    image: "/src/assets/projects/carbontrack.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "https://carbontrack-hackathon-r1.vercel.app/",
    githubUrl: "https://github.com/abhinav-phi/carbontrack-hackathonR1",
  },
    {
    id: 4,
    title: "CF Helper Tool",
    description:
      "A Chrome extension that helps you solve Codeforces problems using AI like GPT-4, Claude, or Gemini. Get solutions in C++, Python, Java, and more with explanations in English or Hinglish.",
    image: "/src/assets/projects/CF_helper.png",
    tags: ["Javascript", "Chrome Extension", "OpenAI", "Claude", "Gemini"],
    demoUrl: "#",
    githubUrl: "https://github.com/abhinav-phi/CF-Helper-Tool",
  },
  {
    id: 5,
    title: "ToUndo App",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/src/assets/projects/toundo.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "https://toundo-app.vercel.app/",
    githubUrl: "https://github.com/abhinav-phi/to-undo-app",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group glass-effect rounded-xl overflow-hidden shadow-lg card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary/70 text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200 enhanced-hover"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <EnhancedTooltip content="View Live Demo">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-secondary/70 text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 enhanced-hover"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </EnhancedTooltip>
                    
                    <EnhancedTooltip content="View Source Code">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-secondary/70 text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 enhanced-hover"
                      >
                        <Github size={18} />
                      </a>
                    </EnhancedTooltip>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <EnhancedButton asChild className="flex items-center mx-auto gap-2">
            <a
              target="_blank"
              href="https://github.com/abhinav-phi"
              rel="noopener noreferrer"
            >
              Check My Github <ArrowRight size={16} />
            </a>
          </EnhancedButton>
        </div>
      </div>
    </section>
  );
};