import React from "react";

export function Project2(props) {
  return (
    <>
      {/* Header */}
      <div className="bg-[#1F2937] h-[350px] md:h-[942px] text-white">
        <div className="pt-20 md:pt-60">
          {/* ERROR 404 Heading */}
          <div className="flex justify-center items-center">
            <h1 className="font-extrabold text-4xl md:text-8xl text-center uppercase tracking-widest md:w-[616px] md:h-[150px]">
              ERROR 404
            </h1>
          </div>

          {/* Page Not Found Subheading */}
          <div className="flex justify-center items-center mt-5">
            <h3 className="font-extrabold text-sm md:text-2xl uppercase md:w-[498px] text-center md:h-[38px] tracking-wider">
              PAGE NOT FOUND, PLEASE GO BACK
            </h3>
          </div>

          {/* Button */}
          <div className="flex justify-center items-center mt-5">
            <button className="uppercase font-normal tracking-widest text-white w-[199px] h-[73px] bg-[#757575] rounded-lg hover:bg-white hover:text-black hover:rounded-md transition hover:scale-105 duration-300">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
