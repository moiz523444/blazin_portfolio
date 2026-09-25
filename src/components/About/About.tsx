"use client";
import styles from './About.module.css';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

function AnimatedCounter({ value, suffix }: { value: number, suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    }
  }, [inView, value, count]);

  return (
    <span ref={ref} className={styles.counterValue}>
      <motion.span>{rounded}</motion.span>
      <span className={styles.counterSuffix}>{suffix}</span>
    </span>
  );
}

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 8, suffix: "yrs", label: "Combined Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            className={styles.contentLeft}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pill-badge">OUR PHILOSOPHY</div>
            <h2 className="display-2" style={{ marginTop: '2rem' }}>
              Technology should solve problems, not create more.
            </h2>
          </motion.div>

          <motion.div
            className={styles.contentRight}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className={styles.leadText}>
              Blazincode brings together design, engineering and product thinking to create
              digital experiences that are practical, reliable and built around the people who use them.
            </p>

            <div className={styles.metrics}>
              <div className={styles.metricCard}>
                <h3>Product</h3>
                <p>We start by understanding the business goal before writing a single line of code.</p>
              </div>
              <div className={styles.metricCard}>
                <h3>Design</h3>
                <p>Interfaces that feel human, premium, and inherently easy to use.</p>
              </div>
            </div>

            <div className={styles.statsGrid}>
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className={styles.statItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <span className={styles.statLabel}>{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
