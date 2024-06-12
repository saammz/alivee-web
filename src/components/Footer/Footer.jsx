import logo from "../../resources/logoWhite.png";
import { PiTwitterLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaFacebook, FaLinkedin, FaRegCopyright } from "react-icons/fa6";
import {} from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-black lg:p-6 lg:px-28 md:px-6 w-full pb-8">
      <div className="lg:p-6 lg:px-28 px-11 flex flex-col gap-4">
        <div className="flex items-center justify-start p-4">
          <img src={logo} alt="logo" className="w-auto h-12" />
        </div>
        <div className="flex gap-11 flex-col md:flex-row">
          <div className="md:border-r-[2px] md:pr-[80px] border-[#808080]  ">
            <p className="text-[#808080] max-w-[500px] leading-7 h-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem
            </p>
          </div>
          <div className="h-full text-white flex gap-6">
            <PiTwitterLogoBold className="w-16 h-16" />
            <FaInstagram className="w-16 h-16" />
            <FiYoutube className="w-16 h-16" />
            <FaFacebook className="w-16 h-16" />
            <FaLinkedin className="w-16 h-16" />
          </div>
        </div>
        <div className="text-white flex items-center gap-3 mt-6">
          <FaRegCopyright className="w-6 h-6" />
          <p>2024 Alivee. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
