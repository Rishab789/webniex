import React from "react";
import WhyTwo from "./WhyTwo";
import FAQ from "./FAQ";
import banner1 from "./../assets/bannerGIF.gif";
import banner2 from "./../assets/Develop Your web App With Us.gif";
import whatsapp from "./../assets/whatsapp.svg";
import "./EarnWithUs.css";

const EarnWithUs = () => {
  return (
    <div className="">
      <div className="relative ">
        {/* <img src={banner1} className='w-[100%] lg:h-[520px] lg:w-[100%] h-[150px]' alt="Banner 1" /> */}
        <img
          src={banner1}
          className="w-full h-[300px] sm:h-96 lg:h-screen"
          alt="Banner 1"
        />
        <a
          href="https://wa.me/7008716985"
          className="whatsapp-icon border no-underline text-sm md:text-lg p-3  md:p-2 rounded-full bg-white text-black absolute top-[65%] left-[20%] transform -translate-x-1/2"
        >
          <img src={whatsapp} width={50}></img>
        </a>
      </div>
      <div className="pb-10 mt-36">
        <img
          src={banner2}
          className="w-full h-[200px] sm:h-96 lg:h-screen"
          alt="Banner 2"
        />
      </div>
      <WhyTwo />
      <FAQ />
    </div>
  );
};

export default EarnWithUs;
