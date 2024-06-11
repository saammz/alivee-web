import device from '../../resources/device.webp';

const Experience = () => {
  return (
    <div className="bg-black lg:pt-20 flex flex-col gap-4 w-full h-full">
      <div className="flex flex-col items-center gap-8 mb-10 md:mb-20 text-center sm-max:pt-16">
        <h2 className="text-4xl leading-4xl md:text-7xl md:leading-7xl font-semibold">
          <span className="flex max-w-3xl mx-auto text-white mt-6 md-max:mt-24">
            Personalised Fitness, Nutrition and Mental Balance plans
          </span>
        </h2>
        <h3 className="text-18 leading-18 md:text-20 md:leading-20 font-medium text-gray-400">
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
