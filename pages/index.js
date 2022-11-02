import Head from "next/head";
import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import Conference from "../components/conference/Conference";
import Event from "../components/event/Event";
import Gallery from "../components/gallery/Gallery";
import Pricing from "../components/pricing/Pricing";
import Statics from "../components/statics/Statics";
import Team from "../components/team/Team";
import Review from '../components/review/Review'


export default function Home() {
  return (
    <div>
     
      <Head>
        <title>Veltio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <About />
      <Statics />
      <Team />
      <Event />
      <Conference />
      <Pricing />
      <Gallery />
      <Review />

    </div>
  );
}
