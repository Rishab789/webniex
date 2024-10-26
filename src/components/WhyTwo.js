import React from "react";
import svg1 from "./../assets/1.svg";
import svg2 from "./../assets/2.svg";
import svg3 from "./../assets/3.svg";
import svg4 from "./../assets/4.svg";
import services from "./../services/myServices";
import "./WhyTwo.css";

const WhyTwo = () => {
  return (
    <div className="container mx-auto p-6 mt-20">
      <p className="text-center text-6xl font-bold">Webniex Services</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {services.map((item) => (
          <div className="border p-4 shadow-lg rounded-lg card" key={item.id}>
            <img
              src={item.icon}
              width={100}
              className="mx-auto mb-4"
              alt="Rapido Rental Protect"
            />
            <p className="text-lg">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyTwo;
