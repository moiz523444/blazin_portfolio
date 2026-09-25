"use client";
import styles from "./page.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header/Header";
import Work from "@/components/Work/Work";
import Services from "@/components/Services/Services";
import Capabilities from "@/components/Capabilities/Capabilities";
import Playbook from "@/components/Playbook/Playbook";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

const titleText = "BLAZINCODE™";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const letterVariants = {
  hidden: { opacity: 0, y: 80, rotateX: -90 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <main className={styles.main}>
      <Header />

      {/* HERO */}
      <motion.section
        ref={heroRef}
        className={styles.hero}
        style={{ opacity: heroOpacity }}
      >
        {/* Animated background orbs */}
        <motion.div
          className={styles.ambientGlow}
          style={{ scale: glowScale }}
        />
        <div className={styles.orbOne} />
        <div className={styles.orbTwo} />
        <div className={styles.gridOverlay} />

        <motion.div
          className={styles.heroInner}
          style={{ y: heroY }}
        >
          <motion.div
            className={styles.badgeCluster}
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div className="pill-badge" variants={itemVariants}>
              <span className="status-dot"></span> SOFTWARE ENGINEERS
            </motion.div>
            <motion.div className="pill-badge" variants={itemVariants}>PRODUCT DESIGNERS</motion.div>
            <motion.div className="pill-badge" variants={itemVariants}>FOUNDERS</motion.div>
          </motion.div>

          <motion.h1
            className={`display-1 ${styles.heroTitle}`}
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {titleText.split("").map((char, i) => (
              <motion.span
                key={i}
                className={styles.letter}
                variants={letterVariants}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            className={styles.heroBottom}
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.p className={styles.heroDesc} variants={itemVariants}>
              A premium design team that turns ideas into powerful digital experiences.
              We build serious platforms for ambitious businesses.
            </motion.p>

            <motion.div className={styles.heroActions} variants={itemVariants}>
              <a href="#work" className="btn-primary">
                <span>Explore works</span>
                <span className={styles.arrowIcon}>→</span>
              </a>
              <a href="#contact" className="btn-secondary">
                <span>Start a project</span>
                <span className={styles.arrowIcon}>→</span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span>Scroll</span>
          <div className={styles.scrollLine}>
            <motion.div
              className={styles.scrollDot}
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* MARQUEE */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          <div className={styles.marquee}>
            <span>Auria™</span> <span className={styles.dot}>·</span>
            <span>Victoria</span> <span className={styles.dot}>·</span>
            <span>Kolch</span> <span className={styles.dot}>·</span>
            <span>Nuvik</span> <span className={styles.dot}>·</span>
            <span>Vantar</span> <span className={styles.dot}>·</span>
            <span>Northstone</span> <span className={styles.dot}>·</span>
            <span>VitalCare</span> <span className={styles.dot}>·</span>
            <span>Monochrome</span> <span className={styles.dot}>·</span>
          </div>
          <div className={styles.marquee} aria-hidden="true">
            <span>Auria™</span> <span className={styles.dot}>·</span>
            <span>Victoria</span> <span className={styles.dot}>·</span>
            <span>Kolch</span> <span className={styles.dot}>·</span>
            <span>Nuvik</span> <span className={styles.dot}>·</span>
            <span>Vantar</span> <span className={styles.dot}>·</span>
            <span>Northstone</span> <span className={styles.dot}>·</span>
            <span>VitalCare</span> <span className={styles.dot}>·</span>
            <span>Monochrome</span> <span className={styles.dot}>·</span>
          </div>
        </div>
      </div>

      <Work />
      <Services />
      <Capabilities />
      <Playbook />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
