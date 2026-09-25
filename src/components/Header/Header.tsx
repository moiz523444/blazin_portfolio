"use client";
import styles from './Header.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.logoWrapper}>
          <Image
            src="/logo1.png"
            alt="Blazincode™"
            width={300}
            height={100}
            className={styles.logoImage}
            style={{ objectFit: 'contain', transform: 'scale(1.8)', transformOrigin: 'left center' }}
            priority
          />
        </div>

        <nav className={styles.navPill}>
          <a href="#work" className={styles.link}>Works</a>
          <a href="#services" className={styles.link}>Services</a>
          <a href="#about" className={styles.link}>About</a>
          <a href="#contact" className={styles.link}>Contact</a>
        </nav>

        <div className={styles.action}>
          <button className={styles.navBtn}>
            <span className="status-dot"></span>
            Talk to us
          </button>
        </div>
      </div>
    </header>
  );
}
