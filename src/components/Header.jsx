import React from "react";
import Image from "next/image";
import Naveen from "/public/NAVEEN..svg"

export default function Header() {
  return (
    <div className="flex items-center justify-center pt-6">
      <div className="pr-96 border-0 font-naveen italic text-white"><Image src={Naveen} /></div>
      <div className="">
        <div className="flex space-x-11">
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
