import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h2>BLAZINCODE™</h2>
            <p className="text-muted">Premium software engineering & product design.</p>
          </div>
          
          <div className={styles.links}>
            <div className={styles.linkCol}>
              <h4>Navigation</h4>
              <a href="#work">Selected Works</a>
              <a href="#services">Services</a>
              <a href="#capabilities">Capabilities</a>
              <a href="#process">Playbook</a>
              <a href="#about">About Us</a>
            </div>
            
            <div className={styles.linkCol}>
              <h4>Social</h4>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter (X)</a>
              <a href="#">GitHub</a>
              <a href="#">Dribbble</a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} Blazincode. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
