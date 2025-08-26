import React from "react";
import { NavLink } from "react-router-dom";

export function OurServices(props) {
  return (
    <>
      <div>
        {/* Header */}
        <div className="bg-[#111827] w-full md:h-[373px] pt-10 md:pt-28 text-white">
          <div className="px-5 md:px-10 md:w-[655px] h-[173px] relative">
            <img
              src="./src/images/circle-img.png"
              alt="circle"
              className="absolute top-0 left-[40px]"
            />
            <h1 className="font-extrabold text-3xl md:text-6xl uppercase pt-3 md:w-[655px] md:h-[90px] tracking-wider">
              Our Services
            </h1>
            <p className="text-sm md:text-lg md:h-[52px] mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>

        {/* Info Box */}
        <div className="flex flex-col md:flex-row h-full md:h-[296px] mt-10 mx-5 md:mt-24 md:mx-20">
          <div className="w-full md:w-1/3 bg-[#1B1717] text-white hover:bg-[#2D2424] hover:text-[#22C55E] transition hover:scale-110 cursor-pointer">
            <div className="md:h-[236px] md:mx-7 md:mt-8 p-5 md:p-0">
              <h2 className="font-extrabold text-2xl tracking-widest leading-9 uppercase">
                home design consultation
              </h2>
              <p className="pt-6 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo..
              </p>
              <img
                src="./src/images/d-icon.png"
                alt="icon"
                className="pt-5 transition duration-100 hover:invert hover:scale-125 cursor-pointer"
              />
            </div>
          </div>

          <div className="w-full md:w-1/3 bg-black text-white hover:bg-green-600 hover:text-black transition hover:scale-110 cursor-pointer">
            <div className="md:h-[236px] md:mx-7 md:mt-8 p-5 md:p-0">
              <h2 className="font-extrabold text-2xl tracking-widest leading-9 uppercase">
                home design 3d 2d interior service
              </h2>
              <p className="pt-6 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo..
              </p>
              <img
                src="./src/images/d-icon.png"
                alt="icon"
                className="pt-5 transition duration-100 hover:invert hover:scale-125 cursor-pointer"
              />
            </div>
          </div>

          <div className="w-full md:w-1/3 bg-[#1B1717] text-white hover:bg-[#2D2424] hover:text-[#22C55E] transition hover:scale-110 cursor-pointer">
            <div className="md:h-[236px] md:mx-7 md:mt-8 p-5 md:p-0">
              <h2 className="font-extrabold text-2xl tracking-widest leading-9 uppercase">
                home design consultation
              </h2>
              <p className="pt-6 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo..
              </p>
              <img
                src="./src/images/d-icon.png"
                alt="icon"
                className="pt-5 transition duration-100 hover:invert hover:scale-125 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Procedure Work */}
        <div className="px-5 md:px-10 md:h-[514px] mt-10 md:mt-28">
          {/* Heading Section */}
          <div className="md:w-[655px] md:h-[173px] relative">
            <img
              src="./src/images/rounded-img.png"
              alt=""
              className="absolute -top-5 left-0 -z-10"
            />
            <h3 className="font-bold md:font-extrabold text-sm md:text-lg uppercase text-[#757575] mt-5 w-[148px] h-[26px]">
              How We Work
            </h3>
            <h1 className="font-extrabold text-2xl md:text-5xl uppercase text-[#1B1717] mt-5 w-[655px] h-[68px] tracking-wider">
              OUR WORK PROCEDURE
            </h1>
          </div>

          {/* Cards Section */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-5 md:h-[311px] mt-8">
            {/* Card 1 */}
            <div className="md:w-[427px] md:h-[311px] text-[#6E6E6E] border-[#DADADA] border-2 hover:bg-[#22C55E] hover:text-white transition hover:scale-105 cursor-pointer">
              <div className="md:h-full p-4 md:p-6">
                <img src="./src/images/icons/CONSULTATION-icon.png" alt="" />
                <h3 className="font-extrabold text-xl md:text-2xl tracking-widest pt-3 md:pt-8 uppercase text-[#1B1717] h-[76px]">
                  CLIENT DESIGN CONSULTATION
                </h3>
                <p className="text-sm md:text-lg h-[78px] pt-3 md:pt-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="md:w-[427px] md:h-[311px] border-[#DADADA] bg-[#111827] text-white border-2 hover:bg-[#16A34A] hover:text-black transition hover:scale-105 cursor-pointer">
              <div className="md:h-full p-4 md:p-6">
                <img src="./src/images/icons/typing-icon.png" alt="" />
                <h3 className="font-extrabold text-xl md:text-2xl tracking-widest pt-3 md:pt-8 uppercase h-[76px]">
                  PROTOTYPING HOME DESIGN
                </h3>
                <p className="text-sm md:text-lg h-[78px] pt-3 md:pt-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="md:w-[427px] md:h-[311px] border-[#DADADA] border-2 text-[#6E6E6E] hover:bg-[#22C55E] hover:text-white transition hover:scale-105 cursor-pointer">
              <div className="md:h-full p-4 md:p-6">
                <img src="./src/images/icons/home-icon.png" alt="" />
                <h3 className="font-extrabold text-xl md:text-2xl tracking-widest pt-3 md:pt-8 uppercase text-[#1B1717] h-[76px]">
                  PROCESSING TO DESIGN HOME
                </h3>
                <p className="text-sm md:text-lg h-[78px] pt-3 md:pt-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Image Left */}
        <div className="flex flex-col md:flex-row md:space-x-8 md:h-[515px] mt-10 md:mt-28 px-5 md:px-0 md:mr-10">
          {/* Left Video/Preview Box */}
          <div
            className="bg-[#C4C4C4] bg-cover flex justify-center items-center md:w-[705px] h-[250px] md:h-[515px] hover:bg-amber-400"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1655181750366-6fcacc9770f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGludGVyaW9yJTIwV0hZJTIwQ0hPSUNFJTIwT1VSJTIwSE9NRSUyMERFU0lHTiUyMElOVEVSSU9SJTIwU0VSVklDRVN8ZW58MHx8MHx8fDA%3D')",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=vgmgAdAu2ew&list=RDvgmgAdAu2ew&start_radio=1"
              target="_main"
            >
              <img
                src="./src/images/Play Button.png"
                alt="Play Button"
                className="hover:invert w-30 h-30 md:w-[150px] md:h-[150px]"
              />
            </a>
          </div>

          {/* Right Content */}
          <div className="md:w-[655px] md:h-[480px] mt-10 md:mt-0">
            {/* Heading */}
            <div className="md:h-[207px] relative">
              <img
                src="./src/images/rounded-img.png"
                alt="rounded"
                className="absolute top-0 left-0 -z-10"
              />
              <h3 className="font-extrabold text-sm md:text-lg uppercase text-[#757575] pt-3">
                Design Consultation
              </h3>
              <h1 className="font-extrabold text-2xl md:text-5xl uppercase text-[#1B1717] mt-6 md:w-[630px] leading-10 md:leading-[70px]">
                HOME DESIGN CONSULTATION SERVICES
              </h1>
            </div>

            {/* Paragraph */}
            <div className="md:h-[52px] mt-5 md:mt-2">
              <p className="text-sm md:text-lg text-[#6E6E6E]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            {/* Features List */}
            <div className="md:h-[108px] mt-5 md:mt-10">
              <div className="flex space-x-2 md:space-x-5 items-center">
                <img src="./src/images/right-icon.png" alt="check" />
                <p className="text-lg text-[#6E6E6E]">Prebuild Home</p>
              </div>
              <div className="flex space-x-2 md:space-x-5 mt-3 items-center">
                <img src="./src/images/right-icon.png" alt="check" />
                <p className="text-lg text-[#6E6E6E]">Home Design Planning</p>
              </div>
              <div className="flex space-x-2 md:space-x-5 mt-3 items-center">
                <img src="./src/images/right-icon.png" alt="check" />
                <p className="text-lg text-[#6E6E6E]">Trend Home Design</p>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center items-center w-[198px] h-[73px] mt-7 bg-[#111827] rounded-md">
              <button className="uppercase font-medium text-white w-[199px] h-[73px] hover:bg-[#1F2937] hover:text-green-500 transition hover:scale-110 tracking-widest hover:rounded-md">
                <NavLink to="/contact-us">Contact Us</NavLink>
              </button>
            </div>
          </div>
        </div>

        {/* Services Image Right */}
        <div className="flex flex-col-reverse md:flex-row md:space-x-8 md:h-[515px] mt-10 md:mt-32 px-5 md:px-0 md:ml-10">
          {/* Left Content */}
          <div className="md:w-[655px] md:h-[480px] mt-10 md:mt-0">
            {/* Heading */}
            <div className="md:h-[207px] relative">
              <img
                src="./src/images/rounded-img.png"
                alt="rounded"
                className="absolute top-0 left-0 -z-10"
              />
              <h3 className="font-extrabold text-sm md:text-lg uppercase text-[#757575] pt-3">
                Design Consultation
              </h3>
              <h1 className="font-extrabold text-2xl md:text-5xl uppercase text-[#1B1717] mt-6 md:w-[630px] leading-10 md:leading-[70px]">
                HOME DESIGN CONSULTATION SERVICES
              </h1>
            </div>

            {/* Paragraph */}
            <div className="md:h-[52px] mt-5 md:mt-2">
              <p className="text-sm md:text-lg text-[#6E6E6E]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            {/* Features List */}
            <div className="md:h-[108px] mt-5 md:mt-10">
              <div className="flex space-x-2 md:space-x-5 items-center">
                <img src="./src/images/right-icon.png" alt="check" />
                <p className="text-lg text-[#6E6E6E]">Prebuild Home</p>
              </div>
              <div className="flex space-x-2 md:space-x-5 mt-3 items-center">
                <img src="./src/images/right-icon.png" alt="check" />
                <p className="text-lg text-[#6E6E6E]">Home Design Planning</p>
              </div>
              <div className="flex space-x-2 md:space-x-5 mt-3 items-center">
                <img src="./src/images/right-icon.png" alt="check" />
                <p className="text-lg text-[#6E6E6E]">Trend Home Design</p>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center items-center w-[198px] h-[73px] mt-7 bg-[#111827] rounded-md">
              <button className="uppercase font-medium text-white w-[199px] h-[73px] hover:bg-[#1F2937] hover:text-green-500 transition hover:scale-110 tracking-widest hover:rounded-md">
                <NavLink to="/contact-us">Contact Us</NavLink>
              </button>
            </div>
          </div>

          {/* Right Image/Video */}
          <div
            className="bg-[#C4C4C4] bg-cover flex justify-center items-center md:w-[705px] h-[250px] md:h-[515px] hover:bg-amber-400"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1655181750366-6fcacc9770f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGludGVyaW9yJTIwV0hZJTIwQ0hPSUNFJTIwT1VSJTIwSE9NRSUyMERFU0lHTiUyMElOVEVSSU9SJTIwU0VSVklDRVN8ZW58MHx8MHx8fDA%3D')",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=vgmgAdAu2ew&list=RDvgmgAdAu2ew&start_radio=1"
              target="_main"
            >
              <img
                src="./src/images/Play Button.png"
                alt="Play Button"
                className="hover:invert w-30 h-30 md:w-[150px] md:h-[150px]"
              />
            </a>
          </div>
        </div>

        {/* Services Image Left */}
        <div className="flex flex-col md:flex-row md:space-x-8 md:h-[515px] mt-10 md:mt-28 px-5 md:px-0 md:mr-10">
          {/* Left Video/Preview Box */}
          <div
            className="bg-[#C4C4C4] bg-cover flex justify-center items-center md:w-[705px] h-[250px] md:h-[515px] hover:bg-amber-400"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1655181750366-6fcacc9770f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGludGVyaW9yJTIwV0hZJTIwQ0hPSUNFJTIwT1VSJTIwSE9NRSUyMERFU0lHTiUyMElOVEVSSU9SJTIwU0VSVklDRVN8ZW58MHx8MHx8fDA%3D')",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=vgmgAdAu2ew&list=RDvgmgAdAu2ew&start_radio=1"
              target="_main"
            >
              <img
                src="./src/images/Play Button.png"
                alt="Play Button"
                className="hover:invert w-30 h-30 md:w-[150px] md:h-[150px]"
              />
            </a>
          </div>

          {/* Right Content */}
          <div className="md:w-[655px] md:h-[480px] mt-10 md:mt-0">
            {/* Heading */}
            <div className="md:h-[207px] relative">
              <img
                src="./src/images/rounded-img.png"
                alt="rounded"
                className="absolute top-0 left-0 -z-10"
              />
              <h3 className="font-extrabold text-sm md:text-lg uppercase text-[#757575] pt-3">
                Design Consultation
              </h3>
              <h1 className="font-extrabold text-2xl md:text-5xl uppercase text-[#1B1717] mt-6 md:w-[630px] leading-10 md:leading-[70px]">
                HOME DESIGN CONSULTATION SERVICES
              </h1>
            </div>

            {/* Paragraph */}
            <div className="md:h-[52px] mt-5 md:mt-2">
              <p className="text-sm md:text-lg text-[#6E6E6E]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            {/* Features List */}
            <div className="md:h-[108px] mt-5 md:mt-10">
              <div className="flex space-x-2 md:space-x-5 items-center">
                <img src="./src/images/right-icon.png" alt="check" />
                <p className="text-lg text-[#6E6E6E]">Prebuild Home</p>
              </div>
              <div className="flex space-x-2 md:space-x-5 mt-3 items-center">
                <img src="./src/images/right-icon.png" alt="check" />
                <p className="text-lg text-[#6E6E6E]">Home Design Planning</p>
              </div>
              <div className="flex space-x-2 md:space-x-5 mt-3 items-center">
                <img src="./src/images/right-icon.png" alt="check" />
                <p className="text-lg text-[#6E6E6E]">Trend Home Design</p>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center items-center w-[198px] h-[73px] mt-7 bg-[#111827] rounded-md">
              <button className="uppercase font-medium text-white w-[199px] h-[73px] hover:bg-[#1F2937] hover:text-green-500 transition hover:scale-110 tracking-widest hover:rounded-md">
                <NavLink to="/contact-us">Contact Us</NavLink>
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-5 md:w-[1340px] md:h-[302px] mt-10 md:mt-28 px-5 md:px-10">
          {/* Left Column */}
          <div className="md:w-[655px] md:h-[300px] mt-[1px]">
            <div className="relative md:h-[207px]">
              <img
                src="./src/images/rounded-img.png"
                alt=""
                className="absolute top-0 left-0 -z-10"
              />
              <h3 className="font-extrabold text-sm md:text-lg uppercase text-[#757575] pt-3 w-[184px] h-[26px]">
                Clients Feedback
              </h3>
              <h1 className="font-extrabold text-2xl md:text-5xl uppercase text-[#1B1717] mt-6 md:w-[630px] md:h-[136px] leading-10 md:leading-[70px]">
                OUR TESTIMONIAL FROM BEST CLIENTS
              </h1>
            </div>
            <div className="md:h-[78px] mt-6 md:mt-0">
              <p className="text-sm md:text-lg text-[#6E6E6E]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-[655px] h-[302px] p-5 md:p-0 md:px-8 border-[1px] border-[#DADADA]">
            {/* Stars */}
            <div className="flex justify-between w-[174px] h-[23px] md:mt-5">
              <img src="./src/images/star-icons/-1.png" alt="star" />
              <img src="./src/images/star-icons/-2.png" alt="star" />
              <img src="./src/images/star-icons/-3.png" alt="star" />
              <img src="./src/images/star-icons/.png" alt="star" />
              <img src="./src/images/star-icons/.png" alt="star" />
            </div>

            {/* Testimonial Text */}
            <div className="md:w-[550px] md:h-[124px] mt-5">
              <p className="text-sm md:text-lg text-[#6E6E6E]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>

            {/* Client Info */}
            <div className="flex justify-between w-[230px] h-[85px] pt-3 md:pt-2">
              <div className="w-[85px] h-[85px]">
                <img
                  src="./src/images/Image Placeholder.png"
                  className="invert"
                  alt="client"
                />
              </div>
              <div className="pt-4">
                <p className="text-lg font-extrabold text-[#1B1717] uppercase tracking-wider">
                  John De
                </p>
                <p className="text-lg font-semibold text-[#6E6E6E] uppercase tracking-wider">
                  Art Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
