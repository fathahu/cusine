import React, { useState } from "react";
import Reactangle from "../images/Rectangle.png";
import Header from "./Header";
import Banner from "./Banner";
import Categories from "./Categories";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Todaysp = () => {
  const [count, setCount] = useState(0);
  //increment
  const handleIncriment = () => {
    setCount((prevCount) => prevCount + 1); };
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
      <Header name={count} />
      <Banner />
      <Categories />
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
                      onClick={handleIncriment}
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

       {/* <div className=" bg-black h-[20rem] md:h-[52rem] lg:h-[50rem] mt-16">
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
        <div className="">

          <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4 ">
            <CarouselProvider
              className="lg:block hidden"
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={11}
              visibleSlides={4}
              step={2}
              infinite={true}
              isPlaying
            >
              <div className="flex gap-2 items-end justify-end pb-3 ">
                <div>
                  <ButtonBack
                    role="button"
                    aria-label="slide backward"
                    className="  bg-[#ffffff] hover:bg-[#5b5858] p-5 focus:outline-none  cursor-pointer"
                    id="prev"
                  >
                    <svg
                      width={12}
                      height={18}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 1L1 7L7 13"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonBack>
                </div>
                <div>
                  <ButtonNext
                    role="button"
                    aria-label="slide forward"
                    className=" bg-[#ffffff]  hover:bg-[#5b5858] p-5  "
                    id="next"
                  >
                    <svg
                      width={12}
                      height={18}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7 7L1 13"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonNext>
                </div>
              </div>
              <div className="container relative flex items-center justify-center">
                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                  <Slider>
                    <div
                      id="slider"
                      className="h-full flex lg:gap-8 items-center justify-start transition ease-out duration-700"
                    >
                      <Slide index={0}>
                        <div className=" w-80 rounded-lg overflow-hidden bg-white">
                          <img
                            className="w-full h-64  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={1}>
                        <div className=" w-80 rounded-lg overflow-hidden bg-white">
                          <img
                            className="w-full h-64 bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={2}>
                        <div className=" w-80 rounded-lg overflow-hidden bg-white">
                          <img
                            className="w-full h-64  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={3}>
                        <div className=" w-80 rounded-lg overflow-hidden bg-white">
                          <img
                            className="w-full h-64  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={4}>
                        <div className=" w-80 rounded-lg overflow-hidden bg-white">
                          <img
                            className="w-full h-64  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={5}>
                        <div className=" w-80 rounded-lg overflow-hidden bg-white">
                          <img
                            className="w-full h-64  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={6}>
                        <div className=" w-80 rounded-lg overflow-hidden bg-white">
                          <img
                            className="w-full h-64  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={7}>
                        <div className=" w-80 rounded-lg overflow-hidden bg-white">
                          <img
                            className="w-full h-64  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={8}>
                        <div className=" w-80 rounded-lg overflow-hidden bg-white">
                          <img
                            className="w-full h-64  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={9}>
                        <div className=" w-80 rounded-lg overflow-hidden bg-white">
                          <img
                            className="w-full h-64  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={10}>
                        <div className=" w-80 rounded-lg overflow-hidden bg-white">
                          <img
                            className="w-full h-64  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                    </div>
                  </Slider>
                </div>
              </div>
            </CarouselProvider>

            <CarouselProvider
              className="lg:hidden md:block hidden"
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={11}
              visibleSlides={2}
              step={1}
              infinite={true}
              isPlaying
            >
              <div className="flex gap-2 items-end justify-end pb-3 ">
                <div>
                  <ButtonBack
                    role="button"
                    aria-label="slide backward"
                    className="  bg-[#ffffff] hover:bg-[#5b5858] p-5 focus:outline-none  cursor-pointer"
                    id="prev"
                  >
                    <svg
                      width={12}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 1L1 7L7 13"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonBack>
                </div>
                <div>
                  <ButtonNext
                    role="button"
                    aria-label="slide forward"
                    className=" bg-[#ffffff]  hover:bg-[#5b5858] p-5  "
                    id="next"
                  >
                    <svg
                      width={12}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7 7L1 13"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonNext>
                </div>
              </div>

              <div className="w-full relative flex items-center justify-center">
                <div className="container w-full h-full mx-auto ">
                  <Slider>
                    <div
                      id="slider"
                      className="h-full flex lg:gap-8 md:gap-4 items-center justify-start transition ease-out duration-700"
                    >
                      <Slide index={0}>
                        <div className=" relative rounded-lg  md:w-80  sm:w-auto bg-white">
                          <img
                            className="w-full md:h-56 bg-cover"
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={1}>
                      <div className=" relative rounded-lg  md:w-80 sm:w-auto bg-white">
                          <img
                            className="w-full md:h-56   bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={2}>
                        <div className=" relative rounded-lg md:w-80 sm:w-auto bg-white">
                          <img
                            className="w-full md:h-56  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={3}>
                        <div className=" relative rounded-lg md:w-80 sm:w-auto bg-white">
                          <img
                            className="w-full md:h-56  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={4}>
                        <div className=" relative rounded-lg md:w-80 sm:w-auto bg-white">
                          <img
                            className="w-full md:h-56  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={5}>
                        <div className=" relative rounded-lg md:w-80 sm:w-auto bg-white">
                          <img
                            className="w-full md:h-56  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={6}>
                        <div className=" relative rounded-lg md:w-80 sm:w-auto bg-white">
                          <img
                            className="w-full md:h-56  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={7}>
                        <div className=" relative rounded-lg md:w-80 sm:w-auto bg-white">
                          <img
                            className="w-full md:h-56  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={8}>
                        <div className=" relative rounded-lg md:w-80 sm:w-auto bg-white">
                          <img
                            className="w-full md:h-56  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={9}>
                        <div className=" relative rounded-lg md:w-80 sm:w-auto bg-white">
                          <img
                            className="w-full md:h-56  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={10}>
                        <div className=" relative rounded-lg md:w-80 sm:w-auto bg-white">
                          <img
                            className="w-full md:h-56  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={11}>
                        <div className=" relative rounded-lg w-80 sm:w-auto bg-white">
                          <img
                            className="w-full md:h-56  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                    </div>
                  </Slider>
                </div>
              </div>
            </CarouselProvider>

            <CarouselProvider
              className="block md:hidden "
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={11}
              visibleSlides={1}
              step={1}
              infinite={true}
            >
              <div className="w-full relative flex items-center justify-center">
                <ButtonBack
                  role="button"
                  aria-label="slide backward"
                  className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                  id="prev"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1L1 7L7 13"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonBack>
                <div className=" w-72 items-center w- h-full  mx-auto overflow-x-hidden overflow-y-hidden">
                  <Slider>
                    <div
                      id="slider"
                      className="h-full w-100 flex items-end border border-[red] lg:gap-8 gap-8  transition ease-out duration-700"
                    >
                      <Slide index={0}>
                      <div className="  rounded-lg bg-white">
                          <img
                            className="w-full h-44  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={1}>
                      <div className=" relative rounded-lg bg-white">
                          <img
                            className="w-full md:h-48  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={2}>
                      <div className=" relative rounded-lg bg-white">
                          <img
                            className="w-full md:h-48  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={3}>
                      <div className=" relative rounded-lg  sm:w-auto bg-white">
                          <img
                            className="w-full md:h-56  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={4}>
                      <div className=" relative rounded-lg bg-white">
                          <img
                            className="w-full md:h-48  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={5}>
                      <div className=" relative rounded-lg bg-white">
                          <img
                            className="w-full md:h-48  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={6}>
                      <div className=" relative rounded-lg bg-white">
                          <img
                            className="w-full md:h-48  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={7}>
                      <div className=" relative rounded-lg bg-white">
                          <img
                            className="w-full md:h-48  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={8}>
                      <div className=" relative rounded-lg bg-white">
                          <img
                            className="w-full md:h-48  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={9}>
                      <div className=" relative rounded-lg bg-white">
                          <img
                            className="w-full md:h-48  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={10}>
                      <div className=" relative rounded-lg bg-white">
                          <img
                            className="w-full md:h-48  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={11}>
                      <div className=" relative rounded-lg bg-white">
                          <img
                            className="w-full md:h-48  bg-cover "
                            src={Reactangle}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                            </div>
                            <p className="text-gray-700 text-base">
                              Lorem ipsum
                            </p>
                          </div>
                          <div className="px-6 pt-1 text-end pb-3">
                            <button
                              className="inline-block bg-[#EB8E78] text-white rounded p-2 md:p-2 m-1"
                              onClick={handleIncriment}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </Slide>
                    </div>
                  </Slider>
                </div>
                <ButtonNext
                  role="button"
                  aria-label="slide forward"
                  className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                  id="next"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L1 13"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>
      </div> */}

    </>
  );
};

export default Todaysp;
