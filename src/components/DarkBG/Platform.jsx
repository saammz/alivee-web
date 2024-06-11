import { Link } from 'react-router-dom';
import device from '../../resources/available-device.webp'
import andriod from '../../resources/andriod.png';
import apple from '../../resources/apple.png';

const Platform = () => {
  return (
    <div className="flex items-center justify-center sm-max:flex sm-max:flex-col sm-max:px-20">
      <div className="">
        <img
          alt="available on device"
          loading="lazy"
          width="580"
          height="806"
          decoding="async"
          src={device}
        />
      </div>
      <div className="text-white">
        <div className="grid">
          <h1 className="text-6xl leading-48 md:text-70 md:leading-70 sm-max:text-2xl font-semibold flex lg:max-w-md">
            Available on the App Store & Play Store
          </h1>
          <div className='flex flex-col mt-10'>
          
          <Link t0="">
          <button className="bg-white flex items-center justify-center gap-2 text-black text-lg sm-max:text-xl font-semibold px-8 py-4 mt-4 rounded-lg" style={{ width: '100%' }}>
          <img src={andriod} alt="apple" />
          Download Now
          </button>
          </Link>
          <Link t0="">
          <button className="bg-white flex items-center justify-center gap-2 text-black text-lg font-semibold px-8 py-4 mt-4 rounded-lg" style={{ width: '100%' }}>
          <img src={apple} alt="apple" />
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
