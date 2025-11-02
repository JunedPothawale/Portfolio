import React from "react";
import ProfileSummeryCard from "./../components/common/about/ProfileSummeryCard";
import ExperienceCard from "../components/common/about/ExperienceCard";
import WorkTogether from "./../components/common/home/WorkTogether";
import SocialProfileCard from "./../components/common/home/SocialProfileCard";
import CommonCard from "./../components/common/home/CommonCard";

const About = () => {
  return (
    <>
      <div className="h-full w-[90%] md:w-[80%] lg:w-[90%] xl:w-[80%] mx-auto grid gap-4">
        <div className="grid grid-cols-12 w-full gap-4">
          <div className="col-span-12 md:col-span-8 md:col-start-3 w-full lg:col-span-4 card rounded-4xl p-6 md:p-3 lg:p-5  border border-gray-800 aspect-square">
            <img
              className="w-full bg-linear-to-r from-[#6484EB] to-[#67BCE6] rounded-4xl"
              src="/public/images/me.png"
              alt="Juned Pothawale Image"
            />
          </div>
          <div className="col-span-12 lg:col-span-8 h-full">
            <div className="summary flex justify-around items-center py-5">
              <img
                className="aspect-square"
                src="/public/images/icons/png/star-2.png"
                alt=""
              />
              <h1 className="text-3xl md:text-6xl lg:text-6xl xl:text-6xl  font-semibold uppercase">
                SELF-SUMMARY
              </h1>
              <img
                className="aspect-square"
                src="/public/images/icons/png/star-2.png"
                alt=""
              />
            </div>
            <div className="summary_card">
              <ProfileSummeryCard />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6 lg:grid-cols-12 gap-4">
          <div className="col-span-6">
            <ExperienceCard
              data={{
                type: "Education",
                list: [
                  {
                    timeframe: "2007 - 2017",
                    name: "Framer Designer & Developer",
                    profile: "Software Engineer",
                  },
                  {
                    timeframe: "2007 - 2017",
                    name: "Framer Designer & Developer",
                    profile: "Software Engineer",
                  },
                ],
              }}
            />
          </div>

          <div className="col-span-6">
            <ExperienceCard
              data={{
                type: "Education",
                list: [
                  {
                    timeframe: "2007 - 2017",
                    name: "Framer Designer & Developer",
                    profile: "Software Engineer",
                  },
                  {
                    timeframe: "2007 - 2017",
                    name: "Framer Designer & Developer",
                    profile: "Software Engineer",
                  },
                ],
              }}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 grid-cols-3 gap-4">
          <div className="col-span-3 w-full">
            <SocialProfileCard />
          </div>
          <div className="col-span-3 lg:col-span-6 w-full">
            <WorkTogether />
          </div>
          <div className="col-span-3 w-full">
            <CommonCard
              data={{
                image: "/public/images/svg/junedSignature.svg",
                subheading: "more about me",
                heading: "Credentials",
                url: "/credentials",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
