import React from "react";
import styles from "./LeftContent.module.css";
import Navbar from "./Navbar";

function LeftContent({ activeSection, setActiveSection }) {
  return (
    <div className={styles.leftCol}>
      <img src="ProfileAvatar.png" className={styles.avatar} />
      <h2 className={styles.name}>Gbemi Daniel</h2>
      <p className={styles.role}>Front-End Developer</p>

      <div className={styles.ctas}>
        <a className={styles.btn} href="#">
          GitHub
        </a>
        <a className={styles.btn} href="#">
          X
        </a>
        <a className={styles.btn} href="#">
          LinkedIn
        </a>
      </div>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </div>
  );
}

export default LeftContent;
