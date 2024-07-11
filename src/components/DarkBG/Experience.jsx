import alive from "../../resources/alive.jpg";

const Experience = () => {
  return (
    <div className="bg-black lg:pt-2 flex flex-col gap-4 w-full h-full">
      <div className="flex flex-col items-center gap-8 text-center sm-max:pt-10 sm-max:gap-2">
        <h2 className="text-4xl leading-4xl md:text-7xl md:leading-7xl font-semibold">
          <span className="flex max-w-3xl mx-auto text-white md:mt-4 sm-max:text-[42px]">
            Designed to manage Non-Communicable Diseases with
           AI
          </span>
        </h2>
        <h3 className="text-3xl leading-18 md:text-20 md:leading-20 font-medium text-gray-400 sm-max:text-[20px]">
          <span>
          With emphasis on Diabetes, Sickle Cell, and <br/> High Blood Pressure
          </span>
        </h3>
        <div className="">
          <img
            className="object-cover w-full h-full"
            src={alive}
            alt="Device"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
