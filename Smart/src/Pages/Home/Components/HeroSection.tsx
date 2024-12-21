import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="text-white text-left py-10 px-4 sm:px-8">
      <h1 className="text-3xl sm:text-5xl font-bold mb-6">
        “Intelligent Marketing Management System - All Marketing Tools in One
        Platform”
      </h1>
      <p className="text-sm sm:text-lg mb-10">
        Create your own profile and share it easily via QR code.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg">
          <FaArrowRightLong className="text-white w-6 h-4" />
          <span>join us</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
