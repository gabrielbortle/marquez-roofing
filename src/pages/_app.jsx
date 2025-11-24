import { DefaultSeo } from 'next-seo';
import Navbar from '../components/Navbar/Navbar'; // make sure the path is correct
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="Marquez Roofing | Reliable Roofing in [Your City]"
        description="Marquez Roofing provides professional roofing services in [Your City]. Quality materials, expert installation, and free estimates."
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://marquezroofing.com/',
          site_name: 'Marquez Roofing',
        }}
      />
      <Navbar /> {/* Added here so it's global */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
