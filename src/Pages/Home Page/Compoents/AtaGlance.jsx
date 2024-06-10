
const AtaGlance = () => {
    return (
      <div className="max-w-screen-2xl mx-auto mt-32">
        <div className="w-[100px] md:w-[180px]  mx-auto">
          <h1 className="mb-16 pt-2  text-lg  md:text-3xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#73c0fe] via-[#906eff] to-[#bd34fe]">
            এক নজরে
          </h1>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
            {/* card 1  */}
            <div className=" bg-[#F6F6F7] rounded-lg w-[279px] h-[380px] mx-auto">
              <div className=" h-1/2">
                <img
                  src="https://i.ibb.co/d74JdmX/teacher-removebg-preview.png"
                  alt=""
                  className="h-full mx-auto p-5"
                />
              </div>
              <div className=" h-1/2 flex justify-center items-center ">
                <p className="font-bold text-xl">
                  <span className="flex justify-center text-6xl font-bold text-black">
                    61
                  </span>{" "}
                  <br /> Total teachers
                </p>
              </div>
            </div>
            {/* card 2  */}
            <div className=" bg-[#F6F6F7] rounded-lg w-[279px] h-[380px] mx-auto">
              <div className=" h-1/2">
                <img
                  src="https://i.ibb.co/ctHH4Cv/lecture-removebg-preview.png"
                  alt=""
                  className="h-full mx-auto p-5"
                />
              </div>
              <div className=" h-1/2 flex justify-center items-center ">
                <p className="font-bold text-xl">
                  <span className="flex justify-center text-6xl font-bold text-black">
                    19
                  </span>{" "}
                  <br /> Total Lectures
                </p>
              </div>
            </div>
            {/* card 3  */}
            <div className=" bg-[#F6F6F7] rounded-lg w-[279px] h-[380px] mx-auto">
              <div className=" h-1/2">
                <img
                  src="https://i.ibb.co/5jQ5tmP/students-removebg-preview.png"
                  alt=""
                  className="h-full mx-auto p-5"
                />
              </div>
              <div className=" h-1/2 flex justify-center items-center ">
                <p className="font-bold text-xl">
                  <span className="flex justify-center text-6xl font-bold text-black">
                    3332
                  </span>{" "}
                  <br /> Total Students
                </p>
              </div>
            </div>
            {/* card 4  */}
            <div className=" bg-[#F6F6F7] rounded-lg w-[279px] h-[380px] mx-auto">
              <div className=" h-1/2">
                <img
                  src="https://i.ibb.co/CWJbvfp/calender-removebg-preview.png"
                  alt=""
                  className="h-full mx-auto p-5"
                />
              </div>
              <div className=" h-1/2 flex justify-center items-center ">
                <p className="font-bold text-xl">
                  <span className="flex justify-center text-6xl font-bold text-black">
                    59
                  </span>{" "}
                  <br /> Total Years
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AtaGlance;