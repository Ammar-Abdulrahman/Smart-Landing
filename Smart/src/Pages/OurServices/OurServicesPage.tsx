import CarouselComponent from "./Components/Carousel";
import { SlidesArray } from "./Helper";

const OurServicesPage = () => {
  return (
    <div className="bg-[#fff] max-w-[1440px] mx-auto max-h-screen justify-center text-center">
      <h2 className=" text-black text-lg font-bold ">Our services</h2>

      <div className="w-[80%] m-auto">
        <CarouselComponent slides={SlidesArray} />
      </div>
    </div>
  );
};

export default OurServicesPage;
