import { useState } from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [navigation, setNavigation] = useState(false);
  const handleNavClick = () => setNavigation(false);

  return (
    <>
      <div className="w-[90%] mx-auto flex justify-between items-center px-5">
        <NavLink to="/" className="logo">
          <img
            className="w-50 aspect-video"
            src="/images/logo/white-logo-400.200-removebg-preview.png"
            alt="Juned Pothawale Logo"
          />
        </NavLink>
        <div
          className={`navigation-container text-center z-10 w-full ${
            navigation ? "translate-x-[0%]" : "translate-x-[-100vw]"
          } sm:translate-x-[0%]`}
        >
          <div className="navigation sm:space-x-7 md:space-x-10">
            <NavLink
              to="/"
              onClick={handleNavClick}
              className="navigation_link"
            >
              Home
            </NavLink>
            <NavLink
              to="/work"
              onClick={handleNavClick}
              className="navigation_link"
            >
              Work
            </NavLink>
            <NavLink
              to="/about"
              onClick={handleNavClick}
              className="navigation_link"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={handleNavClick}
              className="navigation_link"
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className="">
          <button className="connect_button px-5 bg-gray-600 hidden sm:block">
            Connect
          </button>
          <button
            className="hamburger_button sticky block sm:hidden text-2xl cursor-pointer p-2 border rounded-lg z-20"
            onClick={() => {
              setNavigation(!navigation);
            }}
          >
            <HiBars3CenterLeft />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
