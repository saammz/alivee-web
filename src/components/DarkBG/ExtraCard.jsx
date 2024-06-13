import balance from "../../resources/balance.webp";
import './CustomWidth.css'

const ExtraCard = () => {
  return (
    <>
    <div className="extra-card">
        <div className="relative w-full h-full bg-[#d7e8f0] rounded-2xl overflow-hidden">
          <img
            src={balance}
            alt=""
            className="absolute object-cover right-0 top-[-18rem] w-[500px] rounded-r-2xl filter-blur-left sm-max:top-[-7rem]"
          />

          <div className="absolute inset-0 bg-[#d7e8f0] opacity-30 w-[55%] h-full"></div>

          <div className="absolute flex flex-col items-start justify-start gap-14 mt-6 mx-6">
            <h1 className="text-5xl text-black font-bold w-[40%] sm-max:w-full sm-max:text-3xl md-max:w-[60%]">
              Find inner balance with Cristiano Ronaldo
            </h1>
            <p className="text-xl text-black font-semibold w-[42%] sm-max:w-full md-max:w-[50%]">
              Discover personalized mental wellness routines and guided
              meditations tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtraCard;
