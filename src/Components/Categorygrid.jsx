import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reactangle from "../images/Rectangle.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }
// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

const Categorygrid = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const slides = [
    {
      img: Reactangle,
      title: "Doña Laura",
      description: "Fonditas",
    },
    {
      img: Reactangle,
      title: "Doña Laura",
      description: "Fonditas",
    },
    {
      img: Reactangle,
      title: "Doña Laura",
      description: "Fonditas",
    },
    {
      img: Reactangle,
      title: "Doña Laura",
      description: "Fonditas",
    },
    {
      img: Reactangle,
      title: "Doña Laura",
      description: "Fonditas",
    },
    {
      img: Reactangle,
      title: "Doña Laura",
      description: "Fonditas",
    },
  ];

  const settings = {
    arrows: false,
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1535,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 439,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-black h-[37rem] md:h-[52rem] lg:h-[50rem] mt-16">
        <div className="container m-auto pt-4">
          <div className="ps-3 md:ps-3 mt-10 md:mt-16 lg:mt-20 ">
            <span className=" p-2 item-center font-normal ps-4 md:ps-6 pe-4 md:pe-6 rounded-lg bg-[#EB8E78] text-white uppercase">
              Fonditas
            </span>
          </div>
          <div className="ps-3 md:ps-3 mt-7 md:mt-7">
            <span className=" text-white font-black text-3xl md:text-5xl">
              <h1>Todays Special</h1>
            </span>
          </div>
          <div className="mt-3 ps-3 md:ps-3 md:mt-16 lg:mt-3">
            <span className="font-normal text-[#c7c2c2] ">
              ‘Estás son las fondas que se encuentran cerca!
            </span>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="flex items-end justify-end pe-3 pb-3 gap-2">
            <button
              className=" bg-[#ffffff] hover:bg-[#5b5858] p-5 focus:outline-none "
              onClick={sliderRef?.slickPrev}
            >
              <FaChevronLeft />
            </button>
            <button
              className="bg-[#ffffff] hover:bg-[#5b5858] p-5 focus:outline-none"
              onClick={sliderRef?.slickNext}
            >
              <FaChevronRight />
            </button>
          </div>
          <Slider className="  my-slider " ref={setSliderRef} {...settings}>
            {slides.map((slide, index) => (
              <div className="rounded-lg overflow-hidden" key={index}>
                <div key={slide.img} className="">
                  <img
                    className=" w-full h-40  md:h-44 lg:w-72 lg:h-56"
                    src={slide.img}
                    alt={slide.title}
                  />

                  {/* <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-description">{slide.description}</p> */}
                </div>
                <div className="bg-white px-4 md:px-6 py-4 ">
                  <div className="   font-bold text-xl mb-2 ">
                    {slide.title}
                  </div>

                  <p className="text-gray-700 text-base">{slide.description}</p>

                  <div className=" pt-3 text-center pb-1">
                    <button
                      className="inline-block bg-[#EB8E78] text-white rounded p-1 lg:p-2 lg:m-1"
                      // onClick={handleIncriment}
                    >
                      <p className="ps-2 pe-2 sm:text-sm">Add to Cart</p>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Categorygrid;
