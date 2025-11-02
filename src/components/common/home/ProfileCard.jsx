const ProfileCard = () => {
  return (
    <>
      <a className="group" href="/about">
        <div className="card rounded-3xl grid h-full grid-cols-1 md:grid-cols-2 p-10">
          <div className="col-span-1">
            <img
              className="w-[80%] mx-auto aspect-square bg-linear-to-r from-[#6484EB] to-[#67BCE6] rounded-tl-[30px]  rounded-br-[30px]"
              src="/images/me.png"
              alt=""
            />
          </div>
          <div className="col-span-1">
            <div className="flex flex-col w-full h-[80%] my-2 md:gap-y-2">
              <h4 className="text-md uppercase text-gray-600 font-bold text-center md:text-start secondary_font">
                Software Developer
              </h4>
              <h4 className="text-2xl uppercase text-white font-bold text-center md:text-start primary_font">
                Juned Pothawale
              </h4>
              <h4 className="secondary_font text-md text-gray-600 line-clamp-3 text-center md:text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                placeat dicta exercitationem! Accusantium mollitia reprehenderit
                earum nam perferendis molestias ab maiores cumque tempora quo
                maxime ipsa vel nostrum magni veritatis reiciendis sed, dolor
                deserunt.
              </h4>
            </div>
            <div className="arrow_next place-items-end">
              <svg
                className="stroke-[#899C9F] group-hover:stroke-[#fff]"
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="42"
                viewBox="0 0 46 42"
                fill="none"
                style={{ fontFamily: "Acme" }}
              >
                <path
                  d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z"
                  style={{ fontFamily: "Acme" }}
                ></path>
                <rect
                  y="21.6981"
                  width="0.999999"
                  height="18"
                  transform="rotate(-90 0 21.6981)"
                  style={{ fontFamily: "Acme" }}
                ></rect>
                <path
                  d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  style={{ fontFamily: "Acme" }}
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default ProfileCard;
