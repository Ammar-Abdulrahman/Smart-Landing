import { useEffect, useState } from "react";
import image1 from "../../../Assets/images/image-home1.png";
import image2 from "../../../Assets/images/image-home2.png";
import image3 from "../../../Assets/images/image-home3.png";
import image4 from "../../../Assets/images/image-home4.png";
import image5 from "../../../Assets/images/image-home5.png";
import image6 from "../../../Assets/images/image-home6.png";
import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    { image: image1, style: "w-64" },
    { image: image3, style: "w-64" },
    { image: image5, style: "w-64" },
  ];

  const images2 = [
    { image: image2, style: "w-52" },
    { image: image4, style: "w-52" },
    { image: image6, style: "w-52" },
  ];

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-end text-right">
      <div className="grid grid-cols-2 p-4 justify-end text-right">
        
        <section className="grid grid-cols-1 p-2 gap-1 w-[105%] ">
          {images.map((image, index) => (
            <motion.div
              animate={{ scale: isAnimating ? 0.9 : 1 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              key={index}
              className=" flex justify-center"
            >
              <img
                src={image.image}
                alt={`Gallery ${index}`}
                className={` ${image.style} m-1`}
              />
            </motion.div>
          ))}
        </section>

        <section className="grid grid-cols-1 p-2 gap-1 sm:w-2/3 lg:w-1/2 justify-start text-left">
          {images2.map((image, index) => (
            <motion.div
              animate={{ scale: isAnimating ? 0.9 : 1 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              key={index}
              className=" flex justify-center"
            >
              <img
                src={image.image}
                alt={`Gallery ${index}`}
                className={`${image.style} m-1 `}
              />
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Gallery;
