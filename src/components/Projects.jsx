import React from "react";

export default function Projects() {
  const Projects = [
    {
      id: 1,
      name: "D.M Naveen Dissanayaka",
      type: "CEO of Fitwin Corporation",
      view: "CEO of Fitwin Corporation",
      img: "https://i.pinimg.com/736x/51/0f/ad/510fad7ac4829296ea029b69deea4319.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: 2,
      name: "D.M Naveen Dissanayaka",
      type: "CEO of Fitwin Corporation",
      view: "CEO of Fitwin Corporation",
      img: "https://i.pinimg.com/564x/ed/5f/3b/ed5f3b90205425f23f612ca2645e4e7a.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: 3,
      name: "D.M Naveen Dissanayaka",
      type: "CEO of Fitwin Corporation",
      view: "CEO of Fitwin Corporation",
      img: "https://i.pinimg.com/564x/37/19/96/3719967873197967d948424160835d00.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: 4,
      name: "D.M Naveen Dissanayaka",
      type: "CEO of Fitwin Corporation",
      view: "CEO of Fitwin Corporation",
      img: "https://i.pinimg.com/564x/ff/c4/e8/ffc4e8ea747a770b93c8a1d64c548971.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: 5,
      name: "D.M Naveen Dissanayaka",
      type: "CEO of Fitwin Corporation",
      view: "CEO of Fitwin Corporation",
      img: "https://i.pinimg.com/564x/2c/b1/12/2cb1125ad6ac92fa0104778e8b9a6888.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: 6,
      name: "D.M Naveen Dissanayaka",
      type: "CEO of Fitwin Corporation",
      view: "CEO of Fitwin Corporation",
      img: "https://i.pinimg.com/564x/d6/f5/af/d6f5afacf625ea70d6a51030399a8278.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: 7,
      name: "D.M Naveen Dissanayaka",
      type: "CEO of Fitwin Corporation",
      view: "CEO of Fitwin Corporation",
      img: "https://i.pinimg.com/564x/6d/fd/9a/6dfd9a2753d3add89cfc8ee235f9a6fe.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="capitalize text-center text-titile font-secondary pb-2">
          my projects
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
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Projects.map((index) => (
            <div
              key={index.id}
              className="border rounded rounded-lg overflow-hidden"
              //   style={{
              //     backgroundImage: `url(${index.img})`,
              //   }}
            >
              <img className="w-full h-auto" src={index.img} alt="project"></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}