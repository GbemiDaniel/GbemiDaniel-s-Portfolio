import React from "react";
import styles from "./Chip.module.css";
import { SiWhatsapp, SiGithub, SiGmail, SiX } from "react-icons/si";
const socials = [
  {
    name: "Whatsapp",
    icon: SiWhatsapp,
    color: "#26a826ff",
    link: "",
  },
  {
    name: "Gmail",
    icon: SiGmail,
    color: "#c92828e7",
    link: "",
  },
  {
    name: "Github",
    icon: SiGithub,
    color: "#F16529",
    link: "",
  },
  {
    name: "X",
    icon: SiX,
    color: "#ffffffff",
    link: "",
  },
];

const ChipItem = ({ name, icon: Icon, color }) => {
  return (
    <div
      className={styles.chip}
      style={{ backgroundColor: color + "22", borderColor: color }}
    >
      <Icon alt={name} className={styles.icon} color={color} size={22} />
      {/* <span className={styles.text}>{name}</span> */}
    </div>
  );
};

function Chip() {
  return (
    <div className={styles.container}>
      {socials.map((skill) => (
        <ChipItem key={skill.name} {...skill} />
      ))}
    </div>
  );
}

export default Chip;
