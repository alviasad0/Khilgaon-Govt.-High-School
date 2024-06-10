
const Testimonial = () => {
    return (
      <div className="mt-28 mb-20 max-w-screen-2xl mx-auto">
        <div className="w-[150px]  mx-auto">
          <h1 className="mb-16 pt-2  text-lg  md:text-3xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#73c0fe] via-[#906eff] to-[#bd34fe]">
            প্রশংসাপত্র
          </h1>
        </div>
        <div className=" relative ">
          <div className="mx-auto flex justify-center md:justify-start h-[480px] border-2 w-[315px] md:absolute  -top-[30px] left-[80px]">
            <img src="https://i.ibb.co/dc6gzL6/testimonioal.jpg" alt="" />
          </div>
          <div className=" bg-[#646CFF] h-[420px] grid grid-cols-2 md:grid-cols-3">
            <div></div>
            <div className="col-span-2 w-full h-full flex justify-center items-center">
              <div className="p-5 md:p-0">
                <p className="text-lg md:text-3xl text-white">
                  ইঞ্জিনিয়ারিং ইউনিভার্সিটি গার্লস স্কুল এন্ড কলেজ এর লক্ষ্য{" "}
                  <br />
                  ম্যানসম্মত শিক্ষা প্রদান করা যাতে করে একটি দক্ষ মানব সম্পদ{" "}
                  <br />
                  তৈরী হয়। একটা জাতি এর উন্নয়য়ন এর জন্য দক্ষ মানব সম্পদ <br />
                  এর প্রয়োজন।
                </p>
                <h1 className="text-xl md:text-[40px] text-white pt-10">
                  বদরুদ্দোজা ধ্রুব
                </h1>
                <p className="text-lg md:text-3xl text-white">
                  শিক্ষার্থী, ব্যাচ ২০১৭
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Testimonial;