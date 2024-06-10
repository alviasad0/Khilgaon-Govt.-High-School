const InstituteInformation = () => {
  return (
    <div className="mt-28 max-w-screen-2xl mx-auto">
      <div className="w-[200px] md:w-[400px] mx-auto">
        <h1 className="mb-16 pt-2 text-center text-lg  md:text-3xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#73c0fe] via-[#906eff] to-[#bd34fe]">
          প্রতিষ্ঠানের তথ্য
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex justify-center h-[520px] items-center bg-[#F6F6F7] rounded-lg">
          <div className="">
            <div className="flex gap-6 items-center px-4 md:px-0">
              <div>
                <img
                  className="h-[160px] w-[220px]"
                  src="https://i.ibb.co/4Rkd9zR/information-profile-picture.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#3C3C43]">
                  মেহেরুন্নেছা
                </h1>
                <p className="text-base text-[#484848] font-bold">
                  প্রধান শিক্ষক,
                  <br /> খিলগাঁও সরকারী উচ্চ বিদ্যালয়
                </p>
              </div>
            </div>
            <div>
              <p className="text-base text-[#484848] px-4 md:px-0 w-full md:w-[420px] pt-6 text-center">
                ক্ষুধা ও দারিদ্রমুক্ত উন্নত দেশ গঠনের জন্য প্রয়োজন সৎ, দক্ষ,
                দেশপ্রেমিক ও মানবিক মূল্যবোধ সম্পন্ন সুনাগরিক। আর এ লক্ষকে সামনে
                রেখে খিলগাঁও সরকারি উচ্চ বিদ্যালয় জন্মলগ্ন থেকেই তার বিভিন্ন
                শিখন-শেখান কার্যক্রম চালিয়ে যাচ্ছে। উদার, সংস্কারমুক্ত,
                মুক্তবুদ্ধির অধিকারী, সৃজনশীল ও প্রযুক্তি জ্ঞান সমৃদ্ধ ভবিষ্যৎ
                প্রজন্ম তৈরির লক্ষে গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের শিক্ষা
                মন্ত্রণালয় কর্তৃক গৃহীত যুগোপযোগী সকল পদক্ষেপকে আমরা স্বাগত
                জানিয়েছি এবং কার্যকর করেছি।
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="h-[520px]">
            <img
              src="https://i.ibb.co/vzw4Cpk/information-background.jpg"
              alt=""
            />
          </div>
          <div className="relative -top-[450px] md:-top-[340px] w-full flex justify-center  ">
            <img
              src="https://i.ibb.co/V3RNyfX/youtube-logo.png"
              alt=""
              className="h-36 w-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteInformation;
