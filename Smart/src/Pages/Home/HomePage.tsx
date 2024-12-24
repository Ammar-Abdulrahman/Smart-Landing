import HeroSection from "./Components/HeroSection";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import OurServicesPage from "../OurServices/OurServicesPage";
import ContactUsPage from "../ContactUs/ContactUsPage";
import CustomerPage from "../Customer/CustomerPage";
import MobilePage from "../Mobile/MobilePage";
import FooterComponent from "../../Components/Footer";
import veactor1 from "../../Assets/images/Vector1.png";
import veactor2 from "../../Assets/images/Vector2.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HomePage = () => {
  const mobileRef = useRef(null);
  const isViewMobile = useInView(mobileRef, { once: true });

  const overviewRef = useRef(null);
  const isViewOverview = useInView(overviewRef, { once: true });

  const customerRef = useRef(null);
  const isViewCustomer = useInView(customerRef, { once: true });
  return (
    <>
      <div className="bg-[#020A16] mx-auto min-h-[89vh] mt-16">
        <img
          src={veactor1}
          alt="Decorative Line Top Right"
          className="absolute z-[80] top-0 right-0 w-1/3 max-w-sm pointer-events-none hidden sm:block"
        />

        <img
          src={veactor2}
          alt="Decorative Line Bottom Left"
          className="absolute -bottom-[115px] left-0 w-1/3 max-w-sm pointer-events-none hidden sm:block"
        />

        <div className="flex flex-col sm:flex-row p-4">
          <div className="sm:w-2/3 sm:mr-0 lg:-mr-14 justify-center text-center">
            <Gallery />
          </div>
          <div className="sm:w-2/3 mt-8 sm:mr-20 justify-center text-center">
            <HeroSection />
            <Footer />
          </div>
        </div>
      </div>

      <div id="our-services" className="m-8 p-8" ref={overviewRef}>
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={isViewOverview ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9 , delay:0.5}}
        >
          <OurServicesPage />
        </motion.div>
      </div>

      <div id="contact-us" className="m-2 p-2">
        <ContactUsPage />
      </div>

      <div className="customer" ref={customerRef}>
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={isViewCustomer ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <CustomerPage />
        </motion.div>
      </div>

      <div className="mt-20 rounded-full" ref={mobileRef}>
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={isViewMobile ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 , delay:0.5 }}
        >
          <MobilePage />
        </motion.div>
      </div>

      <div className="">
        <FooterComponent />
      </div>
    </>
  );
};

export default HomePage;
