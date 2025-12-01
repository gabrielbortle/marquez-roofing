import Hero from '@/components/Hero/Hero';
import { NextSeo } from 'next-seo';
import ServicesGrid from '@/components/Services/ServicesGrid'
import GalleryPreview from '@/components/GalleryPreview/GalleryPreview';
import { SITE_URL, DEFAULT_OG_IMAGE } from '@/lib/seo';

export default function Home() {
  const ogImage = DEFAULT_OG_IMAGE;

  return (
    <>
      <NextSeo
        title="Marquez Roofing | Reliable Roofing in Cache Valley"
        description="Expert roofing services including installation, repair, and inspection. Serving Cache Valley and Logan, Utah."
        canonical={SITE_URL}
        openGraph={{
          url: SITE_URL,
          title: 'Marquez Roofing | Cache Valley Roofing Contractor',
          description:
            'Expert roofing services for Cache Valley and Logan, Utah—architectural shingles, metal roofs, and roof repairs.',
          images: [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: 'Marquez Roofing Project',
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'Cache Valley roofing, Logan Utah roofer, metal roofing Logan, shingle roof replacement Cache Valley, roof repair Logan UT',
          },
        ]}
      />

<Hero
        title="Marquez Roofing"
        tagline="Protecting Homes in Cache Valley with Trusted Roofing Solutions"
        backgroundImage="/images/homeHero.jpg"
      />

      <ServicesGrid />

      <GalleryPreview />
    </>
  );
}
