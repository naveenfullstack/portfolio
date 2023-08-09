import React, { useState } from "react";

export default function Testimonial() {
  const testimonials = [
    { id: 1, name: "John Doe", text: "Lorem ipsum dolor sit amet..." },
    { id: 2, name: "Jane Smith", text: "Ut enim ad minim veniam..." },
    { id: 3, name: "222 Smith", text: "Ut enim ad minim veniam..." },
    { id: 4, name: "333 Smith", text: "Ut enim ad minim veniam..." },
    { id: 5, name: "333 Smith", text: "Ut enim ad minim veniam..." },
    // Add more testimonials
  ];
  

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (scrollAmount) => {
    const newPosition = scrollPosition + scrollAmount;
    setScrollPosition(newPosition);
  };

  const maxScroll = testimonials.length * -200 + 600;

  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative overflow-hidden">
        <div className="flex space-x-4 md:space-x-8 lg:space-x-4 overflow-x-auto scrolling-container">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-1/3 md:w-1/2 lg:w-1/3 p-4 border rounded shadow bg-white transform transition-transform"
              style={{ transform: `translateX(${scrollPosition}px)` }}
            >
              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bottom-0 right-0 mb-4 mr-4">
          <button
            onClick={() => handleScroll(200)}
            className={`px-2 py-1 text-gray-600 hover:text-gray-800 ${
              scrollPosition >= 0 ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={scrollPosition >= 0}
          >
            Scroll Right
          </button>
          <button
            onClick={() => handleScroll(-200)}
            className={`ml-2 px-2 py-1 text-gray-600 hover:text-gray-800 ${
              scrollPosition <= maxScroll ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={scrollPosition <= maxScroll}
          >
            Scroll Left
          </button>
        </div>
      </div>
    </div>
  );
}
