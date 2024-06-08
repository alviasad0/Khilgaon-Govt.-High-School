const Header = () => {
  return (
    <div>
      <div className="w-full bg-[#C3BDFF] h-32">
        <div className="flex justify-center gap-4 pt-4">
          <img
            className="w-12 md:w-24 h-12 md:h-24"
            src="https://i.ibb.co/N7x1HVQ/school-logo.png"
            alt=""
          />
          <div>
            <div>
              <h1 className=" text-2xl md:text-4xl font-semibold text-[#3C3C43]">
                Khilgaon Govt. High School
              </h1>
              <p className="text-center pt-2 text-xl md:text-3xl font-semibold text-[#646CFF]">
                EIIN 108376
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
