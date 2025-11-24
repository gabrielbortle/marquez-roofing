'use client';
import { motion } from 'framer-motion';
import styles from './GalleryPreview.module.css';
import Link from 'next/link';
import Image from 'next/image';

const images = [
  { src: '/images/portfolioImage1.jpg', alt: 'Residential roof project 1' },
  { src: '/images/portfolioImage5.jpg', alt: 'Residential roof project 2' },
  { src: '/images/portfolioImage6.jpg', alt: 'Commercial roof project 1' },
  { src: '/images/portfolioImage4.jpg', alt: 'Commercial roof project 2' },
  { src: '/images/portfolioImage2.jpg', alt: 'Metal roof installation' },
  { src: '/images/portfolioImage3.jpg', alt: 'Roof repair project' },
];

const GalleryPreview = () => {
  return (
    <section className={styles.gallerySection} aria-labelledby="gallery-heading">
      <div className={styles.contentOverlay}>
        <h2 id="gallery-heading" className={styles.heading}>
          Our Portfolio
        </h2>
        <Link href="/projects" className={styles.button}>
          View All Projects
        </Link>
      </div>

      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className={styles.card}
            variants={{
              hidden: { opacity: 0, x: idx < 3 ? -50 : 50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}             // adjust based on your design
              height={300}            // adjust based on your design
              className={styles.image}
              priority={idx < 2}      // load first 2 images immediately
              loading={idx >= 2 ? 'lazy' : 'eager'} // lazy load the rest
              placeholder="blur"      // optional: if you want low-res blur
              blurDataURL="/images/placeholder.jpg" // small placeholder image
            />
            <div className={styles.imageOverlay}></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default GalleryPreview;
