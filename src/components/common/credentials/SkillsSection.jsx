import React from "react";

const SkillsSection = (props) => {
  return (
    <>
      <div className="tagline w-full">
        <h4 className="text-lg uppercase font-semibold">{props.data?.type}</h4>
      </div>
      <div className="main_aboutme my-5 mx-5 columns-2 space-y-6">
        {props.data?.list.map((list) => {
          return (
            <>
              <div className="skill space-y-1">
                <h6 className="text-sm text-gray-500">{list.title}</h6>
                <h3 className="text-lg capitalize font-semibold">
                  {list.name}
                </h3>
                <h4 className="text-xs text-gray-500 capitalize">
                  {list.description}
                </h4>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SkillsSection;
