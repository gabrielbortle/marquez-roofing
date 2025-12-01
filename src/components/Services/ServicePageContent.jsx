'use client';
import styles from './ServicePageContent.module.css';

const ServicePageContent = ({
  introHeading,
  introText,
  highlights = [],
  checklistTitle,
  checklistItems = [],
  serviceAreas = [],
  cta
}) => {
  return (
    <section className={styles.section} aria-labelledby="service-content-heading">
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Local roofing experts</p>
          <h2 id="service-content-heading">{introHeading}</h2>
          <p className={styles.lead}>{introText}</p>
        </div>

        {highlights.length > 0 && (
          <div className={styles.grid}>
            {highlights.map((item, idx) => (
              <div key={idx} className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        )}

        <div className={styles.columns}>
          <div className={styles.checklist}>
            <h3>{checklistTitle}</h3>
            <ul>
              {checklistItems.map((item, idx) => (
                <li key={idx}>
                  <span className={styles.bullet}>✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.sideCard}>
            <h4>Serving Cache Valley & Logan, Utah</h4>
            <p>
              We show up fast anywhere in Cache Valley—Logan, Providence, North Logan, Hyde Park,
              Smithfield, Nibley, Hyrum, Wellsville, and nearby communities.
            </p>
            {serviceAreas.length > 0 && (
              <ul className={styles.areaList}>
                {serviceAreas.map((area, idx) => (
                  <li key={idx}>{area}</li>
                ))}
              </ul>
            )}
            {cta && (
              <a className={styles.sideCta} href={cta.href}>
                {cta.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePageContent;
