import React from "react";

const SkillsSection = (props) => {
  return (
    <>
      <div className="tagline ">
        <h4 className="text-lg uppercase font-semibold">{props.data?.type}</h4>
      </div>
      <div className="main_aboutme my-5 mx-5 space-y-6">
        {props.data?.list?.map((mainjson) => {
          return (
            <>
              <div className="grid grid-cols-12">
                <div className="tagline col-span-12">
                  <h4 className="text-lg text-blue-500 uppercase font-semibold">
                    {mainjson?.category}
                  </h4>
                </div>
                <div className="skill col-span-12 grid grid-cols-12 gap-6 mt-5">
                  {mainjson.list?.map((list) => {
                    return (
                      <>
                        <div className=" col-span-6 space-y-1">
                          <h6 className="text-sm text-gray-500">
                            {list?.percent}
                          </h6>
                          <h3 className="text-lg capitalize font-semibold">
                            {list.skill}
                          </h3>
                          <h4 className="text-xs text-gray-500 capitalize">
                            {list?.description}
                          </h4>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SkillsSection;
