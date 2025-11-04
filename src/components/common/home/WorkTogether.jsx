import { NavLink } from "react-router-dom";
const WorkTogether = () => {
  return (
    <>
      <NavLink className="group" to="/contact">
        <div className="prop_cards flex flex-col w-full h-full px-7 rounded-3xl card justify-center items-center">
          <div className="prop_card_image h-full w-full text-5xl p-0 text-gray-100">
            <img src="/images/icons/png/icon2.png" alt="" />
          </div>
          <div className="prop_card_content flex items-end w-full h-full  py-7 justify-between">
            <div className="prop_card_subcontent">
              <h4 className="text-white font-medium text-3xl capitalize">
                <span className="">
                  Let's <br />
                </span>
                work
                <span className="text-blue-500 ml-2 font-bold lowercase">
                  together.
                </span>
              </h4>
            </div>
            <div className="arrow_next">
              <svg
                className="stroke-[#899C9F] group-hover:stroke-white"
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
      </NavLink>
    </>
  );
};

export default WorkTogether;
