import Image from "next/image";
import Link from "next/link";
import { FaHome, FaTools, FaImages, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar} role="navigation" aria-label="Main Navigation">
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/images/logo4.png"
            alt="A&L Marquez Roofing LLC logo"
            width={160}
            height={50}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </Link>
      </div>

      {/* Accessible hamburger button */}
      <button
        type="button"
        className={styles.hamburgerBtn}
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <ul id="primary-navigation" className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <li>
          <Link href="/">
            <FaHome className={styles.icon} /> Home
          </Link>
        </li>
        <li className={styles.hasDropdown}>
          <Link href="/services">
            <FaTools className={styles.icon} /> Services
          </Link>
          <ul className={styles.dropdown}>
            <li><Link href="/services/architectural-shingles">Architectural Shingles</Link></li>
            <li><Link href="/services/metal-roofs">Metal Roofs</Link></li>
            <li><Link href="/services/roof-repairs">Roof Repairs</Link></li>
          </ul>
        </li>
        <li>
          <Link href="/portfolio">
            <FaImages className={styles.icon} /> Portfolio
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <FaEnvelope className={styles.icon} /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
