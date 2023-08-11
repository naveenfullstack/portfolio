import { useState, useEffect } from "react";
import Naveen from "../../assets/images/NAVEEN..svg";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("");
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active menu item based on scroll position
      const sections = ["hire", "process", "services", "projects", "myclients"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 1.4 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveMenuItem(section);
          }
        }
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
      <Link className="lg:w-1/4" to="hero" smooth={true}>
        <img src={Naveen} alt="logo" className="w-full max-w-heder_logo cursor-pointer " />
      </Link>
      <div className="lg:flex lg:w-3/4 lg:justify-end w-full">
        <div className="lg:flex lg:space-x-11 font-primary hidden lg:block">
          <div className="flex space-x-11 font-primaryfont text-white justify-center items-center capitalize">
            <Link
              onClick={() => setActiveMenuItem("projects")}
              className={`hover:font-semibold cursor-pointer ${
                activeMenuItem === "projects" ? "text-blue-500" : ""
              }`}
              to="projects"
              smooth={true}
            >
              My Projects
            </Link>
            <Link
              onClick={() => setActiveMenuItem("services")}
              className={`hover:font-semibold cursor-pointer ${
                activeMenuItem === "services" ? "text-blue-500" : ""
              }`}
              to="services"
              smooth={true}
            >
              services
            </Link>
            <Link
              onClick={() => setActiveMenuItem("myclients")}
              className={`hover:font-semibold cursor-pointer ${
                activeMenuItem === "myclients" ? "text-blue-500" : ""
              }`}
              to="myclients"
              smooth={true}
            >
              my clients
            </Link>
            <Link
              onClick={() => setActiveMenuItem("process")}
              className={`hover:font-semibold cursor-pointer ${
                activeMenuItem === "process" ? "text-blue-500" : ""
              }`}
              to="process"
              smooth={true}
            >
              process
            </Link>
            <Link
              onClick={() => setActiveMenuItem("hire")}
              className={`hover:font-semibold cursor-pointer ${
                activeMenuItem === "hire" ? "text-blue-500" : ""
              }`}
              to="hire"
              smooth={true}
            >
              hire me
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
                  to="myclients"
                  smooth={true}
                  className="block px-4 py-2 text-white pt-2 pb-2 hover:bg-white hover:text-black transition delay-0 duration-150 ease-in-out"
                >
                  My Clients
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
