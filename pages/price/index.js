import Head from "next/head";
import React from "react";
import TopBanner from "../../components/banner/TopBanner";
import EventPricing from "../../components/event/EventPricing";
import PricePlan from "../../components/pricing/PricePlan";

const Price = () => {
  return (
    <>
       <Head>
            <title>Pricing</title>
        </Head>
      <TopBanner text="Price Plan" indicator="Pages → Pricing" />
      <PricePlan />
      <EventPricing />
    </>
  );
};

export default Price;
