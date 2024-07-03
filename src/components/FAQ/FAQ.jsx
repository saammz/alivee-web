import { HiArrowNarrowRight } from "react-icons/hi";

export const FAQ = () => {
  return (
    <div className="flex w-full xl:max-w-full 2xl:max-w-full flex-col gap-4 pb-20 p-8 items-center justify-center bg-[#87CEEB20]">
      <div className="flex flex-col lg:flex-row  items-center justify-center xl:gap-10">
        <div>
          <h1 className="text-[34px] md:text-[44px] text-center font-bold text-black mb-4 max-w-xl xl:text-[5rem]">
            Frequently Asked Questions{" "}(FAQs)
          </h1>
        </div>
        <div className=" lg:w-[40%] py-3">
          <div className="p-4">
            <div className="border-b-[1.5px] p-4 pl-0 pt-6">
              <div className="collapse collapse-plus ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium text-[20px]">
                  <p className="text-black text-[20px]">
                  How does Alivee work
                  </p>
                </div>
                <div className="collapse-content">
                  <p className="text-[16px] text-[#6B7280] max-w-[760px] leading-8 mt-3">
                  Alivee integrates with wearable devices to monitor your vital signs, offers personalized fitness, nutrition, and mental wellness plans, and provides AI-driven symptom analysis and medication tracking. It also enables remote monitoring and real-time health insights.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-b-[1.5px] p-4 pl-0 pt-6">
              <div className="collapse collapse-plus ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium text-[20px]">
                  <p className="text-black text-[20px]">
                  What kind of personalized health plans does Alivee offer?
                  </p>
                </div>
                <div className="collapse-content">
                  <p className="text-[16px] text-[#6B7280] max-w-[760px] leading-8 mt-3">
                  Alivee offers tailored fitness plans, customized nutrition plans, and mental wellness plans, all designed to meet your specific health needs and goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-b-[1.5px] p-4 pl-0 pt-6">
              <div className="collapse collapse-plus ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium text-[20px]">
                  <p className="text-black text-[20px]">
                  How does the AI Symptom Checker work?
                  </p>
                </div>
                <div className="collapse-content">
                  <p className="text-[16px] text-[#6B7280] max-w-[760px] leading-8 mt-3">
                  The AI Symptom Checker allows you to input your symptoms and receive an analysis based on your health data. It provides advice and recommendations for further action.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-b-[1.5px] p-4 pl-0 pt-6">
              <div className="collapse collapse-plus ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium text-[20px]">
                  <p className="text-black text-[20px]">
                  Can I track my medication and water intake with Alivee?
                  </p>
                </div>
                <div className="collapse-content">
                  <p className="text-[16px] text-[#6B7280] max-w-[760px] leading-8 mt-3">
                  Yes, Alivee has a medication and water intake tracking feature to help you stay on top of your health regimen and ensure you never miss a dose or forget to stay hydrated.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-b-[1.5px] p-4 pl-0 pt-6">
              <div className="collapse collapse-plus ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium text-[20px]">
                  <p className="text-black text-[20px]">
                  How does real-time vitals monitoring work?
                  </p>
                </div>
                <div className="collapse-content">
                  <p className="text-[16px] text-[#6B7280] max-w-[760px] leading-8 mt-3">
                  By connecting with wearable devices, Alivee continuously monitors your vital signs and alerts you if any measurements are outside the normal range, helping you stay proactive about your health.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-b-[1.5px] p-4 pl-0 pt-6">
              <div className="collapse collapse-plus ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium text-[20px]">
                  <p className="text-black text-[20px]">
                  What is remote monitoring?
                  </p>
                </div>
                <div className="collapse-content">
                  <p className="text-[16px] text-[#6B7280] max-w-[760px] leading-8 mt-3">
                  Remote monitoring allows caregivers and loved ones to monitor your health status from a distance. This feature is particularly useful for managing the health of elderly family members or those with chronic conditions.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-b-[1.5px] p-4 pl-0 pt-6">
              <div className="collapse collapse-plus ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium text-[20px]">
                  <p className="text-black text-[20px]">
                  How does the community support feature work?
                  </p>
                </div>
                <div className="collapse-content">
                  <p className="text-[16px] text-[#6B7280] max-w-[760px] leading-8 mt-3">
                  Alivee’s community support feature connects you with other users facing similar health challenges. You can share experiences, offer support, and gain insights from a community of people who understand what you’re going through.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-b-[1.5px] p-4 pl-0 pt-6">
              <div className="collapse collapse-plus ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium text-[20px]">
                  <p className="text-black text-[20px]">
                  How secure is my data with Alivee?
                  </p>
                </div>
                <div className="collapse-content">
                  <p className="text-[16px] text-[#6B7280] max-w-[760px] leading-8 mt-3"> Your data security is our top priority at Alivee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="p-5 px-14 flex items-center gap-2 text-black border-black border-[2px]  rounded-full font-semibold min-w-[120px]">
        Go to Help Center
        <HiArrowNarrowRight className="h-7 w-6 pt-1" />
      </button>
    </div>
  );
};
