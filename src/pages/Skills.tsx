import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Card } from "@/components/ui/card";

const skills = [
  { name: "React", level: 95, color: "from-cyan-500 to-blue-500" },
  { name: "TypeScript", level: 90, color: "from-blue-500 to-indigo-500" },
  { name: "Three.js", level: 85, color: "from-purple-500 to-pink-500" },
  { name: "Node.js", level: 88, color: "from-green-500 to-emerald-500" },
  { name: "Framer Motion", level: 92, color: "from-pink-500 to-rose-500" },
  { name: "Tailwind CSS", level: 93, color: "from-teal-500 to-cyan-500" },
];

const Skills = () => {
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
              Skills & Expertise
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-16">
              Technologies I work with
            </p>

            <div className="max-w-4xl mx-auto space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="glass-strong p-8 hover:neon-glow transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold group-hover:gradient-text transition-all">
                        {skill.name}
                      </h3>
                      <span className="text-2xl font-bold text-primary">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="relative h-4 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${skill.color} relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-16 text-center"
            >
              <Card className="glass-strong p-12 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold gradient-text mb-6">
                  Always Learning
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm constantly exploring new technologies and improving my skills.
                  Currently diving deeper into WebGL, shader programming, and advanced
                  React patterns to create even more immersive web experiences.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;
