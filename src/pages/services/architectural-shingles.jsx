import ServiceHero from '@/components/Services/ServiceHero';
import ServicePageContent from '@/components/Services/ServicePageContent';
import { NextSeo } from 'next-seo';

const highlights = [
  {
    title: 'Built for Cache Valley weather',
    description: 'Ice, wind, and heavy snow in Logan demand secure installs. We use starter strips, proper ventilation, and manufacturer-backed systems for long-term performance.',
  },
  {
    title: 'Designer curb appeal',
    description: 'Architectural shingles add shadow lines and depth that elevate your home without metal roof pricing. Ask about color blends that match Cache Valley neighborhoods.',
  },
  {
    title: 'Certified crews, clean jobsites',
    description: 'We protect landscaping, magnet-sweep daily, and leave the site clean. Every roof is inspected and photo-documented for your records.',
  },
];

const checklistItems = [
  'Architectural shingle installs with ridge vents and ice/water shield at eaves and valleys',
  'Warranty-matched accessories for balanced attic ventilation in Cache Valley climates',
  'Storm-ready fastening patterns for prevailing Logan winds',
  'Skylight and chimney flashing replacements to stop recurring leaks',
  'Upgrades to impact-rated shingles available for hail resistance',
];

const serviceAreas = [
  'Logan', 'North Logan', 'Providence', 'Hyde Park', 'Smithfield', 'Nibley', 'Hyrum', 'Wellsville'
];

export default function ArchitecturalShinglesPage() {
  return (
    <>
      <NextSeo
        title="Architectural Shingle Roofing in Cache Valley & Logan | Marquez Roofing"
        description="Architectural shingle roof installations and replacements in Logan and Cache Valley, Utah. Wind-rated systems, ice and water protection, and designer curb appeal."
        canonical="https://marquezroofing.com/services/architectural-shingles"
        openGraph={{
          url: 'https://marquezroofing.com/services/architectural-shingles',
          title: 'Architectural Shingles | Marquez Roofing',
          description:
            'Cache Valley and Logan, Utah architectural shingle roofing. Storm-ready installs, ridge ventilation, and clean worksites.',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'architectural shingles Logan Utah, Cache Valley roofing, shingle roof replacement, ice and water shield, roof ventilation Logan UT',
          },
        ]}
      />

      <ServiceHero
        title="Architectural Shingles for Cache Valley Homes"
        subtitle="Durable, wind-rated shingle systems that stand up to Logan winters while boosting curb appeal."
        backgroundImage="/images/architectural-shingles.jpg"
        ctaText="Book a shingle estimate"
        ctaLink="/contact"
        tags={['Wind-rated installs', 'Ice & water shield', 'Designer colors', 'Local Logan team']}
      />

      <ServicePageContent
        introHeading="Premium shingle roofing tailored to Utah climates"
        introText="We build asphalt shingle roofs that handle Cache Valley snow loads, freeze-thaw cycles, and canyon winds. Every roof is ventilated and flashed correctly so your attic stays balanced and your shingles last."
        highlights={highlights}
        checklistTitle="What you get with a Marquez Roofing shingle install"
        checklistItems={checklistItems}
        serviceAreas={serviceAreas}
        cta={{ href: '/contact', label: 'Schedule your shingle inspection' }}
      />
    </>
  );
}
