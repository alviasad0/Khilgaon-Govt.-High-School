import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const TopLoginBtn = () => {
  return (
    <div className="max-w-screen-2xl mx-auto pt-2">
      <div className="flex justify-center md:justify-end ">
        <div className="flex gap-6">
          <div className="flex gap-4 items-center text-[#3C3C43]">
            <p>
              <FaPhoneAlt />
            </p>
            <h1> 09934304</h1>
          </div>
          <div className="flex gap-4 items-center text-[#3C3C43]">
            <p>
              <MdEmail />
            </p>
            <h1> info@kghs.com</h1>
          </div>
          <button className="btn-sm bg-[#646CFF] text-white rounded-sm font-semibold  md:btn md:bg-[#646CFF] md:text-white md:rounded-sm md:font-semibold md:tracking-wide">
            <Link to={"/login"}>Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopLoginBtn;
