// import { Link } from "react-router-dom";
// import Logo from "../../../Assets/images/Logo.png";
// const Header = () => {
//   return (
//     <div className="bg-[#020A16] w-full flex justify-center items-center">
//       <header className="w-5/6 bg-transparent py-4 px-6 flex justify-between items-center">
//         <div className="text-white text-2xl font-bold">
//           <Link to="/">
//             <img src={Logo} className="w-14" />
//           </Link>
//         </div>
//         <nav className="flex gap-7 text-white">
//           <Link to="/about" className="hover:underline">
//             Privacy Policy
//           </Link>
//           <a href="/" className="hover:underline">
//             Contact With Us
//           </a>
//           <a href="/" className="hover:underline">
//             Our Services
//           </a>
//         </nav>
//         <button className="bg-white text-black font-medium w-24 px-4 py-2 rounded-3xl">
//           Log In
//         </button>
//       </header>
//     </div>
//   );
// };

// export default Header;

import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/images/Logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close dropdown after selecting an item
  };

  return (
    <>
      <div className="bg-[#020A16] w-full flex justify-center items-center">
        <header className="w-5/6 bg-transparent py-4 px-6 flex justify-between items-center">
          <button
            className="sm:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          <div className="text-white text-2xl font-bold">
            <Link to="/">
              <img src={Logo} className="w-14" alt="Logo" />
            </Link>
          </div>
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } absolute sm:static top-full left-0 w-full sm:w-auto sm:flex flex-col sm:flex-row items-center bg-[#020A16] text-white sm:bg-transparent sm:gap-7 sm:translate-y-0`}
          >
            <Link
              to="/about"
              className="block sm:inline hover:underline py-2 sm:py-0"
              onClick={() => setIsOpen(false)}
            >
              Privacy Policy
            </Link>
            <a
              href="#contact-us"
              className="block sm:inline hover:underline py-2 sm:py-0"
              onClick={() => setIsOpen(false)}
            >
              Contact With Us
            </a>
            <a
              href="#our-services"
              className="block sm:inline hover:underline py-2 sm:py-0"
              onClick={() => setIsOpen(false)}
            >
              Our Services
            </a>
          </nav>

          {/* Login Button */}
          <button className=" bg-white text-black font-medium w-24 px-4 py-2 rounded-3xl">
            Log In
          </button>
        </header>
      </div>

      {isOpen && (
        <ul className="sm:hidden justify-center text-center w-full gap-4 mt-4 p-4 rounded-md">
          <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
            <Link
              to="/about"
            >
              Privacy Policy
            </Link>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleScrollToSection("our-services")}
          >
            Our Services
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleScrollToSection("contact-us")}
          >
            Contact Us
          </li>
        </ul>
      )}
    </>
  );
};

export default Header;
