import Head from "next/head";
import TopBanner from "../../components/banner/TopBanner";
import Statics from "../../components/statics/Statics";
import SpeakerDetails from "../../components/team/SpeakerDetails";

const Speakers = () => {
  return (
    <>
       <Head>
            <title>Speaker Details</title>
        </Head>
      <TopBanner text="Speakers Single" indicator="Pages → Speakers" />
      <SpeakerDetails />
      <Statics />
    </>
  );
};

export default Speakers;
