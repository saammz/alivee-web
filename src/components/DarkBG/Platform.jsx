import { Link } from "react-router-dom";
import appstore from "../../resources/appstore.png";
import andriod from "../../resources/andriod.png";
import apple from "../../resources/apple.png";

const Platform = () => {
  return (
    <div className="flex items-center justify-center sm-max:flex-col max-w-screen-xl mx-auto">
      <div className="overflow-hidden md:w-1/2">
        <img
          alt="available on appstore"
          loading="lazy"
          src={appstore}
          className="w-full h-full object-cover sm-max:scale-120"
        />
      </div>
      <div className="text-white md:w-1/2 md-max:mx-10">
        <div className="grid">
          <h1 className="lg:text-6xl leading-48 md:text-4xl md:leading-70 sm-max:text-3xl font-semibold flex lg:max-w-md sm-max:mt-10">
           Coming Soon on App Store & Play Store
          </h1>
          <div className="flex flex-col mt-10">
            <Link t0="">
              <button
                className="bg-white flex items-center justify-center gap-2 text-black text-lg sm-max:text-sm font-semibold px-8 py-4 mt-4 rounded-lg"
                style={{ width: "100%" }}
              >
                <img src={andriod} alt="apple" />
                Download Now
              </button>
            </Link>
            <Link to="">
              <button
                className="bg-white flex items-center justify-center gap-2 text-black text-lg sm-max:text-sm font-semibold px-8 py-4 mt-4 rounded-lg sm-max:w-full"
                style={{ width: "100%" }}
              >
                <img src={apple} alt="apple" className="sm-max:w-[25px]" />
                Download Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
