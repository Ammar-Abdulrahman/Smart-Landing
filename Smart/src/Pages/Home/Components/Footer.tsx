import googleApp from "../../../Assets/images/googleplay.png";
import appStore from "../../../Assets/images/appStore.png";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-center items-center gap-4 py-6 bg-transparent text-white">
      <a href="/">
        <img src={appStore} alt="App Store" className="w-32" />
      </a>
      <a href="/">
        <img src={googleApp} alt="Google Play" className="w-32" />
      </a>
    </footer>
  );
};

export default Footer;
