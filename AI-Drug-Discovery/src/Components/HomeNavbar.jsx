import { NavLink } from "react-router-dom";
import { MdLogin } from "react-icons/md";

function HomeNavbar() {
  return (
    <div className="px-3 lg1:hidden pt-[20px] pb-[20px]">
      <nav className="w-[100%] flex items-center justify-evenly">
        <div className="w-[20%] flex justify-center">
          <h2
            className="text-[22px] font-[700] text-white "
            style={{ fontFamily: "cursive" }}
          >
            AI Drug <br />
            Discovery
          </h2>
        </div>

        {/* navigation menu */}

        <div className="w-[60%]">
          <ul className="text-[16px] font-[700] text-[#555555] flex w-full justify-center">
            <li className=" px-[20px] py-[5px] text-white hover:text-[#00CBFF]">
              <NavLink to="/"> HOME </NavLink>
            </li>
            <li className=" text-white  px-[20px] py-[5px] hover:text-[#00CBFF]">
              <NavLink to="/aboutus"> ABOUT US </NavLink>
            </li>

            <li className=" text-white px-[20px] py-[5px] hover:text-[#00CBFF]">
              <NavLink to="/drugdiscovery">DRUG DISCOVERY</NavLink>
            </li>

            <li className=" text-white px-[20px] py-[5px] hover:text-[#00CBFF]">
              <NavLink to="/contactus">CONTACT US</NavLink>
            </li>
          </ul>
        </div>

        <div className="w-[20%] flex justify-center">
          <p className="flex justify-center font-[600] rounded-md border-[1px] px-[10px] py-[15px] text-white hover:bg-[#00CBFF] hover:border-[#00CBFF]">
            ML Team Epsilon
          </p>
        </div>
      </nav>
    </div>
  );
}

export default HomeNavbar;
