import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  onViewDetails: (id: string) => void;
}

const ProjectCard = ({
  id = "1",
  title = "Project Title",
  description = "A short description of the project and what it accomplishes.",
  image = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  technologies = ["React", "TypeScript", "Tailwind"],
  onViewDetails = () => {},
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg bg-white">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <CardHeader className="pb-2">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-4 pt-0">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          className="w-full flex items-center gap-2"
          onClick={() => onViewDetails(id)}
        >
          <Eye size={16} />
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
