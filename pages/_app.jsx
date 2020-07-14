import '../style/index.scss'
import withGA from "next-ga";
import Router from "next/router";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default withGA(process.env.NEXT_PUBLIC_GA_ID, Router)(MyApp);
