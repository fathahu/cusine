import React from "react";
// import  "@fontsource/caveat"
const Banner = () => {
  return (
    <>
      <div className="bg-[#1E1E1E] w-full h-[444px] md:h-[1000px] p-3 ">
        <div className="w-[290px] md:w-[500px] mt-20 md:mt-[28rem] m-5 md:m-24">
        <div className="">
          <span className="text-[#F6B76C] font-Caveat text-3xl  md:text-4xl">
            Enjoy an North Indian Delight
          </span>
        </div>
        <div className="text-white fontFamily2 font-ebold  text-3xl md:text-6xl mt-3 md:mt-6">
          <h1>An El Classico for the North Indian dishes</h1>
        </div>
        <div className="relative w-[270px] md:w-[400px] mt-3 md:mt-6">
            <div className="absolute  ">
                <input className="w-[210px]  md:w-[400px] p-1 md:p-2 border-2 border-[#EB8E78] rounded-xl placeholder:text-sm " type="text" placeholder="Busca tu platillo favorito"/>
            </div>
            <div className="absolute right-0 ">
                <button className="bg-[#EB8E78] text-white rounded-xl ps-6 md:ps-9 pe-6 md:pe-9 pt-[5px] md:pt-[9px] pb-[7px] md:pb-[11px]">Buscar</button>
            </div>
        </div>

        </div>
      </div>
    </>
  );
};

export default Banner;
