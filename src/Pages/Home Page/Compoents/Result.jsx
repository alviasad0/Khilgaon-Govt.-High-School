
const Result = () => {
    return (
      <div className="max-w-screen-2xl mx-auto mt-[600px] md:mt-28 ">
        <div
          className="hero h-[400px] rounded-xl "
          style={{
            backgroundImage: "url(https://i.ibb.co/N7h78C3/result.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-40  rounded-lg"></div>
          <div className="hero-content text-center text-white">
            <div className="">
              <h1 className="mb-5 text-2xl  md:text-5xl font-bold">
                সকল শ্রেনীর ফলাফল প্রকাশ করা হয়েছে
              </h1>

              <button className="mt-8 tracking-wider btn bg-[#646CFF] border-none text-white">
                ফলাফল দেখুন
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Result;