// import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Dilmah from "../../assets/images/dilmah_tea_factory.avif";
import SportUnleash from "../../assets/images/SportUnleash.svg";
import Dilmah_logo from "../../assets/images/dilmah_logo.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/Custom.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function MyClientsSlider() {
  //   const swiperRef = useRef(null);
  const clients = [
    {
      id: 1,
      name: "Dilmah Tea",
      img: Dilmah,
      logo: Dilmah_logo,
      button_text: "visit the website",
      button_url: "https://fitwin.co",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      id: 2,
      name: "SportUnleash",
      img: "https://wallpaperaccess.com/full/691929.jpg",
      logo: SportUnleash,
      button_text: "visit the website",
      button_url: "https://fitwin.co",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
  ];
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {clients.map((index) => (
          <SwiperSlide key={index.id}>
            <div
              className=" h-[45rem] w-full bg-cover"
              style={{
                backgroundImage: `url(${index.img})`,
              }}
            >
              <div className="h-full w-full bg-gradient-to-b from-black">
                <div className="flex w-full h-full items-center bg-gradient-to-t from-black">
                  <div className="lg:mx-60 md:mx-60 sm:px-4 space-y-2">
                    <div className="flex w-full lg:justify-start md:justify-start sm:justify-center">
                      <img
                        className="lg:max-w-heder_logo md:max-w-heder_logo sm:max-w-heder_logo_mobile"
                        src={index.logo}
                        alt="logo"
                      ></img>
                    </div>
                    <h1 className="lg:text-left md:text-left sm:text-center font-secondary lg:text-[4rem] md:text-[4rem] sm:text-[2rem]">
                      {index.name}
                    </h1>
                    <p className="lg:text-left md:text-left sm:text-center max-w-[600px] text-[#ffffff]/[.60] font-primary text-client_description pb-6">
                      {index.description}
                    </p>
                    <div className="flex lg:justify-start lg:justify-start sm:justify-center w-full">
                      <button className="bg-primary_bg p-3 sm:px-4 md:px-4 lg:px-6 rounded-lg capitalize sm:text-[1rem]">
                        {index.button_text}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>
        {`
          @media (max-width: 640px) {
            .swiper-button-prev,
            .swiper-button-next {
              display: none !important;
            }
          }
        `}
      </style>
    </div>
  );
}
