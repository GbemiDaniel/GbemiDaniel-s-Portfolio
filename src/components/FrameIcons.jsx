import React from "react";
import { FaCode, FaTerminal, FaCodeBranch } from "react-icons/fa";
import { SiGithub, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import styles from "./FrameIcons.module.css";

function FrameIcons() {
  return (
    <div className={styles.frameIcons} aria-hidden>
      <span className={`${styles.icon} ${styles.i1}`}>
        <FaTerminal />
      </span>
      <span className={`${styles.icon} ${styles.i2}`}>
        <FaCodeBranch />
      </span>
      <span className={`${styles.icon} ${styles.i3}`}>
        <SiHtml5 />
      </span>
      <span className={`${styles.icon} ${styles.i4}`}>
        <SiCss3 />
      </span>
      <span className={`${styles.icon} ${styles.i5}`}>
        <SiJavascript />
      </span>
      <span className={`${styles.icon} ${styles.i6}`}>
        <SiGithub />
      </span>
      <span className={`${styles.icon} ${styles.i7}`}>{"</>"}</span>
    </div>
  );
}

export default FrameIcons;
