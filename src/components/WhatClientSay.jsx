import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./css/WhatClientSay.css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import RightArrow from "../assets/icons/rightarrow.svg";
import LeftArrow from "../assets/icons/leftarrow.svg";

export default function WhatClientSay() {
  const swiperRef = useRef(null);
  const testinomials = [
    {
      id: 1,
      name: "D.M Naveen Dissanayaka",
      position: "CEO of Fitwin Corporation",
      img: "../assets/icons/web-dev.svg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      id: 2,
      name: "Jhon Doe",
      position: "Head Of Finance",
      img: "../assets/icons/web-dev.svg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      id: 3,
      name: "Amal Perera",
      position: "Graphic Designer",
      img: "../assets/icons/web-dev.svg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      id: 4,
      name: "Talor Swift",
      position: "Award Winner",
      img: "../assets/icons/web-dev.svg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      id: 5,
      name: "Poul Winston",
      position: "HR Manager",
      img: "../assets/icons/web-dev.svg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
  ];

  return (
    <div className="w-full">
      <div>
        <h1 className="capitalize text-center text-titile font-secondary pb-2">
          what clients say about me
        </h1>
        <div className="flex justify-center">
          <hr className="mb-2 w-16 border-boarder" />
        </div>
        <p className="text-center pb-12">
          Lorem Ipsum is simply dummy It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <div>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={2}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testinomials.map((index) => (
              <SwiperSlide key={index.id}>
                <div className="bg-primary_bg p-6 rounded-lg">
                  <div>
                    <p className="text-left pb-4">{index.description}</p>
                  </div>
                  <div className="flex">
                    <div className="w-20">
                      <img
                        className="rounded-full"
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        alt="logo"
                      />
                    </div>
                    <div className="text-left pl-6">
                      <h1>{index.name}</h1>
                      <p>{index.position}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-end pt-8 space-x-2">
          <img
            style={{ cursor: "pointer" }}
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-12"
            src={RightArrow}
            alt="logo"
          />
          <img
            style={{ cursor: "pointer" }}
            onClick={() => swiperRef.current?.slideNext()}
            className="w-12"
            src={LeftArrow}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}
