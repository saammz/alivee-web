import { useRef } from "react";
import { nutritionTips } from "../../resources/Constant";

export const Nutrition = () => {
  const planRef = useRef(null);
  const scrollToPlan = () =>{
    if(planRef.current){
      planRef.current.scrollIntoView({behavior: "smooth", block: "start"});
    }
  }


  return (
    <div className="pt-10 md:pt-20 w-full flex flex-col items-center lg:gap-16 gap-4 px-0  p-3 md:p-6 bg-white">
      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-[34px] leading-48 md:text-[54px] text-black md:leading-70 text-center font-semibold">
        Explore Insights on Sickle Cell Management
        </h1>
      </div>
      <div className="carousel carousel-center w-full mp-4 space-x-4 rounded-box">
        {nutritionTips.map((card, id) => (
          <div
            key={id}
            className="carousel-item h-[450px] border-[2px] rounded-box p-3 w-[300px]  flex  flex-col gap-2 "
          >
            <div className="h-[70%] w-full relative  justify-center flex">
              <img
                src={card.img}
                className="rounded-box object-cover size-full"
                style={{ height: "300px" }}
              />
              
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full overflow-hidden">
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
      <button className="p-3 px-8 md:p-5 md:px-14 text-black border-black border-[2px]  rounded-full font-semibold min-w-[120px]" onClick={scrollToPlan}>
        View all
      </button>
    </div>
  );
};
