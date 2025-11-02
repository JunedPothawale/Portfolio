import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";

const UserLayout = () => {
  return (
    <>
      <div className="max-w-screen min-h-screen flex flex-col">
        <div className="">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default UserLayout;
