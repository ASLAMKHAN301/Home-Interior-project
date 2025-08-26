import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export function Header() {
  const [showProjects, setShowProjects] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // menu open/close state
  const [bg, setBg] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setBg("bg-green-600"); 
      } else if (window.scrollY < 1000) {
        setBg("bg-[#FCA5A5]"); 
      } else if (window.scrollY < 2000) {
        setBg("bg-[#BFDBFE]"); 
      } else {
        setBg("bg-blue-600"); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${bg}`}
      >
        {/* Navbar */}
        <div className="flex justify-between items-center px-5 md:px-10 h-[123px] text-black font-medium text-lg uppercase">
          <Link to="/">
            <img
              src="./src/images/headers/Logo.png"
              alt="Logo"
              className="invert hover:brightness-20"
            />
          </Link>

          <div className="h-[123px] ">
            <div className="flex h-full">
              {/* Home */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `md:block hidden pt-12 px-4 ${
                    isActive ? "bg-emerald-600" : ""
                  } hover:text-white hover:bg-emerald-500 tracking-wider`
                }
              >
                home
              </NavLink>

              {/* About */}
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `md:block hidden pt-12 px-4 ${
                    isActive ? "bg-emerald-600" : ""
                  } hover:text-white hover:bg-emerald-500 tracking-wider`
                }
              >
                about us
              </NavLink>

              {/* Services */}
              <NavLink
                to="/our-services"
                className={({ isActive }) =>
                  `md:block hidden pt-12 px-4 ${
                    isActive ? "bg-emerald-600" : ""
                  } hover:text-white hover:bg-emerald-500 tracking-wider`
                }
              >
                our services
              </NavLink>

              {/* Projects with dropdown */}
              <div
                className="relative flex"
                onMouseEnter={() => {
                  setShowProjects(true);
                  setShowPages(false);
                }}
                onMouseLeave={() => setShowProjects(false)}
              >
                <NavLink
                  to="/our-projects"
                  className={({ isActive }) =>
                    `md:block hidden pt-12 px-4 ${
                      isActive ? "bg-emerald-600" : ""
                    } hover:text-white hover:bg-emerald-500 tracking-wider`
                  }
                >
                  our projects
                </NavLink>
                <div
                  className="md:block hidden pt-14 cursor-pointer"
                  onMouseEnter={() => {
                    setShowProjects(!showProjects);
                    setShowPages(false);
                  }}
                >
                  <img
                    src="./src/images/headers/icon.png"
                    alt="icon"
                    className="invert w-4 h-3 hover:brightness-20"
                  />
                </div>

                {/* Projects dropdown */}
                {showProjects && (
                  <div className="absolute top-[100px] left-0 bg-white w-48 p-6 rounded-md text-black shadow-lg">
                    <NavLink
                      to="/our-projects/project1"
                      className="block font-medium text-lg uppercase hover:text-amber-500"
                      onClick={() => setShowProjects(false)}
                    >
                      Project 1
                    </NavLink>
                    <NavLink
                      to="/our-projects/project2"
                      className="block font-medium text-lg uppercase pt-3 hover:text-amber-500"
                      onClick={() => setShowProjects(false)}
                    >
                      Project 2
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Portfolio */}
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `md:block hidden pt-12 px-4 ${
                    isActive ? "bg-emerald-600" : ""
                  } hover:text-white hover:bg-emerald-500 tracking-wider`
                }
              >
                portfolio
              </NavLink>

              {/* Pages with dropdown */}
              <div
                className="relative flex"
                onMouseEnter={() => {
                  setShowPages(true);
                  setShowProjects(false);
                }}
                onMouseLeave={() => setShowPages(false)}
              >
                <NavLink
                  to="/pages"
                  className={({ isActive }) =>
                    `md:block hidden pt-12 px-4 ${
                      isActive ? "bg-emerald-600" : ""
                    } hover:text-white hover:bg-emerald-500 tracking-wider`
                  }
                >
                  pages
                </NavLink>
                <div
                  className="md:block hidden pt-14 cursor-pointer"
                  onMouseEnter={() => {
                    setShowPages(!showPages);
                    setShowProjects(false);
                  }}
                >
                  <img
                    src="./src/images/headers/icon.png"
                    alt="icon"
                    className="invert w-4 h-3 hover:brightness-20"
                  />
                </div>

                {/* Pages dropdown */}
                {showPages && (
                  <div className="absolute top-[100px] left-0 bg-white w-48 p-6 rounded-md text-black shadow-lg">
                    <NavLink
                      to="/pages/faq"
                      className="block font-medium text-lg uppercase hover:text-amber-500"
                      onClick={() => setShowPages(false)}
                    >
                      FAQ
                    </NavLink>
                    <NavLink
                      to="/pages/blog"
                      className="block font-medium text-lg uppercase pt-3 hover:text-amber-500"
                      onClick={() => setShowPages(false)}
                    >
                      Blog
                    </NavLink>
                    <NavLink
                      to="/pages/post"
                      className="block font-medium text-lg uppercase pt-3 hover:text-amber-500"
                      onClick={() => setShowPages(false)}
                    >
                      Single Post
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Menu / Cross toggle button */}
              <button onClick={() => setShowMenu(!showMenu)}>
                {showMenu ? (
                  <span className="px-4 text-3xl text-white cursor-pointer">
                    ✕
                  </span>
                ) : (
                  <img
                    src="./src/images/headers/menu.png"
                    className="invert px-4 cursor-pointer hover:brightness-20"
                    alt="menu"
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Border bottom */}
        <div className="border-white border-[0.5px]"></div>

        {/* Sidebar menu */}
        {showMenu && (
          <>
            {/* Background blur */}
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setShowMenu(false)}
            ></div>

            {/* Sidebar */}
            <div className="fixed top-0 right-0 w-2/3 md:w-1/2 h-full bg-white shadow-lg z-50 p-6">
              {/* Cross button */}
              <div className="flex justify-end">
                <button
                  className="text-3xl font-bold text-black hover:text-amber-500"
                  onClick={() => setShowMenu(false)}
                >
                  ✕
                </button>
              </div>

              {/* Menu items */}
              <div className="md:mt-10 space-y-4">
                <Link
                  to="/"
                  className="block px-4 md:py-2 uppercase font-medium text-lg text-black hover:text-amber-500"
                  onClick={() => setShowMenu(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about-us"
                  className="block px-4 md:py-2 uppercase font-medium text-lg text-black hover:text-amber-500"
                  onClick={() => setShowMenu(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/our-services"
                  className="block px-4 md:py-2 uppercase font-medium text-lg text-black hover:text-amber-500"
                  onClick={() => setShowMenu(false)}
                >
                  Our Services
                </Link>
                <Link
                  to="/our-projects/project1"
                  className="block px-4 md:py-2 uppercase font-medium text-lg text-black hover:text-amber-500"
                  onClick={() => setShowMenu(false)}
                >
                  Project 1
                </Link>
                <Link
                  to="/our-projects/project2"
                  className="block px-4 md:py-2 uppercase font-medium text-lg text-black hover:text-amber-500"
                  onClick={() => setShowMenu(false)}
                >
                  Project 2
                </Link>
                <Link
                  to="/portfolio"
                  className="block px-4 md:py-2 uppercase font-medium text-lg text-black hover:text-amber-500"
                  onClick={() => setShowMenu(false)}
                >
                  Portfolio
                </Link>
                <Link
                  to="/pages/faq"
                  className="block px-4 md:py-2 uppercase font-medium text-lg text-black hover:text-amber-500"
                  onClick={() => setShowMenu(false)}
                >
                  FAQ
                </Link>
                <Link
                  to="/pages/blog"
                  className="block px-4 md:py-2 uppercase font-medium text-lg text-black hover:text-amber-500"
                  onClick={() => setShowMenu(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/ppages/post"
                  className="block px-4 md:py-2 uppercase font-medium text-lg text-black hover:text-amber-500"
                  onClick={() => setShowMenu(false)}
                >
                  Single post
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
