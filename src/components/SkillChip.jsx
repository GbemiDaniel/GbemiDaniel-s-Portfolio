import React from "react";
import styles from "./SkillChip.module.css";

const skills = [
  {
    name: "JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    color: "#f7df1e",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    color: "#61dafb",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg",
    color: "#F16529",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    color: "#33A9DC",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    color: "#F34F29",
  },
];

const SkillChipItem = ({ name, icon, color }) => {
  return (
    <div
      className={styles.chip}
      style={{ backgroundColor: color + "22", borderColor: color }}
    >
      <img src={icon} alt={name} className={styles.icon} />
      <span className={styles.text} style={{ color }}>
        {name}
      </span>
    </div>
  );
};

function SkillChip() {
  return (
    <div className={styles.container}>
      {skills.map((skill) => (
        <SkillChipItem key={skill.name} {...skill} />
      ))}
    </div>
  );
}

export default SkillChip;
