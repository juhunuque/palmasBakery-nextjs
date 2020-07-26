import Head from 'next/head'
import PreLoader from '../components/PreLoader'
import NavBar from '../components/NavBar'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import BackToTop from "../components/BackToTop";
import Portfolio from "../components/Portfolio";
import AboutUs from "../components/AboutUs";
import { DefaultSeo } from 'next-seo';
import { Client } from '../utils/prismic-configuration'
import Prismic from 'prismic-javascript'

const Home = ({ products }) => {
  return (
    <div>
      <DefaultSeo
        openGraph={{
          type: 'website',
          title: "Palma's Bakery",
          images: [],
          locale: 'es_ES',
          url: 'https://palmasbakery.net',
          site_name: "Palma's Bakery",
          description: "Palma's Bakery - Sweet moments"
        }}
      />
      <Head>
        <title>Palma's Bakery</title>
        <link rel="icon" href="/favicon.png" />
        <script type="text/javascript" src="/assets/js/vendor/modernizr-3.6.0.min.js"></script>
        <script type="text/javascript" src="/assets/js/vendor/jquery-1.12.4.min.js"></script>
        <script type="text/javascript" src="/assets/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="/assets/js/popper.min.js"></script>
        <script type="text/javascript" src="/assets/js/slick.min.js"></script>
        <script type="text/javascript" src="/assets/js/isotope.pkgd.min.js"></script>
        <script type="text/javascript" src="/assets/js/imagesloaded.pkgd.min.js"></script>
        <script type="text/javascript" src="/assets/js/jquery.magnific-popup.min.js"></script>
        <script type="text/javascript" src="/assets/js/scrolling-nav.js"></script>
        <script type="text/javascript" src="/assets/js/jquery.easing.min.js"></script>
        <script type="text/javascript" src="/assets/js/wow.min.js"></script>
        <script type="text/javascript" src="/assets/js/main.js"></script>
      </Head>
      <PreLoader />
      <NavBar />
      <AboutUs />
      <Services />
      <Portfolio products={products.results}/>
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const { req } = ctx;
  const products = await Client(req).query(
    [Prismic.Predicates.at('document.type', 'products')],
    { pageSize : 100 }
  );
  return {
    products
  }
};

export default Home;
