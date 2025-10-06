import styles from "./Projects.module.css";

function ProjectCard({ project, variant = "full" }) {
  return (
    <div
      className={`${styles.projectCard} ${
        variant === "preview" ? styles.previewCard : ""
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        className={styles.projectImage}
      />

      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>

        {variant === "full" && (
          <>
            <p className={styles.projectDesc}>{project.description}</p>
            <div className={styles.links}>
              <a href={project.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>
              <a href={project.code} target="_blank" rel="noreferrer">
                Code
              </a>
            </div>
          </>
        )}

        <div className={styles.techStack}>
          {project.tech.map((tech, tIdx) => (
            <span key={tIdx} className={styles.techChip}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
