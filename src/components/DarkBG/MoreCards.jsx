import phone from "../../resources/phone.webp";
import woman from "../../resources/woman.webp";
import food from "../../resources/food.webp";
import audio from "../../resources/audio.webp";
import empowering from "../../resources/empowering.webp";
import exercise from "../../resources/exercise.webp";
import badge from "../../resources/badge.webp";
import ExtraCard from "./ExtraCard";
import LastCard from "./LastCard";

const MoreCards = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-8 mb-1 md:mb-20 text-center sm-max:gap-2">
          <h3 className="text-7xl sm-max:text-2xl leading-18 md:text-20 md:leading-20 font-medium leading-[5rem] text-white">
            What you get by being <br/> Aliveer?
          </h3>
          <h3 className="text-3xl sm-max:text-xl leading-18 md:text-20 md:leading-20 font-medium text-gray-400">
            Your goals. Your pace. Your terms.
          </h3>
        </div>
        <div className="flex items-center justify-center gap-8 sm-max:flex sm-max:flex-col mt-12">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="more-cards flex justify-between px-1 bg-[#d8e8f0] rounded-2xl md:rounded-20">
              <div className="p-8 pr-0 xsm-max:p-4">
                <h3 className="text-4xl leading-32 md:text-40 md:leading-40 font-semibold text-black xsm-max:text-xl sm-max:text-[22px] md:text-3xl">
                  Connect with your devices
                </h3>
                <h4 className="text-2xl leading-18 md:text-20 md:leading-20 font-medium mt-6 text-black xsm-max:text-xl sm-max:text-[20px] ">
                  Sync with your wearables.
                </h4>
              </div>
              <div className="max-md:mx-auto md:ml-auto">
                <img
                  src={phone}
                  alt="phone"
                  className="w-full h-full object-cover rounded-2xl md:rounded-20"
                />
              </div>
            </div>

            <div className="more-cards-high relative rounded-2xl md:rounded-20">
              <div className="absolute top-1/2 p-8 pr-0">
                <h3 className="text-4xl leading-32 md:text-40 md:leading-40 font-bold text-center flex max-w-md text-white md-max:text-3xl">
                  Video Appointments with professionals
                </h3>
              </div>
              <img
                src={woman}
                alt="woman"
                className="object-cover w-full h-full min-h-[400px] md:min-h-[600px] rounded-2xl md:rounded-20 overflow-hidden"
              />
            </div>

            <div className="more-cards flex justify-between bg-[#0a1b22] rounded-2xl md:rounded-20">
              <div className="p-8 pr-0 sm-max:px-4 sm-max:w-[70%]">
                <h3 className="text-4xl leading-32 md:text-40 md:leading-40 w-[80%] font-semibold text-white sm-max:text-[22px] md:text-3xl">
                  Healthy meals made easy
                </h3>
                <h4 className="text-2xl leading-18 md:text-[18px] md:leading-20 font-medium mt-6 text-white sm-max:text-[15px]">
                Nutrition plans tailored to your needs.
                </h4>
              </div>
              <div className="sm">
                <img
                  src={food}
                  alt="food"
                  className="w-full h-full object-cover rounded-2xl md:rounded-20"
                />
              </div>
            </div>

            {/* <div className="relative flex justify-between px-1 bg-[#0a1b22] w-[480px] h-[250px] md-max:w-[365px] rounded-2xl md:rounded-20 overflow-hidden">
              <div className="p-8 pr-0 z-10">
                <h3 className="text-4xl leading-32 md:text-40 md:leading-40 font-semibold text-white md-max:text-3xl w-[60%]">
                  Healthy meals made easy
                </h3>
                <h4 className="text-2xl leading-18 md:text-20 md:leading-20 font-medium mt-6 text-white w-[60%] sm-max:text-[20px] sm-max:leading-6">
                  Nutrition plans tailored to your needs.
                </h4>
              </div>
              <div className="absolute right-[-4rem] top-[-1rem] max-md:mx-auto md:ml-auto">
                <img
                  src={food}
                  alt="food"
                  className="max-md:mx-auto h-full object-cover rounded-2xl md:rounded-l-full"
                />
              </div>
            </div> */}

            <div className="more-cards-high rounded-2xl md:rounded-20 bg-[#ebad40] px-7 flex flex-col items-center">
              <div>
                <img src={audio} alt="" className="rounded-t-2xl" />
              </div>
              <div className="mr-auto px-6">
                <h3 className="text-5xl leading-32 md:text-40 md:leading-40 font-bold text-black xsm-max:text-[30px]">
                  Audiobooks for your inner balance
                </h3>
                <h4 className="text-2xl mt-6 leading-18 md:text-20 md:leading-20 font-medium text-black">
                  Listen to the best advice.
                  <br />
                  Anywhere, anytime.
                </h4>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="more-cards-first  rounded-2xl md:rounded-20 bg-center bg-cover flex flex-col items-center justify-between p-0 bg-yellow-medium overflow-hidden bg-[#ebad40]">
              <div className="p-8">
                <h3 className="text-5xl leading-32 md:text-40 md:leading-40 font-bold mt-1 text-black">
                  Empowering Personalised Plans
                </h3>
                <h4 className="text-2xl leading-18 md:text-20 md:leading-20 font-medium mt-4 text-black">
                  Dial up, or dial down! Your sweat should have volume control.
                </h4>
              </div>
              <img
                alt="what youget empowering"
                loading="lazy"
                width="535"
                height="420"
                decoding="async"
                data-nimg="1"
                className="mx-auto md:mx-0"
                style={{ color: "transparent" }}
                src={empowering}
              />
            </div>

            <div className="more-cards-second rounded-2xl md:rounded-20 bg-center bg-cover flex flex-col items-center justify-between p-0 bg-yellow-medium overflow-hidden bg-[#0a1b22]">
              <div className="p-8">
                <h3 className="text-5xl leading-32 md:text-40 md:leading-40 font-bold mt-6 text-white">
                  Together we can achieve our goals
                </h3>
                <h4 className="text-2xl leading-18 md:text-20 md:leading-20 font-medium mt-4 text-white">
                  Feel connected and inspire others to strive for success.
                </h4>
              </div>
              <img
                alt="what youget empowering"
                loading="lazy"
                width="535"
                height="420"
                decoding="async"
                data-nimg="1"
                className="mx-auto md:mx-0"
                style={{ color: "transparent" }}
                src={exercise}
              />
            </div>

            <div className="more-cards-third rounded-2xl md:rounded-20 bg-center bg-cover flex flex-col items-center justify-between p-0 bg-yellow-medium overflow-hidden bg-[#091b20]">
              <img
                alt="what youget empowering"
                loading="lazy"
                width="535"
                height="420"
                decoding="async"
                data-nimg="1"
                className="mx-auto md:mx-0"
                style={{ color: "transparent" }}
                src={badge}
              />
              <div className="p-8">
                <h3 className="text-4xl leading-32 md:text-40 md:leading-40 font-bold mt-6 text-white">
                  Conquer Challenges, reap awards
                </h3>
                <h4 className="text-18 leading-18 md:text-20 md:leading-20 font-semibold mt-4 text-white">
                  Take on the challenges. Go further at your own pace.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <ExtraCard />
      </div>
      <div className="flex items-center justify-center mb-16">
        <LastCard />
      </div>
    </>
  );
};

export default MoreCards;
