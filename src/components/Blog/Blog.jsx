import React from "react";

const posts = [
  {
    title: "10 TRENDS HOME DECORATION For Best House",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "HOW TO CLEANING OWN HOME For Best Cleaning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "TIPS CHOICE BEST AGENCY For House Decoration",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "HOW TO DRAW HOME DESIGN For Consystency",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "TIPS MODELING DECORATION HOME modern",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "HOW TO IMPROVE HOME DESIGN For Future",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export function Blog(props) {
  return (
    <>
      {/* Header */}
      <div className="bg-[#111827] w-full md:h-[373px] pt-10 md:pt-28 text-white">
        <div className="px-5 md:px-10 md:w-[655px] h-[173px] relative">
          <img
            src="../src/images/circle-img.png"
            alt="circle"
            className="absolute top-0 left-[40px]"
          />
          <h1 className="font-extrabold text-3xl md:text-6xl uppercase pt-3 md:w-[655px] md:h-[90px] tracking-wider">
            Blog
          </h1>
          <p className="text-sm md:text-lg md:h-[52px] mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
      {/* Team Block */}
      <div className="px-5 md:px-10 mt-10 md:mt-28">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 md:h-[1158px]">
          {posts.map((post, index) => (
            <div key={index} className="md:h-[549px] transition hover:scale-110 cursor-pointer">
              <div className="md:h-[350px] bg-[#C4C4C4] hover:bg-amber-400">
                <img src="https://images.unsplash.com/photo-1646987916641-1f3c8992daa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9tZSUyMGludGVyaW9yJTIwZGVzaWduJTIwaG9tZSUyMGRlY29yYXRpb258ZW58MHx8MHx8fDA%3D" className="h-[350px]" alt="" srcset="" />
              </div>
              <div className="md:h-[76px] text-black mt-8">
                <h3 className="font-extrabold text-lg md:text-2xl uppercase tracking-wide">
                  {post.title}
                </h3>
              </div>
              <div className="md:h-[78px] mt-2">
                <p className="text-sm md:text-lg text-[#6E6E6E] font-medium">
                  {post.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
