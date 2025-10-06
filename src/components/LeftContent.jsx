import React from "react";
import styles from "./LeftContent.module.css";
import Navbar from "./Navbar";

function LeftContent({ activeSection, setActiveSection }) {
  return (
    <div className={styles.leftCol}>
      <img src="ProfileAvatar.png" className={styles.avatar} />
      <h2 className={styles.name}>Gbemi Daniel</h2>

      <p className={styles.role}>Front-End Developer</p>
      <p className={styles.cta}>
        Thinking and creating with respect to no box is my specialty
      </p>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </div>
  );
}

export default LeftContent;
