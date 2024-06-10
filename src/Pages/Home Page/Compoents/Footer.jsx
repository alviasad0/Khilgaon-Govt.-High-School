import { CiInstagram } from "react-icons/ci";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="mt-48">
      <div className="bg-[#646CFF] md:h-[332px] flex items-center">
        <footer className="footer p-10 text-[#F6F6F7] max-w-screen-2xl mx-auto items-center">
          <aside className="flex gap-5 items-center">
            <img
              src="https://i.ibb.co/N7x1HVQ/school-logo.png"
              alt=""
              className="w-20 h-20"
            />
            <p className="text-lg md:text-2xl font-bold">
              খিলগাঁও সরকারি উচ্চ বিদ্যালয়
            </p>
          </aside>
          <nav className="font-bold">
            <h6 className="footer-title">প্রচ্ছদ</h6>
            <a className="link link-hover">একাডেমিক</a>
            <a className="link link-hover">ভরতি কার্যক্রম</a>
            <a className="link link-hover">একাডেমিক</a>
            <a className="link link-hover">ক্যাম্পাস</a>
          </nav>
          <nav>
            <h6 className="footer-title">প্রচ্ছদ</h6>
            <a className="link link-hover">যোগাযোগ</a>
            <a className="link link-hover">ভরতি কার্যক্রম</a>
            <a className="link link-hover">তথ্য</a>
            <a className="link link-hover">ভরতি কার্যক্রম</a>
          </nav>
          <nav className="space-y-3">
            <a className="link link-hover flex gap-4 text-base items-center">
              <span className="text-2xl">
                <FaFacebook />
              </span>{" "}
              www.facebook/kghs12.com
            </a>
            <a className="link link-hover flex gap-4 text-base items-center">
              <span className="text-2xl">
                <FaPhoneAlt />
              </span>{" "}
              01223312127
            </a>
            <a className="link link-hover flex gap-4 text-base items-center">
              <span className="text-2xl">
                <IoMail />
              </span>{" "}
              kghs17@yahoo.com
            </a>
            <a className="link link-hover flex gap-4 text-base items-center">
              <span className="text-2xl">
                <CiInstagram />
              </span>{" "}
              kghs17.instagram.com
            </a>
          </nav>
        </footer>
      </div>
      <div>
        <footer className="footer footer-center p-4 bg-[#4D54E0] text-sm text-white">
          <aside>
            <p>Copyright © খিলগাঁও সরকারি উচ্চ বিদ্যালয়</p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
