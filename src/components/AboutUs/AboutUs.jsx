import React from "react";
import roundedImg from "../../images/rounded-img.png";
import rightIcon from "../../images/right-icon.png";
import { Link, NavLink } from "react-router-dom";

export function AboutUs(props) {
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
              About Us
            </h1>
            <p className="text-sm md:text-lg md:h-[52px] mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
        {/* About Block */}
        <div className="mt-10 md:mt-20 px-5 md:px-10 flex flex-col space-y-5 md:space-y-0 md:flex-row space-x-0 md:space-x-8">
          {/* Left Gray Box */}
          <div className="w-full h-[250px] md:w-[725px] md:h-[730px] bg-[#C4C4C4] rounded-2xl hover:bg-amber-500">
            <img
              src="https://plus.unsplash.com/premium_photo-1676321046535-848a104819ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D"
              className="w-full h-[250px] md:w-[725px] md:h-[730px] rounded-2xl transition hover:scale-110 cursor-pointer"
              alt=""
              srcset=""
            />
          </div>

          {/* Right Content */}
          <div className="md:w-[720.01px] md:h-[730px]">
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
              <p className="pt-4 md:pt-2 text-sm md:text-lg text-[#6E6E6E] md:h-[191.05px]">
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
              <div className="flex justify-between h-[120.66px] mt-4">
                <div className="md:w-[344.07px] md:h-[120.66px]">
                  <div className="flex space-x-2 md:space-x-5 items-center">
                    <div>
                      <img src={rightIcon} alt="" />
                    </div>
                    <p className="text-sm md:text-lg text-[#6E6E6E]">
                      Flexible Time
                    </p>
                  </div>
                  <div className="flex space-x-2 md:space-x-5 mt-5 items-center">
                    <div>
                      <img src={rightIcon} alt="" />
                    </div>
                    <p className="text-sm md:text-lg text-[#6E6E6E]">
                      Perfect Work
                    </p>
                  </div>
                  <div className="flex space-x-2 md:space-x-5 mt-5 items-center">
                    <div>
                      <img src={rightIcon} alt="" />
                    </div>
                    <p className="text-sm md:text-lg text-[#6E6E6E]">
                      Client Priority
                    </p>
                  </div>
                </div>

                <div className="md:w-[344.07px] md:h-[120.66px]">
                  <div className="flex space-x-2 md:space-x-5 items-center">
                    <div>
                      <img src={rightIcon} alt="" />
                    </div>
                    <p className="text-sm md:text-lg text-[#6E6E6E]">
                      Flexible Time
                    </p>
                  </div>
                  <div className="flex space-x-2 md:space-x-5 mt-5 items-center">
                    <div>
                      <img src={rightIcon} alt="" />
                    </div>
                    <p className="text-sm md:text-lg text-[#6E6E6E]">
                      Perfect Work
                    </p>
                  </div>
                  <div className="flex space-x-2 md:space-x-5 mt-5 items-center">
                    <div>
                      <img src={rightIcon} alt="" />
                    </div>
                    <p className="text-sm md:text-lg text-[#6E6E6E]">
                      Client Priority
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex space-x-5 md:space-x-3 mt-5 md:mt-6">
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
        {/* Team Block */}
        <div className="px-5 md:px-10 mt-10 md:mt-28">
          <div className="md:w-[655px] md:h-[173px] relative">
            <img
              src="./src/images/rounded-img.png"
              alt=""
              className="absolute -top-5 left-0 -z-10"
            />
            <h3 className="font-extrabold text-sm md:text-lg uppercase text-[#757575] mt-5 md:w-[148px] md:h-[26px]">
              Our Team
            </h3>
            <h1 className="font-extrabold text-2xl md:text-5xl uppercase text-[#1B1717] mt-5 md:w-[655px] md:h-[68px] tracking-wider">
              We Work With Team
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 pt-8">
            {/* Card 1 */}
            <div className="md:h-[706px] border-[#DADADA] border-[1px] rounded-2xl transition hover:scale-105 cursor-pointer">
              <div className="h-[300px] md:h-[500px] bg-[#C4C4C4] hover:bg-amber-300 rounded-t-2xl">
                <img
                  src="https://media.istockphoto.com/id/961748068/photo/full-length-of-construction-workers-analyzing-blueprints-in-the-apartment.webp?a=1&b=1&s=612x612&w=0&k=20&c=HqpQpH_5YXKNhAHxPRH-nRMo1Dx2JelyfQGsZPIJdJE="
                  className="h-[300px] md:h-[500px] rounded-t-2xl"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="h-[230] pb-6 md:pb-0">
                <div className="h-[230] pt-6">
                  <p className="text-lg font-bold text-center uppercase tracking-wider text-[#6E6E6E]">
                    Founder
                  </p>
                  <h3 className="font-extrabold tracking-wider text-center text-3xl mt-5 uppercase text-[#1B1717] h-[38px]">
                    John Leno
                  </h3>
                  <div className="flex justify-center mt-6">
                    <div className="flex justify-between w-[148px] h-[40px]">
                      <div>
                        <img
                          src="./src/images/grid-social-links/f.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDyUEsmJxMGvarpYPvaD2THl7ELH-MMzDIw&s"
                          alt=""
                          className="w-8 h-8"
                        />
                      </div>
                      <div>
                        <img
                          src="./src/images/grid-social-links/li.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="md:h-[706px] border-[#DADADA] border-[1px] rounded-2xl transition hover:scale-105 cursor-pointer">
              <div className="h-[300px] md:h-[500px] bg-[#C4C4C4] hover:bg-amber-500 rounded-t-2xl">
                <img
                  src="https://plus.unsplash.com/premium_photo-1682361002210-17fe0ec3c0db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZSUyMGludGVyaW9yJTIwd29yayUyMHdpdGglMjB0ZWFtfGVufDB8fDB8fHww"
                  className="h-[300px] md:h-[500px] w-full rounded-t-2xl"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="h-[206px] bg-black rounded-b-2xl pb-6 md:pb-0">
                <div className="flex justify-center items-center text-white">
                  <div className="h-[76px] pt-6">
                    <p className="text-lg font-bold text-center uppercase tracking-wider text-[#6E6E6E]">
                      Founder
                    </p>
                    <h3 className="font-extrabold tracking-wider text-3xl mt-5 uppercase h-[38px]">
                      John Leno
                    </h3>
                    <div className="flex justify-center mt-6">
                      <div className="flex justify-between w-[148px] h-[40px]">
                        <div>
                          <img
                            src="./src/images/grid-social-links/f.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7DzEVPJCb5ZfL3LNFgbQf4wu_5Iq_8n8APPYRium4mPXA7Cg3Mt8N2RqQQ0mvBatzyo&usqp=CAU"
                            alt=""
                            className="w-8 h-8"
                          />
                        </div>
                        <div>
                          <img
                            src="./src/images/grid-social-links/li.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="md:h-[706px] border-[#DADADA] border-[1px] rounded-2xl transition hover:scale-105 cursor-pointer">
              <div className="h-[300px] md:h-[500px] bg-[#C4C4C4] hover:bg-amber-700 rounded-t-2xl">
                <img
                  src="https://images.unsplash.com/photo-1610264146566-c233419fb1c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWUlMjBpbnRlcmlvciUyMHdvcmslMjB3aXRoJTIwdGVhbXxlbnwwfHwwfHx8MA%3D%3D"
                  className="h-[300px] md:h-[500px] rounded-t-2xl"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="h-[230] pb-6 md:pb-0">
                <div className="h-[230] pt-6">
                  <p className="text-lg font-bold text-center uppercase tracking-wider text-[#6E6E6E]">
                    Founder
                  </p>
                  <h3 className="font-extrabold tracking-wider text-center text-3xl mt-5 uppercase text-[#1B1717] h-[38px]">
                    John Leno
                  </h3>
                  <div className="flex justify-center mt-6">
                    <div className="flex justify-between w-[148px] h-[40px]">
                      <div>
                        <img
                          src="./src/images/grid-social-links/f.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDyUEsmJxMGvarpYPvaD2THl7ELH-MMzDIw&s"
                          alt=""
                          className="w-8 h-8"
                        />
                      </div>
                      <div>
                        <img
                          src="./src/images/grid-social-links/li.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="md:h-[706px] border-[#DADADA] border-[1px] rounded-2xl transition hover:scale-105 cursor-pointer">
              <div className="h-[300px] md:h-[500px] bg-[#C4C4C4] hover:bg-amber-900 rounded-t-2xl">
                <img
                  src="https://plus.unsplash.com/premium_photo-1682974359401-2774f67e8446?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGludGVyaW9yJTIwd29yayUyMHdpdGglMjB0ZWFtfGVufDB8fDB8fHww"
                  className="h-[300px] md:h-[500px] rounded-t-2xl"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="h-[206px] bg-black rounded-b-2xl pb-6 md:pb-0">
                <div className="flex justify-center items-center text-white">
                  <div className="h-[76px] pt-6">
                    <p className="text-lg font-bold text-center uppercase tracking-wider text-[#6E6E6E]">
                      Founder
                    </p>
                    <h3 className="font-extrabold tracking-wider text-3xl mt-5 uppercase h-[38px]">
                      John Leno
                    </h3>
                    <div className="flex justify-center mt-6">
                      <div className="flex justify-between w-[148px] h-[40px]">
                        <div>
                          <img
                            src="./src/images/grid-social-links/f.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7DzEVPJCb5ZfL3LNFgbQf4wu_5Iq_8n8APPYRium4mPXA7Cg3Mt8N2RqQQ0mvBatzyo&usqp=CAU"
                            alt=""
                            className="w-8 h-8"
                          />
                        </div>
                        <div>
                          <img
                            src="./src/images/grid-social-links/li.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="md:h-[706px] border-[#DADADA] border-[1px] rounded-2xl transition hover:scale-105 cursor-pointer">
              <div className="h-[300px] md:h-[500px] bg-[#C4C4C4]  hover:bg-amber-400 rounded-t-2xl">
                <img
                  src="https://plus.unsplash.com/premium_photo-1676057875512-945438ae6132?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvbWUlMjBpbnRlcmlvciUyMHdvcmslMjB3aXRoJTIwdGVhbXxlbnwwfHwwfHx8MA%3D%3D"
                  className="h-[300px] md:h-[500px] w-full rounded-t-2xl"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="h-[230] pb-6 md:pb-0">
                <div className="h-[230] pt-6">
                  <p className="text-lg font-bold text-center uppercase tracking-wider text-[#6E6E6E]">
                    Founder
                  </p>
                  <h3 className="font-extrabold tracking-wider text-center text-3xl mt-5 uppercase text-[#1B1717] h-[38px]">
                    John Leno
                  </h3>
                  <div className="flex justify-center mt-6">
                    <div className="flex justify-between w-[148px] h-[40px]">
                      <div>
                        <img
                          src="./src/images/grid-social-links/f.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDyUEsmJxMGvarpYPvaD2THl7ELH-MMzDIw&s"
                          alt=""
                          className="w-8 h-8"
                        />
                      </div>
                      <div>
                        <img
                          src="./src/images/grid-social-links/li.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="md:h-[706px] border-[#DADADA] border-[1px] rounded-2xl transition hover:scale-105 cursor-pointer">
              <div className="h-[300px] md:h-[500px] bg-[#C4C4C4] hover:bg-amber-600 rounded-t-2xl">
                <img
                  src="https://plus.unsplash.com/premium_photo-1682361002117-01776348848a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbWUlMjBpbnRlcmlvciUyMHdvcmslMjB3aXRoJTIwdGVhbXxlbnwwfHwwfHx8MA%3D%3D"
                  className="h-[300px] md:h-[500px] w-full rounded-t-2xl"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="h-[206px] bg-black rounded-b-2xl pb-6 md:pb-0">
                <div className="flex justify-center items-center text-white">
                  <div className="h-[76px] pt-6">
                    <p className="text-lg font-bold text-center uppercase tracking-wider text-[#6E6E6E]">
                      Founder
                    </p>
                    <h3 className="font-extrabold tracking-wider text-3xl mt-5 uppercase h-[38px]">
                      John Leno
                    </h3>
                    <div className="flex justify-center mt-6">
                      <div className="flex justify-between w-[148px] h-[40px]">
                        <div>
                          <img
                            src="./src/images/grid-social-links/f.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7DzEVPJCb5ZfL3LNFgbQf4wu_5Iq_8n8APPYRium4mPXA7Cg3Mt8N2RqQQ0mvBatzyo&usqp=CAU"
                            alt=""
                            className="w-8 h-8"
                          />
                        </div>
                        <div>
                          <img
                            src="./src/images/grid-social-links/li.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Quote Block */}
        <div className="md:h-[570px] px-5 md:px-0 mt-10 md:mt-[200px] md:relative flex flex-col space-y-5 md:space-y-0">
          {/* Left Gray Box */}
          <div className="md:absolute rounded-2xl -top-[100px] left-[40px] w-full md:w-[427px] h-[250px] md:h-[300px] bg-[#C4C4C4]">
            <img
              src="https://images.unsplash.com/photo-1579926716139-2c80ed956d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWUlMjBpbnRlcmlvciUyMHdvcmslMjBoYXJkfGVufDB8fDB8fHww"
              className="h-[250px] w-full md:w-[427px] md:h-[300px] rounded-2xl transition hover:scale-105 cursor-pointer"
              alt=""
              srcset=""
            />
          </div>

          {/* Phone Card */}
          <div className="md:absolute rounded-2xl md:w-[427px] md:h-[221px] bg-slate-300 top-[100px] left-[190px]">
            <div className="p-10 bg-amber-200 md:bg-white rounded-2xl transition hover:scale-105 cursor-pointer">
              <img src="./src/images/phone-icon.png" alt="Phone Icon" />
              <h3 className="font-extrabold tracking-wider text-3xl mt-10 uppercase">
                Call Us Now
              </h3>
              <p className="text-xl font-medium text-[#6E6E6E] mt-6">
                (+62) 123 456 789
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="p-10 md:pt-[100px] md:h-[470px] md:pl-[655px] bg-[#111827] text-white">
            <h1 className="font-extrabold text-2xl md:w-[655px] md:text-6xl uppercase leading-10 md:leading-[90px] tracking-widest">
              "WORK HARD & GREAT QUALITY IS MY PRIORITY"
            </h1>
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
                  <p className="text-sm md:text-lg text-[#6E6E6E]">
                    Flexible Time
                  </p>
                </div>
                <div className="flex space-x-2 md:space-x-5 mt-5 items-center">
                  <div>
                    <img src="./src/images/right-icon.png" alt="Right Icon" />
                  </div>
                  <p className="text-sm md:text-lg text-[#6E6E6E]">
                    Perfect Work
                  </p>
                </div>
                <div className="flex space-x-2 md:space-x-5 mt-5 items-center">
                  <div>
                    <img src="./src/images/right-icon.png" alt="Right Icon" />
                  </div>
                  <p className="text-sm md:text-lg text-[#6E6E6E]">
                    Client Priority
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="md:w-[344.07px] md:h-[120.66px]">
                <div className="flex space-x-2 md:space-x-5 items-center">
                  <div>
                    <img src="./src/images/right-icon.png" alt="Right Icon" />
                  </div>
                  <p className="text-sm md:text-lg text-[#6E6E6E]">
                    Flexible Time
                  </p>
                </div>
                <div className="flex space-x-2 md:space-x-5 mt-5 items-center">
                  <div>
                    <img src="./src/images/right-icon.png" alt="Right Icon" />
                  </div>
                  <p className="text-sm md:text-lg text-[#6E6E6E]">
                    Perfect Work
                  </p>
                </div>
                <div className="flex space-x-2 md:space-x-5 mt-5 items-center">
                  <div>
                    <img src="./src/images/right-icon.png" alt="Right Icon" />
                  </div>
                  <p className="text-sm md:text-lg text-[#6E6E6E]">
                    Client Priority
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
