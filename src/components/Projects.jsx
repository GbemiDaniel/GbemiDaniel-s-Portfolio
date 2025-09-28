import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Projects.module.css";

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
    <div className={styles.carouselWrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24} // gap between cards
        slidesPerView={1} // 1 card on mobile
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 }, // 2 cards on tablets
          1024: { slidesPerView: 1 }, // 3 cards on desktops
        }}
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx}>
            <div className={styles.projectCard}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className={styles.techChip}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  <a href={project.code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Projects;
