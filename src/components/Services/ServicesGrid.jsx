'use client';
import ServiceCard from '../ServiceCard/ServiceCard';
import { motion } from 'framer-motion';
import styles from './ServicesGrid.module.css';

const servicesData = [
  {
    title: 'Architectural Shingles',
    description:
      'Stylish and durable architectural shingles that enhance your home’s curb appeal while providing long-lasting protection.',
    image: '/images/architectural-shingles.jpg',
    slug: 'architectural-shingles',
  },
  {
    title: 'Metal Roofs',
    description:
      'Modern metal roofing solutions that offer superior durability, energy efficiency, and resistance to the elements.',
    image: '/images/metal-roof.jpg',
    slug: 'metal-roofs',
  },
  {
    title: 'Roof Repairs',
    description:
      'Quick and reliable roof repairs for leaks, damage, or wear and tear to protect your home and prevent costly problems.',
    image: '/images/roof-repair.jpg',
    slug: 'roof-repairs',
  },
];

const Services = () => {
  return (
    <section className={styles.services} aria-labelledby="services-heading">
      <motion.h2
        id="services-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Roofing Services
      </motion.h2>

      <div className={styles.grid}>
        {servicesData.map((service, idx) => (
          <ServiceCard
            key={idx}
            title={service.title}
            description={service.description}
            image={service.image}
            slug={service.slug}
            as={motion.article} // make ServiceCard animatable
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.4 }} // longer stagger
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
