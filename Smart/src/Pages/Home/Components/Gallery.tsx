import image1 from "../../../Assets/images/image-home1.png";
import image2 from "../../../Assets/images/image-home2.png";
import image3 from "../../../Assets/images/image-home3.png";
import image4 from "../../../Assets/images/image-home4.png";
import image5 from "../../../Assets/images/image-home5.png";
import image6 from "../../../Assets/images/image-home6.png";
import { motion } from "framer-motion";

const Gallery = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <section className="grid grid-cols-2  sm:ml-24  gap-2 p-4">
      {images.map((image, index) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
          key={index}
          className=" flex justify-center"
        >
          <img
            src={image}
            alt={`Gallery ${index}`}
            className="full h-36 object-cover m-2"
          />
        </motion.div>
      ))}
    </section>
  );
};

export default Gallery;
