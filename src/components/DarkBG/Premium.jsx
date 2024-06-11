import React from 'react';

const Premium = () => {
  return (
    <div>
      <div className="h-full rounded-2xl p-8 min-h-[400px] bg-center bg-cover bg-green-dark hover:bg-[#90d7a622] border-[#4cc273] border-2 w-[350px]">
        <div className="flex flex-col gap-8 text-white">
          <div className="flex items-center justify-between">
            <h3 className="text-4xl leading-32 md:text-40 md:leading-40 font-semibold text-[#4cc273] ">Premium</h3>
            <div className="flex items-center">
              <button
                type="button"
                className="px-4 py-2 border border-green rounded-md bg-[#87d1a06f] text-white"
              >
                <p className="text-12 leading-12 font-medium capitalize">yearly</p>
              </button>
            </div>
          </div>
          <div className="flex gap-4 items-baseline mt-2">
            <h3 className="text-4xl leading-40 md:text-48 md:leading-48 font-bold">219,99€</h3>
            <h4 className="text-16 leading-16 md:text-18 md:leading-18 font-medium">/Yearly</h4>
          </div>
        </div>
        <ul className="flex flex-col gap-4 mt-6">
          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4cc273]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-12 leading-12 font-medium text-white">Personalized plans</p>
          </li>
          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4cc273]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-12 leading-12 font-medium text-white">Activities tracking</p>
          </li>
          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4cc273]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-12 leading-12 font-medium text-white">Access to exclusive content</p>
          </li>
          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4cc273]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-12 leading-12 font-medium text-white">Access to programs</p>
          </li>
          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4cc273]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-12 leading-12 font-medium text-white">Access to challenges</p>
          </li>
          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4cc273]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-12 leading-12 font-medium text-white">Sync with your wearable</p>
          </li>
          <li className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4cc273]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-12 leading-12 font-medium text-white">Sync with your wearable</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Premium;
