import HeroSection from "../../resources/Hero.webp";
import Modal from "../FormModal/FormModal";
import useModalHook from "../FormModal/useFormHook";
import Button from "../Shared/Button";

const Hero = () => {
  const { isOpen, openModal, closeModal } = useModalHook();

  const handleSubmitForm = (formData) => {
    console.log(formData);
    closeModal();
  };

  return (
    <div className="w-full z-10">
      <div className="relative max-h-[48rem] sm-max:h-[35rem] overflow-hidden">
        <img
          className="object-cover w-full h-full sm-max:mt-[7rem] sm-max:scale-150"
          src={HeroSection}
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute w-full inset-0 flex flex-col justify-center items-center text-center text-white">
        <h2 className="text-4xl md:text-7xl md:leading-7xl font-bold sm-max:mt-16">
          <span className="flex max-w-4xl mx-auto text-white md:mt-24 sm-max:text-[40px] sm-max:px-4">
          Empowering You to Take Control of Your Health
          </span>
        </h2>
          <p className="text-2xl font-semibold max-w-md mx-auto mt-2 mb-16 sm-max:text-[20px]">
           Alivee is your All-in-One health app.
          </p>
          <div className="md:flex md:items-center md:space-x-4">

          <Button onclick={openModal} text="Join Waitlist" className="sm-max:px-4 sm-max:py-2" />
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} onSubmit={handleSubmitForm} />
    </div>
  );
};

export default Hero;
