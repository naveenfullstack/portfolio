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
                  <div className="mx-60">
                    <div className="max-w-heder_logo">
                      <img className="" src={index.logo} alt="logo"></img>
                    </div>
                    <h1 className="text-left font-secondary text-[64px]">
                      {index.name}
                    </h1>
                    <p className="text-left max-w-[600px] text-[#ffffff]/[.60] font-primary text-client_description pb-6">
                      {index.description}
                    </p>
                    <div className="flex justify-start">
                      <button className="bg-primary_bg p-3 px-6 rounded-lg capitalize">
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
    </div>
  );
}
