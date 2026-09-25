"use client";
import styles from './Capabilities.module.css';

import { motion } from 'framer-motion';

const techStack = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "TypeScript"]
  },
  {
    category: "Backend",
    technologies: ["Node.js", "ASP.NET Core", "REST APIs"]
  },
  {
    category: "Data",
    technologies: ["PostgreSQL", "SQL Server", "Redis"]
  },
  {
    category: "Cloud",
    technologies: ["AWS", "Vercel", "Azure"]
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
          transition={{ duration: 0.6 }}
        >
          <div className="pill-badge">ENGINEERING</div>
          <h2 className="display-2" style={{ marginTop: '2rem' }}>Built for scale.</h2>
        </motion.div>
        
        <div className={styles.techGrid}>
          {techStack.map((stack, index) => (
            <motion.div 
              key={index} 
              className={styles.techCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
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
