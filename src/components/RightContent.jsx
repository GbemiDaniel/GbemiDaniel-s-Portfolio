import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import styles from "./RightContent.module.css";

// Import views
import About from "./About";
import Projects from "./Projects";
import Timeline from "./Timeline";
import Chip from "./Chip";
import ProjectsPreview from "./ProjectsPreview";
import SkillChip from "./SkillChip";

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
              <h3 className="sectionTitle">Skills</h3>
              <div className={styles.skills}>
                <SkillChip />
              </div>
              <h3 className="sectionTitle">Projects</h3>
              <div className={styles.projects}>
                <ProjectsPreview />
              </div>
              <h3 className="sectionTitle">Socials</h3>
              <div className={styles.socials}>
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
