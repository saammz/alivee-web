import { Link } from "react-router-dom";
import HeroSection from "../../resources/Hero.webp";
const Hero = () => {
  return (
    <div className="w-full z-10">
      <div className="relative sm-max:h-[25rem] overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={HeroSection}
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl sm-max:text-2xl font-bold mb-4 w-1/2 md-max:w-full sm-max:w-[80%] sm-max:mt-12">
            Best AI management app for non-communicable conditions
          </h1>
          <p className="text-2xl font-semibold sm-max:text-xl lg:text-2xl max-w-md mx-auto mt-2 mb-16">
            Stay healthy with Alivee
          </p>
          <Link>
          <button className="text-white bg-[#4cc273] hover:bg-opacity-90 hover:text-white px-6 py-4 rounded-[2rem] text-sm font-medium">
            Join Waitlist
          </button>
        </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
