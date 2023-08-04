import React from "react";
import Header from "./Heeader";
import bgimage from "../assets/images/dark-mountain-4k-3vxidfa2y5t5uk4m.jpg";

export default function Hero({ id, scrollToSection }) {
  return (
    <section id={id}>
      <div
        className="bg-cover h-screen w-full"
        style={{
          backgroundImage: `url(${bgimage})`,
        }}
      >
        <div>
          <Header />
        </div>

        <div className="lg:h-hero justify-center items-center">
          <div className="pt-28">
            <h1 className="text-center capitalize my-5 mb-2.5 leading-extra-lead lg:text-hero_title md:text-hero_title sm:text-title_mobile font-secondary">
              Bring Your Imagination To Life <br />
              with digital solutions
            </h1>
            <p className="capitalize text-paragraph text-center my-2.5 font-primary hidden lg:block md:block">
              Lorem ipsum is simply dummy it was popularised in the <br />
              1960s with the release of letraset sheets
            </p>
            <div className="text-center">
              <button
                href="#projects"
                className="px-4 lg:py-3 md:py-3 sm:py-2 my-2.5 bg-primary_bg rounded-lg font-primaryfont sm:text-paragraph"
                onClick={() => scrollToSection('hire')}
              >
                Explore Projcts
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
