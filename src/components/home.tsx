import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import ProjectsSection from "./ProjectsSection";
import ContactForm from "./ContactForm";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("hero");

  // Mock data for skills
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "CSS/Tailwind", level: 85 },
    { name: "UI/UX Design", level: 70 },
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Portfolio</div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#hero"
              className="hover:text-primary transition-colors"
              onClick={() => setActiveSection("hero")}
            >
              Home
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
              onClick={() => setActiveSection("projects")}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-primary transition-colors"
              onClick={() => setActiveSection("skills")}
            >
              Skills
            </a>
            <a
              href="#about"
              className="hover:text-primary transition-colors"
              onClick={() => setActiveSection("about")}
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-primary transition-colors"
              onClick={() => setActiveSection("contact")}
            >
              Contact
            </a>
          </div>
          <Button variant="outline" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen flex items-center"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeIn}
              className="w-full md:w-1/2 order-2 md:order-1"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-primary">Alex Johnson</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
                Full Stack Developer
              </h2>
              <p className="text-lg mb-8">
                I build exceptional digital experiences with modern
                technologies. Focused on creating intuitive, accessible, and
                performant web applications.
              </p>
              <div className="flex gap-4">
                <Button size="lg">
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Download CV
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="w-full md:w-1/2 order-1 md:order-2 flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl"></div>
                <Avatar className="w-64 h-64 border-4 border-background">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
                    alt="Profile"
                  />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                My Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A showcase of my recent work, personal projects, and
                contributions.
              </p>
            </motion.div>
            <ProjectsSection />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Skills & Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Technologies and tools I work with to bring ideas to life.
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Tabs defaultValue="technical" className="max-w-3xl mx-auto">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="technical">Technical Skills</TabsTrigger>
                  <TabsTrigger value="soft">Soft Skills</TabsTrigger>
                </TabsList>
                <TabsContent value="technical" className="mt-8">
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="soft" className="mt-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      "Communication",
                      "Problem Solving",
                      "Teamwork",
                      "Adaptability",
                      "Time Management",
                      "Leadership",
                    ].map((skill, index) => (
                      <Card
                        key={index}
                        className="bg-background border-primary/10 hover:border-primary/30 transition-colors"
                      >
                        <CardContent className="p-6 text-center">
                          <h3 className="font-medium">{skill}</h3>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row gap-8 md:gap-16 items-center"
          >
            <motion.div variants={fadeIn} className="w-full md:w-1/2">
              <div className="relative rounded-lg overflow-hidden aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="About me"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <p className="text-lg mb-4">
                I'm a passionate full-stack developer with over 5 years of
                experience building web applications. My journey in tech started
                when I built my first website at 15, and I've been hooked ever
                since.
              </p>
              <p className="text-lg mb-6">
                I specialize in React, TypeScript, and Node.js, with a strong
                focus on creating accessible, performant, and visually appealing
                user interfaces. I'm constantly learning new technologies and
                methodologies to improve my craft.
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <p className="mb-1">
                  <span className="font-medium">BSc in Computer Science</span> -
                  Tech University
                </p>
                <p className="text-muted-foreground">2015 - 2019</p>
              </div>
              <Button>
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind or want to discuss opportunities? Feel
                free to reach out!
              </p>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <motion.div variants={fadeIn} className="w-full md:w-1/2">
                <ContactForm />
              </motion.div>
              <motion.div variants={fadeIn} className="w-full md:w-1/2">
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold mb-6">
                        Contact Information
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-primary" />
                          <span>alex.johnson@example.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-5 w-5 flex items-center justify-center text-primary">
                            📍
                          </div>
                          <span>San Francisco, CA</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h4 className="text-lg font-medium mb-4">
                        Connect with me
                      </h4>
                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full"
                        >
                          <Linkedin className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full"
                        >
                          <Github className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full"
                        >
                          <Twitter className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Alex Johnson. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
