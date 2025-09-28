import React from "react";
import { Home, User, Briefcase, BookOpen, Image, Sun } from "lucide-react";
import styles from "./Navbar.module.css";

const navItems = [
  { id: "home", icon: Home, label: null },
  { id: "about", icon: User, label: "About" },
  { id: "timeline", icon: BookOpen, label: "Timeline" },
  { id: "projects", icon: Image, label: "Projects" },
  { id: "theme", icon: Sun, label: null },
];

// function Navbar({ activeSection, setActiveSection }) {
//   return (
//     <nav className={styles.navbar}>
//       {navItems.map(({ icon: Icon, label }, idx) => (
//         <div className={styles.navItem} key={idx}>
//           <Icon
//             className={styles.icon}
//             size={14}
//             onClick={() => setActiveSection(icon)}
//           />
//           {label && <span className={styles.navText}>{label}</span>}
//         </div>
//       ))}
//     </nav>
//   );
// }
function Navbar({ activeSection, setActiveSection }) {
  return (
    <nav className={styles.navbar}>
      {navItems.map(({ id, icon: Icon, label }) => (
        <div
          key={id}
          className={`${styles.navItem} ${
            activeSection === id ? styles.active : ""
          }`}
          onClick={() => id !== "theme" && setActiveSection(id)}
        >
          <Icon className={styles.icon} size={14} type={Icon} />
          {label && <span className={styles.navText}>{label}</span>}
        </div>
      ))}
    </nav>
  );
}
export default Navbar;
