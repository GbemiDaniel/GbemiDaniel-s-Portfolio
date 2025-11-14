import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
    <div className={styles.carouselWrapper} style={{ overflow: "visible" }}>
      <Carousel
        opts={{
          loop: true,
        }}
        className="w-full"
        style={{ overflow: "visible" }}
      >
        <CarouselContent style={{ overflow: "visible" }}>
          {projects.map((project, idx) => (
            <CarouselItem key={idx} style={{ overflow: "visible" }}>
              <ProjectCard project={project} variant="preview" />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Next button */}
        <CarouselNext
          className={`${styles.previewNav} next`}
          data-direction="next"
        />
      </Carousel>
    </div>
  );
}

export default ProjectsPreview;
