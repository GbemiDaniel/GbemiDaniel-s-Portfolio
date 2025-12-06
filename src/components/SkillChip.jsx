import React from "react";
import styles from "./SkillChip.module.css";
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiGit,
} from "react-icons/si";

const skills = [
  { name: "JS", icon: SiJavascript, color: "#f7df1e" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "HTML5", icon: SiHtml5, color: "#F16529" },
  { name: "CSS3", icon: SiCss3, color: "#33A9DC" },
  { name: "Git", icon: SiGit, color: "#F34F29" },
];

const SkillChipItem = ({ name, icon: Icon, color }) => (
  <div
    className={styles.chip}
    style={{
      background: `linear-gradient(135deg, ${color}22, rgba(255, 255, 255, 0.05))`,
      borderColor: color,
    }}
  >
    <Icon className={styles.icon} color={color} aria-hidden />
    <span className={styles.text} style={{ color }}>
      {name}
    </span>
  </div>
);

function SkillChip() {
  return (
    <div className={styles.container}>
      <div className={styles.scrollTrack}>
        {skills.map((skill) => (
          <SkillChipItem key={skill.name} {...skill} />
        ))}
        {/* Duplicate for continuous scroll */}
        {skills.map((skill, index) => (
          <SkillChipItem key={index + "-dup"} {...skill} />
        ))}
        {skills.map((skill, index) => (
          <SkillChipItem key={index + "-dup"} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillChip;
