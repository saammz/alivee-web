import Button from "../Shared/Button";
import Modal from "../FormModal/FormModal";
import useModalHook from "../FormModal/useFormHook";
import { cardsDetails } from "./CardsData";

const Cards = () => {
  const { isOpen, openModal, closeModal } = useModalHook();

  const handleSubmitForm = (formData) => {
    console.log(formData);
    closeModal();
  };

  return (
    <div className="flex flex-col items-center max-w-3xl mx-auto text-white mt-6 mb-24">
      <div className="flex flex-col gap-8 mb-10 md:mb-20 text-center sm-max:gap-2">
        <h2 className="text-4xl leading-4xl md:text-7xl md:leading-7xl font-semibold">
          <span className="flex max-w-3xl mx-auto text-white md:mt-6 sm-max:text-xl">
            Take the quize and get your plans
          </span>
        </h2>
        <h3 className="text-3xl sm-max:text-[1.2rem] leading-18 md:text-20 md:leading-20 font-medium text-gray-400">
          Your goals. Your pace. Your terms.
        </h3>
      </div>

      <div className="flex gap-4 md-max:flex md-max:flex-wrap sm-max:flex sm-max:flex-col mb-16">
        {cardsDetails.map((card) => (
          <div key={card.id} className="card relative  rounded-md overflow-hidden">
            <img src={card.img} alt={card.category} className="rounded-md w-full h-full" />
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="absolute top-0 left-0 right-0 flex flex-col justify-center items-center  p-4 text-4xl font-semibold">
              <p>{card.title1}</p>
              <p className="text-3xl">{card.title2}</p>
              <p className="text-2xl">{card.title3}</p>
              {card.title4 && <p className="text-xl">{card.title4}</p>}
            </div>
            <div className="absolute bottom-0 w-full text-center py-2 px-6  bg-[#0f2229]">
              <p className="text-2xl animate-pulse">{card.category}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
      <Button onclick={openModal} text="Join Waitlist" className="sm-max:px-4 sm-max:py-2" />
      </div>
    <Modal isOpen={isOpen} onClose={closeModal} onSubmit={handleSubmitForm} />
    </div>
  );
};

export default Cards;
