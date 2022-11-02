import Head from "next/head";
import React from "react";
import TopBanner from "../../components/banner/TopBanner";
import Footer from "../../components/footer/Footer";
import TeamAll from "../../components/team/TeamAll";

const Speakers = () => {
  return (
    <>
       <Head>
            <title>Speakers</title>
        </Head>
      <TopBanner text="Speakers" indicator="Pages → Speakers" />
      <TeamAll />
    </>
  );
};

export default Speakers;
