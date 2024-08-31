import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import backgroundImage from "../Images/AI DD 5.jpg";
import { NavLink } from "react-router-dom";

const DrugDiscovery = () => {
  return (
    <>
      <Navbar />

      <div
        className="w-full"
        style={{
          background: `url(${backgroundImage}) no-repeat center center fixed`,
          width: "100%",
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          position: "relative",
        }}
      >
        <div
          className="flex w-full flex-col px-[300px] justify-center"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        >
          <h2
            className="text-[#2575ed] text-left mb-[20px] font-[700] text-[22px]"
            style={{
              animation: "slideInLeft 2s ease-out forwards",
            }}
          >
            Predictive insights and groundbreaking intelligence for drug{" "}
          </h2>
          <p
            className="text-white text-[20px] text-left"
            style={{
              animation: "slideInRight 2s ease-out forwards",
            }}
          >
            Predictive insights and groundbreaking intelligence in drug
            discovery leverage advanced AI models to rapidly identify potential
            drug candidates and optimize their efficacy. By analyzing vast
            datasets, these technologies provide precise, actionable insights
            that drive the creation of safer and more effective therapies.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col pt-[40px] pb-[30px]">
        <div className="w-full">
          <h2 className="text-[25px] font-[700] pb-[30px]">
            AI Prediction For Drugs Discovery
          </h2>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-1/2 bg-[#e0e3e7] rounded-md">
            <br /> <br />
            <input
              type="text"
              className="w-[80%] border-black border-[1px] focus:outline-none focus:border-[#e0e3e7] py-2 px-4"
              placeholder="input 1"
            />
            <br /> <br />
            <input
              type="text"
              className="w-[80%] border-black border-[1px] focus:outline-none focus:border-[#e0e3e7] py-2 px-4"
              placeholder="input 2"
            />
            <br /> <br />
            <input
              type="text"
              className="w-[80%] border-black border-[1px] focus:outline-none focus:border-[#e0e3e7] py-2 px-4"
              placeholder="input 3"
            />
            <br /> <br />
            <input
              type="text"
              className="w-[80%] border-black border-[1px] focus:outline-none focus:border-[#e0e3e7] py-2 px-4"
              placeholder="input 4"
            />
            <br /> <br />
            <button className="px-[10px] py-[5px] text-[20px] font-[600] border-[1px] border-black hover:bg-[#2575ed] hover:text-white hover:border-[#2575ed] ">
              Submit
            </button>
            <br />
            <p className="text-right pr-[10px] pb-[10px] hover:text-[#2575ed]">
              <NavLink to="/">Back to Home</NavLink>
            </p>
          </div>
        </div>
      </div>

      <Footer />

      {/* Add CSS keyframes for the animations */}
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

export default DrugDiscovery;
