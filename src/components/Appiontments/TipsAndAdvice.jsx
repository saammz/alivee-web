import { fitnessTips } from "../../resources/Constant";

export const Tips = () => {
  return (
    <div className="pt-5 md:pt-20 w-full flex flex-col items-center lg:gap-16 gap-4 px-0 p-3 md:p-6 bg-white">
      <div className="flex flex-col md:gap-8 items-center">
        <h1 className="leading-12 text-black md:leading-70 text-center font-bold pb-4 lg:max-w-3xl md-max:w-full sm-max:text-[45px] md:text-6xl lg:text-8xl">
          Tips and Advices
        </h1>
        <h1 className="text-[26px] leading-48 md:text-70 text-black md:leading-70 text-center font-semibold  max-w-2xl">
        Checkout Insights on Diabetes: Learn More to Do More
        </h1>
      </div>
      <div className="carousel carousel-center w-full p-4 space-x-4 rounded-box">
        {fitnessTips.map((card, id) => (
          <div
            key={id}
            className="carousel-item h-[450px] border-[2px] rounded-box p-3 w-[300px] sm-max:max-w-[250px] flex  flex-col gap-2 "
          >
            <div className="h-[70%] w-full relative  justify-center flex">
              <img
                src={card.img}
                className="rounded-box object-cover size-full "
                style={{ height: "300px" }}
              />
              
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full overflow-hidden ">
                  <img src={card.display} alt="" />
                </div>
                <h2 className="text-lg  text-black">{card.userName}</h2>
              </div>
              <p className="font-semibold text-[18px] md:text-[18px]">
                {card.topic}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="p-3 px-8 md:p-5 md:px-14 text-black border-black border-[2px]  rounded-full font-semibold min-w-[120px]">
        View all
      </button>
    </div>
  );
};
