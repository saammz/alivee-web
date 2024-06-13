import { cardsDetails } from "./CardsData";

const Cards = () => {
  return (
    <div className="flex flex-col items-center max-w-3xl mx-auto text-white mt-6 mb-24">
      <div className="flex flex-col gap-8 mb-10 md:mb-20 text-center">
        <h2 className="text-7xl leading-48 md:text-70 md:leading-70 font-semibold sm-max:text-4xl">
          Take the quiz and get your plan
        </h2>
        <h3 className="text-3xl sm-max:text-xl leading-18 md:text-20 md:leading-20 font-medium text-gray-400">
          Your goals. Your pace. Your terms.
        </h3>
      </div>

      <div className="flex gap-4 md-max:flex md-max:flex-wrap sm-max:flex sm-max:flex-col mb-16">
        {cardsDetails.map((card) => (
          <div key={card.id} className="relative w-[320px] rounded-md overflow-hidden md-max:w-[360px]">
            <img src={card.img} alt={card.category} className="rounded-md w-full h-full" />
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="absolute top-0 left-0 right-0 flex flex-col justify-center items-center  p-4 text-4xl font-semibold">
              <p>{card.title1}</p>
              <p className="text-3xl">{card.title2}</p>
              <p className="text-2xl">{card.title3}</p>
              {card.title4 && <p className="text-xl">{card.title4}</p>}
            </div>
            <div className="absolute bottom-0 w-full text-center py-2 px-6">
              <p className="text-2xl">{card.category}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button className="text-white bg-[#4cc273] hover:bg-opacity-90 hover:text-white px-6 py-4 rounded-[2rem] text-sm font-medium">
          Join Waitlist
        </button>
      </div>
    </div>
  );
};

export default Cards;
