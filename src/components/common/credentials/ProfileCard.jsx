import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { NavLink } from "react-router-dom";
const ProfileCard = () => {
  return (
    <>
      <div className="card rounded-4xl sticky top-20">
        <div className="head p-5 w-full">
          <img
            className="pt-5 w-full bg-linear-to-r from-[#6484EB] to-[#67BCE6] rounded-4xl"
            src="/images/me.png"
            alt=""
          />
        </div>
        <div className="body w-full flex flex-col">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-xl font-semibold">
              Juned Pothawale
            </h1>
            <NavLink
              to="https://github.com/junedpothawale"
              className="text-md my-3 text-gray-500 font-medium"
            >
              @JunedPothawale
            </NavLink>
          </div>
          <div className="socialIcon flex space-x-3 justify-center py-5">
            <NavLink
              to="https://www.instagram.com/itz_m.juned"
              className="bg-(--button_card) group border border-gray-900 hover:bg-white w-[15%] transition flex justify-center items-center rounded-full aspect-square cursor-pointer"
            >
              <FaInstagram className="text-2xl group-hover:text-black" />
            </NavLink>
            <NavLink
              to="mailto:junedpothawaleofficial@gmail.com"
              className="bg-(--button_card) group border border-gray-900 hover:bg-white w-[15%] transition flex justify-center items-center rounded-full aspect-square cursor-pointer"
            >
              <SiGmail className="text-2xl group-hover:text-black" />
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/in/junedpothawale"
              className="bg-(--button_card) group border border-gray-900 hover:bg-white w-[15%] transition flex justify-center items-center rounded-full aspect-square cursor-pointer"
            >
              <FaLinkedinIn className="text-2xl group-hover:text-black" />
            </NavLink>
            <NavLink
              to="https://wa.me/+917588928677"
              className="bg-(--button_card) group border border-gray-900 hover:bg-white w-[15%] transition flex justify-center items-center rounded-full aspect-square cursor-pointer"
            >
              <FaWhatsapp className="text-2xl group-hover:text-black" />
            </NavLink>
          </div>
          <NavLink
            to="/contact"
            className="connect_button card p-3 w-[80%] text-center mx-auto my-5 rounded-3xl"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
