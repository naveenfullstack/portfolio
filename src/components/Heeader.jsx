import React from "react";
import Naveen from "../assets/images/NAVEEN..svg"

export default function Header() {
  return (
    <div className="flex items-center justify-center pt-6 pr-20 pl-20">
      <div className="font-naveen italic text-white w-1/4"><img src={Naveen} alt="logo"/></div>
      <div className="flex w-3/4 justify-end">
        <div className="flex space-x-11 font-primary">
          <div className="flex space-x-11 font-primaryfont text-white justify-center items-center">
            <h1>Work Experience</h1>
            <h1>Education</h1>
            <h1>About Me</h1>
            <h1>Projects</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
