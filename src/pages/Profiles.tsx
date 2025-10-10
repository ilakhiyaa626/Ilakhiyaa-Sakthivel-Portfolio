import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Code2, Trophy, ExternalLink } from "lucide-react";

const profiles = [
  {
    id: 1,
    name: "GitHub",
    icon: Github,
    stats: "500+ Contributions",
    description: "Open source projects and code repositories",
    gradient: "from-purple-500 to-pink-500",
    url: "#",
  },
  {
    id: 2,
    name: "LeetCode",
    icon: Code2,
    stats: "1500+ Problems Solved",
    description: "Algorithm challenges and competitive programming",
    gradient: "from-orange-500 to-yellow-500",
    url: "#",
  },
  {
    id: 3,
    name: "Codeforces",
    icon: Trophy,
    stats: "Expert Rating",
    description: "Competitive programming contests",
    gradient: "from-blue-500 to-cyan-500",
    url: "#",
  },
  {
    id: 4,
    name: "HackerRank",
    icon: Code2,
    stats: "5⭐ in Problem Solving",
    description: "Coding challenges and certifications",
    gradient: "from-green-500 to-emerald-500",
    url: "#",
  },
];

const Profiles = () => {
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
              Coding Profiles
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-16">
              My presence across coding platforms
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {profiles.map((profile, index) => {
                const Icon = profile.icon;
                return (
                  <motion.div
                    key={profile.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="glass-strong p-8 h-full group cursor-pointer hover:neon-glow transition-all duration-300 relative overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${profile.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-6">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${profile.gradient} flex items-center justify-center`}
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </motion.div>

                          <Button
                            size="sm"
                            variant="ghost"
                            className="group/btn"
                          >
                            <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                          </Button>
                        </div>

                        <h3 className="text-3xl font-bold mb-2 group-hover:gradient-text transition-all">
                          {profile.name}
                        </h3>

                        <div className="text-xl font-semibold text-primary mb-4">
                          {profile.stats}
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {profile.description}
                        </p>
                      </div>

                      <motion.div
                        className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${profile.gradient} blur-2xl opacity-0 group-hover:opacity-30 transition-opacity`}
                      />
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Profiles;
