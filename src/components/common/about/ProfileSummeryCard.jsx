import React from "react";

const ProfileSummeryCard = () => {
  return (
    <>
      <div className="flex flex-col w-full h-full px-7 rounded-3xl card border border-gray-900 justify-center items-center">
        <div className="prop_card_image h-full w-full text-5xl text-gray-100">
          <img src="/images/icons/png/icon2.png" alt="" />
        </div>
        <div className="prop_card_content flex flex-col w-full pb-5 h-full justify-between">
          <div className="heading text-4xl my-2 font-medium">
            Hi, I’m Juned Pothawale👋
          </div>
          <div className="discription text-gray-400 w-[95%] h-full">
            I’m a Full-Stack Developer and Software Engineer who loves building
            fast, scalable, and visually engaging digital products.
            <br />
            <br /> I specialize in crafting seamless web applications that
            combine clean design with smart logic — from elegant front-end
            interfaces to powerful back-end systems.
            <br />
            <br /> Over the years, I’ve worked with modern stacks like React,
            Angular, Node.js, Python, and AWS, creating everything from
            dashboards and automation tools to complete business solutions. I’m
            passionate about writing clean, efficient code and solving
            real-world problems through technology.
            <br />
            <br /> Recently, I’ve started exploring the world of AI & Machine
            Learning — aiming to integrate intelligence into my applications and
            build experiences that adapt, learn, and improve over time.
            <br />
            <br /> When I’m not coding, you’ll probably find me experimenting
            with new tech, optimizing workflows using tools like N8N, or sharing
            knowledge with fellow developers.
            <br />
            <br /> What drives me
            <br />
            <br /> Turning complex ideas into simple, impactful experiences —
            and always staying curious about what’s next in tech.
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSummeryCard;
