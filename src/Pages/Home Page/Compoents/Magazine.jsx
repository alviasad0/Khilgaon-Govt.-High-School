import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Magazine = () => {
    const [allData, setdata] = useState([]);

    const displayAnnouncements = allData.slice(0, 7);

     useEffect(() => {
       fetch("/Magazine.json")
         .then((response) => response.json())
         .then((data) => setdata(data));
     }, []);
    return (
      <div>
        <div>
          <div className="w-[150px]  ">
            <h1 className="mb-16 pt-2  text-lg  md:text-3xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#73c0fe] via-[#906eff] to-[#bd34fe]">
              ম্যাগাজিন
            </h1>
          </div>
          <div>
            <div className="rounded-lg bg-[#F4F4F4] h-[518px]">
              <div className="pt-5 pl-5">
                {displayAnnouncements.map((data) => (
                  <div className="" key={data._id}>
                    <p className="flex items-center text-lg  py-4 text-[#3C3C43] font-bold">
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
                {allData.length > 7 ? (
                  <div className="mt-8 w-26 mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#73c0fe] via-[#906eff] to-[#bd34fe]">
                    <Link
                      className="flex justify-center font-bold  "
                      to={`/allAnnouncements`}
                    >
                      আরো দেখুন
                      <span className="pl-3  text-2xl font-extrabold  text-[#bd34fe] ">
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
      </div>
    );
};

export default Magazine;