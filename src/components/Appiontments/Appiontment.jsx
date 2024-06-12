import { experts } from "../../resources/Constant";

export const Appointment = () => {
  return (
    <div className="pt-20 md:pt-48 flex flex-col items-center gap-16  p-3 md:p-6 bg-white">
      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-[54px] leading-48 md:text-70 text-black md:leading-70 text-center font-semibold  max-w-2xl">
          Our experts will help you reach your goals
        </h1>
      </div>
      <div className="carousel carousel-center w-full p-4 space-x-4 rounded-box">
        {experts.map((card, id) => (
          <div key={id} className="carousel-item h-[450px] w-[300px] relative flex items-center justify-center">
            <div className="h-full w-full">
              <img
                src={card.img}
                alt={card.name}
                className="rounded-box object-cover size-full"
              />
            </div>
            <div className="card-body absolute bottom-0 items-center">
              <h2 className="md:text-[24px] text-[20px] font-bold text-center text-white">{card.userName}</h2>
              <div className="bg-white p-4 py-3 text-[14px] md:text-[18px] font-semibold rounded-md ">{card.area}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="md:w-[60%] p-8 lg:px-16 lg:py-20 bg-black rounded-[20px] flex flex-col lg:flex-row gap-4 justify-between items-center">
        <div className="flex flex-col gap-3 md:gap-0">
          <h2 className="text-[34px] text-center text-white font-bold ">
            Schedule an appointment today.
          </h2>
          <h2 className="text-[20px] text-center text-white font-bold ">
            Exclusive for Alivee Users
          </h2>
        </div>
        <button className="p-5 px-14 text-white bg-green-500 rounded-full font-semibold hover:bg-green-300 min-w-[120px]">
          Join waitlist
        </button>
      </div>
    </div>
  );
};
