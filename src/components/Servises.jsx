import React from "react";
import webDevIcon from "../assets/icons/web-dev.svg";
import appDevIcon from "../assets/icons/app-dev.svg";
import backend from "../assets/icons/back-end.svg";
import uiux from "../assets/icons/uiux.svg";
import nocode from "../assets/icons/no-code.svg";
import seo from "../assets/icons/seo.svg";
import marketing from "../assets/icons/marketing.svg";
import ecommerce from "../assets/icons/e-commerce.svg";

export default function Services() {
  const posts = [
    {
      id: 1,
      title: "web development",
      icon: webDevIcon,
      description:
        "Lorem Ispum is simply dummy  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum ",
    },
    {
      id: 2,
      title: "app development",
      icon: appDevIcon,
      description:
        "Lorem Ipsum is simply dummy  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum ",
    },
    {
      id: 3,
      title: "back-end development",
      icon: backend,
      description:
        "Lorem Ipsum is simply dummy  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum ",
    },
    {
      id: 4,
      title: "UI/UX design",
      icon: uiux,
      description:
        "Lorem Ipsum is simply dummy  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum ",
    },
    {
      id: 5,
      title: "no - code",
      icon: nocode,
      description:
        "Lorem Ipsum is simply dummy  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum ",
    },
    {
      id: 6,
      title: "SEO",
      icon: seo,
      description:
        "Lorem Ipsum is simply dummy  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum ",
    },
    {
      id: 7,
      title: "digital marketing",
      icon: marketing,
      description:
        "Lorem Ipsum is simply dummy  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum ",
    },
    {
      id: 8,
      title: "E - Commerce",
      icon: ecommerce,
      description:
        "Lorem Ipsum is simply dummy  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum ",
    },
  ];

  return (
    <div className="w-full ">
      <div>
        <h1 className="capitalize text-center text-titile font-secondary pb-2">
          what i can do
        </h1>
        <div className="flex justify-center">
          <hr className="mb-2 w-16 border-boarder" />
        </div>
        <p className="text-center pb-12 font-primary opacity-default text-paragraph">
          Lorem Ipsum is simply dummy It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {posts.map((index) => (
          <div
            key={index.id}
            className="border rounded bg-primary_bg rounded-lg lg:p-8 md:p-6 sm:p-4"
          >
            <div className="w-full flex sm:justify-center md:justify-center lg:justify-start">
              <img
                src={index.icon}
                alt={index.title}
                className="h-20 object-cover rounded sm:justify-center"
              />
            </div>
            <h2 className="sm:text-center md:text-center lg:text-left mt-4 text-xl font-secondary text-titile capitalize pb-4">
              {index.title}
            </h2>
            <p className="sm:text-center md:text-center lg:text-left text-paragraph">
              {index.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
