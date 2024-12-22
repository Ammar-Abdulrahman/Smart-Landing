import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="text-white text-left py-10 px-4 sm:px-8">
      <h1 className="text-3xl sm:text-5xl font-semibold">
        “Intelligent Marketing
      </h1>
      <h1 className="text-3xl sm:text-5xl font-semibold">Management System</h1>
      <h1 className="text-3xl sm:text-5xl font-semibold">
        - All Marketing Tools
      </h1>
      <h1 className="text-3xl sm:text-5xl font-semibold mb-6">
        {" "}
        in One Platform”
      </h1>
      <p className="text-sm sm:text-lg mb-10">
        Create your own profile and share it easily via QR code.
      </p>
      <div className="relative flex items-center">
        <motion.div
          whileHover={{ width: "150px" }}
          initial={{ width: "50px", height: "50px" }}
          transition={{ duration: 0.7 }}
          className="absolute bg-purple-600 h-full rounded-3xl"
        >
          <button className="ml-5 relative z-10 flex items-center gap-2 text-white px-6 py-3 rounded-lg">
            <FaArrowRightLong className="text-white w-5 h-5" />
            <span className="w-12">join us</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
