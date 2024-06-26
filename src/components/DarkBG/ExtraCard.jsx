import comunity from "../../resources/comunity.png";
import "./CustomWidth.css";
import circleDot from "../../resources/dot.svg";

const ExtraCard = () => {
  return (
    <>
      <div className="extra-card">
        <div className="extra-abs relative w-full h-full bg-[#d7e8f0] rounded-2xl overflow-hidden">
          <img
            src={comunity}
            alt=""
            className="absolute object-cover h-full right-0 top-0 w-[50%] rounded-r-2xl filter-blur-left sm:max-h-[85vh] sm-max:w-full md:max-h-full"
          />

          <div className="absolute inset-0 bg-[#d7e8f0] opacity-30 w-[50%] h-full sm-max:bg-black sm-max:w-full sm-max:opacity-60"></div>

          <div className="absolute flex flex-col items-start justify-start gap-2 mt-6 mx-6">
            <h1 className="text-3xl text-black font-bold sm-max:w-full sm-max:text-2xl sm-max:text-white">
              Community Support:
            </h1>
            <div className=" w-[73%] flex flex-col gap-4 sm-max:w-full xsm-max:gap-3">
              <div className="flex items-start gap-1 text-[15px] text-black font-semibold sm-max:text-white sm-max:text-[16px]">
                <img alt="dot" width="20" height="20" src={circleDot} />
                <p className="text-[16px] sm-max:text-[14px] sm-max:leading-5 font-medium">
                Connect with others facing similar health challenges.
                </p>
              </div>
              <div className="flex items-start gap-1 text-[15px] text-black font-semibold sm-max:text-white sm-max:text-[16px]">
                <img alt="dot" width="20" height="20" src={circleDot} />
                <p className="text-[16px] sm-max:text-[14px] sm-max:leading-5 font-medium">
                  Share experiences, tips, and encouragement to foster a
                  supportive network.
                </p>
              </div>
              <div className="flex items-start gap-1 text-[15px] text-black font-semibold sm-max:text-white sm-max:text-[16px]">
                <img alt="dot" width="20" height="20" src={circleDot} />
                <p className="text-[16px] sm-max:text-[14px] sm-max:leading-5 font-medium">
                  Participate in group discussions and activities designed to
                  enhance well-being.
                </p>
              </div>
              <div className="flex items-start gap-1 text-[15px] text-black font-semibold sm-max:text-white sm-max:text-[16px]">
                <img alt="dot" width="20" height="20" src={circleDot} />
                <p className="text-[16px] sm-max:text-[14px] sm-max:leading-5 font-medium">
                  Gain emotional support from a community that understands your
                  journey.
                </p>
              </div>
              <div className="flex items-start gap-1 text-[15px] text-black font-semibold sm-max:text-white sm-max:text-[16px]">
                <img alt="dot" width="20" height="20" src={circleDot} />
                <p className="text-[16px] sm-max:text-[14px] sm-max:leading-5 font-medium">
                  Access resources and advice from others who have successfully
                  managed their conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtraCard;
