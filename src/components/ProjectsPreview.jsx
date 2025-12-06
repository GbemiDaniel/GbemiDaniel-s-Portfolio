import React, { useEffect, useState } from "react";
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
  const [api, setApi] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    onSelect();
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className={styles.carouselWrapper} style={{ overflow: "visible" }}>
      <Carousel
        opts={{
          loop: true,
        }}
        setApi={setApi}
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
      <div className={styles.pagination}>
        <div className={styles.dotsWrapper}>
          {projects.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${
                selectedIndex === idx ? styles.activeDot : ""
              }`}
              onClick={() => api?.scrollTo(idx)}
              aria-label={`Go to preview project ${idx + 1}`}
              aria-current={selectedIndex === idx}
              type="button"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPreview;
