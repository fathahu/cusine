import React from "react";
import image1 from "../images/news4.png";
import sidepng from "../images/pattern.png";
// import map from "../images/map.png";

const Newsletter = () => {
  return (
    <>
      <div className=" relative py-10 md:py-32 ">
        <div className=" absolute top-36 md:top-64">
          <img className="w-10 h10 md:w-24 md:h-60" src={sidepng} alt="newsletter" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-0  ">
          <div className=" ">
            <img src={image1} className="w-full" alt="newsletter" />
          </div>
          <div className="py-6 md:py-0">
            <div>
              <p className=" ps-2 mb-8 bg-[#EB8E78] w-16 rounded-md text-white p-1">
                NEWS
              </p>
            </div>
            <div className="fontFamily2 font-ebold text-xl md:text-7xl w-full">
              <h1 className="md:w-[35rem]  leading-[1.2]">Don’t miss any of our offers and newsletters</h1>
            </div>
            <div className="mt-3 md:mt-7">
              <p className=" md:w-[35rem]   font-normal text-md md:text-xl text-[#c7c2c2] ">Encuentra las fondas cercanas por sí quieres hacer pick up
                directo en las tiendas.
              </p>
            </div>
            <div className=" mt-4 md:mt-7 md:flex gap-6 ">
              {/* <label className=" " htmlFor="icon "> */}
                <input className="w-[210px]  md:w-[300px] p-1 md:p-3 border-2 border-[#DADADA] rounded-xl md:placeholder:text-lg  " type="text" placeholder="Your email"/>
                {/* <span className="absolute inset-y-0 left-[12rem] md:left-[17rem] flex items-center ">
                <img src={map} alt="map" />
                </span> */}

                {/* </label> */}
                <div className=" mt-3 md:mt-0">
                <button className="bg-[#EB8E78] text-white rounded-md px-3 md:px-7 md:ps-9 md:pe-9 py-2 md:py-3">Subscribe</button>
            </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
