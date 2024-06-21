import balance from "../../resources/balance.webp";
import './CustomWidth.css'
import circleDot from '../../resources/dot.svg';

const ExtraCard = () => {
  return (
    <>
    <div className="extra-card">
        <div className="extra-abs relative w-full h-full bg-[#d7e8f0] rounded-2xl overflow-hidden">
          <img
            src={balance}
            alt=""
            className="absolute object-cover h-full right-0 top-0 w-[50%] rounded-r-2xl filter-blur-left sm:max-h-[85vh] sm-max:w-full md:max-h-full"
          />

          <div className="absolute inset-0 bg-[#d7e8f0] opacity-30 w-[70%] h-full sm-max:bg-black sm-max:w-full sm-max:opacity-60"></div>

          <div className="absolute flex flex-col items-start justify-start gap-2 mt-6 mx-6">
            <h1 className="text-3xl text-black font-bold sm-max:w-full sm-max:text-2xl sm-max:text-white">
            Community Support:  
            </h1>
            <div className="flex items-center gap-1 text-[15px] text-black font-semibold sm-max:text-white sm-max:text-[16px] sm-max:flex sm-max:items-start mt-3 xsm-max:mt-1">
            <img alt="dot" width="20" height="20" src={circleDot}/>
              <p className="sm-max:text-[14px] sm-max:leading- font-medium5">Connect with others facing similar health challenges.</p>
            </div>
            <div className="flex items-center gap-1 text-[15px] text-black font-semibold sm-max:text-white sm-max:text-[16px] sm-max:flex sm-max:items-start">
            <img alt="dot" width="20" height="20" src={circleDot}/>
              <p className="sm-max:text-[14px] sm-max:leading- font-medium5">Share experiences, tips, and encouragement to foster a supportive network.
              </p>
            </div>
            <div className="flex items-center gap-1 text-[15px] text-black font-semibold sm-max:text-white sm-max:text-[16px] sm-max:flex sm-max:items-start">
            <img alt="dot" width="20" height="20" src={circleDot}/>
              <p className="sm-max:text-[14px] sm-max:leading- font-medium5">Participate in group discussions and activities designed to enhance well-being.
              </p>
            </div>
            <div className="flex items-center gap-1 text-[15px] text-black font-semibold sm-max:text-white sm-max:text-[16px] sm-max:flex sm-max:items-start">
            <img alt="dot" width="20" height="20" src={circleDot}/>
              <p className="sm-max:text-[14px] sm-max:leading- font-medium5">Gain emotional support from a community that understands your journey.
              </p>
            </div>
            <div className="flex items-center gap-1 text-[15px] text-black font-semibold sm-max:text-white sm-max:text-[16px] sm-max:flex sm-max:items-start">
            <img alt="dot" width="20" height="20" src={circleDot}/>
              <p className="sm-max:text-[14px] sm-max:leading- font-medium5">Access resources and advice from others who have successfully managed their conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtraCard;
