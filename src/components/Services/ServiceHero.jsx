'use client';
import { motion } from 'framer-motion';
import styles from './ServiceHero.module.css';

const ServiceHero = ({ title, subtitle, backgroundImage, ctaText, ctaLink, tags = [] }) => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      aria-labelledby="service-hero-heading"
    >
      <div className={styles.overlay} />
      <div className={styles.content}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Roofing for Cache Valley & Logan, Utah
        </motion.p>
        <motion.h1
          id="service-hero-heading"
          className={styles.title}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {title}
        </motion.h1>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <a className={styles.ctaButton} href={ctaLink}>
            {ctaText}
          </a>
          {tags.length > 0 && (
            <ul className={styles.tagList} aria-label="Service highlights">
              {tags.map((tag, idx) => (
                <li key={idx} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
