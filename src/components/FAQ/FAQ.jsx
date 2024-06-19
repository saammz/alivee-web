import { HiArrowNarrowRight } from "react-icons/hi";

export const FAQ = () => {
  return (
    <div className="flex w-full xl:max-w-full 2xl:max-w-full flex-col gap-4 pb-20 p-8 items-center justify-center bg-[#87CEEB20]">
      <div className="flex flex-col lg:flex-row  items-center justify-center xl:gap-10">
        <div>
          <h1 className="text-[34px] md:text-[54px] text-center font-bold text-black mb-4 max-w-xl xl:text-[5rem]">
            Frequently Asked Questions{" "}
          </h1>
        </div>
        <div className=" lg:w-[40%] py-3">
          <div className="p-4">
            <div className="border-b-[1.5px] p-4 pl-0 pt-6">
              <div className="collapse collapse-plus ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium text-[20px]">
                  <p className="text-black text-[20px]">
                    What can Alivee help me Achieve?
                  </p>
                </div>
                <div className="collapse-content">
                  <p className="text-[16px] text-[#6B7280] max-w-[760px] leading-8 mt-3">
                    Begin by clicking the &quot;List Your Space&quot; button on
                    your dashboard. You&quot;ll be guided through the process of
                    providing details about your space, setting availability,
                    uploading photos, and publishing your listing. Our guide
                    offers tips for creating an attractive listing.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-b-[1.5px] p-4 pl-0 pt-6">
              <div className="collapse collapse-plus ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium text-[20px]">
                  <p className="text-black text-[20px]">
                    Who are the professionals?
                  </p>
                </div>
                <div className="collapse-content">
                  <p className="text-[16px] text-[#6B7280] max-w-[760px] leading-8 mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum! Provident similique accusantium nemo autem
                  </p>
                </div>
              </div>
            </div>
            <div className="border-b-[1.5px] p-4 pl-0 pt-6">
              <div className="collapse collapse-plus ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium text-[20px]">
                  <p className="text-black text-[20px]">
                    What payment methods do we accept?
                  </p>
                </div>
                <div className="collapse-content">
                  <p className="text-[16px] text-[#6B7280] max-w-[760px] leading-8 mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum! Provident similique accusantium nemo autem
                  </p>
                </div>
              </div>
            </div>
            <div className="border-b-[1.5px] p-4 pl-0 pt-6">
              <div className="collapse collapse-plus ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium text-[20px]">
                  <p className="text-black text-[20px]">
                    Must I be subscribed?
                  </p>
                </div>
                <div className="collapse-content">
                  <p className="text-[16px] text-[#6B7280] max-w-[760px] leading-8 mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum! Provident similique accusantium nemo autem
                  </p>
                </div>
              </div>
            </div>
            <div className="border-b-[1.5px] p-4 pl-0 pt-6">
              <div className="collapse collapse-plus ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium text-[20px]">
                  <p className="text-black text-[20px]">
                    How do I get the App?
                  </p>
                </div>
                <div className="collapse-content">
                  <p className="text-[16px] text-[#6B7280] max-w-[760px] leading-8 mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum! Provident similique accusantium nemo autem
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
