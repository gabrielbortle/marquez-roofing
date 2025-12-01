import ServiceHero from '@/components/Services/ServiceHero';
import ServicePageContent from '@/components/Services/ServicePageContent';
import { NextSeo } from 'next-seo';
import { SITE_URL, BUSINESS_NAME, PHONE_NUMBER, GEO_SERVICE_AREA, LOGO_URL } from '@/lib/seo';

const highlights = [
  {
    title: 'Standing seam built to last',
    description: 'Premium panels with concealed fasteners, snow retention options, and underlayment designed for Cache Valley freeze-thaw cycles.',
  },
  {
    title: 'Energy efficient',
    description: 'Reflective finishes and proper ventilation help keep Logan attics cooler in summer and drier in winter.',
  },
  {
    title: 'Precision flashing and details',
    description: 'Tight valleys, chimney and skylight flashings, and ice dam mitigation keep meltwater out of your home.',
  },
];

const checklistItems = [
  'Custom-bent flashings for hips, valleys, skylights, and chimneys',
  'High-temp ice and water shield in valleys and eaves for mountain snow loads',
  'Snow retention layout to protect gutters, walkways, and landscaping',
  'Fastener patterns and clips rated for Logan and Cache Valley wind zones',
  'Options for low-slope sections and transitions to shingles',
];

const serviceAreas = [
  'Logan', 'North Logan', 'Providence', 'Hyde Park', 'Smithfield', 'Nibley', 'Hyrum', 'Wellsville'
];

export default function MetalRoofsPage() {
  const ogImage = `${SITE_URL}/images/metal-roof.jpg`;
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Metal roofing (standing seam, snow retention, high-temp underlayment)',
    url: `${SITE_URL}/services/metal-roofs`,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS_NAME,
      image: LOGO_URL,
      telephone: PHONE_NUMBER,
    },
    areaServed: [
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: GEO_SERVICE_AREA.geoMidpoint.latitude,
          longitude: GEO_SERVICE_AREA.geoMidpoint.longitude,
        },
        geoRadius: GEO_SERVICE_AREA.geoRadius,
      },
    ],
  };

  return (
    <>
      <NextSeo
        title="Metal Roofing in Cache Valley & Logan Utah | Marquez Roofing"
        description="Standing seam and metal roofing for homes and cabins in Logan and Cache Valley. Snow retention, high-temp underlayment, and precision flashings built for Utah winters."
        canonical={`${SITE_URL}/services/metal-roofs`}
        openGraph={{
          url: `${SITE_URL}/services/metal-roofs`,
          title: 'Metal Roofing | Marquez Roofing',
          description:
            'Cache Valley metal roofs with standing seam panels, snow guards, and ice dam protection for Logan area homes.',
          images: [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: 'Standing seam metal roof installed in Cache Valley',
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'metal roof Logan Utah, standing seam Cache Valley, snow retention roofing, metal roofing contractor Logan UT, high temp underlayment',
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <ServiceHero
        title="Metal Roofs Built for Cache Valley"
        subtitle="Clean, durable metal roofing that handles mountain snow, ice dams, and Logan winds while elevating your home’s look."
        backgroundImage="/images/metal-roof.jpg"
        ctaText="Talk with a metal roof pro"
        ctaLink="/contact"
        tags={['Standing seam', 'Snow retention', 'High-temp underlayment', 'Logan installers']}
      />

      <ServicePageContent
        introHeading="Standing seam and metal roofing done right"
        introText="From cabins in the foothills to homes in Logan, we install metal roofs that shed snow and stay watertight. Expect detailed flashing work, balanced ventilation, and materials selected for Cache Valley conditions."
        highlights={highlights}
        checklistTitle="What we include on every metal roof"
        checklistItems={checklistItems}
        serviceAreas={serviceAreas}
        cta={{ href: '/contact', label: 'Book a metal roof consultation' }}
      />
    </>
  );
}
