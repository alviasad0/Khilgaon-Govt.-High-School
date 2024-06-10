import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Gallery = () => {
    return (
      <div>
        <div className="">
          <div className="w-[150px]  ">
            <h1 className="mb-16 pt-2  text-lg  md:text-3xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#73c0fe] via-[#906eff] to-[#bd34fe]">
              গ্যালারি
            </h1>
          </div>
          <div>
            <div className="rounded-lg bg-[#F4F4F4] h-[518px] p-5">
              <div className="grid grid-cols-4 grid-rows-3 gap-4 h-full ">
                <div className="row-span-2 col-span-2 object-cover h-full w-full ">
                  <img
                    src="https://i.ibb.co/sVTZVW1/image1.jpg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="">
                  <img
                    src="https://i.ibb.co/rpk0T0g/image2.jpg"
                    alt=""
                    className="bg-cover w-full h-full"
                  />
                </div>
                <div>
                  <img
                    className="w-full h-full"
                    src="https://i.ibb.co/30y2KXD/image3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-full"
                    src="https://i.ibb.co/DQ6dXKw/image4.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-full bg-center"
                    src="https://i.ibb.co/CBvVWs0/image5.jpg"
                    alt=""
                  />
                </div>
                <div className="col-span-4 ">
                  <h1 className="text-3xl font-bold text-[#3C3C43] pt-5">
                    বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৪
                  </h1>
                  <div className=" mt-10 md:mt-16 w-26 mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#73c0fe] via-[#906eff] to-[#bd34fe]">
                    <Link
                      className="flex justify-center font-bold  "
                      to={`/allAnnouncements`}
                    >
                      আরো দেখুন
                      <span className="pl-3   text-2xl font-extrabold  text-[#bd34fe] ">
                        <MdOutlineKeyboardArrowDown />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Gallery;