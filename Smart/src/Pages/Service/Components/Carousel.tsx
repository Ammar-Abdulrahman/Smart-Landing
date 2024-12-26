import React, { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { motion } from "framer-motion";
import { items } from "../../OurServices/Tests";

const CarouselComponent: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const isMobile = window.innerWidth < 768;
  const slidesToShow = isMobile ? 1 : 3;

  const previousSlide = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  const nextSlide = () => {
    if (current < items.length - slidesToShow) {
      setCurrent((prev) => prev + 1);
    }
  };

  return (
     <div className="overflow-hidden justify-center text-center flex relative mt-5">
      {/* Left Gradient Overlay */}

      <div className="absolute top-0 left-0 h-full w-8 sm:w-10 lg:w-24 bg-gradient-to-r from-white to-transparent z-[10]"></div>

      {/* Right Gradient Overlay */}
      <div className="absolute top-0 right-0 h-full w-8 sm:w-10 lg:w-24 bg-gradient-to-l from-white to-transparent z-[10]"></div>
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${
              current * (window.innerWidth >= 1024 ? 2 : 15)
            }%)`,
            width: `${(items.length / slidesToShow) * 130}%`,
          }}
        >
          {items.map((item) => (
            <>{item.itemNode}</>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 transform z-[30] -translate-y-1/2 flex justify-between w-full px-4">
        <button
          onClick={previousSlide}
          disabled={current === 0}
          className={`text-3xl text-black ${
            current === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <BsFillArrowLeftCircleFill />
        </button>
        <button
          onClick={nextSlide}
          disabled={current >= items.length - slidesToShow}
          className={`text-3xl text-black ${
            current >= items.length - slidesToShow
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
