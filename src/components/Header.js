import { Link } from "react-router-dom";

const Header = () => {
  return (
    // Container class
    <div className="w-full flex justify-center bg-white z-10 sticky top-0 shadow-lg">
      <div className="border-black p-2 flex justify-between items-center w-[75rem]">
        <Link to={"/"}>
          <img
            src="https://vivancetravels.com/extras/custom/TMX5193291565602439/images/logo.png"
            alt="logo"
            className="w-16"
          />
        </Link>
        <div className="flex items-center text-[#05058d]">
          <p className="pr-2">FLIGHTS</p>
          <img
            className="w-8 h-8"
            src="https://vivancetravels.com/extras/system/template_list/template_v1/images/bulleting.png"
            alt="flight-image"
          />
        </div>
        <div>
          <button className="pr-8 text-[#05058d]">Sign In/ Sign Up</button>
          <button className="currency-btn">INR</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
