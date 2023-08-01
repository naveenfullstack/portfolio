import React from "react";
import { FaFacebook , FaTwitter , FaLinkedinIn , FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex bg-primary_bg mt-4 grid sm:grid-cols-1 lg:grid-cols-2 p-20 pt-6 pb-6 items-center">

      <div className="">
        <p>Copyright @ 2023 Naveen Dissanayaka. All Rights Receved</p>
      </div>
    
      <div className="flex space-x-6 justify-end">
        <FaFacebook/>
        <FaTwitter/>
        <FaLinkedinIn/>
        <FaGithub/>
      </div>
    </div>
  );
}
