import { motion, AnimatePresence } from "framer-motion";
import styles from "./RightContent.module.css";

// Import views
import About from "./About";
import Projects from "./Projects";
import Timeline from "./Timeline";

const variants = {
  hidden: { opacity: 0, x: 40 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

function RightContent({ activeSection }) {
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
          className={styles.sectionWrapper} // ✅ Add spacing wrapper
        >
          {activeSection === "home" && (
            <>
              <h3 className={styles.sectionTitle}>Skills</h3>
              <div className={styles.skills}>
                <span className={styles.chip}>React</span>
                <span className={styles.chip}>JavaScript</span>
                <span className={styles.chip}>CSS</span>
                <span className={styles.chip}>TypeScript</span>
              </div>

              <h3 className={styles.sectionTitle}>Projects</h3>
              <div className={styles.projects}>
                <div className={styles.projectCard}>Project 1</div>
                <div className={styles.projectCard}>Project 2</div>
              </div>

              <h3 className={styles.sectionTitle}>Socials</h3>
              <div className={styles.socials}>
                <a href="#" className={styles.socialLink}>
                  Discord
                </a>
                <a href="#" className={styles.socialLink}>
                  WhatsApp
                </a>
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
