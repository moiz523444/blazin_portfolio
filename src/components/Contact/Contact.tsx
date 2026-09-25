import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <div className="pill-badge" style={{ backgroundColor: '#222', color: '#fff', borderColor: '#333' }}>
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
          </div>
          
          <div className={styles.formCol}>
            <form className={styles.formCard}>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label>Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className={styles.inputGroup}>
                  <label>Work Email</label>
                  <input type="email" placeholder="john@company.com" />
                </div>
              </div>
              
              <div className={styles.inputGroup}>
                <label>Project Type</label>
                <select>
                  <option>Website / Web Application</option>
                  <option>SaaS Platform</option>
                  <option>Mobile App</option>
                  <option>E-commerce</option>
                </select>
              </div>
              
              <div className={styles.inputGroup}>
                <label>Project Details</label>
                <textarea rows={4} placeholder="Briefly describe what you're looking to build..."></textarea>
              </div>
              
              <button type="button" className="btn-secondary" style={{ width: '100%', marginTop: '1rem', backgroundColor: '#111', color: '#fff', border: 'none' }}>
                Start a Project
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
