import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div>
        <div>
          <img
            src="https://i.ibb.co/cxsVvvm/404.png"
            className="mx-auto h-[500px]"
            alt=""
          />

          <div className="flex justify-center">
            <button className="mt-10 btn-sm bg-[#646CFF] text-white rounded-sm font-semibold  md:btn md:bg-[#646CFF] md:text-white md:rounded-sm md:font-semibold md:tracking-wide">
              <Link to={"/"}> Back To Home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
