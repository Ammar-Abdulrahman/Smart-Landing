import Logo from "../../../Assets/images/Logo.png";
const Header = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <header className="w-5/6 bg-transparent py-4 px-6 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <img src={Logo} className="w-14" />
        </div>
        <nav className="flex gap-7 text-white">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Contact With Us
          </a>
          <a href="#" className="hover:underline">
            Our Services
          </a>
        </nav>
        <button className="bg-white text-black font-medium w-24 px-4 py-2 rounded-3xl">
          Log In
        </button>
      </header>
    </div>
  );
};

export default Header;
