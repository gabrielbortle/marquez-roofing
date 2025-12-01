import { NextSeo } from 'next-seo';
import ServicesGrid from '@/components/Services/ServicesGrid';

export default function ServicesPage() {
  return (
    <>
      <NextSeo
        title="Roofing Services | Marquez Roofing in Cache Valley"
        description="Architectural shingles, metal roofs, and roof repairs completed by Marquez Roofing across Cache Valley, Utah."
        canonical="https://marquezroofing.com/services"
      />
      <ServicesGrid />
    </>
  );
}
