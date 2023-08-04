import React from "react";
import Naveen from "../assets/images/projectprocess.png"

export default function ProjectProcess() {
  return (
    <div className="w-full">
      <div>
        <h1 className="capitalize text-center text-titile font-secondary pb-2">
          project process
        </h1>
        <div className="flex justify-center">
          <hr className="mb-2 w-16 border-boarder" />
        </div>
        <p className="text-center pb-12 font-primary text-description text-paragraph">
          Lorem Ipsum is simply dummy It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <img className="w-full" src={Naveen} alt="logo"/>
      </div>
    </div>
  );
}
