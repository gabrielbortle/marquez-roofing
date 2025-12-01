import { DefaultSeo, LocalBusinessJsonLd } from 'next-seo';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import {
  SITE_URL,
  BUSINESS_NAME,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  PHONE_NUMBER,
  GEO_SERVICE_AREA,
  SOCIAL_PROFILES,
} from '../lib/seo';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Marquez Roofing"
        defaultTitle="Marquez Roofing | Roofing Contractor in Cache Valley, UT"
        description={DEFAULT_DESCRIPTION}
        canonical={SITE_URL}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: SITE_URL,
          site_name: BUSINESS_NAME,
          images: [
            {
              url: DEFAULT_OG_IMAGE,
              width: 1200,
              height: 630,
              alt: `${BUSINESS_NAME} roofing project in Cache Valley`,
            },
          ],
        }}
        twitter={{
          handle: '@marquezroofing',
          site: '@marquezroofing',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          { name: 'geo.region', content: 'US-UT' },
          { name: 'geo.placename', content: 'Cache Valley, Logan' },
        ]}
      />
      <LocalBusinessJsonLd
        type="RoofingContractor"
        id={`${SITE_URL}/#business`}
        name={BUSINESS_NAME}
        description={DEFAULT_DESCRIPTION}
        url={SITE_URL}
        telephone={PHONE_NUMBER}
        address={{
          addressLocality: 'Logan',
          addressRegion: 'UT',
          addressCountry: 'US',
        }}
        areaServed={[GEO_SERVICE_AREA]}
        sameAs={SOCIAL_PROFILES}
        images={[DEFAULT_OG_IMAGE]}
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
