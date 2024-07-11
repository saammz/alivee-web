import { useState } from "react";
import circleDot from "../../resources/dot.svg";

const Family = () => {
  const [showYearly, setShowYearly] = useState(false);

  return (
    <div className="w-[370px] xsm-max:w-[300px]">
      <div className="plans-green relative w-full h-full rounded-2xl py-8 px-6 bg-center bg-cover bg-green-dark cursor-none border-[#4cc273] border-2">
        {/* <div className="bg-[#0e2e18ee] rounded-2xl absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="absolute  flex items-center justify-center bg-[#4cc273] text-white py-2 px-4 rounded-lg text-2xl animate-pulse">
            Coming Soon
          </div>
        </div> */}
        <div className="flex flex-col gap-8 text-white">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-4xl leading-32 md:text-40 md:leading-40 font-semibold text-[#4cc273] sm-max:text-2xl xsm-max:text-md">
              Family
            </h3>
            <div className="flex items-center">
              <button
                type="button"
                className={`px-4 py-2 border border-[#4cc273] rounded-l-md ${
                  !showYearly ? "bg-[#87d1a06f] text-white" : ""
                }`}
                onClick={() => setShowYearly(false)}
              >
                <p className="text-12 leading-12 font-medium capitalize xsm-max:text-[12px]">
                  monthly
                </p>
              </button>
              <button
                type="button"
                className={`px-4 py-2 border border-green rounded-r-md ${
                  showYearly ? "bg-[#87d1a06f] text-white" : ""
                }`}
                onClick={() => setShowYearly(true)}
              >
                <p className="text-12 leading-12 font-medium capitalize xsm-max:text-[12px]">
                  yearly
                </p>
              </button>
            </div>
          </div>
          <div className="flex gap-1 items-baseline mt-2">
            {showYearly ? (
              <h3 className="text-4xl leading-40 md:text-48 md:leading-48 font-medium sm-max:text-2xl">
                {/* ₦100,000 <span className="text-base line-through"> ₦120,000</span> */}
              </h3>
            ) : (
              <h3 className="text-4xl leading-40 md:text-48 md:leading-48 font-medium sm-max:text-2xl">
                {/* ₦7,500 <span className="text-base line-through"> ₦10,000</span> */}
              </h3>
            )}
            <h4 className="text-16 leading-16 md:text-18 md:leading-18 font-medium">
              {/* /{showYearly ? "yearly" : "monthly"} */}
            </h4>
          </div>
          {/* <p className="text-16 leading-16 md:text-18 md:leading-18 font-medium mt-2">
            Use promo code <span className="text-green-light">EKYEAR50</span>
          </p> */}
        </div>
        {showYearly ? (
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-2">
                  <img alt="dot" width="20" height="20" src={circleDot} />
                  <p className="text-12 leading-12 font-medium text-white">
                  AI symptom checker
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <img alt="dot" width="20" height="20" src={circleDot} />
                  <p className="text-12 leading-12 font-medium text-white">
                  ⁠Personalized plans
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <img alt="dot" width="20" height="20" src={circleDot} />
                  <p className="text-12 leading-12 font-medium text-white">
                  Activities tracking
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <img alt="dot" width="20" height="20" src={circleDot} />
                  <p className="text-12 leading-12 font-medium text-white">
                  Access to premium contents
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <img alt="dot" width="20" height="20" src={circleDot} />
                  <p className="text-12 leading-12 font-medium text-white">
                  Access to communities 
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <img alt="dot" width="20" height="20" src={circleDot} />
                  <p className="text-12 leading-12 font-medium text-white">
                    Sync with your wearable
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <img alt="dot" width="20" height="20" src={circleDot} />
                  <p className="text-12 leading-12 font-medium text-white">
                  Remote monitoring 
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <img alt="dot" width="20" height="20" src={circleDot} />
                  <p className="text-12 leading-12 font-medium text-white">
                  5 free appointments 
                  </p>
                </li>
              </ul>
            ) : (
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-2">
                  <img alt="dot" width="20" height="20" src={circleDot} />
                  <p className="text-12 leading-12 font-medium text-white">
                  AI symptom checker
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <img alt="dot" width="20" height="20" src={circleDot} />
                  <p className="text-12 leading-12 font-medium text-white">
                  ⁠Personalized plans
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <img alt="dot" width="20" height="20" src={circleDot} />
                  <p className="text-12 leading-12 font-medium text-white">
                  Activities tracking
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <img alt="dot" width="20" height="20" src={circleDot} />
                  <p className="text-12 leading-12 font-medium text-white">
                  Access to premium contents
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <img alt="dot" width="20" height="20" src={circleDot} />
                  <p className="text-12 leading-12 font-medium text-white">
                  Access to communities 
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <img alt="dot" width="20" height="20" src={circleDot} />
                  <p className="text-12 leading-12 font-medium text-white">
                    Sync with your wearable
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <img alt="dot" width="20" height="20" src={circleDot} />
                  <p className="text-12 leading-12 font-medium text-white">
                  Remote monitoring 
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <img alt="dot" width="20" height="20" src={circleDot} />
                  <p className="text-12 leading-12 font-medium text-white">
                  5 free appointments 
                  </p>
                </li>
              </ul>
            )}
      </div>
    </div>
  );
};

export default Family;
