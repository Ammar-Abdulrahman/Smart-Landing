// import React, { useState } from "react";
// import {
//   BsFillArrowLeftCircleFill,
//   BsFillArrowRightCircleFill,
// } from "react-icons/bs";
// import CardComponent from "./Card";
// import { Slides } from "./helper";

// const CarouselComponent: React.FC = () => {
//   const [current, setCurrent] = useState(0);
//   const isMobile = window.innerWidth < 768;
//   const slidesToShow = isMobile ? 1 : 3;

//   const previousSlide = () => {
//     if (current > 0) {
//       setCurrent((prev) => prev - 1);
//     }
//   };

//   const nextSlide = () => {
//     if (current < Slides.length - slidesToShow) {
//       setCurrent((prev) => prev + 1);
//     }
//   };

//   return (
//     <div className="relative flex flex-col items-center justify-center text-center bg-white py-10">
//       <div className="overflow-hidden w-full">
//         <div
//           className="flex transition-transform duration-500"
//           style={{
//             transform: `translateX(-${
//               current * (window.innerWidth >= 1024 ? 2 : 15)
//             }%)`,
//             width: `${(Slides.length / slidesToShow) * 100}%`,
//           }}
//         >
//           {Slides.map((slide, index) => (
//             <CardComponent
//               key={index}
//               title={slide.title}
//               color={slide.color}
//               images={slide.images}
//               //images={slide.images}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="absolute top-1/2 transform z-[30] -translate-y-1/2 flex justify-between w-full px-4">
//         <button
//           onClick={previousSlide}
//           disabled={current === 0}
//           className={`text-3xl text-black ${
//             current === 0 ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           <BsFillArrowLeftCircleFill />
//         </button>
//         <button
//           onClick={nextSlide}
//           disabled={current >= Slides.length - slidesToShow}
//           className={`text-3xl text-black ${
//             current >= Slides.length - slidesToShow
//               ? "opacity-50 cursor-not-allowed"
//               : ""
//           }`}
//         >
//           <BsFillArrowRightCircleFill />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CarouselComponent;
