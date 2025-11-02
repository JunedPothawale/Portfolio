import { Link } from "react-router-dom";
const ProjectCard = (props) => {
  return (
    <>
      {props.workCard?.map((card) => {
        return (
          <>
            <Link to={card.url} key={card.id}>
              <div className="card border border-gray-800 h-full group w-auto pb-5 rounded-4xl p-5 flex flex-col gap-4 justify-center items-center">
                <div className="card_header">
                  <img className="rounded-4xl" src={card.img} alt={card.name} />
                </div>
                <div className="card_body flex justify-between w-full">
                  <div className="content">
                    <h1 className="text-sm text-gray-400 uppercase tracking-wide">
                      {card.name}
                    </h1>
                    <h2 className="text-xl text-white capitalize font-semibold tracking-wide">
                      {card.type}
                    </h2>
                  </div>
                  <div className="arrow">
                    <svg
                      className="h-15 w-15 group-hover:stroke-white transition"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 46 42"
                      style={{ fontFamily: "Acme" }}
                      fill="none"
                      stroke="#899C9F"
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
            </Link>
          </>
        );
      })}
      {props.ProjectCardData?.map((card) => {
        return (
          <>
            <Link
              className="col-span-6 md:col-span-3"
              to={card.url}
              key={card.id}
            >
              <div className="card border border-gray-800  h-full group w-auto pb-5 rounded-4xl p-5 flex flex-col gap-4 justify-center items-center">
                <div className="card_header">
                  <img className="rounded-4xl" src={card.img} alt={card.name} />
                </div>
                <div className="card_body flex justify-between w-full">
                  <div className="content">
                    <h1 className="text-sm text-gray-400 uppercase tracking-wide">
                      {card.name}
                    </h1>
                    <h2 className="text-xl text-white capitalize font-semibold tracking-wide">
                      {card.type}
                    </h2>
                  </div>
                  <div className="arrow">
                    <svg
                      className="h-15 w-15 group-hover:stroke-white transition"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 46 42"
                      style={{ fontFamily: "Acme" }}
                      fill="none"
                      stroke="#899C9F"
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
            </Link>
          </>
        );
      })}
    </>
  );
};

export default ProjectCard;
