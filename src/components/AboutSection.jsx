import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { EnhancedButton } from "./ui/enhanced-button";

export const AboutSection = () => {
  return (
    <AnimatedSection>
      <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold">
                Passionate Web Developer & Tech Creator
              </h3>

              <p className="text-muted-foreground">
                With over 5 years of experience in web development, I specialize
                in creating responsive, accessible, and performant web
                applications using modern technologies.
              </p>

              <p className="text-muted-foreground">
                I'm passionate about creating elegant solutions to complex
                problems, and I'm constantly learning new technologies and
                techniques to stay at the forefront of the ever-evolving web
                landscape.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <EnhancedButton asChild>
                  <a href="#contact">Get In Touch</a>
                </EnhancedButton>

                <EnhancedButton variant="outline" asChild>
                  <a href="">Download CV</a>
                </EnhancedButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6"
            >
              {[
                {
                  icon: Code,
                  title: "Web Development",
                  description: "Creating responsive websites and web applications with modern frameworks.",
                },
                {
                  icon: User,
                  title: "UI/UX Design",
                  description: "Designing intuitive user interfaces and seamless user experiences.",
                },
                {
                  icon: Briefcase,
                  title: "Project Management",
                  description: "Leading projects from conception to completion with agile methodologies.",
                },
              ].map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="gradient-border p-6 card-hover glass-effect cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="p-3 rounded-full bg-primary/10 enhanced-hover"
                      >
                        <IconComponent className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div className="text-left">
                        <h4 className="font-semibold text-lg">{service.title}</h4>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};