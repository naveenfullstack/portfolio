import React from "react";

export default function ClientTestimonials() {
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
  ];
  return (
    <div className="w-full">
      <div>
        <h1 className="capitalize text-center text-titile font-secondary pb-2">
          Testimonials
        </h1>
        <div className="flex justify-center">
          <hr className="mb-2 w-16 border-boarder" />
        </div>
        <p className="text-center pb-12 font-primary text-description text-paragraph">
          Lorem Ipsum is simply dummy It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {testinomials.map((index) => (
          <div key={index.id} className="">
            <div className="bg-primary_bg p-6 rounded-lg ">
              <div>
                <p className="text-left pb-4 text-[#ffffff]/[.60]">
                  {index.description}
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-20">
                  <img
                    className="rounded-full"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    alt="logo"
                  />
                </div>
                <div className="text-left pl-6">
                  <h1 className="font-semibold">{index.name}</h1>
                  <p className="text-[#ffffff]/[.60]">{index.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
