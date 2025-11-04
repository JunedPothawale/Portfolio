import React from "react";
import { ProjectCardData, WorkCard } from "../utils/JsonDataUpload";

const Services = () => {
  return (
    <>
      <div className="grid grid-cols-4 w-[90%] mx-auto mt-15 lg:mt-0 space-y-20 lg:space-y-0 lg:grid-cols-12  items-center justify-center lg:gap-5">
        <div className="col-span-4 lg:col-start-2 flex justify-center items-center h-full">
          <div className="card w-full h-full rounded-4xl flex flex-col justify-around items-center p-10">
            <div className="flex items-center justify-center space-x-4">
              <i className="fa-brands fa-app-store text-3xl"></i>
              <h1 className="text-xl">App Development</h1>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <i className="fa-solid fa-globe text-3xl"></i>
              <h1 className="text-xl">Web Development</h1>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <i className="fa-solid fa-cloud-arrow-up text-3xl"></i>
              <h1 className="text-xl">DevOps</h1>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <i className="fa-brands fa-square-js text-3xl"></i>
              <h1 className="text-xl">Scripting</h1>
            </div>
          </div>
        </div>
        <div className="col-span-6 h-full rounded-4xl flex flex-col justify-center items-center ">
          <div className="flex justify-around items-center my-5">
            <img className="h-15" src="/images/icons/png/star-2.png" alt="" />
            <h1 className="text-4xl xl:text-6xl font-semibold uppercase">
              All Project
            </h1>
            <img className="h-15" src="/images/icons/png/star-2.png" alt="" />
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-6 my-5 card w-full h-full rounded-4xl gap-4 flex-wrap p-5">
            <div className="col-span-3 rounded-4xl card p-8 py-15">
              <div className="w-full text-md text-gray-600 uppercase">
                PHOTOGRAPHY
              </div>
              <div className="w-full text-gray-300 tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                fugit impedit amet ex odio eos eum tempora libero doloribus
                aliquam!
              </div>
            </div>
            <div className="col-span-3 rounded-4xl card p-8 py-15">
              <div className="w-full text-md text-gray-600 uppercase">
                Web Designing
              </div>
              <div className="w-full text-gray-300 tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                fugit impedit amet ex odio eos eum tempora libero doloribus
                aliquam!
              </div>
            </div>
            <div className="col-span-3 rounded-4xl card p-8 py-15">
              <div className="w-full text-md text-gray-600 uppercase">
                BRANDING
              </div>
              <div className="w-full text-gray-300 tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                fugit impedit amet ex odio eos eum tempora libero doloribus
                aliquam!
              </div>
            </div>
            <div className="col-span-3 rounded-4xl card p-8 py-15">
              <div className="w-full text-md text-gray-600 uppercase">
                Development
              </div>
              <div className="w-full text-gray-300 tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                fugit impedit amet ex odio eos eum tempora libero doloribus
                aliquam!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
