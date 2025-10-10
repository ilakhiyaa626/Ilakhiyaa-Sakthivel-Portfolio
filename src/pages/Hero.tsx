import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Scene3D } from "@/components/Scene3D";
import { AnimatedText } from "@/components/AnimatedText";
import { PageTransition } from "@/components/PageTransition";

const Hero = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />

        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

        <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-20">
          <Scene3D />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-7xl md:text-9xl font-bold gradient-text mb-4">
                John Doe
              </h1>
            </motion.div>

            <AnimatedText
              text="Creative Developer & Designer Building Immersive Digital Experiences"
              className="text-2xl md:text-3xl text-muted-foreground mb-12"
              delay={0.5}
            />

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link to="/projects">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-secondary to-accent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="glass border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </motion.div>

            {/* Floating skill icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            >
              {["React", "TypeScript", "Three.js", "Node.js"].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="glass-strong p-6 rounded-xl text-center hover:neon-glow transition-all duration-300 cursor-pointer"
                >
                  <div className="text-xl font-semibold gradient-text">{skill}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Hero;
