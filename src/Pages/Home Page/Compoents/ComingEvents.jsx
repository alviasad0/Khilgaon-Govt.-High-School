import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const ComingEvents = () => {
  const [allData, setdata] = useState([]);

  const displayAnnouncements = allData.slice(0, 4);

  useEffect(() => {
    fetch("/Events.json")
      .then((response) => response.json())
      .then((data) => setdata(data));
  }, []);
  return (
    <div>
      <div className="w-[250px]  mx-auto">
        <h1 className="mb-16 text-center text-lg  md:text-3xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#73c0fe] via-[#906eff] to-[#bd34fe]">
          কামিং ইভেন্ট
        </h1>
      </div>
      <div>
        <div className="rounded-lg bg-[#F4F4F4] h-[392px]">
          <div className="pt-5 pl-5">
            {displayAnnouncements.map((data) => (
              <div className="flex gap-5  py-2 " key={data._id}>
                <div className="text-white h-[60px] w-[60px] bg-[#646CFF] rounded-lg">
                  <p className="text-center pt-2">{data.date}</p>
                  <p className="text-center">{data.month}</p>
                </div>
                <p className=" text-lg font-bold pt-5 text-[#3C3C43] ">
                  <Link to={`/announcementDetails/${data._id}`}>
                    {data.eventTitle}
                  </Link>
                </p>
              </div>
            ))}
          </div>
          <div className="">
            {allData.length > 3 ? (
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
  );
};

export default ComingEvents;
