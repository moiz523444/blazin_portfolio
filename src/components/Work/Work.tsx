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
    image: "/mockup-architecture.jpg"
  },
  {
    id: "02",
    slug: "fintech",
    name: "Auria Financial",
    industry: "FinTech App",
    year: "2026",
    image: "/mockup-fintech.jpg"
  },
  {
    id: "03",
    slug: "healthcare",
    name: "VitalCare Analytics",
    industry: "HealthTech",
    year: "2025",
    image: "/mockup-healthcare.jpg"
  },
  {
    id: "04",
    slug: "agency",
    name: "Synthesis Creative",
    industry: "Web3 Agency",
    year: "2025",
    image: "/mockup-agency.jpg"
  },
  {
    id: "05",
    slug: "ecommerce",
    name: "Monochrome Studio",
    industry: "High Fashion",
    year: "2024",
    image: "/mockup-ecommerce.jpg"
  }
];

function ProjectCard({ project, i }: { project: any, i: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"]
  });
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div 
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className={styles.projectCard}
    >
      <div className={styles.cardHeader}>
        <div>
          <h3 className={styles.projectName}>{project.name}</h3>
          <div className={styles.projectTags}>
            <div className="pill-badge">{project.year}</div>
            <div className="pill-badge">{project.industry}</div>
          </div>
        </div>
        <Link href={`/work/${project.slug}`} className="btn-primary clickable">
          View Case Study ↗
        </Link>
      </div>
      
      <Link href={`/work/${project.slug}`} className={`${styles.visualContainer} clickable`}>
        <Image 
          src={project.image} 
          alt={project.name}
          fill
          className={styles.projectImage}
        />
        <div className={styles.floatingBadge}>Live Project</div>
      </Link>
    </motion.div>
  );
}

export default function Work() {
  return (
    <section id="work" className="section-padding">
      <div className="container">
        <div className={styles.header}>
          <div className="pill-badge" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>
            <span className="status-dot"></span> SELECTED WORKS
          </div>
          <h2 className="display-2" style={{ marginTop: '2rem' }}>Digital Masterpieces.</h2>
        </div>

        <div className={styles.stackContainer}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
