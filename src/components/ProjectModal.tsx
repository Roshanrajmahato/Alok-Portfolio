import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink, Github, ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  project?: {
    id: string;
    title: string;
    description: string;
    fullDescription?: string;
    technologies: string[];
    challenges?: string;
    outcomes?: string;
    images: string[];
    liveUrl?: string;
    sourceUrl?: string;
  };
}

const ProjectModal = ({
  isOpen = true,
  onClose = () => {},
  project = {
    id: "1",
    title: "E-commerce Platform",
    description:
      "A full-featured online shopping platform with cart, checkout, and payment processing",
    fullDescription:
      "This project is a comprehensive e-commerce solution built with React, Node.js, and MongoDB. It features user authentication, product catalog with filtering and search, shopping cart functionality, secure checkout process with Stripe integration, order history, and an admin dashboard for product and order management.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe API",
      "Redux",
      "Tailwind CSS",
    ],
    challenges:
      "Implementing a secure payment gateway and optimizing performance for large product catalogs were the main challenges. I solved these by using proper indexing strategies and implementing lazy loading for product images.",
    outcomes:
      "The platform increased sales by 35% for the client and improved user engagement metrics with a 25% lower bounce rate compared to their previous solution.",
    images: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      "https://images.unsplash.com/photo-1491897554428-130a60dd4757?w=800&q=80",
      "https://images.unsplash.com/photo-1600267185393-e158a98703de?w=800&q=80",
    ],
    liveUrl: "https://example.com/project",
    sourceUrl: "https://github.com/username/project",
  },
}: ProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-base text-gray-500">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="my-6">
          <Carousel className="w-full">
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-[300px] object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Project Details</h3>
            <p className="text-gray-700">{project.fullDescription}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {project.challenges && (
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Challenges & Solutions
              </h3>
              <p className="text-gray-700">{project.challenges}</p>
            </div>
          )}

          {project.outcomes && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Outcomes</h3>
              <p className="text-gray-700">{project.outcomes}</p>
            </div>
          )}
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2 sm:gap-0">
          {project.sourceUrl && (
            <Button
              variant="outline"
              onClick={() => window.open(project.sourceUrl, "_blank")}
            >
              <Github className="mr-2 h-4 w-4" />
              View Source
            </Button>
          )}
          {project.liveUrl && (
            <Button onClick={() => window.open(project.liveUrl, "_blank")}>
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
