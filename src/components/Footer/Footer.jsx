import logo from "../../resources/logoWhite.png";

export const Footer = () => {
  return (
    <footer className="bg-black p-6 px-28">
        <div>

      <div className="flex items-center justify-start p-4">
        <img src={logo} alt="logo" className="w-auto h-12" />
      </div>
        </div>
    </footer>
  );
};
