import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  // Mock data for the specific project
  const project = {
    title: params.slug === 'blackwell' ? 'Velocity London' : params.slug === 'northstone' ? 'Northstone' : 'FleetCore',
    heroImage: `/mockup-${params.slug === 'blackwell' ? 'automotive' : params.slug === 'northstone' ? 'architecture' : 'saas'}.jpg`,
    client: "Concept Project",
    timeline: "4 Weeks",
    role: "UX/UI & Engineering",
    description: "An ultra-premium digital experience crafted to establish absolute market dominance and elevate the brand aesthetic."
  };

  return (
    <main className={styles.main}>
      <Header />
      
      <div className={styles.heroWrapper}>
        <div className={styles.heroImageContainer}>
          <Image 
            src={project.heroImage}
            alt={project.title}
            fill
            className={styles.heroImage}
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <Link href="/#work" className="pill-badge" style={{ marginBottom: '2rem', cursor: 'pointer' }}>
            ← Back to works
          </Link>
          <h1 className="display-2">{project.title}</h1>
        </div>
      </div>

      <div className="container">
        <div className={styles.metaGrid}>
          <div className={styles.metaItem}>
            <span>Client</span>
            <p>{project.client}</p>
          </div>
          <div className={styles.metaItem}>
            <span>Role</span>
            <p>{project.role}</p>
          </div>
          <div className={styles.metaItem}>
            <span>Timeline</span>
            <p>{project.timeline}</p>
          </div>
          <div className={styles.metaItem}>
            <span>View</span>
            <a href="#" style={{ textDecoration: 'underline' }}>Live Project ↗</a>
          </div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.contentLabel}>
            <span className="pill-badge">OVERVIEW</span>
          </div>
          <div className={styles.contentText}>
            <h3>{project.description}</h3>
            <p className="text-muted" style={{ marginTop: '2rem', fontSize: '1.25rem' }}>
              We combined product strategy, thoughtful design, and modern engineering to create a digital experience that is useful, scalable, and built around real business requirements. The architecture ensures high performance and smooth interactions.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
