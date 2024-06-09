
const Contribution = () => {
    return (
      <div className="max-w-screen-2xl mx-auto mt-28">
        <div className="w-[250px] md:w-[400px] mx-auto">
          <h1 className="mb-16 pt-2 text-center text-lg  md:text-3xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#73c0fe] via-[#906eff] to-[#bd34fe]">
            আমাদের ছাত্রদের কৃতিত্ব
          </h1>
        </div>
        <div className="h-[850px] md:h-[500px] bg-[#f4f4f4] rounded-lg ">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1 flex justify-center items-center px-5 py-5 md:py-0 md:px-0 ">
              <div>
                <h1 className="text-2xl font-bold text-[#3C3C43] ">
                  তাহমিদ হাসান সাগর
                </h1>
                <p className="text-base font-bold text-[#3C3C43] pt-2">
                  সপ্তম শ্রেণি , রোল-১২, শাখা - খ
                </p>
              <p className="w-full pt-10 text-[#484848] md:w-[412px]">
                দুপুরে ঘুম থেকে উঠে বাসায় নাশতা করেননি মো. আশিক। তিনি ঘর থেকে
                বেরিয়েছেন শিঙাড়া খাবেন বলে। মুখে মাস্ক ছিল, তবে তা থুতনিতে
                নামানো। এ অবস্থায় ভ্রাম্যমাণ আদালতের সামনে পড়েন এই তরুণ।
                স্বাস্থ্যবিধি না মানা ও চলাচলের জরুরি কারণ না থাকার অপরাধে তাঁকে
                ২০০ টাকা জরিমানা করা হয়। <br /> রাজধানীর কাওলা বাজার এলাকায় আজ
                বৃহস্পতিবার দুপুরের ঘটনা এটি।
              </p>
              </div>
            </div>
            <div className="flex-1  ">
              <div className="">
                <div className="w-full h-[500px] flex justify-center items-center rounded-lg">
                  <img
                    className="px-5 md:px-0  h-[365px] rounded-lg"
                    src="https://i.ibb.co/WBLtgpM/contribution-section.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contribution;