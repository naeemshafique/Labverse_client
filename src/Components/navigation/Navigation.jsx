"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <nav className="bg-white w-full shadow-lg">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full py-[2vw] flex flex-row items-center justify-between lg:block">
          <div className="flex flex-row items-center justify-between">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <img
                  className="h-8"
                  src="/images/l-intro-1691417319.jpg"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3  rounded-md text-sm font-medium"
                >
                  Home
                </Link>

                <Link
                  href="/blog"
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3  rounded-md text-sm font-medium"
                >
                  Blog
                </Link>

                <Link
                  href="/courses"
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3  rounded-md text-sm font-medium"
                >
                  Courses
                </Link>

                <Link
                  href=" python"
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3  rounded-md text-sm font-medium"
                >
                  Python
                </Link>

                <Link
                  href=" /netdevops"
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3  rounded-md text-sm font-medium"
                >
                  NetDevOps
                </Link>

                <Link
                  href=" /ansible"
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3  rounded-md text-sm font-medium"
                >
                  Ansible
                </Link>

                <Link
                  href=" /training"
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3  rounded-md text-sm font-medium"
                >
                  Training
                </Link>

                <Link
                  href=" /hireMe"
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3  rounded-md text-sm font-medium"
                >
                  HireMe
                </Link>

                <Link
                  href=" /"
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3  rounded-md text-sm font-medium"
                >
                  /
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <button className="bg-black text-white hover:bg-gray-900 px-3 sm:w-[8vw] sm:h-[6vh] rounded-md text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
          <div className="block lg:hidden">
            <button
              className="bg-gray-700 text-white px-3  rounded-md"
              onClick={toggleBurgerMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {isBurgerMenuOpen && (
              <div className="absolute top-16 inset-x-0 z-10 bg-white shadow-md">
                <div className="px-2 py-1 space-y-1">
                  <Link
                    href="/"
                    className="block px-3  text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    href="/blog"
                    className="block px-3  text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-sm font-medium"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/courses"
                    className="block px-3  text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-sm font-medium"
                  >
                    Courses
                  </Link>
                  <Link
                    href="/python"
                    className="block px-3  text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-sm font-medium"
                  >
                    Python
                  </Link>
                  <Link
                    href="/netdevops"
                    className="block px-3  text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-sm font-medium"
                  >
                    NetDevOps
                  </Link>
                  <Link
                    href="/ansible"
                    className="block px-3  text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-sm font-medium"
                  >
                    Ansible
                  </Link>
                  <Link
                    href="/training"
                    className="block px-3  text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-sm font-medium"
                  >
                    Training
                  </Link>
                  <Link
                    href="/hireMe"
                    className="block px-3  text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-sm font-medium"
                  >
                    HireMe
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
