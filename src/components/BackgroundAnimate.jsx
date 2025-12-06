import React from "react";
import styles from "./BackgroundAnimate.module.css";
import {
  SiReact,
  SiBitcoin,
  SiSolidity,
  SiJavascript,
  SiGithub,
  SiTypescript,
} from "react-icons/si";
import { FaCode, FaEthereum, FaCodeBranch, FaLaptopCode } from "react-icons/fa";

function BackgroundAnimate() {
  return (
    <div className={styles.background} aria-hidden>
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />

      <div className={styles.iconContainer}>
        <span className={styles.icon1}>
          <SiReact />
        </span>
        <span className={styles.icon2}>
          <FaLaptopCode />
        </span>
        <span className={styles.icon3}>
          <SiBitcoin />
        </span>
        <span className={styles.icon4}>
          <FaEthereum />
        </span>
        <span className={styles.icon5}>
          <SiSolidity />
        </span>
        <span className={styles.icon6}>
          <FaCodeBranch />
        </span>
        <span className={styles.icon7}>
          <span className={styles.iconText}>{"</>"}</span>
        </span>
        <span className={styles.icon8}>
          <SiJavascript />
        </span>
        <span className={styles.icon9}>
          <SiGithub />
        </span>
        <span className={styles.icon10}>
          <SiTypescript />
        </span>
      </div>
    </div>
  );
}

export default BackgroundAnimate;
