'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ title, description, image, slug, ...motionProps }) => {
  return (
    <motion.article
      className={styles.card}
      {...motionProps} // passes animation props from parent
    >
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={`Photo of ${title} roofing service`} // descriptive alt
          width={400}
          height={400}
          className={styles.image}
        />
      </div>
      
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      
      <a
        href={`/services/${slug}`} // use slug for safe, consistent URLs
        className={styles.button}
        aria-label={`Learn more about ${title} roofing service`} // accessibility
      >
        Learn More →
      </a>
    </motion.article>
  );
};

export default ServiceCard;
