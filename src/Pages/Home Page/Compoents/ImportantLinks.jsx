import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const ImportantLinks = () => {
    const [allData, setdata] = useState([]);

    const displayAnnouncements = allData.slice(0, 6);

    useEffect(() => {
      fetch("/ImportantLinks.json")
        .then((response) => response.json())
        .then((data) => setdata(data));
    }, []);
    return (
      <div>
        <div className="w-[250px]  mx-auto">
          <h1 className="mb-16 text-center text-lg  md:text-3xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#73c0fe] via-[#906eff] to-[#bd34fe]">
            প্রয়োজনীয় লিংক
          </h1>
        </div>
        <div>
          <div className="rounded-lg bg-[#F4F4F4] h-[392px]">
            <div className="pt-5 pl-5">
              {displayAnnouncements.map((data) => (
                <div key={data._id}>
                  <p className="flex items-center text-lg font-bold pt-5 text-[#3C3C43] ">
                    <span className="pr-3 text-2xl font-extrabold">
                      <MdOutlineKeyboardArrowDown />
                    </span>
                    <Link to={`/announcementDetails/${data._id}`}>
                      {data.link}
                    </Link>
                  </p>
                </div>
              ))}
            </div>
            <div className="">
              {allData.length > 5 ? (
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

export default ImportantLinks;