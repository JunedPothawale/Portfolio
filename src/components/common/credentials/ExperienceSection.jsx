import React from "react";

const ExperienceSection = (props) => {
  return (
    <>
      <div className="w-full rounded-3xl">
        <div className="flex flex-col mt-2 gap-8 ">
          {props.data.list.map((list) => {
            return (
              <>
                <div className="experience1 flex flex-col gap-y-1">
                  <fiv className="flex w-full items-center justify-between">
                    <h1 className="text-xl text-blue-400 font-semibold tracking-wide">
                      {list.name}
                    </h1>
                    <h1 className="text-sm text-gray-500 font-semibold">
                      {list.timeframe}
                    </h1>
                  </fiv>
                  <h1 className="text-sm tracking-wide text-gray-500">
                    {list.profile}
                  </h1>
                  <h1
                    className="text-sm tracking-wide text-gray-300"
                    dangerouslySetInnerHTML={{ __html: list.description }}
                  ></h1>
                </div>
                <hr className="h-[1px] text-gray-800" />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ExperienceSection;
