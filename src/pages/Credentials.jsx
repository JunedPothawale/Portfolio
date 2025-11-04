import ExperienceSection from "../components/common/credentials/ExperienceSection";
import ProfileCard from "../components/common/credentials/ProfileCard";
import { Awards, Education, Experience, Skills } from "../utils/JsonDataUpload";
import SkillsSection from "./../components/common/credentials/SkillsSection";

const Credentials = () => {
  return (
    <>
      <div className="h-full w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%] mx-auto grid grid-cols-4 md:grid-cols-4 lg:grid-cols-12 lg:gap-5 xl:gap-10 sm:mt-10">
        <div className="col-span-4">
          <ProfileCard />
        </div>
        <div className="col-span-8 space-y-10 mt-10 lg:mt-0">
          {/* About Me */}
          <div className="aboutme_summary">
            <div className="tagline w-full">
              <h4 className="text-lg uppercase font-semibold text-blue-500">
                About Me
              </h4>
            </div>
            <div className="main_aboutme my-5 mx-5">
              <div className="discription text-gray-300 h-full">
                I’m a Full-Stack Developer and Software Engineer who loves
                building fast, scalable, and visually engaging digital products.
                <br />
                <br /> I specialize in crafting seamless web applications that
                combine clean design with smart logic — from elegant front-end
                interfaces to powerful back-end systems.
                <br />
                <br /> Over the years, I’ve worked with modern stacks like
                React, Angular, Node.js, Python, and AWS, creating everything
                from dashboards and automation tools to complete business
                solutions. I’m passionate about writing clean, efficient code
                and solving real-world problems through technology.
                <br />
                <br /> Recently, I’ve started exploring the world of AI &
                Machine Learning — aiming to integrate intelligence into my
                applications and build experiences that adapt, learn, and
                improve over time.
                <br />
                <br /> When I’m not coding, you’ll probably find me
                experimenting with new tech, optimizing workflows using tools
                like N8N, or sharing knowledge with fellow developers.
                <br />
                <br /> What drives me ?
                <br />
                <br /> Turning complex ideas into simple, impactful experiences
                — and always staying curious about what’s next in tech.
              </div>
            </div>
          </div>
          <div className="aboutme_experience">
            <div className="tagline w-full">
              <h4 className="text-lg uppercase font-semibold text-blue-500">
                EXPERIENCE
              </h4>
            </div>
            <div className="main_aboutme my-5 mx-5">
              <ExperienceSection data={Experience} />
            </div>
          </div>
          <div className="aboutme_education">
            <div className="tagline w-full">
              <h4 className="text-lg uppercase font-semibold text-blue-500">
                EDUCATION
              </h4>
            </div>
            <div className="main_aboutme my-5 mx-5">
              <ExperienceSection data={Education} />
            </div>
          </div>
          <div className="aboutme_skills">
            <SkillsSection data={Skills} />
          </div>
          <div className="aboutme_awards">
            <SkillsSection data={Awards} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Credentials;
