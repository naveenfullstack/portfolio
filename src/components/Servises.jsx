import React from "react";

export default function Services() {
  const posts = [
    {
      id: 1,
      title: "web development",
      icon: "../assets/icons/web-dev.svg",
      description:
        "Lorem Ispum is simply dummy  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum ",
    },
    {
      id: 2,
      title: "app development",
      icon: "/images/web-dev.svg",
      description:
        "Lorem Ipsum is simply dummy  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum ",
    },
    {
      id: 3,
      title: "back-end development",
      icon: "/images/web-dev.svg",
      description:
        "Lorem Ipsum is simply dummy  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum ",
    },
    {
      id: 4,
      title: "UI/UX design",
      icon: "/images/web-dev.svg",
      description:
        "Lorem Ipsum is simply dummy  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum ",
    },
    {
      id: 5,
      title: "no - code",
      icon: "/images/web-dev.svg",
      description:
        "Lorem Ipsum is simply dummy  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum ",
    },
    {
      id: 6,
      title: "SEO",
      icon: "/images/web-dev.svg",
      description:
        "Lorem Ipsum is simply dummy  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum ",
    },
    {
      id: 7,
      title: "digital marketing",
      icon: "/images/web-dev.svg",
      description:
        "Lorem Ipsum is simply dummy  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum ",
    },
    {
      id: 8,
      title: "E - Commerce",
      icon: "/images/web-dev.svg",
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
        <p className="text-center pb-12">
          Lorem Ipsum is simply dummy It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {posts.map((index) => (
          <div
            key={index.id}
            className="border rounded bg-primary_bg rounded-lg p-10 pt-10 pb-10"
          >
            <img
              src={index.icon}
              alt={index.title}
              className=" h-20 object-cover rounded"
            />
            <h2 className="mt-4 text-xl font-secondary text-titile capitalize pb-4">
              {index.title}
            </h2>
            <p>{index.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
