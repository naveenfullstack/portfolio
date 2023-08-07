import React from "react";
import { FaFacebook , FaTwitter , FaLinkedinIn , FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex bg-primary_bg mt-4 grid sm:grid-cols-1 lg:grid-cols-2 lg:p-20 lg:pt-6 lg:pb-6 sm:p-4 sm:pt-6 sm:pb-6 items-center">

      <div className="sm:text-center md:text-center lg:text-left sm:pb-2 md:pb-2">
        <p>Copyright @ 2023 Naveen Dissanayaka. All Rights Receved</p>
      </div>
    
      <div className="flex space-x-6 lg:justify-end sm:justify-center md:justify-center sm:pt-2 md:pt-2">
        <FaFacebook/>
        <FaTwitter/>
        <FaLinkedinIn/>
        <FaGithub/>
      </div>
    </div>
  );
}
