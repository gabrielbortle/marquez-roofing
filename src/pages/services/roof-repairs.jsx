import ServiceHero from '@/components/Services/ServiceHero';
import ServicePageContent from '@/components/Services/ServicePageContent';
import { NextSeo } from 'next-seo';
import { SITE_URL } from '@/lib/seo';

const highlights = [
  {
    title: 'Leak tracing experts',
    description: 'We find the source, not just the symptom. Flashings, skylights, vents, and valleys are inspected and photographed.',
  },
  {
    title: 'Weather-ready fixes',
    description: 'Ice and water shield patches, new flashings, and proper sealants to handle Logan snow melt and spring storms.',
  },
  {
    title: 'Fast local response',
    description: 'Based in Cache Valley, we prioritize active leaks and storm damage in Logan and nearby cities.',
  },
];

const checklistItems = [
  'Roof leak inspections with photos and clear repair plans',
  'Emergency tarping and temporary dry-in for active leaks',
  'Flashing, pipe boot, skylight, and valley repairs to stop recurring drips',
  'Storm and wind damage fixes with insurance-ready documentation',
  'Attic moisture checks to ensure ventilation is balanced after the repair',
];

const serviceAreas = [
  'Logan', 'North Logan', 'Providence', 'Hyde Park', 'Smithfield', 'Nibley', 'Hyrum', 'Wellsville'
];

export default function RoofRepairsPage() {
  const ogImage = `${SITE_URL}/images/roof-repair.jpg`;

  return (
    <>
      <NextSeo
        title="Roof Repairs in Cache Valley & Logan Utah | Marquez Roofing"
        description="Leak repairs, storm damage fixes, and emergency tarping for homes in Logan and Cache Valley, Utah. Fast local response with lasting solutions."
        canonical={`${SITE_URL}/services/roof-repairs`}
        openGraph={{
          url: `${SITE_URL}/services/roof-repairs`,
          title: 'Roof Repairs | Marquez Roofing',
          description:
            'Cache Valley roof repair specialists for leaks, wind damage, and ice issues in Logan, Utah.',
          images: [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: 'Roof repair project completed in Logan, Utah',
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'roof repair Logan Utah, emergency roof tarping Cache Valley, leak repair roofing, storm damage roof Logan UT, roof flashing repair',
          },
        ]}
      />

      <ServiceHero
        title="Roof Repairs That Last in Cache Valley"
        subtitle="Stop leaks fast and fix them right with a local Logan crew that knows Utah snow, ice, and spring storms."
        backgroundImage="/images/roof-repair.jpg"
        ctaText="Request a repair visit"
        ctaLink="/contact"
        tags={['Leak detection', 'Emergency tarping', 'Flashings & vents', 'Local Cache Valley crew']}
      />

      <ServicePageContent
        introHeading="Leak repairs tailored to Utah weather"
        introText="From pipe boot failures to storm-blown shingles, we repair roofs with materials and methods that stand up to Cache Valley conditions. You get documented fixes and a clean, safe worksite."
        highlights={highlights}
        checklistTitle="How we repair roofs in Logan and Cache Valley"
        checklistItems={checklistItems}
        serviceAreas={serviceAreas}
        cta={{ href: '/contact', label: 'Book a repair today' }}
      />
    </>
  );
}
