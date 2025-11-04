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
          <div className="col-span-12 w-full lg:col-span-4">
            <div className="grid grid-cols-3 h-full md:grid-cols-6 lg:md:grid-cols-3 items-baseline-last gap-4">
              <div className="card p-6 col-span-3 md:p-3 lg:p-5  border border-gray-800 aspect-square rounded-4xl">
                <img
                  className="w-full bg-linear-to-r from-[#6484EB] to-[#67BCE6] rounded-4xl"
                  src="/images/me.png"
                  alt="Juned Pothawale Image"
                />
              </div>
              <div className="card p-6 col-span-3 md:p-3 lg:p-5  border border-gray-800 aspect-square rounded-4xl">
                <img
                  className="w-full bg-linear-to-r from-[#6484EB] to-[#67BCE6] rounded-4xl"
                  src="/images/me.png"
                  alt="Juned Pothawale Image"
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 h-full">
            <div className="summary flex justify-around items-center py-5">
              <img
                className="aspect-square"
                src="/images/icons/png/star-2.png"
                alt=""
              />
              <h1 className="text-3xl md:text-6xl lg:text-6xl xl:text-6xl  font-semibold uppercase">
                SELF-SUMMARY
              </h1>
              <img
                className="aspect-square"
                src="/images/icons/png/star-2.png"
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
                    timeframe: "March 2017",
                    name: "Dinbai High School",
                    profile: "Secondary Schooling",
                  },
                  {
                    timeframe: "2018 - 2021",
                    name: "Anjuman Polytechnic Nagpur",
                    profile: "Computer Science",
                  },
                ],
              }}
            />
          </div>

          <div className="col-span-6">
            <ExperienceCard
              data={{
                type: "Experience",
                list: [
                  {
                    timeframe: "11/21 – 10/22",
                    name: "Whizzact Solution",
                    profile: "Software Engineer",
                  },
                  {
                    timeframe: "Now",
                    name: "Want to Know More Lets Connect ",
                    profile: "Freelancer",
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
                image: "/images/svg/junedSignature.svg",
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
