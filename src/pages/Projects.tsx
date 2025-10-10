import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "3D Portfolio Website",
    description: "Interactive portfolio with Three.js animations and particle effects",
    tech: ["React", "Three.js", "Framer Motion"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack online store with payment integration and admin dashboard",
    tech: ["Next.js", "TypeScript", "Stripe"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "AI Chat Application",
    description: "Real-time chat app with AI-powered responses and sentiment analysis",
    tech: ["React", "Node.js", "OpenAI"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates",
    tech: ["React", "Firebase", "Tailwind"],
    gradient: "from-orange-500 to-red-500",
  },
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <PageTransition>
      <div className="relative min-h-screen pt-32 pb-20">
        <ParticleBackground />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl font-bold gradient-text mb-4 text-center">
              Featured Projects
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-16">
              Showcasing my latest work and experiments
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="glass-strong p-8 h-full relative overflow-hidden cursor-pointer">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    <div className="relative z-10">
                      <div className="mb-6">
                        <div className={`h-40 rounded-lg bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                      </div>

                      <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full glass border border-primary/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <Button
                          size="sm"
                          className="bg-primary/20 hover:bg-primary/30 group/btn"
                        >
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                          Live Demo
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-primary/30 hover:bg-primary/10 group/btn"
                        >
                          <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                          Code
                        </Button>
                      </div>
                    </div>

                    <motion.div
                      animate={{
                        scale: hoveredId === project.id ? 1.1 : 1,
                        opacity: hoveredId === project.id ? 0.3 : 0,
                      }}
                      className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${project.gradient} blur-3xl`}
                    />
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
