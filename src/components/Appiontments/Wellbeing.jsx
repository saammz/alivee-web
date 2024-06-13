import { wellbeingTips } from "../../resources/Constant";

export const WellBeing = () => {
  return (
    <div className="pt-10 md:pt-20 flex flex-col items-center gap-16  p-3 md:p-6 bg-white">
      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-[40px] leading-48 md:text-70 text-black md:leading-70 text-center font-semibold  l">
          Elevate Your Life: Empower Your Mind and Find Balance
        </h1>
      </div>
      <div className="carousel carousel-center w-full p-4 space-x-4 rounded-box">
        {wellbeingTips.map((card, id) => (
          <div
            key={id}
            className="carousel-item h-[450px] border-[2px] rounded-box p-3 w-[300px]  flex  flex-col gap-2 "
          >
            <div className="h-[70%] w-full relative  justify-center flex">
              <img
                src={card.img}
                className="rounded-box object-cover size-full"
              />
              <div className="card-body absolute bottom-0 items-center">
                <div className="bg-white p-4 py-3 text-[14px] md:text-[18px] font-semibold rounded-md ">
                  {card.area}
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full overflow-hidden ">
                  <img src={card.display} alt="" />
                </div>
                <h2 className="text-lg  text-black">{card.userName}</h2>
              </div>
              <p className="font-semibold text-[18px] md:text-[22px]">
                {card.topic}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="p-5 px-14 text-black border-black border-[2px]  rounded-full font-semibold min-w-[120px]">
        View all
      </button>
    </div>
  );
};
