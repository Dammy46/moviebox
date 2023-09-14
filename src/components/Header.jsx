import React from "react";
import Logo from "../assets/Logo.png";
import { BsFillPlayCircleFill, BsSearch } from "react-icons/bs";
import { GiPeach } from "react-icons/gi";

const Header = ({handleChange}) => {


  return (
    <div className="h-full relative bg-transparent bg-gradient-to-r from-slate-600 to-slate-900">
      <div>
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:w-full md:w-full w-[115px]">
              <a href="#" className="-m-1.5 p-1.5">
                <img src={Logo} alt="octaedro" />
              </a>
            </div>

            <div className="flex w-[200px] gap-x-12 lg:w-full md:w-full ">
              <div className="py-2 px-4 border border-white rounded-md text-white w-full flex items-center">
                <input
                  type="text"
                  className="bg-inherit w-full focus:outline-none focus:ring-0 "
                  placeholder="What do you want to watch?"
                  onChange={handleChange}
                />
                <BsSearch />
              </div>
            </div>
          </nav>

          <div className="hidden mobile-menu" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img src={Logo} alt="octaedro" />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 close"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    //   strokeWidth
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6">
                  <div className="space-y-2 py-6">
                    <a
                      href="index.html"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 capitalize"
                    >
                      home
                    </a>
                    <a
                      href="blog.html"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 capitalize"
                    >
                      blog
                    </a>
                    <a
                      href="hacks.html"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 capitalize"
                    >
                      hacks
                    </a>
                    <a
                      href="index.html"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 capitalize"
                    >
                      video
                    </a>
                    <a
                      href="#contact"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 capitalize"
                    >
                      contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto py-48 flex flex-col gap-[30px] lg:justify-center md:justify-center justify-start">
          <div className="flex lg:justify-center md:justify-center justify-start gap-10">
            <div className="flex-col gap-6 flex justify-center items-center text-center lg:w-[70%] md:w-[70%] w-full">
              <h2 className="text-white lg:text-[4rem] md:text-[3rem] text-[2rem] font-semibold">
                Your Ultimate Moviebox Experience
              </h2>

              <p className="text-white text-lg">
                where movies come to life. Explore the best of cinema with our
                extensive collection of films. Discover new favorites and
                revisit classics with a simple click. Your movie night just got
                better with MovieBox.
              </p>
              <div>
                <a href="#list" className="inline-flex items-center text-white capitalize bg-[#BE123C] py-[12px] px-8 rounded-md gap-4 font-semibold">
                  <BsFillPlayCircleFill />
                  get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
