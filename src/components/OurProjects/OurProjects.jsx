import React from "react";
import { Link, NavLink } from "react-router-dom";
import circleImg from "../../images/circle-img.png";
import roundedImg from "../../images/rounded-img.png";
import rightIcon from "../../images/right-icon.png";

const services = [
  {
    title: "PRE MADE HOME CONSULTATION",
    items: ["Office Meeting", "Working Time Call", "Come to Place"],
  },
  {
    title: "INTERIOR DESIGN REPAIR",
    items: ["Office Meeting", "Working Time Call", "Come to Place"],
  },
  {
    title: "EXPERIENCE FRAME DESIGN",
    items: ["Office Meeting", "Working Time Call", "Come to Place"],
  },
  {
    title: "FULL HOUSE DECORATION",
    items: ["Office Meeting", "Working Time Call", "Come to Place"],
  },
  {
    title: "PRE BUILDING HOME DESIGN",
    items: ["Office Meeting", "Working Time Call", "Come to Place"],
  },
  {
    title: "FULL PACKAGE DECORATION",
    items: ["Office Meeting", "Working Time Call", "Come to Place"],
  },
];

export function OurProjects(props) {
  return (
    <>
      {/* Header */}
      <div className="bg-[#111827] w-full md:h-[373px] pt-10 md:pt-28 text-white">
        <div className="px-5 md:px-10 md:w-[655px] h-[173px] relative">
          <img
            src={circleImg}
            alt="circle"
            className="absolute top-0 left-[40px]"
          />
          <h1 className="font-extrabold text-3xl md:text-6xl uppercase pt-3 md:w-[655px] md:h-[90px] tracking-wider">
            Projects
          </h1>
          <p className="text-sm md:text-lg md:h-[52px] mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
      {/* Portfolio */}
      <div className="flex flex-col md:flex-row md:space-x-3 md:h-[760px] md:w-[1340px] px-5 md:px-10 mt-10 md:mt-28">
        {/* Left Content */}
        <div className="mb-10 md:mb-0 md:mt-36 md:w-[655px] md:h-[471px]">
          <div className="md:h-[275px] relative">
            <img
              src={roundedImg}
              alt=""
              className="absolute top-0 left-0 -z-10"
            />
            <h3 className="font-extrabold text-lg uppercase text-[#757575] pt-6 w-[175px] h-[26px]">
              Perfect Partner
            </h3>
            <h1 className="font-extrabold tracking-wider text-2xl md:text-5xl uppercase text-[#1B1717] mt-12 md:mt-6 mt md:w-[630px] md:h-[204px] md:leading-[70px]">
              WE HAVE PRIORITY FOR CAN CREATE DREAM HOME DESIGN
            </h1>
            <p className="text-sm md:text-lg text-[#6E6E6E] mt-4 md:mt-6 md:w-[620px] md:h-[78px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="flex justify-center items-center w-[198px] h-[73px] mt-5 md:mt-10 bg-[#111827] rounded-md">
              <button className="uppercase font-medium text-white w-[199px] h-[73px] hover:bg-[#1F2937] hover:text-green-500 transition hover:scale-110 tracking-widest hover:rounded-md">
                <NavLink to="/portfolio">Portfolio</NavLink>
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-[655px] h-[500px] md:h-[760px] relative">
          <div className="absolute top-0 right-0 bg-[#C4C4C4] md:h-[350px] w-full md:w-[541px] rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1755163412328-df3b4c2b172e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMTl8fHxlbnwwfHx8fHw%3D"
              className="h-[200px] w-full md:h-[350px] md:w-[541px] transition hover:scale-110 cursor-pointer rounded-2xl"
              alt=""
              srcset=""
            />
          </div>
          <div className="absolute left-0 top-[120px] md:top-[190px] bg-[#DADADA] md:h-[350px] md:w-[541px] rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8fHww"
              className="md:h-[350px] md:w-[541px] transition hover:scale-110 cursor-pointer rounded-2xl"
              alt=""
              srcset=""
            />
          </div>
          <div className="absolute bottom-0 right-0 bg-[#C4C4C4] md:h-[350px] md:w-[541px] rounded-2xl">
            <img
              src="https://media.istockphoto.com/id/2157389785/photo/there-is-brown-modular-sofa-and-armchair-in-the-clean-living-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=QWQ5IZp3PvQxocw_SrfY1Q3T3Qx3aGvBmDyR1ZEOK1Y="
              className="md:h-[350px] md:w-[541px] transition hover:scale-110 cursor-pointer rounded-2xl"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
      {/* Team Block */}
      <div className="px-5 md:px-10 mt-10">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 pt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="h-[712px] relative transition hover:scale-110 cursor-pointer"
            >
              {/* Top Gray Placeholder */}
              <div className="h-[500px] bg-[#C4C4C4]">
                <img
                  src="https://images.unsplash.com/photo-1696815115229-e5503dc82ba7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGludGVyaW9yJTIwcHJlJTIwbWFkZSUyMGNvbnN1bGF0aW9ufGVufDB8fDB8fHww"
                  alt=""
                  srcset=""
                />
              </div>

              {/* Card Content */}
              <div className="w-[280px] md:w-[367px] h-[362px] bg-white text-black p-7 absolute bottom-0 left-7 md:left-5 shadow-md hover:bg-amber-200 hover:text-red-400">
                <div className="md:w-[307px] h-[76px]">
                  <h3 className="font-extrabold text-2xl uppercase tracking-wider">
                    {service.title}
                  </h3>
                </div>

                {/* List Items */}
                <div className="md:w-[307px] h-[108px] mt-3">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex space-x-5 mt-3 items-center">
                      <div>
                        <img
                          src={rightIcon}
                          alt="check icon"
                        />
                      </div>
                      <p className="text-lg text-[#6E6E6E]">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="flex justify-center items-center md:w-[198px] h-[73px] mt-7 bg-[#111827] rounded-md">
                  <button className="uppercase font-medium text-white w-[199px] h-[73px] hover:bg-[#1F2937] hover:text-green-500 transition hover:scale-110 tracking-widest hover:rounded-md">
                    <NavLink to="/contact-us">Contact Us</NavLink>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
