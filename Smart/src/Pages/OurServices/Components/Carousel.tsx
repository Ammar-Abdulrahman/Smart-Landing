import { motion } from "framer-motion";
import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

interface SlidesType {
  title: string;
  color: string;
  url: string;
  style?: string;
  url2?: string;
  style2?: string;
}

interface CarouselProps {
  slides: SlidesType[];
}

const CarouselComponent: React.FC<CarouselProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Track the hovered card

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current >= slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <div className="overflow-hidden justify-center text-center flex relative mt-5">
      <div className="absolute top-0 left-0 h-full w-24 sm:w-24 lg:w-24 bg-gradient-to-r from-white to-transparent z-[10]"></div>

      {/* Right Gradient Overlay */}
      <div className="absolute top-0 right-0 h-full w-24 sm:w-24 lg:w-24 bg-gradient-to-l from-white to-transparent z-[10]"></div>
      <div
        className={`flex ease-out duration-1000`}
        style={{
          transform: `translateX(-${
            current * (window.innerWidth >= 1024 ? 2 : 40)
          }%)`,
        }}
      >
        {slides.map((slide: any, index: number) => (
          <div
            key={index}
            className={`${slide.color} hover:text-[17px] ease-in duration-300 rounded-lg w-[220px] lg:w-[220px] sm:w-40 h-56 m-2 p-2`}
            onMouseEnter={() => setHoveredIndex(index)} // Set hover state
            onMouseLeave={() => setHoveredIndex(null)} // Clear hover state
          >
            <h2 className="text-white font-semibold text-left p-2 transition-transform duration-300">
              {slide.title}
            </h2>
            <motion.div
              whileHover={{}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeIn", delay:0.2 }}
              className="flex justify-end text-left"
            >
              <img
                src={hoveredIndex === index ? slide.url2 : slide.url}
                className={`absolute top-36 ease-out duration-[1200ms] ${
                  hoveredIndex === index ? slide.style2 : slide.style
                } p-1`}
              />
            </motion.div>
          </div>
        ))}
      </div>

      {/* <div className="absolute top-0 h-full w-[93%] justify-between text-center flex text-black px-0 text-3xl ">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div> */}

      <div className="absolute top-1/2 transform z-[30] -translate-y-1/2 w-full flex justify-between sm:px lg:px-4">
        <button onClick={previousSlide} className="text-black text-3xl">
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide} className="text-black text-3xl">
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
