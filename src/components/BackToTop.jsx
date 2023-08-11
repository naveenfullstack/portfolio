import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`${
          isVisible ? "visible" : "invisible"
        } fixed bottom-4 right-4 bg-primary_bg hover:bg-boarder rounded-full h-[3rem] text-white font-bold py-2 px-4 rounded shadow z-10`}
      >
        <AiOutlineArrowUp />
      </button>
    </div>
  );
}
