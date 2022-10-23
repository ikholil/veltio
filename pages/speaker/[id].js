import TopBanner from "../../components/banner/TopBanner";
import Footer from "../../components/footer/Footer";
import Statics from "../../components/statics/Statics";
import SpeakerDetails from "../../components/team/SpeakerDetails";

const Speakers = () => {
  return (
    <div>
      <TopBanner text="Speakers Single" />
      <SpeakerDetails />
      <Statics />
      <Footer />
    </div>
  );
};

export default Speakers;
