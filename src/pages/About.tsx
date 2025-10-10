import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Card } from "@/components/ui/card";

const About = () => {
  const timeline = [
    { year: "2024", title: "Senior Full-Stack Developer", company: "Tech Corp" },
    { year: "2022", title: "Frontend Developer", company: "Digital Agency" },
    { year: "2020", title: "Junior Developer", company: "StartUp Inc" },
    { year: "2019", title: "Computer Science Degree", company: "University" },
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen pt-32 pb-20">
        <ParticleBackground />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-6xl font-bold gradient-text mb-12 text-center">
              About Me
            </h1>

            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="text-8xl">👨‍💻</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col justify-center"
              >
                <h2 className="text-3xl font-bold mb-6 gradient-text">
                  Creative Developer & Designer
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Passionate about creating beautiful, interactive web experiences that push
                  the boundaries of what's possible in the browser.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Specializing in React, Three.js, and modern web technologies, I bring ideas
                  to life with stunning visuals and smooth animations.
                </p>
              </motion.div>
            </div>

            <div className="mb-12">
              <h2 className="text-4xl font-bold gradient-text mb-8 text-center">
                Journey Timeline
              </h2>

              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  >
                    <Card className="glass-strong p-6 hover:neon-glow transition-all duration-300 cursor-pointer group">
                      <div className="flex items-center gap-6">
                        <div className="text-4xl font-bold text-primary group-hover:scale-110 transition-transform">
                          {item.year}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                          <p className="text-muted-foreground">{item.company}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
