import vitals from "../../resources/vitals.png";
import remote from "../../resources/remote_phone.png";
import Nutrition_plan from "../../resources/Nutrition_plan.png";
import Symptom from "../../resources/Symptom-checker.jpg";
import tailored_fitness from "../../resources/tailored_fitness.jpg";
import health from "../../resources/phone.png";
import Mental_wellness from "../../resources/Mental_wellness.webp";
import ExtraCard from "./ExtraCard";
import LastCard from "./LastCard";
import "./CustomWidth.css";

const MoreCards = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-8 mb-1 md:mb-20 text-center sm-max:gap-2">
          <h3 className="text-7xl sm-max:text-[45px] md:text-20 md:leading-20 font-medium leading-[3rem] text-white">
            What do you get with Alivee?
          </h3>
          <h3 className="text-3xl sm-max:text-[20px] leading-8 md:text-20 md:leading-20 font-medium text-gray-400">
            Your complete solution for holistic health management.
          </h3>
        </div>
        <div className="flex items-center justify-center gap-8 sm-max:flex sm-max:flex-col mt-10">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="more-cards flex justify-between px-1 bg-[#d8e8f0] rounded-2xl md:rounded-20 sm-max:flex sm-max:flex-col sm-max:items-center sm-max:relative">
              <div className="w-[55%] p-6 pr-0 sm-max:w-full xsm-max:p-4 sm-max:relative">
                <h3 className="text-4xl leading-32 md:text-40 md:leading-40 font-bold text-black xsm-max:text-[30px] md:text-3xl">
                  Real-time vitals monitoring
                </h3>
                <h4 className="text-xl leading-18 md:text-20 md:leading-20 font-medium mt-6 text-black xsm-max:text-sm sm-max:text-[20px]">
                  Track your vitals in real-time with connected wearables.
                </h4>
              </div>
              <div className="w-1/2 sm-max:h-[80%] sm-max:absolute sm-max:w-[67%] sm-max:-bottom-14">
                <img
                  src={vitals}
                  alt="vitals"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="more-cards-high relative overflow-clip rounded-2xl md:rounded-20 bg-[#0a1c24] px-7 flex flex-col items-center">
              <div className="absolute bottom-[-13.5rem] right-[-2rem] z-0 sm-max:bottom-[-19rem]">
                <img src={remote} alt="" className="rounded-t-2xl" />
              </div>
              <div className="mr-auto z-10 py-6 xsm-max:flex xsm-max:flex-col">
                <h3 className="text-4xl leading-32 md:text-40 md:leading-40 font-bold text-white xsm-max:text-[30px] md:text-3xl">
                  Remote monitoring
                </h3>
                <h4 className="text-2xl leading-18 font-medium mt-4 text-white sm-max:text-[20px] sm-max:leading-7 sm-max:font-normal">
                  Alivee can detect emergency states using you or your family
                  member&apos;s connected wearable device.
                </h4>
              </div>
            </div>

            {/* <div className="more-cards relative overflow-hidden flex justify-between bg-[#0a1c24] rounded-2xl md:rounded-20">
              <div className="w-[67%] p-6 pr-0 sm-max:px-4 sm-max:w-[70%]">
                <h3 className="text-4xl md:text-40 md:leading-40 w-[80%] font-bold text-white md:text-3xl sm-max:leading-7">
                Customized Nutrition Plans
                </h3>
                <h4 className="text-xl leading-18 md:text-[20px] md:leading-20 font-medium mt-8 text-white sm-max:text-[20px] sm-max:font-normal">
                Nutrition plans tailored to meet your specific health demands.
                </h4>
              </div>
              <div className="absolute right-0 w-[9rem] xsm-max:right-[-3rem] sm-max:bottom-0 sm-max:left-0 sm-max:right-0 sm-max:h-[50%] sm-max:transform rotate-90">
                <img
                  src={Nutrition_plan}
                  alt="Nutrition_plan"
                  className="w-full h-full object-cover rounded-2xl md:rounded-20"
                />
              </div>
            </div> */}

            <div className="more-cards overflow-hidden flex justify-between px-1 bg-[#0a1c24] rounded-2xl md:rounded-20 sm-max:flex sm-max:flex-col sm-max:items-center relative">
              <div className="w-[55%] p-6 pr-0 sm-max:w-full xsm-max:p-4">
                <h3 className="text-4xl leading-32 md:text-40 md:leading-40 font-bold text-white xsm-max:text-[30px] md:text-3xl">
                Customized Nutrition Plans
                </h3>
                <h4 className="text-xl leading-18 md:text-20 md:leading-20 font-medium mt-6 text-white xsm-max:text-sm sm-max:text-[20px]">
                Nutrition plans tailored to meet your specific health demands.
                </h4>
              </div>
              <div className="absolute right-0 w-[9rem] xsm-max:right-[-3rem] sm-max:transform sm-max:rotate-90 sm-max:w-[65%] sm-max:right-0 sm-max:-bottom-28 sm-max:left-16">
                <img
                  src={Nutrition_plan}
                  alt="Nutrition_plan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="more-cards-high relative rounded-2xl md:rounded-20 bg-[#ebad40] flex flex-col items-center">
              <div>
                <img src={tailored_fitness} alt="" className="rounded-t-2xl" />
              </div>
              <div className="mr-auto absolute bottom-2 p-6 sm-max:flex sm-max:flex-col sm-max:gap-4">
                <h3 className="text-4xl leading-32 md:text-40 md:leading-40 font-bold text-black xsm-max:text-[30px] md:text-3xl">
                  Tailored Fitness Plans
                </h3>
                <h4 className="text-2xl mt-2 leading-18 md:text-20 md:leading-20 font-medium text-black sm-max:font-normal sm-max:text-[20px]">
                  Personalized fitness plans to match your specific needs and
                  goals.
                </h4>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="more-cards-first  rounded-2xl md:rounded-20 bg-center bg-cover flex flex-col items-center justify-between p-0 bg-yellow-medium overflow-hidden bg-white">
              <div className="p-8">
                <h3 className="text-4xl leading-32 md:text-40 md:leading-40 font-bold text-black xsm-max:text-[30px] md:text-3xl">
                  AI Symptom Checker
                </h3>
                <h4 className="text-2xl leading-18 md:text-20 md:leading-20 font-medium mt-4 text-black sm-max:font-normal sm-max:text-[20px]">
                  Chat with our AI to understand your symptoms and get
                  personalized advice.
                </h4>
              </div>
              <img
                alt="Ai symptom"
                loading="lazy"
                width="535"
                height="420"
                decoding="async"
                data-nimg="1"
                className="mx-auto md:mx-0"
                style={{ color: "transparent" }}
                src={Symptom}
              />
            </div>

            <div className="more-cards-second rounded-2xl md:rounded-20 bg-center bg-cover flex flex-col items-center justify-between p-0 bg-yellow-medium overflow-hidden bg-[#0a1b22]">
              <div className="p-8">
                <h3 className="text-4xl leading-32 md:text-40 md:leading-40 font-bold text-white xsm-max:text-[30px] md:text-3xl">
                  Health Insights
                </h3>
                <h4 className="text-2xl leading-18 md:text-20 md:leading-20 font-medium mt-4 text-white sm-max:font-normal sm-max:text-[20px]">
                  Gain valuable insights into health trends and understand your
                  symptoms better.
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
                src={health}
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
                src={Mental_wellness}
              />
              <div className="p-8">
                <h3 className="text-4xl leading-32 md:text-40 md:leading-40 font-bold text-white xsm-max:text-[30px] md:text-3xl">
                  Mental Wellness Plans
                </h3>
                <h4 className="text-[22px] leading-18 md:text-20 md:leading-20 font-medium mt-4 text-white sm-max:font-normal sm-max:text-[20px]">
                  Mental wellness plans to support your emotional well-being
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
