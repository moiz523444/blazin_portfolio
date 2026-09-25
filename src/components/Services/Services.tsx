"use client";
import styles from './Services.module.css';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const services = [
  { name: "Web Development", desc: "High-performance websites & web apps built with modern frameworks." },
  { name: "Mobile App Development", desc: "Native and cross-platform mobile experiences for iOS and Android." },
  { name: "Custom Web Applications", desc: "Tailored platforms and internal tools engineered for your workflow." },
  { name: "SEO & Growth", desc: "Technical SEO, analytics, and growth strategies that compound." },
  { name: "Ecommerce Solutions", desc: "Conversion-focused online stores with seamless checkout flows." },
  { name: "Social Media Marketing", desc: "Brand presence and content strategy across all platforms." },
  { name: "UI/UX Design", desc: "Human-centered interfaces that feel premium and intuitive." },
  { name: "SaaS Engineering", desc: "Multi-tenant, scalable SaaS platforms from MVP to enterprise." },
];

function ServiceRow({ service, index }: { service: typeof services[0], index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={styles.serviceRow}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.serviceNumber}>
        {(index + 1).toString().padStart(2, '0')}
      </div>
      <div className={styles.serviceContent}>
        <h3 className={styles.serviceName}>{service.name}</h3>
        <motion.div
          className={styles.serviceDesc}
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: hovered ? 'auto' : 0,
            opacity: hovered ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p>{service.desc}</p>
        </motion.div>
      </div>
      <div className={styles.exploreLink}>
        <span className={styles.arrow}>↗</span>
      </div>
      <motion.div
        className={styles.hoverBar}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="display-1">OUR<br/>SERVICES</h2>
          <div className={styles.headerDesc}>
            <p className="text-muted">We deliver end-to-end digital services tailored to your business goals.</p>
          </div>
        </motion.div>

        <div className={styles.servicesList}>
          {services.map((service, index) => (
            <ServiceRow key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
