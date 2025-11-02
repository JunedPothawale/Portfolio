import React from "react";

const ExperienceCard = (props) => {
  return (
    <>
      <div className="col-span-6">
        <div className="w-full card rounded-3xl p-5">
          <h4 className="text-white uppercase text-lg">{props.data.type}</h4>
          <div className="flex flex-col mt-2 gap-8">
            {console.log(props.data.list)}
            {props.data.list.map((list) => {
              return (
                <>
                  <div className="experience1 flex flex-col gap-y-1">
                    <h1 className="text-[1rem] text-gray-500">
                      {list.timeframe}
                    </h1>
                    <h1 className="text-lg text-white font-semibold tracking-wide">
                      {list.name}
                    </h1>
                    <h1 className="text-[.9rem] tracking-wide text-gray-500">
                      {list.profile}
                    </h1>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
