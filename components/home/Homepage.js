import React from "react";
import About from "../about/About";
import Banner from "../banner/Banner";
import Conference from "../conference/Conference";
import Event from "../event/Event";
import Footer from "../footer/Footer";
import Gallery from "../gallery/Gallery";
import Pricing from "../pricing/Pricing";
import Review from "../review/review";
import Statics from "../statics/Statics";
import Team from "../team/Team";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <About />
      <Statics />
      <Team />
      <Event />
      <Conference />
      <Pricing />
      <Gallery />
      <Review />
      <Footer />
    </div>
  );
};

export default Homepage;
