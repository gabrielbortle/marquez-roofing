'use client';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = ({
  title,
  tagline,
  backgroundImage,
  backgroundVideo
}) => {
  return (
    <section className={styles.hero}>
      {backgroundVideo ? (
        <video
          className={styles.heroVideo}
          autoPlay
          loop
          muted
          playsInline
          poster={backgroundImage}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      ) : (
        <div
          className={styles.heroImage}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

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
            {title}
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          >
            {tagline}
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

          <div className={styles.trustRow}>
            <span>⭐⭐⭐⭐⭐</span>
            <span>Licensed & Insured</span>
            <span>Family Owned</span>
          </div>
        </motion.div>
      </div>
      



    </section>
  );
};

export default Hero;
