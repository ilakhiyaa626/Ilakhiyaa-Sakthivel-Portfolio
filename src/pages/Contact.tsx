import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Instagram, Send } from "lucide-react";

const socialLinks = [
  { icon: Mail, label: "Email", url: "mailto:john@example.com", color: "from-red-500 to-orange-500" },
  { icon: Linkedin, label: "LinkedIn", url: "#", color: "from-blue-500 to-cyan-500" },
  { icon: Github, label: "GitHub", url: "#", color: "from-purple-500 to-pink-500" },
  { icon: Instagram, label: "Instagram", url: "#", color: "from-pink-500 to-rose-500" },
];

const Contact = () => {
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
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-16">
              Let's create something amazing together
            </p>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Card className="glass-strong p-8">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        placeholder="Your name"
                        className="glass border-primary/30 focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="glass border-primary/30 focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea
                        placeholder="Tell me about your project..."
                        rows={6}
                        className="glass border-primary/30 focus:border-primary resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 group"
                    >
                      Send Message
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </Card>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-8"
              >
                <Card className="glass-strong p-8">
                  <h2 className="text-3xl font-bold gradient-text mb-6">
                    Connect With Me
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    Feel free to reach out through any of these platforms. I'm always
                    excited to collaborate on interesting projects!
                  </p>

                  <div className="space-y-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={social.label}
                          href={social.url}
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                          whileHover={{ scale: 1.05, x: 10 }}
                          className="flex items-center gap-4 p-4 rounded-xl glass hover:glass-strong transition-all group cursor-pointer"
                        >
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </motion.div>

                          <div className="flex-1">
                            <div className="font-semibold text-lg group-hover:gradient-text transition-all">
                              {social.label}
                            </div>
                          </div>

                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            →
                          </motion.div>
                        </motion.a>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
