import { Outlet } from "react-router-dom";
import Header from "../Pages/Home/Components/Header";

const Layout = () => {
  return (
    <div className="max-w-[1440px]">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
