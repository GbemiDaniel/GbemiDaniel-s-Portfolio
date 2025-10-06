import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek personal portfolio built with React & Framer Motion.",
    tech: ["React", "CSS", "Framer Motion"],
    live: "#",
    code: "#",
    image: "/illustration-gallery-icon_53876-27002.jpg",
  },
  {
    title: "E-commerce App",
    description: "Full-stack MERN application with Stripe payments.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    live: "#",
    code: "#",
    image: "/5614091_2902106.jpg",
  },
  {
    title: "Weather Dashboard",
    description: "Weather forecasting app with OpenWeather API.",
    tech: ["JavaScript", "API", "CSS"],
    live: "#",
    code: "#",
    image: "/illustration-gallery-icon_53876-27002.jpg",
  },
];

function ProjectsPreview() {
  return (
    <div className="relative w-full">
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent className="-ml-10">
          {projects.map((project, idx) => (
            <CarouselItem
              key={idx}
              className="basis-full sm:basis-1/2 lg:basis-2/3 pl-2"
            >
              <ProjectCard project={project} variant="preview" />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Single button on far right */}
        <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 glass-btn" />
      </Carousel>
    </div>
  );
}

export default ProjectsPreview;
