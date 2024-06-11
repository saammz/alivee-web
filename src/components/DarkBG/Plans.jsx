import React, { useState } from "react";
import Premium from "./Premium";
import FamilyPlan from "./FamilyPlan";
import { Link } from "react-router-dom";

const Plans = () => {
  const [showYearly, setShowYearly] = useState(false);

  return (
    <>
      <h1 className="mt-[10rem] text-7xl text-center text-white mb-14 font-semibold sm-max:text-5xl">
        Explore Our Plans
      </h1>
      <div className="flex item-center justify-center mb-[3rem] gap-4 sm-max:flex sm-max:flex-col md-max:flex-wrap">
        <div className="h-full w-[450px] rounded-2xl p-8 min-h-[400px] bg-center bg-cover bg-green-dark hover:bg-[#90d7a622] border-[#4cc273] border-2">
          <div className="flex flex-col gap-8 text-white">
            <div className="flex items-center justify-between">
              <h3 className="text-4xl leading-32 md:text-40 md:leading-40 font-semibold">
                Basic
              </h3>
              <div className="flex items-center">
                <button
                  type="button"
                  className={`px-4 py-2 border border-[#4cc273] rounded-l-md ${
                    !showYearly ? "bg-[#87d1a06f] text-white" : ""
                  }`}
                  onClick={() => setShowYearly(false)}
                >
                  <p className="text-12 leading-12 font-medium capitalize">
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
                  <p className="text-12 leading-12 font-medium capitalize">
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
        <Premium />
        <FamilyPlan />
      </div>
      <div className="flex items-center justify-center md:flex md:items-center md:space-x-4 mb-[5rem]">
          <Link>
            <button className="text-white bg-[#4cc273] hover:bg-opacity-90 hover:text-white px-6 py-4 rounded-[2rem] text-sm font-medium">
              Join Waitlist
            </button>
          </Link>
        </div>
    </>
  );
};

export default Plans;
