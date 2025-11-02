import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center my-5">
        <div className="logo">
          <Link to="/">
            <img
              className="w-50 aspect-video"
              src="/images/logo/white-logo-400.200-removebg-preview.png"
              alt="Juned Pothawale Logo"
            />
          </Link>
        </div>
        <div className="my-5">
          <div className="space-x-5">
            <NavLink to="/" className="navigation_link">
              Home
            </NavLink>
            <NavLink to="/work" className="navigation_link">
              Work
            </NavLink>
            <NavLink to="/about" className="navigation_link">
              About
            </NavLink>
            <NavLink to="/contact" className="navigation_link">
              Contact
            </NavLink>
          </div>
        </div>
        <div className="copyright">
          <a href="#" className="">
            © All rights reserved by Juned Pothawale
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
