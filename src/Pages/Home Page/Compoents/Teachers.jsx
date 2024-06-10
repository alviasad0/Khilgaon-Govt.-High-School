
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";


import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Teachers = () => {
     
    const [allData, setdata] = useState([]);

    

    useEffect(() => {
      fetch("/Teachers.json")
        .then((response) => response.json())
        .then((data) => setdata(data));
    }, []);

  return (
    <div className="max-w-screen-2xl mx-auto ">
      <div className="w-[200px] md:w-[400px] mx-auto">
        <h1 className="mb-16 pt-2 text-center text-lg  md:text-3xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#73c0fe] via-[#906eff] to-[#bd34fe]">
          আমাদের শিক্ষক
        </h1>
      </div>

      <div className="">
        <Swiper
          slidesPerView={3}
          centeredSlides={false}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className=" h-[501px] "
        >
          {allData.map((data) => (
            <div key={data._id}>
              <SwiperSlide className="">
                <div className="card card-compact w-full md:w-96  bg-base-100 h-[441px] shadow-xl">
                  <figure>
                    <div className="h-[310px] w-full">
                      <img
                        src={data.image}
                        alt="Shoes"
                        className="w-full h-full bg-cover"
                      />
                    </div>
                  </figure>
                  <div className="card-body text-center   h-1/3 md:h-[130px]">
                    <h2 className="text-lg md:text-2xl font-bold pt-0 md:pt-2 text-[#333333]">
                      {data.name}
                    </h2>
                    <p className="text-base md:text-lg font-bold text-[#828282]">
                      {data.subject}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Teachers;
