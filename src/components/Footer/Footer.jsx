import logo from "../../resources/logoWhite.png";
import { PiTwitterLogoBold } from "react-icons/pi";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black lg:p-6 lg:px-28 md:px-6 w-full pb-8">
      <div className="lg:p-6 lg:px-28 px-11 flex flex-col items-start gap-4 pt-6">
        <div className="flex items-center justify-start mb-2">
          <img src={logo} alt="logo" className="w-auto h-12" />
        </div>
        <div className="flex gap-11 flex-col md:flex-row xl:flex xl:justify-between">
          <div className="md:border-r-[2px] md:pr-[80px] border-[#808080]">
            <p className="text-[#808080] max-w-[500px] leading-7 h-full">
            Alivee is an AI-powered health management platform for chronic conditions, especially diabetes. It offers tools and resources for personalized insights, tailored recommendations, comprehensive tracking, and customizable fitness plans, empowering users to optimize their health and achieve their fitness goals.
            </p>
          </div>
          <div className="h-full text-white flex gap-6 xsm-max:gap-3">
            <a href="https://twitter.com/aliveehealth" target="_blank" rel="noopener noreferrer">
              <PiTwitterLogoBold className="lg:w-16 lg:h-16 w-11 h-11 xsm-max:w-10 xsm-max:h-10" />
            </a>
            <a href="https://www.instagram.com/aliveehealth?igsh=OXJrcmNzMDdmbzN3" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="lg:w-16 lg:h-16 w-11 h-11 xsm-max:w-10 xsm-max:h-10" />
            </a>
            <a href="https://x.com/aliveehealth?s=21" target="_blank" rel="noopener noreferrer">
              <FiYoutube className="lg:w-16 lg:h-16 w-11 h-11 xsm-max:w-10 xsm-max:h-10" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61560309546009&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="lg:w-16 lg:h-16 w-11 h-11 xsm-max:w-10 xsm-max:h-10" />
            </a>
            <a href="https://www.linkedin.com/company/alivee-health/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="lg:w-16 lg:h-16 w-11 h-11 xsm-max:w-10 xsm-max:h-10" />
            </a>
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
