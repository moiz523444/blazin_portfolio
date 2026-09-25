"use client";
import styles from './Playbook.module.css';
import { motion } from 'framer-motion';

const steps = [
  { id: "01", title: "Discover", desc: "Understand the business, users and technical requirements deeply before any code is written." },
  { id: "02", title: "Define", desc: "Turn requirements into a clear, scalable product architecture and roadmap." },
  { id: "03", title: "Design", desc: "Create the experience, interface and a robust, reusable design system." },
  { id: "04", title: "Build", desc: "Engineer the product using modern, enterprise-ready technologies and practices." },
  { id: "05", title: "Launch", desc: "Rigorous QA, testing, and deployment to production with ongoing support." },
];

export default function Playbook() {
  return (
    <section id="process" className={styles.playbookSection}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pill-badge" style={{ backgroundColor: 'rgba(255,255,255,0.04)', color: '#fff', borderColor: 'rgba(255,255,255,0.15)' }}>
            THE PLAYBOOK
          </div>
          <h2 className="display-2" style={{ marginTop: '2rem' }}>How we work.</h2>
        </motion.div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine} />
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className={styles.stepCard}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 8 }}
            >
              <div className={styles.stepDot} />
              <div className={styles.stepHeader}>
                <div className={styles.stepNumber}>{step.id}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
              </div>
              <p className={styles.stepDesc}>{step.desc}</p>
              <div className={styles.stepArrow}>
                <span>{index < steps.length - 1 ? '↓' : '✓'}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
