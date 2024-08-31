import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      heading: "AI-Accelerated Drug Discovery: Shaping the Future of Medicine",
      paragraph:
        "Explore how AI is transforming traditional drug discovery by drastically reducing timeframes and costs. Highlight success stories where AI identified promising drug candidates that are now in clinical trials.",
      backgroundImage: `url('https://images.rodpub.com/images/178/785_main.jpg')`,
    },
    {
      heading: "The Role of Explainable AI in Drug Development",
      paragraph:
        "Discuss the importance of transparency in AI models, focusing on how Explainable AI (XAI) helps researchers understand AI-driven predictions. Emphasize the role of XAI in gaining regulatory approval and building trust among stakeholders.",
      backgroundImage: `url('https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20231030092223/ri/750/src/images/news/ImageForNews_762967_16986721431587271.jpg')`,
    },
    {
      heading: 'Overcoming Challenges: The "Black Box" Problem in AI',
      paragraph:
        'Delve into the challenges posed by the "black box" nature of AI models in drug discovery. Highlight ongoing efforts to make AI systems more interpretable and the benefits this brings to drug development processes.',
      backgroundImage: `url('https://www.outsourcing-pharma.com/var/wrbm_gb_food_pharma/storage/images/_aliases/wrbm_large/publications/pharmaceutical-science/outsourcing-pharma.com/article/2019/09/18/ai-in-drug-development-acro-dia-and-owkin-to-talk-use-cases-and-what-comes-next/10160317-1-eng-GB/AI-in-drug-development-ACRO-DIA-and-Owkin-to-talk-use-cases-and-what-comes-next.jpg')`,
    },
    {
      heading: "AI in Personalized Medicine: Tailoring Treatments to Patients",
      paragraph:
        "Explore how AI-driven drug discovery is enabling the development of personalized therapies. Discuss how AI identifies biomarkers and tailors treatments to individual patient profiles, leading to more effective and safer drugs.",
      backgroundImage: `url('https://cdn.prod.website-files.com/624448b48f1eafc799f7d37d/667d8d6669fcc9c0083e4e17_AdobeStock_771538919%20(2)-p-500.jpeg')`,
    },
    {
      heading: "From Data to Discovery: How AI Analyzes Big Data in Pharma",
      paragraph:
        "Describe how AI models analyze vast datasets in the pharmaceutical industry, identifying patterns and making predictions that guide drug discovery. Focus on the impact of big data and AI in accelerating the development of new treatments.",
      backgroundImage: `url('https://media.licdn.com/dms/image/v2/D4D12AQGFy63rmR4uOw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1711205517690?e=2147483647&v=beta&t=UUfmK6Vx3-n1N040XyOx2e0MEMjBLI_2F8_Y0zQMkqY')`,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(slideInterval);
  }, []);

  const current = slides[currentSlide];

  return (
    <div className="slider">
      <button className="slider-btn prev-button" onClick={prevSlide}>
        <IoIosArrowBack />
      </button>
      <div
        className="slide"
        style={{ backgroundImage: current.backgroundImage }}
      >
        <div className="slide-content">
          <h2 className="text-[#2575ed]">{current.heading}</h2>
          <p>{current.paragraph}</p>
        </div>
      </div>
      <button className="slider-btn next-button" onClick={nextSlide}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Slider;
