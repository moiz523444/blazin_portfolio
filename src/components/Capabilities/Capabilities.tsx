"use client";
import styles from './Capabilities.module.css';
import { motion } from 'framer-motion';

const techStack = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "TypeScript"],
    icon: "▲"
  },
  {
    category: "Backend",
    technologies: ["Node.js", "ASP.NET Core", "REST APIs"],
    icon: "⚙"
  },
  {
    category: "Data",
    technologies: ["PostgreSQL", "SQL Server", "Redis"],
    icon: "◆"
  },
  {
    category: "Cloud",
    technologies: ["AWS", "Vercel", "Azure"],
    icon: "☁"
  }
];

export default function Capabilities() {
  return (
    <section id="capabilities" className={styles.capabilitiesSection}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pill-badge">ENGINEERING</div>
          <h2 className="display-2" style={{ marginTop: '2rem' }}>Built for scale.</h2>
          <p className={styles.headerDesc}>
            A modern tech stack selected for performance, reliability, and developer velocity.
          </p>
        </motion.div>

        <div className={styles.techGrid}>
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              className={styles.techCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.cardGlow} />
              <div className={styles.techIcon}>{stack.icon}</div>
              <h4 className={styles.techCategory}>{stack.category}</h4>
              <ul className={styles.techList}>
                {stack.technologies.map((tech, idx) => (
                  <li key={idx}>
                    <span className={styles.techDot}></span> {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
