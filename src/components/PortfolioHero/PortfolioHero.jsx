'use client';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import styles from '../PortfolioHero/PortfolioHero.module.css';

const AnimatedStat = ({ value, label, delay = 0 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.floor(latest));
  const ref = useRef(null);

  useEffect(() => {
    const animation = animate(count, value, { duration: 2, delay, ease: 'easeOut' });
    return animation.stop;
  }, [count, value, delay]);

  return (
    <div className={styles.statBox} ref={ref}>
      <motion.span className={styles.statNumber}>{rounded}</motion.span>
      <p className={styles.statLabel}>{label}</p>
    </div>
  );
};

const PortfolioHero = () => {
  return (
    <section className={styles.hero}>
      <video
        className={styles.heroVideo}
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-placeholder.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className={styles.overlay} />

      <div className={styles.content}>
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Craftsmanship Above All
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          >
            Proudly serving Cache Valley with roofs built to last.
          </motion.p>

          <motion.div
            className={styles.underline}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          />
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
        >
          <a href="/contact" className={styles.ctaButton}>
            Get a Free Estimate
          </a>

          

          {/* Animated Stats */}
          <div className={styles.statsRow}>
            <AnimatedStat value={250} label="Roofs Completed" />
            <AnimatedStat value={20} label="Years Experience" delay={0.2} />
            <AnimatedStat value={100} label="Satisfied Clients" delay={0.4} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHero;
