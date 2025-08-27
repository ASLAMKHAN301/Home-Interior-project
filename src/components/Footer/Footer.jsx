import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo1 from "../../images/logo-blocks/logo-1.png";
import logo2 from "../../images/logo-blocks/logo-2.png";
import logo3 from "../../images/logo-blocks/logo-3.png";
import logo4 from "../../images/logo-blocks/logo-4.png";
import fIcon from "../../images/social-icons/f.png";
import liIcon from "../../images/social-icons/li.png";
import iIcon from "../../images/social-icons/i.png";
import navigationIcon from "../../images/navigation-icon.png";
import mapIcon from "../../images/contus-icons/map-icon.png";
import messageIcon from "../../images/contus-icons/message-icon.png";

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
                  src={logo1}
                  alt=""
                  className="filter hover:invert hover:sepia hover:saturate-200"
                />
              </Link>
              <Link>
                <img
                  src={logo2}
                  alt=""
                  className="filter hover:invert hover:sepia hover:saturate-200"
                />
              </Link>
              <Link>
                <img
                  src={logo3}
                  alt=""
                  className="filter hover:invert hover:sepia hover:saturate-200"
                />
              </Link>
              <Link>
                <img
                  src={logo4}
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
                    src={fIcon}
                    alt=""
                    className="transition duration-300 hover:brightness-0 hover:invert hover:scale-110"
                  />
                </a>
                <a href="https://x.com/i/flow/login" target="_main">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                    className="w-7 h-7 rounded-md transition duration-300 hover:brightness-90 hover:invert hover:scale-110"
                  />
                </a>
                <a
                  href="https://www.instagram.com/accounts/login/?hl=en"
                  target="_main"
                >
                  <img
                    src={iIcon}
                    alt=""
                    className="transition duration-300 hover:brightness-0 hover:invert hover:scale-110"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/aslam-khan-24967630a/"
                  target="_main"
                >
                  <img
                    src={liIcon}
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
                        <img src={navigationIcon} alt="" />
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
                        <img src={navigationIcon} alt="" />
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
                        <img src={navigationIcon} alt="" />
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
                        <img src={navigationIcon} alt="" />
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
                    <img src={mapIcon} alt="" />
                  </div>
                  <p className="text-lg">Lumbung Hidup East Java</p>
                </div>
                <div className="flex space-x-2 h-[26px] mt-4">
                  <div className="pt-2">
                    <img
                      src={messageIcon}
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
