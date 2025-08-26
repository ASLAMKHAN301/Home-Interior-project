import React from "react";
import polygonImg from "../../images/Polygon 1.png";
import dIcon from "../../images/d-icon.png";
import roundedImg from "../../images/rounded-img.png";
import rightIcon from "../../images/right-icon.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        {/* Header */}
        <div className="bg-[#111827] text-[#FFFFFF] w-full md:h-[773px] pt-10 md:pt-28">
          <div className="flex flex-col md:flex-row md:justify-between pl-5 pr-5 md:pr-0 md:pl-10 md:w-[1226px] md:h-[477px]">
            {/* Left Content */}
            <div className="md:w-[655px]">
              <h3 className="font-medium text-sm md:text-lg uppercase w-[205px] h-[26px]">
                welcome to homco
              </h3>

              <h1 className="font-extrabold text-3xl md:text-6xl pt-2 md:pt-0 uppercase md:w-[655px] md:h-[270px] md:leading-[90px] tracking-wider">
                build your elegan dream home interior
              </h1>

              <p className="text-sm md:text-xl md:h-[52px] pt-5 md:pt-0 md:my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
              </p>

              <div className="flex cursor-pointer justify-center items-center w-[196px] h-[73px] mt-8 bg-[#1F2937] rounded-md">
                <button className="uppercase font-medium tracking-widest w-[196px] h-[73px] hover:bg-white hover:text-black transition hover:scale-110 hover:rounded-md">
                  <NavLink to="/our-projects/project1">our project</NavLink>
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="h-full pt-12 pb-10 md:pb-0">
              <img
                src="https://images.unsplash.com/photo-1663851360815-784f3ba447f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGludGVyaW9yJTIwYnVpbGQlMjB5b3VyJTIwZWxlZ2FuJTIwZHJlYW0lMjBob21lJTIwaW50ZXJpb3IlMjBpbiUyMHBvbHlnb24lMjBzaGFwZXxlbnwwfHwwfHx8MA%3D%3D"
                className="rounded-4xl transition hover:scale-110 cursor-pointer"
                alt="Polygon Shape"
              />
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="flex flex-col md:flex-row h-full md:h-[236px]">
          {/* 1st Box */}
          <div className="w-full md:w-1/3 bg-[#1B1717] text-white hover:bg-[#2D2424] hover:text-[#22C55E] transition hover:scale-105 cursor-pointer">
            <div className="w-full md:w-[422.26px] h-[188.16px] p-5 md:p-0 md:ml-4 md:mt-7">
              <h2 className="font-bold md:font-extrabold text-xl md:text-2xl tracking-wider uppercase">
                home design consultation
              </h2>
              <p className="pt-5 md:pt-6 text-sm md:text-lg md:pr-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo..
              </p>
              <img
                src={dIcon}
                alt="Design Icon"
                className="pt-5 transition duration-100 hover:invert hover:scale-140 cursor-pointer"
              />
            </div>
          </div>

          {/* 2nd Box */}
          <div className="w-full md:w-1/3 bg-black text-white hover:bg-green-600 hover:text-black transition hover:scale-105 cursor-pointer">
            <div className="w-full md:w-[422.26px] h-[188.16px] p-5 md:p-0 md:ml-4 md:mt-7">
              <h2 className="font-bold md:font-extrabold text-xl md:text-2xl tracking-wider uppercase">
                home design 3d 2d interior service
              </h2>
              <p className="pt-0 text-sm md:text-lg md:pr-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo..
              </p>
              <img
                src={dIcon}
                alt="Design Icon"
                className="pt-3 md:pt-4 transition duration-100 hover:invert  hover:scale-140 cursor-pointer"
              />
            </div>
          </div>

          {/* 3rd Box */}
          <div className="w-full md:w-1/3 bg-[#1B1717] text-white hover:bg-[#2D2424] hover:text-[#22C55E] transition hover:scale-105 cursor-pointer">
            <div className="w-full md:w-[422.26px] h-[188.16px] p-5 md:p-0 md:ml-4 md:mt-7">
              <h2 className="font-bold md:font-extrabold text-xl md:text-2xl tracking-wider uppercase">
                home design consultation
              </h2>
              <p className="pt-5 md:pt-6 text-sm md:text-lg md:pr-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo..
              </p>
              <img
                src={dIcon}
                alt="Design Icon"
                className="pt-5 transition duration-100 hover:invert hover:scale-140 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* About Block */}
        <div className="pt-6 flex flex-col md:flex-row space-x-0 md:space-x-8">
          {/* Left Gray Box */}
          <div className="w-full h-[250px] md:w-[725px] md:h-[703px] px-5 md:px-0 rounded-2xl md:bg-[#C4C4C4] hover:bg-amber-600">
            <img
              src="https://images.unsplash.com/photo-1755264785187-021213668e14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTN8fHxlbnwwfHx8fHw%3D"
              alt=""
              className="w-full h-[250px] md:w-[725px] md:h-[703px] rounded-2xl transition hover:scale-105 cursor-pointer"
              srcset=""
            />
          </div>

          {/* Right Content */}
          <div className="md:w-[720.01px] md:h-[810px] px-5 md:px-0 mt-5 md:mt-0">
            <div className="md:h-[307.24px] relative">
              <img
                src={roundedImg}
                alt=""
                className="absolute -top-5 left-0 -z-10"
              />
              <h3 className="font-extrabold text-sm md:text-lg uppercase text-[#757575] mt-5 md:w-[136.31px] md:h-[26px]">
                who we are
              </h3>
              <h1 className="font-extrabold text-2xl md:text-5xl uppercase text-[#1B1717] mt-5 md:h-[227.92px] leading-10 md:leading-[70px]">
                we are perfect team for home interior decoration
              </h1>
              <p className="pt-4 md:pt-6 text-sm md:text-lg text-[#6E6E6E] md:h-[191.05px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo..
                <br />
                <br />
                Nemo enim ipsm voluptatem quia voluptas sit aspernatur aut adit
                fugit, sec quia consequuntur magni eos qui ratione volupatem
                sequi nesciunt.
              </p>

              {/* Features */}
              <div className="flex justify-between h-[120.66px] mt-5 md:mt-16">
                <div className="md:w-[344.07px] md:h-[120.66px]">
                  <div className="flex space-x-2 md:space-x-5 items-center">
                    <div>
                      <img src={rightIcon} alt="" />
                    </div>
                    <p className="text-sm md:text-lg text-[#6E6E6E]">Flexible Time</p>
                  </div>
                  <div className="flex space-x-2 md:space-x-5 mt-5 items-center">
                    <div>
                      <img src={rightIcon} alt="" />
                    </div>
                    <p className="text-sm md:text-lg text-[#6E6E6E]">Perfect Work</p>
                  </div>
                  <div className="flex space-x-2 md:space-x-5 mt-5 items-center">
                    <div>
                      <img src={rightIcon} alt="" />
                    </div>
                    <p className="text-sm md:text-lg text-[#6E6E6E]">Client Priority</p>
                  </div>
                </div>

                <div className="md:w-[344.07px] md:h-[120.66px]">
                  <div className="flex space-x-2 md:space-x-5 items-center">
                    <div>
                      <img src={rightIcon} alt="" />
                    </div>
                    <p className="text-sm md:text-lg text-[#6E6E6E]">Flexible Time</p>
                  </div>
                  <div className="flex space-x-2 md:space-x-5 mt-5 items-center">
                    <div>
                      <img src={rightIcon} alt="" />
                    </div>
                    <p className="text-sm md:text-lg text-[#6E6E6E]">Perfect Work</p>
                  </div>
                  <div className="flex space-x-2 md:space-x-5 mt-5 items-center">
                    <div>
                      <img src={rightIcon} alt="" />
                    </div>
                    <p className="text-sm md:text-lg text-[#6E6E6E]">Client Priority</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex space-x-5 md:space-x-3 mt-5 md:mt-10">
                <div className="md:w-[217.65px] md:h-[107.26px] text-center">
                  <h1 className="font-bold md:font-extrabold text-4xl md:text-5xl text-[#757575]">
                    15Y
                  </h1>
                  <p className="font-medium md:font-semibold uppercase pt-5 text-[#1B1717] md:tracking-wider">
                    Experience
                  </p>
                </div>
                <div className="md:w-[217.65px] md:h-[107.26px] text-center">
                  <h1 className="font-bold md:font-extrabold text-4xl md:text-5xl text-[#757575]">
                    25+
                  </h1>
                  <p className="font-medium md:font-semibold uppercase pt-5 text-[#1B1717] md:tracking-wider">
                    Best Team
                  </p>
                </div>
                <div className="md:w-[217.65px] md:h-[107.26px] text-center">
                  <h1 className="font-bold md:font-extrabold text-4xl md:text-5xl text-[#757575]">
                    500+
                  </h1>
                  <p className="font-medium md:font-semibold uppercase pt-5 text-[#1B1717] md:tracking-wider">
                    Total Client
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Procedure Work */}
        <div className="px-5 md:px-10 md:h-[514px] pt-5">
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

        {/* Carousel Image */}
        <div className="mt-10 md:mt-28 md:h-[252px] flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-5 px-5 md:px-0">
          <div className="md:w-[313px] md:h-[252px] md:rounded-r-xl bg-[#C4C4C4] shrink-[10] hover:bg-cyan-300">
            <img
              src="https://images.unsplash.com/photo-1754597302822-4b96f3442d3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMTB8fHxlbnwwfHx8fHw%3D"
              className="md:w-[313px] md:h-[252px] rounded-xl md:rounded-r-xl transition hover:scale-110 cursor-pointer"
              alt=""
            />
          </div>
          <div className="md:w-[313px] md:h-[252px] rounded-xl bg-[#C4C4C4] hover:bg-cyan-900">
            <img
              src="https://images.unsplash.com/photo-1754766621748-2a96cbf56a1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMTN8fHxlbnwwfHx8fHw%3D"
              className="md:w-[313px] md:h-[252px] rounded-xl transition hover:scale-110 cursor-pointer"
              alt=""
              srcset=""
            />
          </div>
          <div className="md:w-[313px] md:h-[252px] rounded-xl bg-[#C4C4C4] hover:bg-cyan-500">
            <img
              src="https://images.unsplash.com/photo-1755288556391-c4911fa13627?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTh8fHxlbnwwfHx8fHw%3D"
              className="md:w-[313px] md:h-[252px] rounded-xl transition hover:scale-110 cursor-pointer"
              alt=""
            />
          </div>
          <div className="md:w-[314px] md:h-[252px] rounded-xl bg-[#C4C4C4] hover:bg-cyan-600">
            <img
              src="https://images.unsplash.com/photo-1755311905567-b7068d2cbacd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjB8fHxlbnwwfHx8fHw%3D"
              className="md:w-[313px] md:h-[252px] rounded-xl transition hover:scale-110 cursor-pointer"
              alt=""
            />
          </div>
          <div className="md:w-[314px] md:h-[252px] md:rounded-l-xl bg-[#C4C4C4] shrink-[10] hover:bg-cyan-800">
            <img
              src="https://images.unsplash.com/photo-1755095901325-637deba5b2b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMTh8fHxlbnwwfHx8fHw%3D"
              className="md:w-[313px] md:h-[252px] rounded-xl md:rounded-l-xl transition hover:scale-110 cursor-pointer"
              alt=""
            />
          </div>
        </div>

        {/* Portfolio */}
        <div className="flex flex-col md:flex-row md:space-x-3 md:h-[760px] md:w-[1340px] px-5 md:px-10 mt-10 md:mt-28">
          {/* Left Content */}
          <div className="mb-10 md:mb-0 md:mt-36 md:w-[655px] md:h-[471px]">
            <div className="md:h-[275px] relative">
              <img
                src="./src/images/rounded-img.png"
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
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
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

        {/* Why Choice Us */}
        <div className="flex flex-col md:flex-row md:space-x-5 md:w-[1390px] md:h-[480px] mt-10 md:mt-28 px-5 md:px-0">
          {/* Left Side (Video/Play Section) */}
          <div
            className="bg-[#C4C4C4] bg-cover flex justify-center items-center md:w-[705px] h-[250px] md:h-[480px] hover:bg-amber-600"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1655181750366-6fcacc9770f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGludGVyaW9yJTIwV0hZJTIwQ0hPSUNFJTIwT1VSJTIwSE9NRSUyMERFU0lHTiUyMElOVEVSSU9SJTIwU0VSVklDRVN8ZW58MHx8MHx8fDA%3D')",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=dygPyXgejpI&t=5s"
              target="_main"
            >
              <img
                src="./src/images/Play Button.png"
                alt="Play Button"
                className="hover:invert w-30 h-30 md:w-[150px] md:h-[150px]"
              />
            </a>
          </div>

          {/* Right Side (Content) */}
          <div className="md:w-[655px] md:h-[480px] mt-10 md:mt-0">
            {/* Title Section */}
            <div className="md:h-[275px] relative">
              <img
                src="./src/images/rounded-img.png"
                alt="Rounded Background"
                className="absolute top-0 left-0 -z-10"
              />
              <h3 className="font-extrabold text-sm md:text-lg uppercase text-[#757575] pt-3 md:w-[143px] md:h-[26px]">
                Trust Us Now
              </h3>
              <h1 className="font-extrabold text-2xl md:text-5xl uppercase text-[#1B1717] mt-6 md:w-[630px] md:h-[204px] leading-10 md:leading-[70px]">
                WHY CHOICE OUR HOME DESIGN INTERIOR SERVICES
              </h1>
            </div>

            {/* Description */}
            <div className="md:h-[52px] mt-5 md:mt-0">
              <p className="text-sm md:text-lg text-[#6E6E6E]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            {/* Features Section */}
            <div className="flex justify-between md:h-[108px] mt-6">
              {/* Left Column */}
              <div className="md:h-[108px]">
                <div className="flex space-x-2 md:space-x-5 items-center">
                  <div>
                    <img src="./src/images/right-icon.png" alt="Right Icon" />
                  </div>
                  <p className="text-sm md:text-lg text-[#6E6E6E]">Flexible Time</p>
                </div>
                <div className="flex space-x-2 md:space-x-5 mt-5 items-center">
                  <div>
                    <img src="./src/images/right-icon.png" alt="Right Icon" />
                  </div>
                  <p className="text-sm md:text-lg text-[#6E6E6E]">Perfect Work</p>
                </div>
                <div className="flex space-x-2 md:space-x-5 mt-5 items-center">
                  <div>
                    <img src="./src/images/right-icon.png" alt="Right Icon" />
                  </div>
                  <p className="text-sm md:text-lg text-[#6E6E6E]">Client Priority</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="md:w-[344.07px] md:h-[120.66px]">
                <div className="flex space-x-2 md:space-x-5 items-center">
                  <div>
                    <img src="./src/images/right-icon.png" alt="Right Icon" />
                  </div>
                  <p className="text-sm md:text-lg text-[#6E6E6E]">Flexible Time</p>
                </div>
                <div className="flex space-x-2 md:space-x-5 mt-5 items-center">
                  <div>
                    <img src="./src/images/right-icon.png" alt="Right Icon" />
                  </div>
                  <p className="text-sm md:text-lg text-[#6E6E6E]">Perfect Work</p>
                </div>
                <div className="flex space-x-2 md:space-x-5 mt-5 items-center">
                  <div>
                    <img src="./src/images/right-icon.png" alt="Right Icon" />
                  </div>
                  <p className="text-sm md:text-lg text-[#6E6E6E]">Client Priority</p>
                </div>
              </div>
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
};

export default Home;
