import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.contentLeft}>
            <div className="pill-badge">OUR PHILOSOPHY</div>
            <h2 className="display-2" style={{ marginTop: '2rem' }}>
              Technology should solve problems, not create more.
            </h2>
          </div>
          
          <div className={styles.contentRight}>
            <p className={styles.leadText}>
              Blazincode brings together design, engineering and product thinking to create digital experiences that are practical, reliable and built around the people who use them.
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
          </div>
        </div>
      </div>
    </section>
  );
}
