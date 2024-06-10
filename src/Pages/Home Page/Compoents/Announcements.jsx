import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Announcements = () => {

     const [allData, setdata] = useState([]);

     useEffect(() => {
       fetch("/Announcements.json")
         .then((response) => response.json())
         .then((data) => setdata(data));
     }, []);
    return (
      <div>
        <div className="w-full h-10 bg-[#646CFF]">
          <div className="max-w-screen-2xl mx-auto  ">
            <Marquee className="text-white text-xl font-bold">
              {allData.map((data) => (
                <div key={data._id}>
                  <p className="text-lg font-medium pt-2 mr-16">
                    <Link to={`/announcementDetails/${data._id}`}>
                      ***{data.announcement}***
                    </Link>
                  </p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    );
};

export default Announcements;