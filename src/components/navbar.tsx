"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsCoursesDropdownOpen((prevState) => !prevState);
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-[#044e83] backdrop-blur-3xl p-6 md:p-7  lg:p-">
      <div className="container mx-auto relative">
        <div className="flex flex-row items-center justify-evenly">
          <h1 className="text_shadow hidden text-[15px] font-bold text-[#b9d8f3] lg:block xl-lg:text-xl xl:text-2xl ml-1">
            Tuition Free Education Program on Latest Technologies
          </h1>
          <h1 className="text_shadow text-[1.125rem] font-bold text-[#b9d8f3] lg:hidden">
            Tuition Free Program
          </h1>

          <nav
            className={`text-white flex-col items-center justify-center space-y-4 ${
              isMenuOpen
                ? "flex absolute top-full left-0 w-full bg-[#044e83] p-4"
                : "hidden md:flex md:flex-row md:space-y-0 md:space-x-6"
            }`}
          >
            <Link href="/" className="hover:text-[#b9d8f3] transition-colors font-">
              Home
            </Link>
            <Link
              href="/apply"
              className="hover:text-[#b9d8f3] transition-colors"
            >
              Apply
            </Link>
            <Link
              href="/job"
              className="hover:text-[#b9d8f3] transition-colors"
            >
              Jobs
            </Link>
            <Link href="#" className="hover:text-[#b9d8f3] transition-colors">
              Result
            </Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center hover:text-[#b9d8f3] transition-colors"
              >
                Courses
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isCoursesDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isCoursesDropdownOpen && (
                <div className="absolute top-full right-0 left-0 md:right-5 md:left-auto bg-white p-4 mt-1 rounded shadow-lg w-screen md:w-[450px] max-h-[80vh] overflow-y-auto transition-opacity duration-300 ease-in-out">
                  <div className="mb-4">
                    <h2 className="text-[#044e83] font-bold text-lg mb-2">
                      Core Courses
                    </h2>
                    <ul>
                      <li>
                        <Link
                          href=""
                          className="block py-2 px-2 text-[#333] hover:text-[#044e83] text-base"
                        >
                          Programming Fundamentals
                        </Link>
                      </li>
                      <li>
                        <Link
                          href=""
                          className="block py-2 px-2 text-[#333] hover:text-[#044e83] text-base"
                        >
                          Web2 Using NextJS
                        </Link>
                      </li>
                      <li>
                        <Link
                          href=""
                          className="block py-2 px-2 text-[#333] hover:text-[#044e83] text-base"
                        >
                          Earn as You Learn
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-[#044e83] font-bold text-lg mb-2">
                      Advanced Courses
                    </h2>
                    <ul>
                      <li>
                        <Link
                          href=""
                          className="block py-2 px-2 text-[#333] hover:text-[#044e83] text-base"
                        >
                          Web3 and Metaverse
                        </Link>
                      </li>
                      <li>
                        <Link
                          href=""
                          className="block py-2 px-2 text-[#333] hover:text-[#044e83] text-base"
                        >
                          Cloud Native Computing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href=""
                          className="block py-2 px-2 text-[#333] hover:text-[#044e83] text-base"
                        >
                          Artificial Intelligence (Ai) and Deep Learning
                        </Link>
                      </li>
                      <li>
                        <Link
                          href=""
                          className="block py-2 px-2 text-[#333] hover:text-[#044e83] text-base"
                        >
                          Ambient Computing and IoT
                        </Link>
                      </li>
                      <li>
                        <Link
                          href=""
                          className="block py-2 px-2 text-[#333] hover:text-[#044e83] text-base"
                        >
                          Genomics and Bioinformatics
                        </Link>
                      </li>
                      <li>
                        <Link
                          href=""
                          className="block py-2 px-2 text-[#333] hover:text-[#044e83] text-base"
                        >
                          Networking Programmability and Automation
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        <button
          className="md:hidden text-white absolute right-4 top-1/2 transform -translate-y-1/2 z-50"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <div
          className={`absolute left-0 top-14 transform -translate-y-1/2 ${
            isMenuOpen ? "hidden" : ""
          }`}
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={90}
            height={113}
            className="w-auto h-auto"
            sizes="(max-width: 768px) 60px, 90px"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
