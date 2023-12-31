import React from "react";
import Header from "./Header/Heeader";
import bgimage from "../assets/images/bg-hero-image.avif";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section>
      <div
        className="bg-cover lg:bg-center md:bg-center sm:bg-top lg:h-[50rem] md:h-[50rem] sm:h-[25rem] w-full"
        style={{
          backgroundImage: `url(${bgimage})`,
        }}
      >
        <div>
          <Header />
        </div>

        <div className="lg:h-[50rem] justify-center items-center ">
          <div className="lg:pt-28 sm:pt-48 md:pt-28 bg-gradient-to-b from-black space-y-4">
            <h1 className="text-center capitalize my-5 mb-2.5 leading-extra-lead lg:text-hero_title md:text-hero_title sm:text-title_mobile font-secondary">
              Bring Your Imagination To Life <br />
              with digital solutions
            </h1>
            <p className="capitalize text-paragraph text-center my-2.5 font-primary hidden lg:block md:block">
              Lorem ipsum is simply dummy it was popularised in the <br />
              1960s with the release of letraset sheets
            </p>
            <div className="text-center">
              <Link
                to="projects"
                smooth={true}
                className="px-4 lg:py-3 md:py-3 sm:py-3 my-2.5 bg-primary_bg rounded-lg font-primaryfont sm:text-paragraph"
              >
                Explore Projcts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
