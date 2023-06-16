import React,{useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reactangle from "../images/Rectangle.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const Test = () => {
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
          breakpoint: 809,
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
    <div>
        
          <div className='container m-auto p-8'>
      <button onClick={sliderRef?.slickPrev}>
        <FaChevronLeft />
      </button>
      <button onClick={sliderRef?.slickNext}>
        <FaChevronRight />
      </button>
      <Slider ref={setSliderRef} {...settings}>
        {slides.map((card,index) => (
          <div className='rounded-lg bg-gray-200' key={index}>
            <img src={card.img} alt="drft" />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            {/* <ul>
              {card.features.map((feature, index) => (
                <li >{feature}</li>
              ))}
            </ul> */}
            <button>Buy Now</button>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  )
}

export default Test