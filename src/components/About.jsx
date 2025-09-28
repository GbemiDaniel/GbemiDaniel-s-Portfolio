// About.jsx
import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.about}>
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.text}>
        Hi, I’m [Your Name], a passionate front-end developer who loves turning
        ideas into sleek, interactive, and user-friendly experiences.
      </p>

      <h3 className={styles.subtitle}>What I Do</h3>
      <ul className={styles.list}>
        <li>⚡ Building modern, responsive websites with React</li>
        <li>🎨 Crafting engaging UI/UX designs</li>
        <li>🔗 Exploring Web3 and blockchain integrations</li>
      </ul>

      <h3 className={styles.subtitle}>Fun Facts</h3>
      <p className={styles.text}>
        Outside of coding, I enjoy [hobby/interest], exploring new tech tools,
        and collaborating with creative minds.
      </p>
    </div>
  );
}

export default About;
