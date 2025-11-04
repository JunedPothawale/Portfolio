import WorkTogether from "./../components/common/home/WorkTogether";
import SocialProfileCard from "../components/common/home/SocialProfileCard";
import CommonCard from "../components/common/home/CommonCard";
import { Credentials } from "../utils/JsonDataUpload";

const Services = () => {
  return (
    <>
      <div className="grid grid-cols-4 w-[90%] md:w-[70%] lg:w-full mx-auto mt-15 lg:mt-0  lg:space-y-0 lg:grid-cols-12 items-center justify-center lg:gap-5">
        <div className="col-span-4 lg:col-start-2 flex justify-center items-center h-full">
          <div className="card w-full h-full rounded-4xl flex flex-col justify-around items-start md:items-center p-10">
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
          <div className="grid grid-cols-3 md:grid-cols-6 my-5 card w-full h-full rounded-4xl gap-4 flex-wrap p-5">
            <div className="col-span-3 rounded-4xl card p-5 py-15 flex flex-col">
              <div className="w-full text-md text-gray-600 uppercase pb-2">
                Full Stack Web Development
              </div>
              <div className="w-full text-gray-300 text-sm tracking-wide leading-5">
                End-to-end development of responsive and performance-driven web
                applications using modern frameworks like React, Angular,
                Laravel, and Spring Boot. I focus on writing clean, maintainable
                code and creating digital solutions that scale with your
                business.
              </div>
            </div>
            <div className="col-span-3 rounded-4xl card p-5 py-15 flex flex-col">
              <div className="w-full text-md text-gray-600 uppercase pb-2">
                App Development (Web & Hybrid)
              </div>
              <div className="w-full text-gray-300 text-sm tracking-wide leading-5">
                I build cross-platform hybrid apps using Ionic and Angular,
                designed for smooth user experiences, seamless API integrations,
                and fast performance on Android devices.
              </div>
            </div>
            <div className="col-span-3 rounded-4xl card p-5 py-15 flex flex-col">
              <div className="w-full text-md text-gray-600 uppercase pb-2">
                UI / UX & Web Design
              </div>
              <div className="w-full text-gray-300 text-sm tracking-wide leading-5">
                I combine design precision with developer logic — crafting user
                interfaces that not only look good but also perform
                exceptionally well. From Figma prototypes to responsive web
                layouts built with Tailwind CSS, I ensure your brand feels
                modern and intuitive.
              </div>
            </div>
            <div className="col-span-3 rounded-4xl card p-5 py-15 flex flex-col">
              <div className="w-full text-md text-gray-600 uppercase pb-2">
                DevOps & Cloud Deployment
              </div>
              <div className="w-full text-gray-300 text-sm tracking-wide leading-5">
                I handle everything from deployment to maintenance on AWS,
                Docker, and Linux servers. With a focus on scalability and
                uptime, I ensure your products stay reliable, secure, and
                production-ready 24/7. Services include: AWS EC2 setup, Route 53
                DNS management, Dockerization, and automated deployment
                pipelines.
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-10 col-span-4 lg:col-start-2">
          <div className="grid grid-cols-3 lg:grid-cols-12 gap-4">
            <div className="col-span-3">
              <SocialProfileCard />
            </div>
            <div className="col-span-3 lg:col-span-6">
              <WorkTogether />
            </div>
            <div className="col-span-3">
              <CommonCard data={Credentials} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
