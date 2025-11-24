import Hero from '@/components/Hero/Hero';
import { NextSeo } from 'next-seo';
import ServicesGrid from '@/components/Services/ServicesGrid'
import GalleryPreview from '@/components/GalleryPreview/GalleryPreview';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Marquez Roofing | Reliable Roofing in Cache Valley"
        description="Expert roofing services including installation, repair, and inspection. Serving Cache Valley and Logan, Utah."
        openGraph={{
          url: 'https://marquezroofing.com',
          title: 'Marquez Roofing',
          description:
            'Expert roofing services across Teton Valley including Jackson, WY.',
          images: [
            {
              url: '/roofing-hero.jpg',
              width: 1200,
              height: 630,
              alt: 'Marquez Roofing Project',
            },
          ],
        }}
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
