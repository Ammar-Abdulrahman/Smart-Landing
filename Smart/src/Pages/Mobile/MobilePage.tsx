import screen1 from "../../Assets/images/screen1.png";
import screen2 from "../../Assets/images/screen2.png";
import screen3 from "../../Assets/images/screen3.png";

const MobilePage = () => {
  return (
    <div className="bg-[#020A16] mx-auto min-h-screen">
      <div className="bg-[#fff] justify-center text-center rounded-b-[99px]">
        <div className="grid justify-center text-center">
          <div className="flex justify-center text-center">
            <h2 className="text-black text-2xl font-bold w-3/4">
              “Download the app now and start organizing your social accounts
              and creating your profile in minutes!”{" "}
            </h2>
          </div>

          <div className="m-8 mb-1 mt-20 flex justify-center text-center">
            <img
              src={screen3}
              className="-mr-10 w-24 sm:w-44 lg:w-64 md:w-32 "
            />
            <img src={screen1} className="z-50 w-24 sm:w-44 lg:w-64 md:w-32" />
            <img src={screen2} className="-ml-7 w-24 sm:w-44 lg:w-64 md:w-32" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePage;
