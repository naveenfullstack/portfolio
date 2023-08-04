import { useState, useEffect } from "react";
import Naveen from "../assets/images/NAVEEN..svg";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => { setIsMobileMenuOpen(!isMobileMenuOpen);};
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`z-10 flex items-center justify-between lg:pt-6 md:pt-6 lg:pr-20 md:pr-20 lg:pl-20 md:pl-20 sm:pl-4 fixed w-full lg:pb-6 md:pb-6 sm:pb-2 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
      style={{
        backgroundColor: scrolled ? "black" : "rgba(0, 0, 0, 0)",
      }}
    >
      <div className="lg:w-1/4">
        <img src={Naveen} alt="logo" className="w-full max-w-heder_logo " />
      </div>
      <div className="lg:flex lg:w-3/4 lg:justify-end w-full">
        <div className="lg:flex lg:space-x-11 font-primary hidden lg:block">
          <div className="flex space-x-11 font-primaryfont text-white justify-center items-center">
            <a href="#hire">Word Experience</a>
            <a href="#hire">Education</a>
            <a href="https://fitwin.co">About Me</a>
            <a href="https://fitwin.co">Projects</a>
          </div>
        </div>
        <div className="lg:hidden w-full">
          <button
            onClick={toggleMobileMenu}
            className="flex justify-end block px-4 py-2 text-white w-full"
          >
            <AiOutlineMenu className="text-titile" />
          </button>
          {isMobileMenuOpen && (
            <div className="py-2 w-full flex justify-end text-right">
              <div className="bg-primary_bg absolute rounded-lg sm:mt-6 md:mt-10 pt-2 pb-2">
                <a
                  href="https://fitwin.co"
                  className="block px-4 py-2 text-white pt-2 pb-2 hover:bg-white hover:text-black transition delay-0 duration-150 ease-in-out"
                >
                  Work Experience
                </a>
                <a
                  href="https://fitwin.co"
                  className="block px-4 py-2 text-white pt-2 pb-2 hover:bg-white hover:text-black transition delay-0 duration-150 ease-in-out"
                >
                  Education
                </a>
                <a
                  href="https://fitwin.co"
                  className="block px-4 py-2 text-white pt-2 pb-2 hover:bg-white hover:text-black transition delay-0 duration-150 ease-in-out"
                >
                  About Me
                </a>
                <a
                  href="https://fitwin.co"
                  className="block px-4 py-2 text-white pt-2 pb-2 hover:bg-white hover:text-black transition delay-0 duration-150 ease-in-out"
                >
                  Projects
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
