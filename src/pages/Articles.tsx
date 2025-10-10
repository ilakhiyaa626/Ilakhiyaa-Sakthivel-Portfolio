import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Building Immersive 3D Experiences with Three.js",
    excerpt: "Learn how to create stunning 3D graphics and animations for the web using Three.js and React Three Fiber.",
    date: "2024-03-15",
    readTime: "8 min read",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Mastering Framer Motion Animations",
    excerpt: "A comprehensive guide to creating smooth, professional animations with Framer Motion in React applications.",
    date: "2024-03-10",
    readTime: "6 min read",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Performance Optimization in React Apps",
    excerpt: "Best practices and techniques for building lightning-fast React applications that scale.",
    date: "2024-03-05",
    readTime: "10 min read",
    gradient: "from-green-500 to-emerald-500",
  },
];

const Articles = () => {
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
              Featured Articles
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-16">
              Thoughts and tutorials on web development
            </p>

            <div className="max-w-4xl mx-auto space-y-8">
              {articles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="glass-strong p-8 group cursor-pointer hover:neon-glow transition-all duration-300 relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-3xl font-bold mb-4 group-hover:gradient-text transition-all">
                        {article.title}
                      </h3>

                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {article.excerpt}
                      </p>

                      <Button
                        variant="ghost"
                        className="group/btn hover:bg-primary/10"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                      </Button>
                    </div>

                    <motion.div
                      className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${article.gradient} blur-3xl opacity-0 group-hover:opacity-30 transition-opacity`}
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

export default Articles;
