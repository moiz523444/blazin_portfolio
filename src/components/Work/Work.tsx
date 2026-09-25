"use client";
import styles from './Work.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    id: "01",
    slug: "northstone",
    name: "Northstone Real Estate",
    industry: "Architecture",
    year: "2026",
    image: "/mockup-architecture.jpg",
    tags: ["Web Platform", "Design System", "CMS"]
  },
  {
    id: "02",
    slug: "fintech",
    name: "Auria Financial",
    industry: "FinTech App",
    year: "2026",
    image: "/mockup-fintech.jpg",
    tags: ["Mobile App", "Dashboard", "API"]
  },
  {
    id: "03",
    slug: "healthcare",
    name: "VitalCare Analytics",
    industry: "HealthTech",
    year: "2025",
    image: "/mockup-healthcare.jpg",
    tags: ["Data Viz", "SaaS", "Realtime"]
  },
  {
    id: "04",
    slug: "agency",
    name: "Synthesis Creative",
    industry: "Web3 Agency",
    year: "2025",
    image: "/mockup-agency.jpg",
    tags: ["Branding", "WebGL", "CMS"]
  },
  {
    id: "05",
    slug: "ecommerce",
    name: "Monochrome Studio",
    industry: "High Fashion",
    year: "2024",
    image: "/mockup-ecommerce.jpg",
    tags: ["E-commerce", "3D", "Motion"]
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -30]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className={styles.projectCard}
    >
      <div className={styles.cardHeader}>
        <div className={styles.cardLeft}>
          <div className={styles.projectIndex}>{project.id}</div>
          <h3 className={styles.projectName}>{project.name}</h3>
          <div className={styles.projectTags}>
            <div className="pill-badge">{project.year}</div>
            <div className="pill-badge">{project.industry}</div>
            {project.tags.map((tag, i) => (
              <div key={i} className={styles.tagChip}>{tag}</div>
            ))}
          </div>
        </div>
        <Link href={`/work/${project.slug}`} className={`${styles.viewLink} clickable`}>
          <span>View Case Study</span>
          <span className={styles.viewArrow}>↗</span>
        </Link>
      </div>

      <Link href={`/work/${project.slug}`} className={`${styles.visualContainer} clickable`}>
        <motion.div className={styles.imageWrapper} style={{ y: imageY }}>
          <Image
            src={project.image}
            alt={project.name}
            fill
            className={styles.projectImage}
          />
        </motion.div>
        <div className={styles.imageOverlay} />
        <div className={styles.floatingBadge}>
          <span className="status-dot"></span> Live Project
        </div>
        <div className={styles.hoverHint}>
          <span>Click to explore</span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Work() {
  return (
    <section id="work" className="section-padding">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pill-badge" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>
            <span className="status-dot"></span> SELECTED WORKS
          </div>
          <h2 className="display-2" style={{ marginTop: '2rem' }}>
            Digital Masterpieces.
          </h2>
          <p className={styles.headerDesc}>
            A curated selection of projects where design meets engineering.
          </p>
        </motion.div>

        <div className={styles.stackContainer}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
