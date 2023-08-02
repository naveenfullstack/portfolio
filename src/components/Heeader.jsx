import { useState } from "react";
import Naveen from "../assets/images/NAVEEN..svg";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="flex items-center justify-between lg:pt-6 md:pt-6 lg:pr-20 md:pr-20 lg:pl-20 md:pl-20 sm:pl-4 fixed w-full bg-black lg:pb-6 md:pb-6 sm:pb-2 ">
      <div className="lg:w-1/4">
        <img src={Naveen} alt="logo" className="w-full max-w-heder_logo" />
      </div>
      <div className="lg:flex lg:w-3/4 lg:justify-end">
        <div className="lg:flex lg:space-x-11 font-primary hidden lg:block">
          <div className="flex space-x-11 font-primaryfont text-white justify-center items-center">
            <h1 href="https://fitwin.co">Work Experience</h1>
            <h1 href="https://fitwin.co">Education</h1>
            <h1 href="https://fitwin.co">About Me</h1>
            <h1 href="https://fitwin.co">Projects</h1>
          </div>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="block px-4 py-2 text-white"
          >
            <AiOutlineMenu className="text-titile" />
          </button>
          {isMobileMenuOpen && (
            <div className="py-2">
              <a
                href="https://fitwin.co"
                className="block px-4 py-2 text-white"
              >
                Work Experience
              </a>
              <a
                href="https://fitwin.co"
                className="block px-4 py-2 text-white"
              >
                Education
              </a>
              <a
                href="https://fitwin.co"
                className="block px-4 py-2 text-white"
              >
                About Me
              </a>
              <a
                href="https://fitwin.co"
                className="block px-4 py-2 text-white"
              >
                Projects
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
