import styles from './Playbook.module.css';

const steps = [
  { id: "01", title: "Discover", desc: "Understand the business, users and technical requirements deeply." },
  { id: "02", title: "Define", desc: "Turn requirements into a clear, scalable product architecture." },
  { id: "03", title: "Design", desc: "Create the experience, interface and robust design system." },
  { id: "04", title: "Build", desc: "Engineer the product using modern, enterprise-ready technologies." },
  { id: "05", title: "Launch", desc: "Rigorous QA, testing, and deployment to production." }
];

export default function Playbook() {
  return (
    <section id="process" className={styles.playbookSection}>
      <div className="container">
        <div className={styles.header}>
          <div className="pill-badge" style={{ backgroundColor: '#222', color: '#fff', borderColor: '#333' }}>
            THE PLAYBOOK
          </div>
          <h2 className="display-2" style={{ marginTop: '2rem' }}>How we work.</h2>
        </div>
        
        <div className={styles.timeline}>
          {steps.map((step) => (
            <div key={step.id} className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <div className={styles.stepNumber}>{step.id}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
              </div>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
