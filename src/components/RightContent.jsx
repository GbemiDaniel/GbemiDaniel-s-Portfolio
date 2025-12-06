import { motion, AnimatePresence } from "framer-motion";
import styles from "./RightContent.module.css";

// Import views
import About from "./About";
import Projects from "./Projects";
import Timeline from "./Timeline";
import Chip from "./Chip";
import ProjectsPreview from "./ProjectsPreview";
import SkillChip from "./SkillChip";
import { useEffect, useRef } from "react";

const variants = {
  hidden: { opacity: 0, x: 40 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

function RightContent({ activeSection }) {
  const isScrollable =
    activeSection === "timeline" || activeSection === "about";

  // useRef and useEfffect hook used below returns me to the start of each section on every rerender that involves the change in activesection
  // i had to add the "isScrollable" condition becuase not all the sections should be scrollable
  const sectionRef = useRef(null);
  useEffect(() => {
    if (isScrollable && sectionRef.current) {
      sectionRef.current.scrollTop = 0;
    }
  }, [activeSection, isScrollable]);
  return (
    <div className={styles.rightCol}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`${styles.sectionWrapper} ${
            activeSection === "projects" ? styles.centeredSection : ""
          } ${isScrollable ? styles.scrollableSection : ""}`} // ✅ Add spacing wrapper and centered styles conditionally
          ref={isScrollable ? sectionRef : null}
        >
          {activeSection === "home" && (
            <>
              <div className="sectionTitle">
                <div className={styles.titleBlock}>
                  <h3>Skills</h3>
                </div>
                <SkillChip />
              </div>
              <div className={styles.previewProjectsTitle}>
                <h3 className={`${styles.titleBlock} ${"sectionTitle"}`}>
                  Projects
                </h3>
                <div className={styles.projects}>
                  <ProjectsPreview />
                </div>
              </div>
              <div className="sectionTitle">
                <h3>Socials</h3>
                <Chip />
              </div>
            </>
          )}

          {activeSection === "about" && <About />}
          {activeSection === "projects" && <Projects />}
          {activeSection === "timeline" && <Timeline />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default RightContent;
