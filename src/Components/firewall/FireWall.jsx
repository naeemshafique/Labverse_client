import React from "react";
import BlogMain from "../constant/BlogMain";

const dummyData = [
  {
    id: 1,
    imageUrl: "/images/bgp-lab-containerlab-nornir.png",
    paragraph: "- NETDEVOPS",
    heading: "Simple BGP Lab with Containerlab and Nornir (Lab-as-a-Code)",
    imageUrl2: "/images/blog-avatar--1-.png",
    author: "Dr Zangi",
    date: "Apr 14, 2024",
  },
  {
    id: 2,
    imageUrl: "/images/remote-ssh--1-.png",
    paragraph: "- NETDEVOPS",
    heading: "Why Did No One Tell Me About This VSCode Remote - SSH Feature?",
    imageUrl2: "/images/blog-avatar--1-.png",
    author: "Dr Zangi",
    date: "Apr 14, 2024",
  },
  {
    id: 3,
    imageUrl: "/images/remote-ssh--1-.png",
    paragraph: "- NETDEVOPS",
    heading: "Why Did No One Tell Me About This VSCode Remote - SSH Feature?",
    imageUrl2: "/images/blog-avatar--1-.png",
    author: "Dr Zangi",
    date: "Apr 14, 2024",
  },
  {
    id: 4,
    imageUrl: "/images/bgp-lab-containerlab-nornir.png",
    paragraph: "- NETDEVOPS",
    heading: "Simple BGP Lab with Containerlab and Nornir (Lab-as-a-Code)",
    imageUrl2: "/images/blog-avatar--1-.png",
    author: "Dr Zangi",
    date: "Apr 14, 2024",
  },
  {
    id: 5,
    imageUrl: "/images/remote-ssh--1-.png",
    paragraph: "- NETDEVOPS",
    heading: "Why Did No One Tell Me About This VSCode Remote - SSH Feature?",
    imageUrl2: "/images/blog-avatar--1-.png",
    author: "Dr Zangi",
    date: "Apr 14, 2024",
  },
  {
    id: 6,
    imageUrl: "/images/remote-ssh--1-.png",
    paragraph: "- NETDEVOPS",
    heading: "Why Did No One Tell Me About This VSCode Remote - SSH Feature?",
    imageUrl2: "/images/blog-avatar--1-.png",
    author: "Dr Zangi",
    date: "Apr 14, 2024",
  },
  [],
];

const RoundedSVGComponent = () => {
  return (
    <div>
      <div className="w-full flex flex-row items-center justify-center">
        <div
          className="mt-[1vh] sm:w-[] sm:h-[] 
      "
          style={{
            backgroundColor: "#add8e6",
            width: "140px",
            height: "120px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
          }}
        >
           <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-wall"
        width="80"
        height="60"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="#000000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 8h16" />
        <path d="M20 12h-16" />
        <path d="M4 16h16" />
        <path d="M9 4v4" />
        <path d="M14 8v4" />
        <path d="M8 12v4" />
        <path d="M16 12v4" />
        <path d="M11 16v4" />
      </svg>
        </div>

        <div className="flex flex-col items-center mt-[4vh] ">
          <h5 className="font-bold ml-[-4vw] text-3xl">Firewall</h5>
          <p className="sm:w-[42vw] sm:text-[1vw] w-[80%] text-[2vw]  mb-4 ml-4 mt-6 text-left">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-[3vw] w-full h-full flex-row justify-around mt-6">
          {dummyData.map((item) => (
            <div key={item.id}>
              <a href={`/link/to/blog/${item.id}`}>
                <BlogMain
                  imageUrl={item.imageUrl}
                  paragraph={item.paragraph}
                  heading={item.heading}
                  imageUrl2={item.imageUrl2}
                  Name={item.author}
                  date={item.date}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoundedSVGComponent;
