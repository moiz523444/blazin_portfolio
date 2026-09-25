"use client";
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const project = {
    title: params.slug === 'blackwell' ? 'Velocity London' : params.slug === 'northstone' ? 'Northstone' : 'FleetCore',
    heroImage: `/mockup-${params.slug === 'blackwell' ? 'automotive' : params.slug === 'northstone' ? 'architecture' : 'saas'}.jpg`,
    client: "Concept Project",
    timeline: "4 Weeks",
    role: "UX/UI & Engineering",
    description: "An ultra-premium digital experience crafted to establish absolute market dominance and elevate the brand aesthetic."
  };

  const meta = [
    { label: "Client", value: project.client },
    { label: "Role", value: project.role },
    { label: "Timeline", value: project.timeline },
  ];

  return (
    <main className={styles.main}>
      <Header />

      <div className={styles.heroWrapper} ref={heroRef}>
        <motion.div
          className={styles.heroImageContainer}
          style={{ scale: imageScale, y: imageY }}
        >
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className={styles.heroImage}
            priority
          />
        </motion.div>
        <div className={styles.heroOverlay} />
        <motion.div
          className={styles.heroContent}
          style={{ y: contentY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/#work" className={`pill-badge ${styles.backLink}`} style={{ marginBottom: '2rem', cursor: 'pointer' }}>
              ← Back to works
            </Link>
          </motion.div>
          <motion.h1
            className="display-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {project.title}
          </motion.h1>
        </motion.div>
      </div>

      <div className="container">
        <motion.div
          className={styles.metaGrid}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {meta.map((item, i) => (
            <div key={i} className={styles.metaItem}>
              <span>{item.label}</span>
              <p>{item.value}</p>
            </div>
          ))}
          <div className={styles.metaItem}>
            <span>View</span>
            <a href="#" className={styles.liveLink}>Live Project <span className={styles.liveArrow}>↗</span></a>
          </div>
        </motion.div>

        <div className={styles.contentSection}>
          <motion.div
            className={styles.contentLabel}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="pill-badge">OVERVIEW</div>
          </motion.div>
          <motion.div
            className={styles.contentText}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3>{project.description}</h3>
            <p className="text-muted" style={{ marginTop: '2rem', fontSize: '1.25rem', lineHeight: 1.6 }}>
              We combined product strategy, thoughtful design, and modern engineering to create a digital
              experience that is useful, scalable, and built around real business requirements. The
              architecture ensures high performance and smooth interactions across every device.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
