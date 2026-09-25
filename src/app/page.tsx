"use client";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import Header from "@/components/Header/Header";
import Work from "@/components/Work/Work";
import Services from "@/components/Services/Services";
import Capabilities from "@/components/Capabilities/Capabilities";
import Playbook from "@/components/Playbook/Playbook";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <main className={styles.main}>
      <Header />

      {/* NORDIC PILL HERO WITH AMBIENT GLOW */}
      <section className={styles.hero}>
        <div className={styles.ambientGlow}></div>
        <div className="container">
          <motion.div 
            className={styles.heroInner}
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div className={styles.badgeCluster} variants={itemVariants}>
              <div className="pill-badge">
                <span className="status-dot"></span> SOFTWARE ENGINEERS
              </div>
              <div className="pill-badge">PRODUCT DESIGNERS</div>
              <div className="pill-badge">FOUNDERS</div>
            </motion.div>
            
            <motion.h1 
              className={`display-1 ${styles.heroTitle}`}
              variants={itemVariants}
            >
              BLAZINCODE™
            </motion.h1>
            
            <motion.div className={styles.heroBottom} variants={itemVariants}>
              <p className={styles.heroDesc}>
                A premium design team that turns ideas into powerful digital experiences. We build serious platforms for ambitious businesses.
              </p>
              
              <div className={styles.heroActions}>
                <a href="#work" className="btn-primary">Explore works •</a>
                <a href="#contact" className="btn-secondary">Start a project •</a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marquee}>
          <span>Auria™</span> <span className={styles.dot}>·</span>
          <span>Victoria</span> <span className={styles.dot}>·</span>
          <span>Kolch</span> <span className={styles.dot}>·</span>
          <span>Nuvik</span> <span className={styles.dot}>·</span>
          <span>Vantar</span> <span className={styles.dot}>·</span>
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
