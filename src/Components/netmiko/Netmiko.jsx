import React from "react";
import BlogMain from "../constant/BlogMain";
import Bgpcard from "../constant/Bgpcard";

const Netmiko = () => {
  return (
    <div>
      <div className="w-full flex flex-row items-center justify-center">
        <div
          className="mt-[1vh]
      "
        >
          <img
            className="sm:w-[10vw] sm:h-[25vh] md:w-[10vw] md:h-[15vh]"
            src="\images\python-logo.png"
            alt=""
          />
        </div>

        <div className="flex flex-col items-center mt-[4vh] ">
          <h5 className="sm:w-[22vw] am:font-bold  sm:text-3xl text-2xl ml-6">
            Netmiko
          </h5>
          <p className="sm:w-[22vw] sm:text-[1vw] w-[28vw]  text-[2vw]  mb-4  mt-4 ">
            Introduction to Netmiko and How You Can Use It to Automate Your
            Network with Real-World Examples and Labs
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-[3vw] w-full h-full flex-row justify-around mt-6">
          <div>
            <a href="/link/to/second/blog">
              <Bgpcard
                imageUrl="\images\netmiko-01-feature1.png"
                paragraph="- BGP"
                heading="BGP Introduction (I)"
                date="Apr 14, 2024"
              />
            </a>
          </div>
          <div>
            <a href="/link/to/second/blog">
              <Bgpcard
                imageUrl="\images\netmiko-02-feature.png"
                paragraph="- PYTHON"
                heading="Nornir Network Automation"
                imageUrl2="/images/blog-avatar--1-.png"
                date="Apr 14, 2024"
              />
            </a>
          </div>
          <div>
            <a href="/link/to/second/blog">
              <Bgpcard
                imageUrl="\images\netmiko-3-textfsm.png"
                paragraph="- NETDEVOPS"
                heading="Getting Started With Juniper PyEZ Library"
                imageUrl2="/images/blog-avatar--1-.png"
                date="Apr 14, 2024"
              />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-[3vw] w-full h-full flex-row justify-around mt-6">
          <div>
            <a href="/link/to/second/blog">
              <Bgpcard
                imageUrl="\images\netmiko-01-feature1.png"
                paragraph="- BGP"
                heading="BGP Introduction (I)"
                date="Apr 14, 2024"
              />
            </a>
          </div>
          <div>
            <a href="/link/to/second/blog">
              <Bgpcard
                imageUrl="\images\netmiko-02-feature.png"
                paragraph="- PYTHON"
                heading="Nornir Network Automation"
                imageUrl2="/images/blog-avatar--1-.png"
                date="Apr 14, 2024"
              />
            </a>
          </div>
          <div>
            <a href="/link/to/second/blog">
              <Bgpcard
                imageUrl="\images\netmiko-3-textfsm.png"
                paragraph="- NETDEVOPS"
                heading="Getting Started With Juniper PyEZ Library"
                imageUrl2="/images/blog-avatar--1-.png"
                date="Apr 14, 2024"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Netmiko;
