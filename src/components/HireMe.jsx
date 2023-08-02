import React from "react";
import { MdMailOutline } from "react-icons/md";

export default function HireMe() {
  return (
    <div className="flex w-full bg-primary_bg lg:p-8 md:p-8 sm:p-4 rounded-lg grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 items-center">
      <div className="capitalize sm:pb-4 ">
        <h1 className="flex text-hireme sm:justify-center lg:justify-start font-secondary">
          hire me
        </h1>
        <p className="flex sm:justify-center lg:justify-start sm:text-center font-primary text-paragraph">
          Be the first one to know about discounts, offers and events
        </p>
      </div>

      <div className="flex w-full justify-end">
        <div className="flex justify-end text-black lg:w-fit lg:m-2 sm:w-full">
          <div className="flex items-center bg-input_bg space-x-4 rounded-lg pl-6 sm:w-full sm:p-2 justify-end lg:m-2">
            <MdMailOutline className="text-white lg:text-input_icon sm:text-input_icon_mobile"></MdMailOutline>
            <input
              className="p-2 rounded-lg bg-input_bg text-white lg:w-60 sm:w-full font-primary"
              placeholder="Enter your email"
              type="email"
            ></input>
            <button className="bg-black text-white p-2 pl-6 pr-6 rounded-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
