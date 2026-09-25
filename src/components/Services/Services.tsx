"use client";
import styles from './Services.module.css';

import { motion } from 'framer-motion';

const services = [
  "WEB DEVELOPMENT",
  "MOBILE APP DEVELOPMENT",
  "CUSTOM WEB APPLICATIONS",
  "SEO & GROWTH",
  "ECOMMERCE SOLUTIONS",
  "SOCIAL MEDIA MARKETING",
  "UI/UX DESIGN",
  "SAAS ENGINEERING"
];

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-1">OUR<br/>SERVICES</h2>
          <div className={styles.headerDesc}>
            <p className="text-muted">We deliver end-to-end digital services tailored to your business goals.</p>
          </div>
        </motion.div>
        
        <div className={styles.servicesList}>
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className={styles.serviceRow}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.serviceNumber}>
                {(index + 1).toString().padStart(2, '0')}
              </div>
              <h3 className={styles.serviceName}>{service}</h3>
              <div className={styles.exploreLink}>
                <span className={styles.arrow}>↗</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
