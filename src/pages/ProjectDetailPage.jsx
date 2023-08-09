import React from "react";
import WhatClientSay from "../components/WhatClientSay";

export default function ProjectDetailPage() {
  return (
    <div className="bg-black text-white bg-center bg-cover place-content-center bg-no-repeat bg-fixed">
      <div className="items-center justify-center">
        <div className="max-w-full mx-[2%] p-4 space-y-8 ">
          <section>
            <WhatClientSay />
          </section>
        </div>
      </div>
    </div>
  );
}
