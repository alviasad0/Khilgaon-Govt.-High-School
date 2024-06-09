
import Banner from "./Compoents/Banner";
import ComingEvents from "./Compoents/ComingEvents";
import Contribution from "./Compoents/Contribution";
import ImportantLinks from "./Compoents/ImportantLinks";
import LatestAnnouncements from "./Compoents/LatestAnnouncements";
import Result from "./Compoents/Result";

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
    </div>
  );
};

export default Home;
