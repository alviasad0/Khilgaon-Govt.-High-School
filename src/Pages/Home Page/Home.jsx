
import AtaGlance from "./Compoents/AtaGlance";
import Banner from "./Compoents/Banner";
import ComingEvents from "./Compoents/ComingEvents";
import Contribution from "./Compoents/Contribution";
import Gallery from "./Compoents/Gallery";
import ImportantLinks from "./Compoents/ImportantLinks";
import InstituteInformation from "./Compoents/InstrituteInformation";
import LatestAnnouncements from "./Compoents/LatestAnnouncements";
import Magazine from "./Compoents/Magazine";
import Result from "./Compoents/Result";
import Teachers from "./Compoents/Teachers";
import Testimonial from "./Compoents/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestAnnouncements></LatestAnnouncements>
      <div className=" max-w-screen-2xl mx-auto h-[500px] mt-28 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <ComingEvents></ComingEvents>
        </div>
        <div className="flex-1">
          <ImportantLinks></ImportantLinks>
        </div>
      </div>
      <Result></Result>
      <Contribution></Contribution>
      <InstituteInformation></InstituteInformation>
      <Teachers></Teachers>
      <div className=" max-w-screen-2xl mx-auto h-[1250px] md:h-[600px] mt-3 md:mt-28 flex flex-col md:flex-row gap-16 md:gap-4">
        <div className="flex-1">
          <Magazine></Magazine>
        </div>
        <div className="flex-1">
          <Gallery></Gallery>
        </div>
      </div>
      <Testimonial></Testimonial>
      <AtaGlance></AtaGlance>
    </div>
  );
};

export default Home;
