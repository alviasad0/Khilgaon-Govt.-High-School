import { Link } from "react-router-dom";

const Navbar = () => {
 
  const links = (
    <>
      <li className="text-lg font-bold tracking-widest">
        <Link to="/">Home </Link>
      </li>
      <li className="text-lg font-bold tracking-widest">
        <Link to="/aboutUs">About Us </Link>
      </li>
      <li className="text-lg font-bold tracking-widest">
        <Link to="/academic">Academic </Link>
      </li>
      <li className="text-lg font-bold tracking-widest">
        <Link to="/notices">Notices </Link>
      </li>
      <li className="text-lg font-bold tracking-widest">
        <Link to="/onlineAdmission">Online Admission </Link>
      </li>
      <li className="text-lg font-bold tracking-widest">
        <Link to="/events">Events</Link>
      </li>
      <li className="text-lg font-bold tracking-widest">
        <Link to="/gallery">Gallery </Link>
      </li>
      <li className="text-lg font-bold tracking-widest">
        <Link to="/magazine">Magazine </Link>
      </li>
      <li className="text-lg font-bold tracking-widest">
        <Link to="/onlinePayment">Online Payment </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar ">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex mx-auto">
          <ul className="menu menu-horizontal ">{links}</ul>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
