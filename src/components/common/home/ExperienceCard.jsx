import React from "react";

const ExperienceCard = () => {
  return (
    <>
      <div className="h-full w-full card rounded-3xl flex flex-col md:flex-row p-8 justify-evenly items-center gap-4">
        <div className="exp_year bg-[#212121] flex flex-col rounded-3xl gap-1 h-[25vh] w-full md:w-[30%] justify-center items-center">
          <div className="count text-white text-3xl text-bold">3</div>
          <div className="subheading text-gray-400 uppercase text-xs">
            Years
          </div>
          <div className="heading text-gray-400 uppercase text-xs">
            Experience
          </div>
        </div>
        <div className="exp_clients bg-[#212121] flex flex-col rounded-3xl gap-1 h-[25vh] w-full md:w-[30%] justify-center items-center">
          <div className="count text-white text-3xl text-bold">+2</div>
          <div className="subheading text-gray-400 uppercase text-xs">
            CLIENTS
          </div>
          <div className="heading text-gray-400 uppercase text-xs">
            WORLDWIDE
          </div>
        </div>
        <div className="exp_project bg-[#212121] flex flex-col rounded-3xl gap-1 h-[25vh] w-full md:w-[33%] justify-center items-center">
          <div className="count text-white text-3xl text-bold">+10</div>
          <div className="subheading text-gray-400 uppercase text-xs">
            TOTAL
          </div>
          <div className="heading text-gray-400 uppercase text-xs">
            PROJECTS
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
