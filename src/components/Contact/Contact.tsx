"use client";
import styles from './Contact.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', type: '', details: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', type: '', details: '' });
    }, 3000);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            className={styles.infoCol}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pill-badge" style={{ backgroundColor: 'rgba(255,255,255,0.04)', color: '#fff', borderColor: 'rgba(255,255,255,0.15)' }}>
              <span className="status-dot"></span> AVAILABLE FOR WORK
            </div>
            <h2 className="display-2" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
              Have a product in mind?
            </h2>
            <p className={styles.contactDesc}>
              Tell us what you're building. We'll help you turn the idea into a clear digital product.
            </p>

            <div className={styles.contactMeta}>
              <div className={styles.metaBlock}>
                <span>LOCATION</span>
                <p>UK & International</p>
              </div>
              <div className={styles.metaBlock}>
                <span>EMAIL</span>
                <p>hello@blazincode.com</p>
              </div>
            </div>

            <div className={styles.responseTime}>
              <div className={styles.pulseRing} />
              <span>Avg. response time: under 24 hours</span>
            </div>
          </motion.div>

          <motion.div
            className={styles.formCol}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <form className={styles.formCard} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    id="name"
                    placeholder=" "
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                  <label htmlFor="name">Name</label>
                  <span className={styles.inputLine} />
                </div>
                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    id="email"
                    placeholder=" "
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                  <label htmlFor="email">Work Email</label>
                  <span className={styles.inputLine} />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <select
                  id="type"
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  required
                >
                  <option value="" disabled>Select a project type</option>
                  <option>Website / Web Application</option>
                  <option>SaaS Platform</option>
                  <option>Mobile App</option>
                  <option>E-commerce</option>
                </select>
                <label htmlFor="type" className={styles.selectLabel}>Project Type</label>
                <span className={styles.inputLine} />
              </div>

              <div className={styles.inputGroup}>
                <textarea
                  id="details"
                  rows={4}
                  placeholder=" "
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  required
                />
                <label htmlFor="details">Project Details</label>
                <span className={styles.inputLine} />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={submitted}
              >
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={styles.successMsg}
                    >
                      <span className={styles.checkmark}>✓</span> Message sent — we'll be in touch
                    </motion.span>
                  ) : (
                    <motion.span
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={styles.btnContent}
                    >
                      Start a Project <span className={styles.btnArrow}>→</span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
