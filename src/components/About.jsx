// About.jsx
import React, { useState } from "react";
import styles from "./About.module.css";

function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className={styles.about}>
      <h2 className={"sectionTitle"}>About Me</h2>
      <p className={styles.text}>
        Hey there! I'm Daniel, a front-end developer and CS graduate who's
        obsessed with turning ideas into living, breathing digital experiences.
        My toolkit centers around React, with a solid dose of design sense
        thrown in.
      </p>
      <p className={styles.text}>
        What really lights me up? Taking someone's "what if" and making it real.
        Every day is a learning day—whether I'm picking up techniques from
        seasoned devs or understanding how non-technical folks envision their
        digital dreams.
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "← Show Less" : "Read More →"}
        </button>
      </p>
      {isExpanded && (
        <p className={`${styles.expandedContent}`}>
          Being a perpetual student means I'm always listening, always growing,
          and always finding better ways to build what you imagine
        </p>
      )}

      <h3 className={"sectionTitle"}>What I Do</h3>
      <ul className={styles.list}>
        <li>
          🚀 Landing pages, web apps, UI implementations, and original ideas
          that push boundaries
        </li>
        <li>
          💻 Developer first, with design sense to bridge aesthetics and
          functionality
        </li>
        <li>
          ✨ Drawn to visually striking projects, but every build gets my full
          commitment
        </li>
        <li>
          🤝 You're not just a client—you're a collaborator. Your input shapes
          every decision
        </li>
      </ul>

      <h3 className={"sectionTitle"}>Fun Facts</h3>
      <p className={styles.text}>
        Outside of coding, I enjoy [hobby/interest], exploring new tech tools,
        and collaborating with creative minds.
      </p>
    </div>
  );
}

export default About;
