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

const Ansible = () => {
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
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-medical-cross"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="#009988"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M13 3a1 1 0 0 1 1 1v4.535l3.928 -2.267a1 1 0 0 1 1.366 .366l1 1.732a1 1 0 0 1 -.366 1.366l-3.927 2.268l3.927 2.269a1 1 0 0 1 .366 1.366l-1 1.732a1 1 0 0 1 -1.366 .366l-3.928 -2.269v4.536a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-4.536l-3.928 2.268a1 1 0 0 1 -1.366 -.366l-1 -1.732a1 1 0 0 1 .366 -1.366l3.927 -2.268l-3.927 -2.268a1 1 0 0 1 -.366 -1.366l1 -1.732a1 1 0 0 1 1.366 -.366l3.928 2.267v-4.535a1 1 0 0 1 1 -1h2z" />
          </svg>
        </div>

        <div className="flex flex-col items-center mt-[4vh] ">
          <h5 className="font-bold  ml-[-6vw] text-3xl">Ansible</h5>
          <p className="w-[32vw] mb-4 ml-4 mt-6 text-left">
            Say hello to hassle-free Network Automation! Ansible simplifies
            Network Deployment and Configuration.
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

export default Ansible;
