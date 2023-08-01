import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Servises";
import bg from "../assets/images/bg-image-2.jpg";
import ProjectProcess from "../components/ProjectProcess";
// import WhatClientSay from "../components/WhatClientSay";
import Projects from "../components/Projects";
import HireMe from "../components/HireMe";

export default function Home () {
  return (
    <div
      className="flex bg-black text-white bg-center bg-cover place-content-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="w-full">
        <div>
          <Hero />
        </div>

        <div className="flex items-center justify-center">
          <div className="max-w-layout p-4 space-y-8">
            <Projects />
            <Services />
            <ProjectProcess />
            {/* <WhatClientSay /> */}
            <HireMe/>
          </div>
        </div>
      </div>
    </div>
  );
}
