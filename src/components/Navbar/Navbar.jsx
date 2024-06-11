import logo from "../../resources/logoWhite.png";
import Modal from "../FormModal/FormModal";
import useModalHook from "../FormModal/useFormHook";

const Navbar = () => {
  const { isOpen, openModal, closeModal } = useModalHook();

  const handleSubmitForm = (formData) => {
    console.log(formData);
    closeModal();
  };

  return (
    <header className="w-full">
      <nav className="bg-[#0f2229]  w-full top-0 left-0  z-[100] fixed py-3">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-start">
              <img src={logo} alt="logo" className="w-auto h-12" />
            </div>

            <div className="md:flex md:items-center md:space-x-4">
              <button
                onClick={openModal}
                className="text-white bg-[#4cc273] hover:bg-opacity-90 hover:text-white px-6 py-4 rounded-[2rem] text-sm font-medium"
              >
                Join Waitlist
              </button>
            </div>
            <div className="md:hidden sm-max:hidden flex items-center">
              <button className="text-white hover:text-white focus:outline-none">
                {isOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Modal isOpen={isOpen} onClose={closeModal} onSubmit={handleSubmitForm} />
    </header>
  );
};

export default Navbar;
