
import Banner from "./Compoents/Banner";
import ComingEvents from "./Compoents/ComingEvents";
import ImportantLinks from "./Compoents/ImportantLinks";
import LatestAnnouncements from "./Compoents/LatestAnnouncements";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestAnnouncements></LatestAnnouncements>
      <div className=" max-w-screen-2xl mx-auto h-[500px] mt-24 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <ComingEvents></ComingEvents>
        </div>
        <div className="flex-1">
          <ImportantLinks></ImportantLinks>
        </div>
      </div>
      <h1 className="text-center">This is the home components</h1>
    </div>
  );
};

export default Home;
