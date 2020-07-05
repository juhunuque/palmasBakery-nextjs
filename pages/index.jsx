import Head from 'next/head'
import { Container, Row, Card, Button } from 'react-bootstrap'
import PreLoader from '../components/PreLoader'
import NavBar from '../components/NavBar'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import BackToTop from "../components/BackToTop";
import Portfolio from "../components/Portfolio";
import AboutUs from "../components/AboutUs";

export default function Home() {
  return (
    <div>
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
      <Portfolio />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}
