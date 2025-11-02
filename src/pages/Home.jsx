import React from "react";
import ProfileCard from "../components/common/home/ProfileCard";
import { ScrollFeature } from "./../components/common/home/Scrollbar";
import CommonCard from "./../components/common/home/CommonCard";
import SocialMediaCard from "./../components/common/home/SocialMediaCard";
import SocialProfileCard from "../components/common/home/SocialProfileCard";
import ExperienceCard from "./../components/common/home/ExperienceCard";
import WorkTogether from "./../components/common/home/WorkTogether";

const Home = () => {
  return (
    <>
      <div className="w-auto flex justify-center items-center my-5 h-full ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-[80%] md:w-[95%] xl:w-[80%]">
          <div className="col-span-1 h-full">
            <ProfileCard />
          </div>
          <div className="col-span-1 h-full">
            <div className="grid grid-cols-2 gap-4 place-items-center h-full">
              <div className="col-span-2 w-full h-full">
                <ScrollFeature />
              </div>
              <div className="col-span-2 md:col-span-1 h-full w-full">
                <CommonCard
                  data={{
                    image: "/public/images/svg/junedSignature.svg",
                    subheading: "more about me",
                    heading: "Credentials",
                    url: "/credentials",
                  }}
                />
              </div>
              <div className="col-span-2 md:col-span-1  h-full w-full">
                <CommonCard
                  data={{
                    image: "/public/images/my-works.png",
                    subheading: "SHOWCASE",
                    heading: "Projects",
                    url: "/blog",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 h-full">
            <div className="grid grid-cols-4 gap-4 h-full">
              <div className="col-span-4 md:col-span-2 lg:col-span-1 h-full">
                <CommonCard
                  data={{
                    image: "/public/images/gfonts.png",
                    subheading: "Blog",
                    heading: "GFonts",
                    url: "/blog",
                  }}
                />
              </div>
              <div className="col-span-4 md:col-span-4 md:order-first lg:order-none lg:col-span-2 h-full">
                <SocialMediaCard />
              </div>
              <div className="col-span-4 md:col-span-2 lg:col-span-1 h-full">
                <SocialProfileCard />
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full gap-4">
              <div className="col-span-1 w-full h-full">
                <ExperienceCard />
              </div>
              <div className="col-span-1 w-full h-full">
                <WorkTogether />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
