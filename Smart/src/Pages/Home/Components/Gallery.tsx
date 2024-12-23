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
    { image: image1, style: "w-64 h-40 -mr-8" },
    { image: image2, style: "w-32 h-40 -ml-8" },
    { image: image3, style: "w-64 h-40 -mr-8" },
    { image: image4, style: "w-32 h-40 -ml-8" },
    { image: image5, style: "w-64 h-40 -mr-8" },
    { image: image6, style: "w-32 h-40 -ml-8" },
  ];

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grid grid-cols-2 gap-1 sm:ml-24 p-4">
      {images.map((image, index) => (
        <motion.div
          animate={{ margin: isAnimating ? '7px' : '0px' }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          key={index}
          className=" flex justify-center"
        >
          <img
            src={image.image}
            alt={`Gallery ${index}`}
            className={`${image.style} mt-1 mb-1`}
          />
        </motion.div>
      ))}
    </section>
  );
};

export default Gallery;
