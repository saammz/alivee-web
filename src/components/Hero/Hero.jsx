import HeroSection from '../../resources/Hero.webp';

const Hero = () => {
  return (
    <div className='z-0'>
      <div className="overflow-hidden">
      <img
        className="object-cover w-full h-full absolute inset-0"
        src={HeroSection}
        alt="Hero Background"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-7xl sm-max:text-3xl lg:text-6xl font-bold mb-4 w-1/2 sm-max:w-[80%]">
          Best AI management app for non-communicable conditions
        </h1>
        <p className="text-2xl font-semibold sm-max:text-xl lg:text-2xl max-w-md mx-auto mt-2">
          Stay healthy with Alivee
        </p>
      </div>
    </div>
    </div>
  );
};

export default Hero;
