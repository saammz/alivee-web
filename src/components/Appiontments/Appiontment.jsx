import { experts } from "../../resources/Constant";
import Modal from "../FormModal/FormModal";
import useModalHook from "../FormModal/useFormHook";
import Button from "../Shared/Button";

export const Appointment = () => {
  const { isOpen, openModal, closeModal } = useModalHook();

  const handleSubmitForm = (formData) => {
    console.log(formData);
    closeModal();
  };
  
  return (
    <div className="md:pt-20 sm-max:pt-10 flex flex-col w-full items-center lg:gap-16 px-0 p-3 md:p-6 bg-white">
      <div className="flex flex-col items-center">
        <h1 className="text-8xl leading-48 text-black md:leading-70 text-center font-bold pb-4 lg:max-w-3xl md-max:w-full md-max:text-5xl">
        Meet Our Team of Experts
        </h1>
      </div>
      <div className=" carousel carousel-center w-full  p-4 space-x-4 rounded-box">
        {experts.map((card, id) => (
          <div key={id} className="carousel-item h-[450px] w-[300px] relative flex items-center justify-center">
            <div className="h-full w-full">
              <img
                src={card.img}
                alt={card.name}
                className="rounded-box object-cover size-full"
              />
            </div>
            <div className="card-body absolute bottom-0 items-center">
              <h2 className="md:text-[24px] text-[20px] font-bold text-center text-white">{card.userName}</h2>
              <div className="bg-white p-4 py-3 text-[14px] md:text-[18px] font-semibold rounded-md ">{card.area}</div>
              <small className="font-bold text-white text-[18px]">{card.country}</small>
            </div>
          </div>
        ))}
      </div>
      <div className="sm-max:w-[95%] md:w-[60%] md:p-8 p-4 lg:px-16 lg:py-20 bg-black rounded-[20px] flex flex-col lg:flex-row gap-4 justify-between items-center">
        <div className="flex flex-col gap-3 md:gap-0">
          <h2 className="text-[20px] md:text-[34px] text-center text-white font-bold ">
            Schedule an appointment today.
          </h2>
          <h2 className="text-[16px] md:text-[20px] text-center text-white font-bold ">
            Exclusive for Alivee Users
          </h2>
        </div>
        <Button onclick={openModal} text="Join Waitlist" className="sm-max:px-4 sm-max:py-2" />
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} onSubmit={handleSubmitForm} />
    </div>
  );
};
