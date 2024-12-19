import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="text-white text-left py-10 px-4">
      <h1 className="text-5xl font-bold mb-6">
        “Intelligent Marketing Management System - All Marketing Tools in One
        Platform”
      </h1>
      <p className="text-lg flex justify-start items-left mb-10">
        Create your own profile and share it easily via QR code.
      </p>
      <div className="flex justify-start items-left gap-4">
        <button className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg">
          <span className="text-xl">
            {" "}
            <FaArrowRightLong className="text-white w-6 h-4" />
          </span>{" "}
          <span>join us</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
