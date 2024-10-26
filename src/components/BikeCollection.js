import React from "react";
import aboutGIF from "./../../src/assets/aboutGIF.gif";
import { FaReact } from "react-icons/fa";
import { IoLogoAngular } from "react-icons/io";
import { FaWordpress } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";

const BikeCollection = () => {
  const style = { display: "inline" };
  const reactStyle = { color: "#61DBFB", display: "inline" };
  const angularStyle = { color: "#dd1b16", display: "inline" };

  return (
    <div className="mt-20">
      <section>
        <h2 className="text-center text-6xl  font-bold">About</h2>
        <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 flex flex-col  items-center p-5">
          <p className="text">
            Hi, my name is Prakash. I am a Website and App developer having more
            than one year of experience. For building websites I use React{" "}
            <FaReact style={reactStyle} /> , Angular{" "}
            <IoLogoAngular style={angularStyle} /> , Wordpress{" "}
            <FaWordpress style={style} /> and for building apps I am using
            NoCode platform FlutterFlow <RiFlutterFill style={style} />. I also
            provide services to any existing websites of yours, any bugs and
            issue, we will provide you best service.
          </p>
          <div>
            <img src={aboutGIF} width={500}></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BikeCollection;
