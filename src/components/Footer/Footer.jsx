import Link from 'next/link';
import { FaEnvelope, FaPhoneAlt, FaLocationArrow, FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topBar}>
        <div>
          <p className={styles.eyebrow}>Always on call</p>
          <h2>Roofing that survives Cache Valley winters.</h2>
          <p className={styles.lede}>
            Lean on our family crew for clean installs, honest pricing, and fast repairs.
          </p>
        </div>
        <div className={styles.actions}>
          <a className={styles.primaryCta} href="tel:14357701027">
            Call the crew
          </a>
          <Link className={styles.secondaryCta} href="/contact">
            Book an estimate
          </Link>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.brandBlock}>
          <h3>A&L Marquez Roofing</h3>
          <p>
            A Cache Valley roofing team focused on tight details, tidy jobsites, and roofs that keep
            you covered through snow, wind, and sun.
          </p>
          <div className={styles.contactItem}>
            <FaPhoneAlt aria-hidden="true" />
            <a href="tel:14357701027">(435) 770-1027</a>
          </div>
          <div className={styles.contactItem}>
            <FaEnvelope aria-hidden="true" />
            <a href="mailto:info@marquezroofing.com">info@marquezroofing.com</a>
          </div>
          <div className={styles.contactItem}>
            <FaLocationArrow aria-hidden="true" />
            <span>Cache Valley, Logan, and nearby mountain towns</span>
          </div>

          <div className={styles.socialRow}>
            <a
              href="https://www.instagram.com/marquez_roofing_llc?igsh=MXJ0OG45cXAyNjJrNw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Marquez Roofing on Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@marquezroofingllc?_t=ZT-8zmxmlM9xE6&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Marquez Roofing on TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <ul className={styles.linkList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul className={styles.linkList}>
            <li><Link href="/services/architectural-shingles">Architectural shingles</Link></li>
            <li><Link href="/services/metal-roofs">Metal roofs</Link></li>
            <li><Link href="/services/roof-repairs">Roof repairs</Link></li>
          </ul>
        </div>

        <div>
          <h4>Service area</h4>
          <p className={styles.areaText}>
            Cache Valley • Logan • Smithfield • Hyrum • Preston • Franklin County
          </p>
          <p className={styles.areaText}>
            We travel for storm work and insurance repairs across northern Utah and southern Idaho.
          </p>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <span>© {currentYear} A&L Marquez Roofing LLC. Built with pride in Cache Valley.</span>
        <span className={styles.badge}>Licensed & Insured</span>
      </div>
    </footer>
  );
};

export default Footer;
