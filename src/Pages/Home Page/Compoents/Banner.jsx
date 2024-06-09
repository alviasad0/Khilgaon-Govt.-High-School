import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

const Banner = () => {
  return (
    <div>
      <div>
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {/* 1st slide   */}
            <SwiperSlide>
              {" "}
              <div
                className="hero h-[620px]"
                style={{
                  backgroundImage: "url(https://i.ibb.co/ZJ90d71/banner.png)",
                }}
              >
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="">
                    <h1 className="mb-5 text-2xl md:text-7xl text-white font-bold">
                      খিলগাঁও সরকারি উচ্চ বিদ্যালয়
                    </h1>

                    <button className="btn border-none text-white rounded-md mt-6 tracking-wide bg-[#646CFF]">
                      আরও জানুন
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* 2nd slide   */}
            <SwiperSlide>
              {" "}
              <div
                className="hero h-[620px]"
                style={{
                  backgroundImage: "url(https://i.ibb.co/ZJ90d71/banner.png)",
                }}
              >
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="">
                    <h1 className="mb-5 text-2xl md:text-7xl text-white font-bold">
                      খিলগাঁও সরকারি উচ্চ বিদ্যালয়
                    </h1>

                    <button className="btn border-none mt-6 text-white rounded-md tracking-wide bg-[#646CFF]">
                      আরও জানুন
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* 3rd slide   */}
            <SwiperSlide>
              {" "}
              <div
                className="hero h-[620px]"
                style={{
                  backgroundImage: "url(https://i.ibb.co/ZJ90d71/banner.png)",
                }}
              >
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="">
                    <h1 className="mb-5 text-2xl md:text-7xl text-white font-bold">
                      খিলগাঁও সরকারি উচ্চ বিদ্যালয়
                    </h1>

                    <button className="btn border-none mt-6 text-white rounded-md tracking-wide bg-[#646CFF]">
                      আরও জানুন
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
