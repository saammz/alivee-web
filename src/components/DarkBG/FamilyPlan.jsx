import { useState } from "react";
const Family = () => {
  const [showYearly, setShowYearly] = useState(false);

  return (
      <div className="w-[370px] xsm-max:w-[300px]">
        <div className="plans-green relative w-full h-full rounded-2xl py-8 px-6 bg-center bg-cover bg-green-dark cursor-none border-[#4cc273] border-2">
        <div className="bg-[#0e2e18ee] rounded-2xl absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
      <div className="absolute w-full flex items-center justify-center top-1/2 right-0 transform rotate-45 origin-top-right bg-[#4cc273] text-white py-2 px-4 rounded-lg text-2xl">
        Coming Soon........
      </div>
    </div>
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
            <div className="flex gap-4 items-baseline mt-2">
              <h3 className="text-4xl leading-40 md:text-48 md:leading-48 font-semibold">
                50,15€ <span className="text-base line-through">59,00€</span>
              </h3>
              <h4 className="text-16 leading-16 md:text-18 md:leading-18 font-medium">
                /{showYearly ? "yearly" : "monthly"}
              </h4>
            </div>
            <p className="text-16 leading-16 md:text-18 md:leading-18 font-medium mt-2">
              Use promo code <span className="text-green-light">EKYEAR50</span>
            </p>
          </div>
          {showYearly ? (
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4cc273]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-12 leading-12 font-medium text-white">
                  Personalized plans
                </p>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4cc273]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-12 leading-12 font-medium text-white">
                  Activities tracking
                </p>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4cc273]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-12 leading-12 font-medium text-white">
                  Access to exclusive content
                </p>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4cc273]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-12 leading-12 font-medium text-white">
                  Access to programs
                </p>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4cc273]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-12 leading-12 font-medium text-white">
                  Access to challenges
                </p>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4cc273]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-12 leading-12 font-medium text-white">
                  Sync with your wearable
                </p>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4cc273]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-12 leading-12 font-medium text-white">
                  Sync with your wearable
                </p>
              </li>
            </ul>
          ) : (
            <ul className="flex flex-col gap-4">
              {/* Default monthly options */}
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4cc273]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-12 leading-12 font-medium text-white">
                  Personalized plans
                </p>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4cc273]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-12 leading-12 font-medium text-white">
                  Actives tracking
                </p>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4cc273]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-12 leading-12 font-medium text-white">
                  Access to exclusive content
                </p>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4cc273]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-12 leading-12 font-medium text-white">
                  Access to programs
                </p>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4cc273]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-12 leading-12 font-medium text-white">
                  Access to challenges
                </p>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4cc273]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-12 leading-12 font-medium text-white">
                  Sync with your wearable
                </p>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#4cc273]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-12 leading-12 font-medium text-gray-500">
                  Sync with your wearable
                </p>
              </li>
            </ul>
          )}
        </div>
      </div>
  );
};

export default Family;
