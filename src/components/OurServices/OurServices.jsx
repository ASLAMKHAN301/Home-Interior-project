import React from "react";
import { NavLink } from "react-router-dom";
import circleImg from "../../images/circle-img.png";
import dIcon from "../../images/d-icon.png";
import roundedImg from "../../images/rounded-img.png";
import CONSULTATION from "../../images/icons/CONSULTATION-icon.png";
import typingIcon from "../../images/icons/typing-icon.png";
import homeIcon from "../../images/icons/home-icon.png";
import PlayButton from "../../images/Play Button.png";
import rightIcon from "../../images/right-icon.png";
import starIcon1 from "../../images/star-icons/-1.png";
import starIcon2 from "../../images/star-icons/.png";

export function OurServices(props) {
  return (
    <>
      <div>
        {/* Header */}
        <div className="bg-[#111827] w-full md:h-[373px] pt-10 md:pt-28 text-white">
          <div className="px-5 md:px-10 md:w-[655px] h-[173px] relative">
            <img
              src={circleImg}
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
                src={dIcon}
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
                src={dIcon}
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
                src={dIcon}
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
              src={roundedImg}
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
                <img src={CONSULTATION} alt="" />
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
                <img src={typingIcon} alt="" />
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
                <img src={homeIcon} alt="" />
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
                src={PlayButton}
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
                src={roundedImg}
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
                <img src={rightIcon} alt="check" />
                <p className="text-lg text-[#6E6E6E]">Prebuild Home</p>
              </div>
              <div className="flex space-x-2 md:space-x-5 mt-3 items-center">
                <img src={rightIcon} alt="check" />
                <p className="text-lg text-[#6E6E6E]">Home Design Planning</p>
              </div>
              <div className="flex space-x-2 md:space-x-5 mt-3 items-center">
                <img src={rightIcon} alt="check" />
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
                src={roundedImg}
                alt="rounded"
                className="absolute top-0 left-0 -z-10"
              />
              <h3 className="font-extrabold text-sm md:text-lg uppercase text-[#757575] pt-3">
                Design Consultation
              </h3>
              <h1 className="font-extrabold text-2xl md:text-5xl uppercase text-[#1B1717] mt-6 md:w-[630px] leading-10 md:leading-[70px]">
                HOME DESIGN 3D 2D INTERIOR SERVICES
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
                <img src={rightIcon} alt="check" />
                <p className="text-lg text-[#6E6E6E]">Prebuild Home</p>
              </div>
              <div className="flex space-x-2 md:space-x-5 mt-3 items-center">
                <img src={rightIcon} alt="check" />
                <p className="text-lg text-[#6E6E6E]">Home Design Planning</p>
              </div>
              <div className="flex space-x-2 md:space-x-5 mt-3 items-center">
                <img src={rightIcon} alt="check" />
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
                src={PlayButton}
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
                src={PlayButton}
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
                src={roundedImg}
                alt="rounded"
                className="absolute top-0 left-0 -z-10"
              />
              <h3 className="font-extrabold text-sm md:text-lg uppercase text-[#757575] pt-3">
                Design Consultation
              </h3>
              <h1 className="font-extrabold text-2xl md:text-5xl uppercase text-[#1B1717] mt-6 md:w-[630px] leading-10 md:leading-[70px]">
                ALL IN ONE HOME INTERIOR DESIGN
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
                <img src={rightIcon} alt="check" />
                <p className="text-lg text-[#6E6E6E]">Prebuild Home</p>
              </div>
              <div className="flex space-x-2 md:space-x-5 mt-3 items-center">
                <img src={rightIcon} alt="check" />
                <p className="text-lg text-[#6E6E6E]">Home Design Planning</p>
              </div>
              <div className="flex space-x-2 md:space-x-5 mt-3 items-center">
                <img src={rightIcon} alt="check" />
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
                src={roundedImg}
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
              <img src={starIcon1} alt="star" />
              <img src={starIcon1} alt="star" />
              <img src={starIcon1} alt="star" />
              <img src={starIcon1} alt="star" />
              <img src={starIcon2} alt="star" />
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
                  src="data:image/jpeg;base64,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"
                  className="rounded-full w-20 h-20"
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
