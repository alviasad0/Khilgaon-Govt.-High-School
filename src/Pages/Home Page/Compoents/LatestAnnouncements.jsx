import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const LatestAnnouncements = () => {
   const [allData, setdata] = useState([]);
 
     const displayAnnouncements = allData.slice(0,5)
    
     useEffect(() => {
       fetch("/LatestAnnouncements.json")
         .then((response) => response.json())
         .then((data) => setdata(data));
     }, []);
    
    
    
    
    return (
      <div className="mt-24 ">
        <div className="w-[220px]  mx-auto">
          <h1 className="mb-16 text-center text-lg  md:text-3xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#73c0fe] via-[#906eff] to-[#bd34fe]">
            সর্বশেষ বিজ্ঞপ্তি
          </h1>
        </div>
        <div className="max-w-screen-2xl mx-auto">
          <div className="rounded-lg bg-[#646CFF] h-[392px]">
            <div className="pt-10 pl-10">
              {displayAnnouncements.map((data) => (
                <div key={data._id}>
                  <p className="flex items-center text-lg font-medium pt-5 text-white ">
                    <span className="pr-3 text-2xl font-extrabold">
                      <MdOutlineKeyboardArrowDown />
                    </span>
                    <Link to={`/announcementDetails/${data._id}`}>
                      {data.announcement}
                    </Link>
                  </p>
                </div>
              ))}
            </div>
            <div className="">
              {allData.length > 5 ? (
                <div className="mt-10">
                  <Link
                    className="flex justify-center text-white font-bold"
                    to={`/allAnnouncements`}
                  >
                    আরো দেখুন
                    <span className="pl-3 text-white text-2xl font-extrabold">
                      <MdOutlineKeyboardArrowDown />
                    </span>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default LatestAnnouncements;