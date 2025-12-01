import { NextSeo } from 'next-seo';
import ContactForm from '@/components/ContactForm/ContactForm';
import styles from '@/styles/ContactPage.module.css';
import { SITE_URL, DEFAULT_OG_IMAGE } from '@/lib/seo';

export default function Contact() {
  return (
    <>
      <NextSeo
        title="Contact Marquez Roofing | Book a Roof Consultation"
        description="Reach out for architectural shingles, metal roofs, or roof repairs in Cache Valley. Share your project details and we'll respond within 3-5 business days."
        canonical={`${SITE_URL}/contact`}
        openGraph={{
          url: `${SITE_URL}/contact`,
          title: 'Contact Marquez Roofing | Roof Consultation',
          description:
            'Schedule a roofing consultation for shingles, metal, or repairs across Cache Valley, Utah.',
          images: [
            {
              url: DEFAULT_OG_IMAGE,
              width: 1200,
              height: 630,
              alt: 'Marquez Roofing contact team in Cache Valley',
            },
          ],
        }}
      />

      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Contact</p>
          <h1>Book a roofing consult in Cache Valley.</h1>
          <p className={styles.lede}>
            Tell us about your roof, timeline, and goals. A Marquez Roofing specialist will reply
            within 3-5 business days with next steps.
          </p>
          <div className={styles.badges}>
            <span>Licensed & insured</span>
            <span>Local crew</span>
            <span>Honest estimates</span>
          </div>
        </div>
      </header>

      <ContactForm />
    </>
  );
}
