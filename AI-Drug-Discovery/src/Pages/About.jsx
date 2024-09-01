import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Slider from "../Components/Slider/Slider";

const About = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <div
        style={{
          animation: "slideInTop 2s ease-out forwards",
        }}
      >
        <h3 className="text-[36px] font-[700] pt-[20px]">Our Mission</h3>

        <p className="text-[16px] pb-[10px]">
          ML Team Epsilon Dedicated to develop AI Drug Discovery
        </p>
      </div>
      <div className="w-full flex">
        <div
          className="w-1/2 about-para p-2 flex justify-center"
          style={{
            animation: "slideInLeft 2s ease-out forwards",
          }}
        >
          <p className=" p-5 w-[80%] text-justify">
            At Team Epsilon , Our mission is to revolutionize drug discovery by
            harnessing the power of Artificial Intelligence (AI) to accelerate
            the development of safer, more effective therapies. We are dedicated
            to providing predictive insights and groundbreaking intelligence
            that optimize drug candidates and enhance precision in
            pharmaceutical research. By integrating transparency and
            explainability into our AI models, we aim to build trust, foster
            innovation, and ultimately improve global healthcare outcomes.
          </p>
        </div>
        <div
          className="about-img w-1/2 p-2 flex justify-center"
          style={{
            animation: "slideInRight 2s ease-out forwards",
          }}
        >
          <img
            className="p-4 w-[80%]"
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*XtlmUtDHkQItojjcfxLCcg.jpeg"
            alt="about"
          />
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


          @keyframes slideInTop {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media only screen and (min-width: 320px) and (max-width : 850px){

.about-img{
display: none;
}

.about-para{
width: 100%;
}

}


        `}
      </style>
    </>
  );
};

export default About;
