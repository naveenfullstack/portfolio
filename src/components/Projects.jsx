import React, { useState } from "react";
import ViewAllProjects from "../assets/icons/view-all-projects.svg";
import ProjectDetail from "./popup/ProjectDetail";

export default function Projects() {
  const Projects = [
    {
      id: 1,
      name: "Dilmah Partner Network",
      client: "Dilmaha",
      technologies: "React Js, Node Js, Express Js, Figma",
      hours: "30",
      publish: "2023 Aug 20",
      url: "https://fitwin.co",
      url_tag: "www.fitwin.co",
      type: "website",
      view_more: "https://fitwin.com",
      img: "https://i.pinimg.com/736x/51/0f/ad/510fad7ac4829296ea029b69deea4319.jpg",
      short_description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia odit repudiandae blanditiis itaque nam repellat, iure quasi.",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia odit repudiandae blanditiis itaque nam repellat, iure quasi. Nisi maiores quam fuga consequuntur at eligendi voluptatem nostrum expedita aliquid soluta? Sapiente!",
    },
    {
      id: 2,
      name: "SportUnleash",
      type: "website",
      view: "CEO of Fitwin Corporation",
      img: "https://i.pinimg.com/564x/ed/5f/3b/ed5f3b90205425f23f612ca2645e4e7a.jpg",
      short_description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia odit repudiandae blanditiis itaque nam repellat, iure quasi.",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia odit repudiandae blanditiis itaque nam repellat, iure quasi. Nisi maiores quam fuga consequuntur at eligendi voluptatem nostrum expedita aliquid soluta? Sapiente!",
    },
    {
      id: 3,
      name: "Live Aquaria Client",
      type: "website",
      view: "CEO of Fitwin Corporation",
      img: "https://i.pinimg.com/564x/37/19/96/3719967873197967d948424160835d00.jpg",
      short_description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia odit repudiandae blanditiis itaque nam repellat, iure quasi.",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia odit repudiandae blanditiis itaque nam repellat, iure quasi. Nisi maiores quam fuga consequuntur at eligendi voluptatem nostrum expedita aliquid soluta? Sapiente!",
    },
    {
      id: 4,
      name: "Live Aquaria Partner Portel",
      type: "mobile application",
      view: "CEO of Fitwin Corporation",
      img: "https://i.pinimg.com/564x/ff/c4/e8/ffc4e8ea747a770b93c8a1d64c548971.jpg",
      short_description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia odit repudiandae blanditiis itaque nam repellat, iure quasi.",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia odit repudiandae blanditiis itaque nam repellat, iure quasi. Nisi maiores quam fuga consequuntur at eligendi voluptatem nostrum expedita aliquid soluta? Sapiente!",
    },
    {
      id: 5,
      name: "Dilmah Content Managment system",
      type: "web application",
      view: "CEO of Fitwin Corporation",
      img: "https://i.pinimg.com/564x/2c/b1/12/2cb1125ad6ac92fa0104778e8b9a6888.jpg",
      short_description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia odit repudiandae blanditiis itaque nam repellat, iure quasi.",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia odit repudiandae blanditiis itaque nam repellat, iure quasi. Nisi maiores quam fuga consequuntur at eligendi voluptatem nostrum expedita aliquid soluta? Sapiente!",
    },
    {
      id: 6,
      name: "Shop on cloud",
      type: "website",
      view: "CEO of Fitwin Corporation",
      img: "https://i.pinimg.com/564x/d6/f5/af/d6f5afacf625ea70d6a51030399a8278.jpg",
      short_description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia odit repudiandae blanditiis itaque nam repellat, iure quasi.",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia odit repudiandae blanditiis itaque nam repellat, iure quasi. Nisi maiores quam fuga consequuntur at eligendi voluptatem nostrum expedita aliquid soluta? Sapiente!",
    },
    {
      id: 7,
      name: "ebeyonds education training system",
      type: "web application",
      view: "CEO of Fitwin Corporation",
      img: "https://i.pinimg.com/564x/6d/fd/9a/6dfd9a2753d3add89cfc8ee235f9a6fe.jpg",
      short_description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia odit repudiandae blanditiis itaque nam repellat, iure quasi.",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia odit repudiandae blanditiis itaque nam repellat, iure quasi. Nisi maiores quam fuga consequuntur at eligendi voluptatem nostrum expedita aliquid soluta? Sapiente!",
    },
  ];

  const [popupData, setPopupData] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);

  const openPopup = (projects) => {
    setPopupData(projects);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupData(null);
    setPopupVisible(false);
  };

  const handleExternalLinkClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="sm:mt-8">
      <div>
        <h1 className="capitalize text-center text-titile font-secondary pb-2">
          my projects
        </h1>
        <div className="flex justify-center">
          <hr className="mb-2 w-16 border-boarder" />
        </div>
        <p className="text-center pb-12 font-primary text-paragraph text-description">
          Lorem Ipsum is simply dummy It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      {/* Desktop Grid */}

      <div>
        <div className="sm:hidden md:hidden lg:block">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Projects.map((index) => (
              <div
                key={index.id}
                className="border w-full rounded-lg lg:h-project md:h-project sm:h-project_mobile bg-cover bg-top"
                style={{
                  backgroundImage: `url(${index.img})`,
                }}
              >
                <div className="rounded lg:h-project md:h-project sm:h-project_mobile bg-black/[.75] flex items-end opacity-0 hover:opacity-100 transition-opacity">
                  <div className="p-4 w-full">
                    <div className="flex w-full justify-center mb-24">
                      <button
                        href="https://fitwin.co"
                        className="px-8 lg:py-3 md:py-3 sm:py-2 my-2.5 bg-primary_bg rounded-lg font-primaryfont text-project_button"
                        onClick={() => openPopup(index)}
                      >
                        View
                      </button>
                    </div>
                    <h1 className="capitalize text-left text-project_name font-secondary">
                      {index.name}
                    </h1>
                    <p className="pb-4 pt-2 text-description title_mobile">
                      {index.short_description}
                    </p>
                    <p className="bg-primary_bg w-fit px-4 p rounded-md capitalize text-project_type">
                      {index.type}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex capitalize justify-center items-center lg:border-project md:border-project sm:border-project_mobile border-primary_text rounded-lg hover:bg-primary_bg hover:border-0 hover:transition hover:delay-750 hover:duration-300 hover:ease-in-out lg:h-project md:h-project sm:h-project_mobile">
              <div className="">
                <div className="flex justify-center">
                  <img className="" src={ViewAllProjects} alt="Project"></img>
                </div>
                <div className="flex justify-center text-primary ">
                  <p>view all projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile and Tab Grid */}

        <div className="sm:block md:block lg:hidden">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Projects.map((index) => (
              <div
                key={index.id}
                className="border w-full rounded-lg lg:h-project md:h-project sm:h-project_mobile bg-cover bg-top cursor-pointer"
                style={{
                  backgroundImage: `url(${index.img})`,
                }}
                onClick={() => handleExternalLinkClick(index.view_more)}
              ></div>
            ))}
            <div className="flex capitalize justify-center items-center lg:border-project md:border-project sm:border-project_mobile border-primary_text rounded-lg hover:bg-primary_bg hover:border-0 hover:transition hover:delay-750 hover:duration-300 hover:ease-in-out lg:h-project md:h-project sm:h-project_mobile">
              <div className="">
                <div className="flex justify-center">
                  <img className="" src={ViewAllProjects} alt="Project"></img>
                </div>
                <div className="flex justify-center text-primary ">
                  <p>view all projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detail View Popup */}

        {popupVisible && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/[60%] w-full">
            {popupData && (
              <ProjectDetail projects={popupData} onClose={closePopup} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
