import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Servises";
import Header from "../components/Heeader";
import bg from "../assets/images/bg-image-2.jpg"

const Home = () => {
  return (
    <div
      className="flex bg-black text-white bg-center bg-cover place-content-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="w-full">

        {/* <div className="items-center justify-center">
            <div className="pr-10 pl-10">
                <Header/>
            </div>
        </div> */}

        <div>
          <Hero />
        </div>

        <div className="flex items-center justify-center">
          <div className="max-w-layout  pr-10 pl-10">
            <Services />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
