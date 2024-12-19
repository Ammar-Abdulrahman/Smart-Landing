import Header from "./Components/Header";
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

const HomePage = () => {
  return (
    <>
      <div className="bg-[#020A16] max-w-[1440px] mx-auto min-h-screen">
        <img
          src={veactor1}
          alt="Decorative Line Top Right"
          className="absolute top-0 right-0 w-1/3 max-w-sm pointer-events-none"
        />

        {/* Bottom-Left Line */}
        <img
          src={veactor2}
          alt="Decorative Line Bottom Left"
          className="absolute -bottom-52 left-0 w-1/3 max-w-sm pointer-events-none"
        />
        <Header />
        <div className="flex mt-4 p-4">
          <div className="w-5/6 -mr-32 justify-center text-center">
            <Gallery />
          </div>
          <div className="w-2/3 mr-20 justify-center text-center">
            <HeroSection />
            <Footer />
          </div>
        </div>
      </div>

      <div className="m-8 p-8">
        <OurServicesPage />
      </div>

      <div className="m-8 p-8">
        <ContactUsPage />
      </div>

      <div className="m-8 p-8">
        <CustomerPage />
      </div>

      <div className="mt-40 rounded-full ">
        <MobilePage />
      </div>

      <div className="">
        <FooterComponent />
      </div>
    </>
  );
};

export default HomePage;
