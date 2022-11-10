import Head from "next/head";
import React from "react";
import TopBanner from "../../components/banner/TopBanner";
import Conference from "../../components/conference/Conference";

const Schedule = () => {
  return (
    <>
      <Head>
        <title>Schedule</title>
      </Head>
      <TopBanner text="Schedule" indicator="Schedule" />
      <Conference />
    </>
  );
};

export default Schedule;
