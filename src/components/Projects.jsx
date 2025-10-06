import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";

// Import shadcn/ui carousel primitives
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"; // Adjust path as needed

const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek personal portfolio built with React & Framer Motion.",
    tech: ["React", "CSS", "Framer Motion"],
    live: "#",
    code: "#",
    image: "https://via.placeholder.com/350x200",
  },
  {
    title: "E-commerce App",
    description: "Full-stack MERN application with Stripe payments.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    live: "#",
    code: "#",
    image: "https://via.placeholder.com/350x200",
  },
  {
    title: "Weather Dashboard",
    description: "Weather forecasting app with OpenWeather API.",
    tech: ["JavaScript", "API", "CSS"],
    live: "#",
    code: "#",
    image: "https://via.placeholder.com/350x200",
  },
];

function Projects() {
  return (
    <Carousel>
      <CarouselContent className="-ml-4">
        {projects.map((project, idx) => (
          <CarouselItem
            key={idx}
            className="basis-1/1 md:basis-1/1 lg:basis-1/1 pl-4"
          >
            <ProjectCard project={project} variant="full" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className={styles.arrow} />
      <CarouselNext className={styles.arrow} />
    </Carousel>
  );
}

export default Projects;
