import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-700 py-6">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-auto mb-4 sm:mb-0">
          <h2 className="text-lg font-semibold mb-2">PACKETSWITCH</h2>
          <p >
            A collection of articles focusing on Networking, Cloud and
            Automation
          </p>
          <form className="mt-4  flex flex-col md:flex md:flex-row">
            <input
              type="email"
              placeholder="Your email"
              className="border-gray-300 border rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="w-full sm:w-1/2 md:w-auto mb-4 sm:mb-0">
          <h2 className="text-lg font-semibold mb-2">Navigation</h2>
          <ul>
            <li className="mb-2">
              <Link href="/" className="text-gray-700 hover:text-white">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/blog" className="text-gray-700 hover:text-white">
                Blog
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/courses" className="text-gray-700 hover:text-white">
                Courses
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/python" className="text-gray-700 hover:text-white">
                Python
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/netdevops" className="text-gray-700 hover:text-white">
                NetDevOps
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/ansible" className="text-gray-700 hover:text-white">
                Ansible
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/training" className="text-gray-700 hover:text-white">
                Training
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/hireme" className="text-gray-700 hover:text-white">
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-auto mb-4 sm:mb-0">
          <h2 className="text-lg  font-semibold mb-2">Navigation</h2>
          <ul>
            <li className="mb-2">
              <Link href="/thank-you-10g" className="text-gray-700 hover:text-white">
                10Gb/s Portal
              </Link>
            </li>
            <li className="mb-2">
              <Link href=" /hireMe" className="text-gray-700 hover:text-white">
                Hire Me
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="text-gray-700 hover:text-white">
                About Me
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="text-gray-700 hover:text-white">
                Cookie Policy
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="text-gray-700 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="text-gray-700 hover:text-white">
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-auto mb-4 sm:mb-0">
          <h2 className="text-lg font-semibold mb-2">Social</h2>
          <ul className="flex flex-col">
            <li className="">
              <Link
                href="#"
                className="text-gray-700 flex flex-row hover:text-white hover:bg-gray-100 rounded-md px-3 py-2"
              >
                <FontAwesomeIcon className="w-4 h-4 mt-1" icon={faFacebook} />
                <p>Facebook</p>
              </Link>
            </li>
            <li className="mr-4">
              <Link
                href="#"
                className="text-gray-700 flex flex-row hover:text-white hover:bg-gray-100 rounded-md px-3 py-2"
              >
                <FontAwesomeIcon className="w-4 h-4 mt-1" icon={faTwitter} />
                Twitter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
