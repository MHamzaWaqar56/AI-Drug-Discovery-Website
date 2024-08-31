import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className="w-full bg-[#dfdfdf] px-[24%] py-[30px]">
          <h2 className="text-left text-[24px] mb-[25px] mt-0 p-0 font-[800]">
            Our Privacy Policy
          </h2>
          <p className=" text-left mb-[30px] text-[1rem] ">
            If you are a journalist and wish to speak with the Drug Discovery
            media team, you can contact us at{" "}
            <span className="text-[#00CBFF] hover:text-[#25c0e7]">
              {" "}
              <NavLink to="mailto:media@drugdiscovery.org">
                {" "}
                media@drugdiscovery.org
              </NavLink>
            </span>
            .
          </p>
        </div>

        <div className="w-full px-[30px] py-[10px] flex flex-col">
          <div className="w-full flex">
            <div className="w-1/2 p-2 flex justify-center">
              <p className=" p-5 w-[80%] text-justify">
                At [ITSOLERA], we are committed to protecting your privacy. Any
                personal information collected through our AI drug discovery
                website will be used solely for the purpose of enhancing your
                experience and improving our services. We do not share your data
                with third parties without your explicit consent, except as
                required by law. Our use of AI is designed to ensure the
                security and confidentiality of your data, adhering to the
                highest industry standards for data protection and privacy. This
                policy helps assure users that their data is being handled
                responsibly and securely.
              </p>
            </div>
            <div className="w-1/2 p-2 flex justify-center">
              <img
                className="p-4 w-[80%]"
                src="https://proschool.ai/static/media/Privacy-Policy-image.937ce7a886c63f55be1f.png"
                alt="privacy"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
