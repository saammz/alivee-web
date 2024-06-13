import HeroSection from "../../resources/Hero.webp";
import Modal from "../FormModal/FormModal";
import useModalHook from "../FormModal/useFormHook";

const Hero = () => {
  const { isOpen, openModal, closeModal } = useModalHook();

  const handleSubmitForm = (formData) => {
    console.log(formData);
    closeModal();
  };

  return (
    <div className="w-full z-10">
      <div className="relative max-h-[48rem] sm-max:h-[25rem] overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={HeroSection}
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h2 className="text-4xl leading-4xl md:text-7xl md:leading-7xl font-semibold sm-max:mt-14">
          <span className="flex max-w-3xl mx-auto text-white md:mt-24 sm-max:text-xl md-max:text-6xl">
            Best AI management app for non-communicable conditions
          </span>
        </h2>
          <p className="text-2xl font-semibold max-w-md mx-auto mt-2 mb-16 sm-max:text-[16px]">
            Stay healthy with Alivee
          </p>
          <div className="md:flex md:items-center md:space-x-4">
            <button
              onClick={openModal}
              className="text-white bg-[#4cc273] hover:bg-opacity-90 hover:text-white px-6 py-4 rounded-[2rem] text-sm font-medium"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} onSubmit={handleSubmitForm} />
    </div>
  );
};

export default Hero;
