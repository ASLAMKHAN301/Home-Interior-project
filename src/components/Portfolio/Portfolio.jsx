import React from "react";
import circleImg from "../../images/circle-img.png";
import roundedImg from "../../images/rounded-img.png";
import rightIcon from "../../images/right-icon.png";
import PlayButton from "../../images/Play Button.png";

export function Portfolio(props) {
  return (
    <>
      {/* Header */}
      <div className="bg-[#111827] w-full md:h-[462px]  pt-10 md:pt-28 text-white">
        <div className="px-5 md:px-10 md:w-[655px] h-[200px] md:h-[262px] relative">
          <img
            src={circleImg}
            alt="circle decoration"
            className="absolute top-0 left-[40px]"
          />
          <h1 className="font-extrabold text-3xl md:text-6xl uppercase pt-2 md:w-[655px] md:h-[180px] tracking-widest leading-10 md:leading-[80px]">
            Portfolio Gallery
          </h1>
          <p className="text-sm md:text-lg md:h-[52px] mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>

      {/* Video Portfolio */}
      <div className="flex flex-col md:flex-row md:space-x-8 md:h-[412px] mt-10 md:mt-28 mx-5 md:mx-10">
        {/* Left side video/image */}
        <div
          className="bg-[#C4C4C4] flex bg-cover justify-center items-center md:w-[655px] h-[250px] md:h-[412px] hover:bg-amber-400"
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

        {/* Right side content */}
        <div className="md:w-[655px] md:h-[412px] mt-10 md:mt-0">
          <div className="md:h-[207px] relative">
            <img
              src={roundedImg}
              alt="Background Decoration"
              className="absolute top-0 left-0 -z-10"
            />
            <h3 className="font-extrabold text-sm md:text-lg uppercase text-[#757575] pt-3 h-[26px]">
              Team Working
            </h3>
            <h1 className="font-extrabold text-2xl md:text-5xl uppercase text-[#1B1717] mt-6 md:h-[136px] leading-10 md:leading-[70px]">
              LETS SEE OUR PERFECT TEAM WORKER
            </h1>
          </div>

          <div className="md:h-[52px] mt-5">
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
        </div>
      </div>

      {/* Work Gallery */}
      <div className="px-5 md:px-10 mt-16 md:mt-28">
        {/* Heading Section */}
        <div className="md:w-[655px] h-[173px] relative">
          <img
            src={roundedImg}
            alt="Decoration"
            className="absolute -top-5 left-0 -z-10"
          />
          <h3 className="font-extrabold text-sm md:text-lg uppercase text-[#757575] mt-5 md:w-[148px] md:h-[26px]">
            Portfolio
          </h3>
          <h1 className="font-extrabold text-2xl md:text-5xl uppercase text-[#1B1717] mt-5 md:w-[655px] md:h-[68px] tracking-wider">
            OUR RECENT WORK
          </h1>
        </div>

        {/* Portfolio Grid */}
        <div className="flex flex-col space-y-5 md:pace-y-8 md:h-[1110px]">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row space-x-0 space-y-5 md:space-y-0 md:space-x-8">
            <div className="md:w-[541px] md:h-[350px] bg-[#C4C4C4] hover:bg-cyan-100">
              <img
                src="https://images.unsplash.com/photo-1596900749995-57cec6ddb861?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZSUyMGludGVyaW9yJTIwZGVzaWduJTIwb3VyJTIwcmVjZW50JTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D"
                className="md:w-[541px] md:h-[350px] transition hover:scale-110 cursor-pointer"
                alt=""
                srcset=""
              />
            </div>
            <div className="md:w-[769px] md:h-[350px] bg-[#C4C4C4] hover:bg-cyan-300">
              <img
                src="https://plus.unsplash.com/premium_photo-1746888841256-aa28caaf8764?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGludGVyaW9yJTIwZGVzaWduJTIwb3VyJTIwcmVjZW50JTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D"
                className="md:w-[769px] md:h-[350px] transition hover:scale-110 cursor-pointer"
                alt=""
                srcset=""
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row space-x-0 space-y-5 md:space-y-0 md:space-x-8">
            <div className="md:w-[427px] md:h-[350px] bg-[#C4C4C4] hover:bg-cyan-500">
              <img
                src="https://images.unsplash.com/photo-1655181750366-6fcacc9770f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZSUyMGludGVyaW9yJTIwZGVzaWduJTIwb3VyJTIwcmVjZW50JTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D"
                className="md:w-[427px] md:h-[350px] transition hover:scale-110 cursor-pointer"
                alt=""
                srcset=""
              />
            </div>
            <div className="md:w-[427px] md:h-[350px] bg-[#C4C4C4] hover:bg-cyan-700">
              <img
                src="https://images.unsplash.com/photo-1680210851377-b7168175ae9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZSUyMGludGVyaW9yJTIwZGVzaWduJTIwb3VyJTIwcmVjZW50JTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D"
                className="md:w-[427px] md:h-[350px] transition hover:scale-110 cursor-pointer"
                alt=""
                srcset=""
              />
            </div>
            <div className="md:w-[427px] md:h-[350px] bg-[#C4C4C4] hover:bg-cyan-900">
              <img
                src="https://plus.unsplash.com/premium_photo-1706528224238-74bb0e4ca474?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZSUyMGludGVyaW9yJTIwZGVzaWduJTIwb3VyJTIwcmVjZW50JTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D"
                className="md:w-[427px] md:h-[350px] transition hover:scale-110 cursor-pointer"
                alt=""
                srcset=""
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col md:flex-row space-x-0 space-y-5 md:space-y-0 md:space-x-8">
            <div className="md:w-[313px]md: h-[350px] bg-[#C4C4C4] hover:bg-cyan-200">
              <img
                src="https://images.unsplash.com/photo-1741394546743-2d64519ba0d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWUlMjBpbnRlcmlvciUyMGRlc2lnbiUyMG91ciUyMHJlY2VudCUyMHdvcmt8ZW58MHx8MHx8fDA%3D"
                className="md:w-[313px] md:h-[350px] transition hover:scale-110 cursor-pointer"
                alt=""
                srcset=""
              />
            </div>
            <div className="md:w-[426px] md:h-[350px] bg-[#C4C4C4] hover:bg-cyan-400">
              <img
                src="https://images.unsplash.com/photo-1630699144035-c0f6311ec482?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWUlMjBpbnRlcmlvciUyMGRlc2lnbiUyMG91ciUyMHJlY2VudCUyMHdvcmt8ZW58MHx8MHx8fDA%3D"
                className="md:w-[426px] md:h-[350px] transition hover:scale-110 cursor-pointer"
                alt=""
                srcset=""
              />
            </div>
            <div className="md:w-[541px] md:h-[350px] bg-[#C4C4C4] hover:bg-cyan-950">
              <img
                src="https://images.unsplash.com/photo-1622653533660-a1538fe8424c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWUlMjBpbnRlcmlvciUyMGRlc2lnbiUyMG91ciUyMHJlY2VudCUyMHdvcmt8ZW58MHx8MHx8fDA%3D"
                className="w-[541px] h-[350px] transition hover:scale-110 cursor-pointer"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
