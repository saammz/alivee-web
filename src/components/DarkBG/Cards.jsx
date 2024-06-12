import { Link } from "react-router-dom";
import React from "react";
import { cardsDetails } from "./CardsData";

const Cards = () => {
  return (
    <div className="flex flex-col items-center max-w-3xl mx-auto text-white mt-6">
      <div className="flex flex-col gap-8 mb-10 md:mb-20 text-center">
        <h2 className="text-7xl leading-48 md:text-70 md:leading-70 font-semibold sm-max:text-3xl">
          Take the quiz and get your plan
        </h2>
        <h3 className="text-2xl leading-18 md:text-20 md:leading-20 font-medium text-gray-400">
          Your goals. Your pace. Your terms.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {cardsDetails.map((card) => (
          <div key={card.id} className="relative">
            <img
              src={card.img}
              alt={card.category}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <div className="absolute top-0 left-0 right-0 p-4 flex flex-col justify-start items-center">
              <h2 className="text-white text-3xl font-semibold">
                {card.title1}
              </h2>
              <h3 className="text-white text-lg">{card.title2}</h3>
              {card.title3 && (
                <h3 className="text-white text-lg">{card.title3}</h3>
              )}
              {card.title4 && (
                <h3 className="text-white text-lg">{card.title4}</h3>
              )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center items-center">
              <p className="text-gray-400">{card.category}</p>
            </div>
          </div>
        ))}
      </div>

      <Link>
        <button className="text-white bg-[#4cc273] hover:bg-opacity-90 hover:text-white px-6 py-4 rounded-[2rem] text-sm font-medium">
          Join Waitlist
        </button>
      </Link>
    </div>
  );
};

export default Cards;
