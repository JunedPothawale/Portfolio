import React from "react";
import { MdMailOutline } from "react-icons/md";

const ContactCard = (props) => {
  return (
    <>
      <div
        className="mail flex items-center lg:truncate
       lg:w-full"
      >
        <div className="icon w-auto mr-5 card text-4xl p-3 flex justify-center items-center aspect-square rounded-xl">
          <i className={`${props.data.icon}`}></i>
        </div>
        <div className="icon_info flex flex-col">
          <h3 className="text-lg text-gray-700 uppercase">{props.data.name}</h3>
          <a
            href={`${
              !props.data.href ? "" : props.data.href + props.data.line2
            }`}
            className="text-md text-white hover:text-gray-400"
          >
            {props.data.line1}
          </a>

          <a
            href={`${
              !props.data.href ? "" : props.data.href + props.data.line2
            }`}
            className="text-md text-white hover:text-gray-400"
          >
            {props.data.line2}
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
