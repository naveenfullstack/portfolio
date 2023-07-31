import React from "react";
import Header from "./Heeader";
import bgimage from "../assets/images/bg-hero-image.jpg";

export default function Hero() {
  return (
    <div
      className="bg-center bg-cover h-screen w-full"
      style={{
        backgroundImage: `url(${bgimage})`,
      }}
    >
      <div>
        <Header/>
      </div>

      <div className="h-hero justify-center items-center">
        <div className="pt-28">
          <h1 className="text-center font-maintitle text-5xl text-white font-semibold capitalize my-5 mb-2.5 leading-extra-lead">
            Bring Your Imagination To Life <br />
            with digital solutions
          </h1>
          <p className="capitalize text-sm text-center my-2.5 text-white opacity-default font-primaryfont">
            Lorem ipsum is simply dummy it was popularised in the <br />
            1960s with the release of letraset sheets
          </p>
          <div className="text-center">
            <button className="px-4 py-3 my-2.5 bg-button-color text-white rounded-lg font-primaryfont text-sm font-medium">
              Explore Projcts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
