import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

// src/components/Footer.jsx
const Footer = () => {
  const location = useLocation();
  const footerMargin =
    location.pathname === "/our-projects/project2" ? "md:mt-0" : "md:mt-80";
  return (
    <div className={`md:h-[760px] md:relative flex flex-col ${footerMargin}`}>
      <div className="mt-5 md:mt-0 pt-5 md:pt-0 md:h-[760px] bg-[#1B1717] text-white">
        {/* Logo Section */}
        <div className="px-5 md:px-0">
          <div className="md:absolute md:-top-52 z-10 left-[135px] md:w-[1079px] md:h-[173px] md:pt-8 md:px-10 bg-amber-200 md:bg-white">
            <div className="flex justify-between md:pl-10 md:w-[884px] md:h-[113px]">
              <Link>
                <img
                  src="./src/images/logo-blocks/logo-14 1.png"
                  alt=""
                  className="filter hover:invert hover:sepia hover:saturate-200"
                />
              </Link>
              <Link>
                <img
                  src="./src/images/logo-blocks/logo-16 1.png"
                  alt=""
                  className="filter hover:invert hover:sepia hover:saturate-200"
                />
              </Link>
              <Link>
                <img
                  src="./src/images/logo-blocks/logo-25 1.png"
                  alt=""
                  className="filter hover:invert hover:sepia hover:saturate-200"
                />
              </Link>
              <Link>
                <img
                  src="./src/images/logo-blocks/logo-26 1.png"
                  alt=""
                  className="filter hover:invert hover:sepia hover:saturate-200"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="px-5 md:px-10 md:absolute md:-top-60">
          <div className="px-5 mt-10 md:px-24 md:mt-28 bg-[#111827] text-white h-[280px] md:h-[386px]">
            <h1 className="font-extrabold text-2xl md:text-6xl uppercase md:leading-[80px] tracking-wider pt-5 md:pt-28">
              LETS CHANGE YOUR OWN HOME INTERIOR DESIGN NOW
            </h1>
            <div className="flex justify-center items-center w-[199px] h-[73px] mt-5 bg-[#1F2937] rounded-md">
              <button className="uppercase font-medium tracking-widest text-white w-[199px] h-[73px] hover:bg-white hover:text-black transition hover:scale-110 hover:rounded-md">
                <NavLink to="/contact-us">Contact Us</NavLink>
              </button>
            </div>
          </div>
        </div>

        {/* Info + Navigation + Contact */}
        <div className="px-5 md:px-10 pt-10 md:pt-[320px]">
          <div className="flex flex-col md:flex-row md:justify-between md:h-[320px]">
            {/* Info */}
            <div className="md:w-[427px] md:h-[196px]">
              <h3 className="font-extrabold tracking-widest text-2xl uppercase">
                Information
              </h3>
              <p className="text-lg py-5 md:w-[400px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="flex justify-between w-[170px] h-[35px] ">
                <a href="https://www.facebook.com/" target="_main">
                  <img
                    src="./src/images/social-icons/f.png"
                    alt=""
                    className="transition duration-300 hover:brightness-0 hover:invert hover:scale-110"
                  />
                </a>
                <a href="https://x.com/i/flow/login" target="_main">
                  <img
                    src="https://img.freepik.com/premium-vector/new-twitter-logo-x-dark-grey-color-simple-background-design_665888-2518.jpg"
                    alt=""
                    className="w-7 h-7 rounded-md transition duration-300 hover:brightness-90 hover:invert hover:scale-110"
                  />
                </a>
                <a
                  href="https://www.instagram.com/accounts/login/?hl=en"
                  target="_main"
                >
                  <img
                    src="./src/images/social-icons/i.png"
                    alt=""
                    className="transition duration-300 hover:brightness-0 hover:invert hover:scale-110"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/aslam-khan-24967630a/"
                  target="_main"
                >
                  <img
                    src="./src/images/social-icons/li.png"
                    alt=""
                    className="transition duration-300 hover:brightness-0 hover:invert hover:scale-110"
                  />
                </a>
              </div>
            </div>

            {/* Navigation + Contact */}
            <div className="flex flex-col md:flex-row md:justify-between">
              {/* Navigation */}
              <div className="md:w-[313px] md:h-[202px] mt-3 md:mt-0">
                <h3 className="font-extrabold tracking-widest text-2xl uppercase">
                  Navigation
                </h3>
                <div className="md:h-[149px] pt-3 md:pt-6">
                  <div className="flex space-x-2">
                    <div className="pt-2">
                      <Link>
                        <img src="./src/images/navigation-icon.png" alt="" />
                      </Link>
                    </div>

                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `text-lg ${
                          isActive ? "text-gray-700" : "text-white"
                        } hover:text-gray-500 transition hover:scale-110 hover:duration-100`
                      }
                    >
                      Homepage
                    </NavLink>
                  </div>
                  <div className="flex space-x-2 pt-1">
                    <div className="pt-2">
                      <Link>
                        <img src="./src/images/navigation-icon.png" alt="" />
                      </Link>
                    </div>
                    <NavLink
                      to="/about-us"
                      className={({ isActive }) =>
                        `text-lg ${
                          isActive ? "text-gray-700" : "text-white"
                        } hover:text-gray-500 transition hover:scale-110 hover:duration-100`
                      }
                    >
                      About Us
                    </NavLink>
                  </div>
                  <div className="flex space-x-2 pt-1">
                    <div className="pt-2">
                      <Link>
                        <img src="./src/images/navigation-icon.png" alt="" />
                      </Link>
                    </div>
                    <NavLink
                      to="/our-services"
                      className={({ isActive }) =>
                        `text-lg ${
                          isActive ? "text-gray-700" : "text-white"
                        } hover:text-gray-500 transition hover:scale-110 hover:duration-100`
                      }
                    >
                      Services
                    </NavLink>
                  </div>
                  <div className="flex space-x-2 pt-1">
                    <div className="pt-2">
                      <Link>
                        <img src="./src/images/navigation-icon.png" alt="" />
                      </Link>
                    </div>
                    <NavLink
                      to="/our-projects"
                      className={({ isActive }) =>
                        `text-lg ${
                          isActive ? "text-gray-700" : "text-white"
                        } hover:text-gray-500 transition hover:scale-110 hover:duration-100`
                      }
                    >
                      Project
                    </NavLink>
                  </div>
                </div>
              </div>

              {/* Contact Us */}
              <div className="w-[313px] h-[320px] pb-10 mt-3 md:mt-0">
                <h3 className="font-extrabold tracking-widest text-2xl uppercase">
                  Contact Us
                </h3>
                <div className="flex space-x-3 h-[26px] mt-3 md:mt-8">
                  <div className="pt-1">
                    <img src="./src/images/contus-icons/map-icon.png" alt="" />
                  </div>
                  <p className="text-lg">Lumbung Hidup East Java</p>
                </div>
                <div className="flex space-x-2 h-[26px] mt-4">
                  <div className="pt-2">
                    <img
                      src="./src/images/contus-icons/message-icon.png"
                      alt=""
                    />
                  </div>
                  <p className="text-lg">Hello@Homco.com</p>
                </div>
                <div>
                  <input
                    className="h-[73px] w-full bg-[#757575] text-white pl-3 mt-5"
                    type="text"
                    placeholder="Email Address"
                  />
                </div>
                <div className="flex justify-center items-center w-[199px] h-[73px] mt-5 bg-[#757575] rounded-md">
                  <button className="uppercase font-medium tracking-widest w-[199px] h-[73px] text-white hover:bg-white hover:text-black hover:rounded-md cursor-pointer">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-5 md:mt-10 bg-[#FFFFFF] border-[0.5px]"></div>
          <div className="flex flex-col md:flex-row md:justify-between pt-2 md:pt-5">
            <p className="text-sm md:text-lg uppercase">
              Allright Reserved - Homco Interior
            </p>
            <div className="flex flex-col md:flex-row md:space-x-10 md:justify-between">
              <p className="text-sm md:text-lg uppercase">Disclaimer</p>
              <p className="text-sm md:text-lg uppercase">Privacy Policy</p>
              <p className="text-sm md:text-lg uppercase">Term Of Use</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
