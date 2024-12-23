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
}

interface CarouselProps {
  slides: SlidesType[];
}

const CarouselComponent: React.FC<CarouselProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current >= slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <div className="overflow-hidden relative mt-5">
      <div
        className={`flex ease-out duration-1000`}
        style={{
          transform: `translateX(-${
            current * (window.innerWidth >= 1024 ? 2 : 50)
          }%)`,
        }}
      >
        {slides.map((slide: any, index: number) => (
          <div
            key={index}
            className={`${slide.color} rounded-lg w-[50%] sm:w-48 h-56 m-2 p-2`}
          >
            <h2 className="text-white font-semibold text-left p-2">
              {slide.title}
            </h2>
            <div className="flex justify-end text-left">
              <img
                src={slide.url}
                className={`absolute top-36 ${slide.style} p-1 w-24`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-0 h-full w-[93%] justify-between text-center flex text-black px-0 text-3xl ">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
