// Timeline.jsx
import { TimelineData } from "./TimelineData";
import styles from "./Timeline.module.css";

export default function Timeline() {
  return (
    <div className={styles.timeline}>
      {TimelineData.map((item, index) => (
        <div
          key={index}
          className={`${styles.timelineItem} ${
            index % 2 === 0 ? styles.right : styles.left
          }`}
        >
          {/* Date */}
          <div className={styles.date}>{item.date}</div>

          {/* Connector */}
          <div className={styles.connector}></div>

          {/* Content */}
          <div className={styles.content}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
