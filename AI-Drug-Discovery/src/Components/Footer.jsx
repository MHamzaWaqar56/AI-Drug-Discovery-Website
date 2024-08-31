import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-[#042d89] pt-10 mt-4">
      <div className="w-full ">
        <h2
          className="text-[38px] cursor-pointer font-[700] text-white "
          style={{ fontFamily: "cursive" }}
        >
          <NavLink to="/">
            {" "}
            AI Drug <br />
            Discovery
          </NavLink>
        </h2>
      </div>

      <div className="mt-20 w-[90%] xl:w-[85%] 2xl:w-[75%] px-5 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-white ">
        <div className="">
          <h1 className="text-[18px] text-left font-[700]">ABOUT</h1>
          <p className="text-[13px] text-left font-[400] mt-5">
            We leverage Artificial Intelligence (AI) to transform drug discovery
            by speeding up the identification of drug candidates and optimizing
            compounds for safety and efficacy. Our focus on Explainable AI (XAI)
            ensures transparency, fostering trust and facilitating regulatory
            approval. Join us in pioneering the future of medicine.
          </p>
        </div>

        <div className="flex content-center flex-wrap flex-col">
          <h1 className="text-[18px] font-[700] text-left">PAGES</h1>
          <ul className="list-disc mt-5 flex text-left flex-col gap-3 pl-3">
            <li className="text-[12px] list-none text-left font-[400] hover:text-[#385bce] cursor-pointer ">
              <NavLink to="/contactus">CONTACT US</NavLink>
            </li>
            <li className="text-[12px] hover:text-[#385bce] text-left list-none font-[400]">
              <NavLink to="/aboutus">ABOUT US</NavLink>
            </li>
            <li className="text-[12px] font-[400] list-none text-left hover:text-[#385bce]">
              <NavLink to="/privacypolicy">PRIVACY POLICY</NavLink>
            </li>
            <li className="hover:text-[#385bce] text-[12px] text-left font-[400] list-none">
              ADDRESS
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-[18px] font-[700] text-left">CONTACT</h1>
          <ul className=" mt-5 flex flex-col gap-3 text-left">
            <li className="text-[12px] font-[400] text-left ">
              <div className="flex gap-5 ">
                <FaLocationDot className="text-3xl text-[#2575ed]" />
                <span>
                  Javeed Arcade, Office #2A St 3, G-12/1 G-12, Islamabad,
                  Islamabad Capital Territory 46000, Pakistan
                </span>
              </div>
            </li>
            <li className="text-[12px] font-[400] text-left">
              <div className="flex gap-5 ">
                <FaPhone className="text-[16px] text-[#2575ed]" />
                <span>+923000000000</span>
              </div>
            </li>
            <li className="text-[12px] font-[400]">
              <div className="flex gap-5 ">
                <IoMail className="text-xl text-[#2575ed]" />
                <span className="hover:text-[#2525ed]">
                  <NavLink to="mailto:info@drugdiscovery.org">
                    {" "}
                    info@drugdiscovery.org
                  </NavLink>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-white py-[15px] bg-[#0e2b70] text-[14px] font-[400] text-center mt-20">
        Copyright © 2024 ITSOLERA | Design & Develop by{" "}
        <span className="cursor-pointer hover:text-[#2575ed]">
          ML Team Epsilon
        </span>
      </p>
    </section>
  );
};

export default Footer;
