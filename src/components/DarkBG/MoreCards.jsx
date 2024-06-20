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
            What you get by being <br /> Aliveer?
          </h3>
          <h3 className="text-3xl sm-max:text-xl leading-18 md:text-20 md:leading-20 font-medium text-gray-400">
            Your goals. Your pace. Your terms.
          </h3>
        </div>
        <div className="flex items-center justify-center gap-8 sm-max:flex sm-max:flex-col mt-12">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="more-cards flex justify-between px-1 bg-[#d8e8f0] rounded-2xl md:rounded-20">
              <div className="w-1/2 p-6 pr-0 xsm-max:p-4">
                <h3 className="text-4xl leading-32 md:text-40 md:leading-40 font-semibold text-black xsm-max:text-xl sm-max:text-[26px] sm-max:leading-6 md:text-3xl">
                  Real-time vitals monitoring
                </h3>
                <h4 className="text-xl leading-18 md:text-20 md:leading-20 font-medium mt-6 text-black xsm-max:text-sm sm-max:text-[20px]">
                  Track your vitals in real-time with connected wearables.
                </h4>
              </div>
              <div className="w-1/2">
                <img
                  src={phone}
                  alt="phone"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="more-cards-high relative rounded-2xl md:rounded-20">
              <div className="absolute top-1/2 p-8 pr-0">
                <h3 className="text-4xl leading-32 md:text-40 md:leading-40 font-semibold text-center flex flex-col max-w-md text-white md-max:text-3xl ">
                  Remote monitoring:
                  <span className="font-medium text-xl">
                    Alivee can detect emergency states using you or your family
                    member&apos;s connected wearable device.
                  </span>
                </h3>
              </div>
              <img
                src={woman}
                alt="woman"
                className="object-cover w-full h-full min-h-[400px] md:min-h-[600px] rounded-2xl md:rounded-20 overflow-hidden"
              />
            </div>

            <div className="more-cards xsm-max:relative xsm-max:overflow-clip flex justify-between bg-[#0a1b22] rounded-2xl md:rounded-20">
              <div className="w-[60%] p-6 pr-0 sm-max:px-4 sm-max:w-[70%]">
                <h3 className="text-4xl md:text-40 md:leading-40 w-[80%] font-semibold text-white sm-max:text-[30px] md:text-3xl sm-max:leading-8">
                Customized Nutrition Plans
                </h3>
                <h4 className="text-2xl leading-18 md:text-[18px] md:leading-20 font-medium mt-8 text-white sm-max:text-[17px] sm-max:leading-5 xs-max:text-[14px]">
                Nutrition plans tailored to meet your specific health demands
                </h4>
              </div>
              <div className="xsm-max:absolute xsm-max:right-[-8rem]">
                <img
                  src={food}
                  alt="food"
                  className="w-full h-full object-cover rounded-2xl md:rounded-20"
                />
              </div>
            </div>

            <div className="more-cards-high rounded-2xl md:rounded-20 bg-[#ebad40] px-7 flex flex-col items-center">
              <div>
                <img src={audio} alt="" className="rounded-t-2xl" />
              </div>
              <div className="mr-auto px-6 xsm-max:flex xsm-max:flex-col xsm-max:gap-24">
                <h3 className="text-5xl leading-32 md:text-40 md:leading-40 font-semibold text-black xsm-max:text-[30px]">
                Tailored Fitness Plans:
                </h3>
                <h4 className="text-2xl mt-6 leading-18 md:text-20 md:leading-20 font-medium text-black">
                Personalized fitness plans to <br /> match your specific needs and goals.
                </h4>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="more-cards-first  rounded-2xl md:rounded-20 bg-center bg-cover flex flex-col items-center justify-between p-0 bg-yellow-medium overflow-hidden bg-[#ebad40]">
              <div className="p-8">
                <h3 className="text-5xl leading-32 md:text-40 md:leading-40 font-semibold mt-1 text-black xsm-max:text-[35px]">
                  AI Symptom Checker
                </h3>
                <h4 className="text-2xl leading-18 md:text-xl md:leading-20 font-medium mt-4 text-black">
                  Chat with our AI to understand your symptoms and get
                  personalized advice.
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
                <h3 className="text-5xl leading-32 md:text-40 md:leading-40 font-semibold mt-6 text-white xsm-max:text-[35px]">
                  Health Insights:
                </h3>
                <h4 className="text-2xl leading-18 md:text-20 md:leading-20 font-medium mt-4 text-white">
                  Gain valuable insights into health trends and understand your
                  symptoms better.
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
                <h3 className="text-4xl leading-32 md:text-40 md:leading-40 font-semibold mt-6 text-white">
                Mental Wellness Plans
                </h3>
                <h4 className="text-[22px] leading-18 md:text-20 md:leading-20 font-medium mt-4 text-white">
                Mental wellness plans to support your emotional well-being
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
