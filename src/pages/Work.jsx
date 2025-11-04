import { ProjectCardData, WorkCard } from "../utils/JsonDataUpload";
import ProjectCard from "./../components/common/work/ProjectCard";

const Work = () => {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-9 h-full w-[80%] mx-auto my-5 lg:gap-4">
        <div className="aside_card_section col-span-3 h-[50%] flex flex-col gap-4 w-full">
          <ProjectCard workCard={WorkCard} />
        </div>
        <div className="beside_card_section col-span-6 grid grid-cols-6 gap-4">
          <div className="col-span-6 flex justify-around items-center my-5">
            <img className="h-15" src="/images/icons/png/star-2.png" alt="" />
            <h1 className="text-4xl xl:text-6xl font-semibold uppercase">
              All Project
            </h1>
            <img className="h-15" src="/images/icons/png/star-2.png" alt="" />
          </div>
          <ProjectCard ProjectCardData={ProjectCardData} />
        </div>
      </div>
    </>
  );
};

export default Work;
