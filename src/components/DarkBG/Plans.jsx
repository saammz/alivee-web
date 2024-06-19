import { useState } from "react";
import Premium from "./Premium";
import FamilyPlan from "./FamilyPlan";
import useModalHook from "../FormModal/useFormHook";
import { useRef } from "react";
import Button from "../Shared/Button";
import Modal from "../FormModal/FormModal";

const Plans = () => {
  const [showYearly, setShowYearly] = useState(false);
  const planRef = useRef(null);
  console.log(planRef.current);

  const { isOpen, openModal, closeModal } = useModalHook();

  const handleSubmitForm = (formData) => {
    console.log(formData);
    closeModal();
  };

  return (
    <>
      <h1 className="mt-[10rem] text-7xl text-center text-white mb-14 font-semibold sm-max:text-4xl" id="plan" ref={planRef}>
        Explore Our Plans
      </h1>
      <div className="w-full flex justify-center mb-[3rem] gap-4 sm-max:flex sm-max:flex-col sm-max:items-center md-max:flex-wrap">
        <div className="plans-green h-full rounded-2xl p-8 bg-center bg-cover bg-green-dark hover:bg-[#90d7a622] border-[#4cc273] border-2">
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
      <div className="flex items-center justify-center mb-10">
      <Button onclick={openModal} text="Join Waitlist" className="sm-max:px-4 sm-max:py-2" />
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} onSubmit={handleSubmitForm} />
    </>
  );
};

export default Plans;
