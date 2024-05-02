import React from "react";
import BlogMain from "../constant/BlogMain";

const dummyData = [
  {
    id: 1,
    imageUrl: "/images/bgp-lab-containerlab-nornir.png",
    paragraph: "- NETDEVOPS",
    heading: "Simple BGP Lab with Containerlab and Nornir (Lab-as-a-Code)",
    imageUrl2: "/images/blog-avatar--1-.png",
    Name: "Dr Zangi",
    date: "Apr 14, 2024",
  },
  {
    id: 2,
    imageUrl: "/images/nornir--1-.png",
    paragraph: "- PYTHON",
    heading: "Nornir Network Automation",
    imageUrl2: "/images/blog-avatar--1-.png",
    Name: "Dr Zangi",
    date: "Apr 14, 2024",
  },
  {
    id: 3,
    imageUrl: "/images/bgp-lab-containerlab-nornir.png",
    paragraph: "- NETDEVOPS",
    heading: "Simple BGP Lab with Containerlab and Nornir (Lab-as-a-Code)",
    imageUrl2: "/images/blog-avatar--1-.png",
    Name: "Dr Zangi",
    date: "Apr 14, 2024",
  },
  {
    id: 4,
    imageUrl: "/images/bgp-lab-containerlab-nornir.png",
    paragraph: "- NETDEVOPS",
    heading: "Simple BGP Lab with Containerlab and Nornir (Lab-as-a-Code)",
    imageUrl2: "/images/blog-avatar--1-.png",
    Name: "Dr Zangi",
    date: "Apr 14, 2024",
  },
  {
    id: 5,
    imageUrl: "/images/nornir--1-.png",
    paragraph: "- PYTHON",
    heading: "Nornir Network Automation",
    imageUrl2: "/images/blog-avatar--1-.png",
    Name: "Dr Zangi",
    date: "Apr 14, 2024",
  },
  {
    id: 6,
    imageUrl: "/images/bgp-lab-containerlab-nornir.png",
    paragraph: "- NETDEVOPS",
    heading: "Simple BGP Lab with Containerlab and Nornir (Lab-as-a-Code)",
    imageUrl2: "/images/blog-avatar--1-.png",
    Name: "Dr Zangi",
    date: "Apr 14, 2024",
  },
  
];

const Python = () => {
  return (
    <div>
      <div className="w-full flex flex-row items-center justify-center">
        <div
          className="mt-[4vh]"
          style={{
            backgroundColor: "#add8e6",
            width: "160px",
            height: "160px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
          }}
        >
          <svg
            width="140px"
            height="120px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="512" cy="512" r="512" style={{ fill: "#fa582d" }} />
            <path
              d="M592.93 310.51 512.42 391l40 40.06L350.58 633l80.51 80.51L511.6 633l-40-40 201.84-202zM230 512.4l201.89-201.89L512.41 391l-201.9 201.91zM511.59 633l201.9-201.91L794 511.6 592.11 713.49z"
              style={{ fill: "#fff" }}
            />
          </svg>
        </div>

        <div className="flex flex-col items-center mt-[4vh] ">
          <h5 className="font-bold  ml-[-6vw] text-3xl">Palo Alto</h5>
          <p className="w-[32vw] mb-4 ml-4 mt-6 text-left">
            Please check out my blog for the latest Palo Alto articles.
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
                  Name={item.Name}
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

export default Python;
