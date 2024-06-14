import device from '../../resources/device.webp';

const Experience = () => {
  return (
    <div className="bg-black lg:pt-2 flex flex-col gap-4 w-full h-full">
      <div className="flex flex-col items-center gap-8 mb-10 md:mb-20 text-center sm-max:pt-10 sm-max:gap-2">
        <h2 className="text-4xl leading-4xl md:text-7xl md:leading-7xl font-semibold">
          <span className="flex max-w-3xl mx-auto text-white md:mt-24 sm-max:text-xl">
            Personalised Fitness, Nutrition and Mental Balance plans
          </span>
        </h2>
        <h3 className="text-3xl leading-18 md:text-20 md:leading-20 font-medium text-gray-400 sm-max:text-[18px]">
          <span>
            Unleash the<span className="text-xs align-super">®</span>{" "}
            Experience.
          </span>
        </h3>
        <div className=''>
        <img
          className="object-cover w-full h-full"
          src={device}
          alt="Device"
        />
      </div>
      </div>
    </div>
  );
};

export default Experience;
