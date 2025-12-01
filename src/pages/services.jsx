import { NextSeo } from 'next-seo';
import ServicesGrid from '@/components/Services/ServicesGrid';
import { SITE_URL, DEFAULT_OG_IMAGE } from '@/lib/seo';

export default function ServicesPage() {
  return (
    <>
      <NextSeo
        title="Roofing Services | Marquez Roofing in Cache Valley"
        description="Architectural shingles, metal roofs, and roof repairs completed by Marquez Roofing across Cache Valley, Utah."
        canonical={`${SITE_URL}/services`}
        openGraph={{
          url: `${SITE_URL}/services`,
          title: 'Roofing Services | Marquez Roofing in Cache Valley',
          description:
            'Architectural shingle installs, metal roofing, and roof repairs for Cache Valley and Logan, Utah.',
          images: [
            {
              url: DEFAULT_OG_IMAGE,
              width: 1200,
              height: 630,
              alt: 'Marquez Roofing crew working in Cache Valley',
            },
          ],
        }}
      />
      <ServicesGrid />
    </>
  );
}
