import googleApp from "../Assets/images/googleplay.png";
import appStore from "../Assets/images/appStore.png";
import Logo from "../Assets/images/Logo.png";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import veactor3 from "../Assets/images/Vector3.png";
import veactor4 from "../Assets/images/Vector4.png";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="bg-[#020A16] max-w-[1440px] mx-auto max-h-max ">
      <div className="flex justify-center text-center">
        <img
          src={veactor3}
          alt="Decorative Line Bottom Left"
          className="absolute -mt-12 right-[430px] max-w-sm pointer-events-none"
        />
      </div>
      <header className="flex justify-center items-center gap-4 bg-transparent text-white">
        <a href="#">
          <img src={appStore} alt="App Store" className="w-32" />
        </a>
        <a href="#">
          <img src={googleApp} alt="Google Play" className="w-32" />
        </a>
      </header>

      <div className="flex justify-center text-center mt-16">
        <img src={Logo} className="w-14" />
      </div>

      <div className="flex justify-center text-center mt-5">
        <nav className="flex gap-7 text-white">
          <Link to="/about" className="hover:underline">
            Privacy Policy
          </Link>
          <a href="#contact-us" className="hover:underline">
            Contact With Us
          </a>
          <a href="#our-services" className="hover:underline">
            Our Services
          </a>
        </nav>
      </div>

      <div className="flex justify-center text-center">
        <div className=" mt-8 h-6 border-t w-1/2 border-white"></div>
      </div>

      <div className="flex justify-center text-center">
        <FaInstagram className="text-white m-2" />
        <FaXTwitter className="text-white m-2" />
        <FaTiktok className="text-white m-2" />
        <FaFacebook className="text-white m-2" />
      </div>

      <div className="flex justify-center text-center mt-2">
        <div className="text-white hover:bg-blue-950 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
          <FaLocationDot className="text-white w-4 h-4 me-2" />
          Innsbruker Straße 19, 6300, Wörgl
        </div>

        <div className="text-white hover:bg-blue-950 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
          <FiPhone className="text-white w-4 h-4 me-2" />
          00436602923444
        </div>
      </div>

      <div className="h-16"></div>
      <div className="relative">
        <img
          src={veactor4}
          alt="Decorative Line Bottom Left"
          className="absolute bottom-0 left-0 w-1/3 max-w-sm pointer-events-none"
        />
      </div>
    </div>
  );
};

export default FooterComponent;
