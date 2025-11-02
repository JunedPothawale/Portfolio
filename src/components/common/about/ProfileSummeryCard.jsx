import React from "react";

const ProfileSummeryCard = () => {
  return (
    <>
      <div className="flex flex-col w-full h-full px-7 rounded-3xl card border border-gray-900 justify-center items-center">
        <div className="prop_card_image h-full w-full text-5xl text-gray-100">
          <img src="/public/images/icons/png/icon2.png" alt="" />
        </div>
        <div className="prop_card_content flex flex-col w-full pb-5 h-full justify-between">
          <div className="heading text-4xl my-2 font-medium">
            Juned Pothawale
          </div>
          <div className="discription text-gray-400 w-[95%] h-full">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            voluptas corporis nulla, commodi alias numquam iste, accusamus
            dolore tenetur at voluptate minima possimus fugit enim est excepturi
            iusto error! At deserunt asperiores, vero dignissimos, Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Placeat blanditiis
            officiis non? Nostrum, cumque pariatur enim autem beatae aut
            voluptatum. Nostrum, cumque pariatur enim autem beatae aut
            voluptatum.
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSummeryCard;
