import { useState } from "react";
import Naveen from "../../assets/images/NAVEEN..svg";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

export default function HeaderNormal() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className="bg-black z-10 flex items-center justify-between lg:pt-6 md:pt-6 lg:pr-20 md:pr-20 lg:pl-20 md:pl-20 sm:pl-4 w-full lg:pb-6 md:pb-6 sm:pb-2"
    >
      <a className="lg:w-1/4" href="http://192.168.4.36:3000">
        <img src={Naveen} alt="logo" className="w-full max-w-heder_logo cursor-pointer"/>
      </a>
      <div className="lg:flex lg:w-3/4 lg:justify-end w-full">
        <div className="lg:flex lg:space-x-11 font-primary hidden lg:block">
          <div className="flex space-x-11 font-primaryfont text-white justify-center items-center capitalize">
            <Link
              className="hover:font-semibold cursor-poitor"
              to="hire"
              smooth={true}
            >
              hire me
            </Link>
            <Link
              className="hover:font-semibold cursor-pointer"
              to="process"
              smooth={true}
            >
              process
            </Link>
            <Link
              className="hover:font-semibold cursor-pointer"
              to="services"
              smooth={true}
            >
              services
            </Link>
            <Link
              className="hover:font-semibold cursor-pointer"
              to="projects"
              smooth={true}
            >
              My Projects
            </Link>
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
              <div className="bg-primary_bg absolute rounded-lg sm:mt-6 md:mt-10 pt-2 pb-2 capitalize">
                <Link
                  to="projects"
                  smooth={true}
                  className="block px-4 py-2 text-white pt-2 pb-2 hover:bg-white hover:text-black transition delay-0 duration-150 ease-in-out"
                >
                  my projects
                </Link>
                <Link
                  to="services"
                  smooth={true}
                  className="block px-4 py-2 text-white pt-2 pb-2 hover:bg-white hover:text-black transition delay-0 duration-150 ease-in-out"
                >
                  services
                </Link>
                <Link
                  to="process"
                  smooth={true}
                  className="block px-4 py-2 text-white pt-2 pb-2 hover:bg-white hover:text-black transition delay-0 duration-150 ease-in-out"
                >
                  process
                </Link>
                <Link
                  to="hire"
                  smooth={true}
                  className="block px-4 py-2 text-white pt-2 pb-2 hover:bg-white hover:text-black transition delay-0 duration-150 ease-in-out"
                >
                  hire me
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
