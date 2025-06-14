import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  category: string;
  fullDescription?: string;
  images?: string[];
  liveUrl?: string;
  sourceUrl?: string;
  challenges?: string;
  outcomes?: string;
}

interface ProjectsSectionProps {
  projects?: Project[];
}

const ProjectsSection = ({ projects = [] }: ProjectsSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // Default projects if none are provided
  const defaultProjects: Project[] = [
    {
      id: "1",
      title: "E-commerce Platform",
      description:
        "A fully responsive e-commerce platform with cart functionality and payment integration.",
      thumbnail:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      fullDescription:
        "A comprehensive e-commerce solution built with modern technologies. Features include user authentication, product filtering, cart management, and secure payment processing.",
      images: [
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      ],
      liveUrl: "https://example.com",
      sourceUrl: "https://github.com/example",
      challenges:
        "Implementing a secure payment system and optimizing performance for mobile devices.",
      outcomes:
        "Increased conversion rate by 25% and reduced cart abandonment by 30%.",
    },
    {
      id: "2",
      title: "Task Management App",
      description:
        "A productivity app for managing tasks with drag-and-drop functionality.",
      thumbnail:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
      technologies: ["React", "TypeScript", "Firebase"],
      category: "mobile",
      fullDescription:
        "A task management application that helps users organize their work efficiently. Features include task categorization, due dates, reminders, and progress tracking.",
      images: [
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      ],
      liveUrl: "https://example.com/task-app",
      sourceUrl: "https://github.com/example/task-app",
      challenges:
        "Implementing real-time updates and ensuring data consistency across devices.",
      outcomes: "Achieved 10,000+ downloads and 4.8/5 rating on app stores.",
    },
    {
      id: "3",
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects and skills.",
      thumbnail:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      category: "web",
      fullDescription:
        "A modern portfolio website built with React and Tailwind CSS. Features smooth animations, responsive design, and optimized performance.",
      images: [
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      ],
      liveUrl: "https://example.com/portfolio",
      sourceUrl: "https://github.com/example/portfolio",
      challenges:
        "Creating a unique design that stands out while maintaining excellent performance.",
      outcomes:
        "Received positive feedback from potential employers and increased interview requests.",
    },
    {
      id: "4",
      title: "Weather Dashboard",
      description:
        "A weather application with real-time updates and forecasts.",
      thumbnail:
        "https://images.unsplash.com/photo-1530908295418-a12e326966ba?w=800&q=80",
      technologies: ["JavaScript", "Weather API", "CSS"],
      category: "web",
      fullDescription:
        "A weather dashboard that provides current conditions and forecasts for locations worldwide. Features include search by location, saved favorites, and detailed weather data.",
      images: [
        "https://images.unsplash.com/photo-1530908295418-a12e326966ba?w=800&q=80",
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      ],
      liveUrl: "https://example.com/weather",
      sourceUrl: "https://github.com/example/weather",
      challenges:
        "Handling API rate limits and displaying complex weather data in a user-friendly way.",
      outcomes: "Used by over 5,000 users daily for weather updates.",
    },
    {
      id: "5",
      title: "Fitness Tracker",
      description: "A mobile app for tracking workouts and fitness progress.",
      thumbnail:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
      technologies: ["React Native", "Redux", "Health API"],
      category: "mobile",
      fullDescription:
        "A comprehensive fitness tracking application that helps users monitor their workouts, nutrition, and progress. Features include custom workout plans, progress charts, and social sharing.",
      images: [
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
      ],
      liveUrl: "https://example.com/fitness",
      sourceUrl: "https://github.com/example/fitness",
      challenges:
        "Integrating with health APIs and ensuring accurate data tracking across different devices.",
      outcomes:
        "Helped users achieve their fitness goals with a 35% increase in workout consistency.",
    },
    {
      id: "6",
      title: "Data Visualization Dashboard",
      description:
        "An interactive dashboard for visualizing complex data sets.",
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      technologies: ["D3.js", "React", "Node.js"],
      category: "data",
      fullDescription:
        "A powerful data visualization tool that transforms complex datasets into intuitive, interactive charts and graphs. Features include customizable views, data filtering, and export options.",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80",
      ],
      liveUrl: "https://example.com/dashboard",
      sourceUrl: "https://github.com/example/dashboard",
      challenges:
        "Optimizing performance with large datasets and creating intuitive user interactions.",
      outcomes: "Reduced data analysis time by 40% for business users.",
    },
  ];

  const projectsToDisplay = projects.length > 0 ? projects : defaultProjects;

  // Extract unique categories
  const categories = [
    "all",
    ...new Set(projectsToDisplay.map((project) => project.category)),
  ];

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "all"
      ? projectsToDisplay
      : projectsToDisplay.filter(
          (project) => project.category === selectedCategory,
        );

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work across various domains and technologies.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <ProjectCard
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            </motion.div>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-10">
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={modalOpen}
            onClose={closeModal}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
