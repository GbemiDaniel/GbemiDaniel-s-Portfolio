import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";

// Import shadcn/ui carousel primitives
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek personal portfolio built with React & Framer Motion.",
    tech: ["React", "CSS", "Framer Motion"],
    live: "#",
    code: "#",
    image: "Screenshot (214).png",
  },
  {
    title: "E-commerce App",
    description: "Full-stack MERN application with Stripe payments.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    live: "#",
    code: "#",
    image: "Portfoliobackground.jpg",
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
  const [api, setApi] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    onSelect();
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div style={{ maxWidth: "460px", margin: "0 auto" }}>
      <Carousel setApi={setApi}>
        <CarouselContent className="-ml-4">
          {projects.map((project, idx) => (
            <CarouselItem key={idx} className="basis-full pl-4">
              <ProjectCard project={project} variant="full" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={styles.arrow} />
        <CarouselNext className={styles.arrow} />
      </Carousel>
      <div className={styles.pagination}>
        <div className={styles.dotsWrapper}>
          {projects.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${
                selectedIndex === idx ? styles.activeDot : ""
              }`}
              onClick={() => api?.scrollTo(idx)}
              aria-label={`Go to project ${idx + 1}`}
              aria-current={selectedIndex === idx}
              type="button"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
