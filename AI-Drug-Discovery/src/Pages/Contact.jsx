import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <div
          className="w-full bg-[#dfdfdf3b] px-[24%] py-[30px]"
          style={{ animation: "fadeIn 2s ease-out forwards" }}
        >
          <h2
            className="text-left text-[24px] mb-[25px] mt-0 p-0 font-[800]"
            style={{
              animation: "slideInLeft 2s ease-out forwards",
            }}
          >
            Press Enquiries
          </h2>
          <p
            className="text-left mb-[30px] text-[1rem]"
            style={{
              animation: "slideInRight 2s ease-out forwards",
            }}
          >
            If you are a journalist and wish to speak with the Drug Discovery
            media team, you can contact us at{" "}
            <span className="text-[#00CBFF] hover:text-[#25c0e7]">
              <NavLink to="mailto:media@drugdiscovery.org">
                media@drugdiscovery.org
              </NavLink>
            </span>
            .
          </p>
        </div>

        <div className="w-full px-[24%] py-[30px] flex flex-col">
          <div className="w-full">
            <h2 className="text-left text-[24px] mb-[25px] mt-0 p-0 font-[800]">
              Office Address
            </h2>
          </div>
          <div className="w-full flex">
            <div className="w-1/2">
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
                        info@drugdiscovery.org
                      </NavLink>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.2863904034393!2d72.97218297485138!3d33.649740479910086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9793f9cd6adb%3A0xc80413c445adc703!2sITSOLERA!5e0!3m2!1sen!2s!4v1725016067246!5m2!1sen!2s"
                width="350"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      <style>
        {`
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-100%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(100%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default Contact;
