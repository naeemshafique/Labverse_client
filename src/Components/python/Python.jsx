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
    date: "Apr 14, 2024"
  },
  {
    id: 2,
    imageUrl: "/images/nornir--1-.png",
    paragraph: "- PYTHON",
    heading: "Nornir Network Automation",
    imageUrl2: "/images/blog-avatar--1-.png",
    Name: "Dr Zangi",
    date: "Apr 14, 2024"
  },
  {
    id: 3,
    imageUrl: "/images/bgp-lab-containerlab-nornir.png",
    paragraph: "- NETDEVOPS",
    heading: "Simple BGP Lab with Containerlab and Nornir (Lab-as-a-Code)",
    imageUrl2: "/images/blog-avatar--1-.png",
    Name: "Dr Zangi",
    date: "Apr 14, 2024"
  },
  {
    id: 4,
    imageUrl: "/images/bgp-lab-containerlab-nornir.png",
    paragraph: "- NETDEVOPS",
    heading: "Simple BGP Lab with Containerlab and Nornir (Lab-as-a-Code)",
    imageUrl2: "/images/blog-avatar--1-.png",
    Name: "Dr Zangi",
    date: "Apr 14, 2024"
  },
  {
    id: 5,
    imageUrl: "/images/nornir--1-.png",
    paragraph: "- PYTHON",
    heading: "Nornir Network Automation",
    imageUrl2: "/images/blog-avatar--1-.png",
    Name: "Dr Zangi",
    date: "Apr 14, 2024"
  },
  {
    id: 6,
    imageUrl: "/images/bgp-lab-containerlab-nornir.png",
    paragraph: "- NETDEVOPS",
    heading: "Simple BGP Lab with Containerlab and Nornir (Lab-as-a-Code)",
    imageUrl2: "/images/blog-avatar--1-.png",
    Name: "Dr Zangi",
    date: "Apr 14, 2024"
  },
  // Add more dummy data objects as needed
];

const Python = () => {
  return (
    <div>
      <div className="w-full flex flex-row items-center justify-center">
        <div
          className="mt-32"
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
            class="icon icon-tabler icon-tabler-brand-python"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3" />
            <path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3" />
            <path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4" />
            <line x1="11" y1="6" x2="11" y2="6.01" />
            <line x1="13" y1="18" x2="13" y2="18.01" />
          </svg>
        </div>

        <div className="flex flex-col items-center mt-28 ">
          <h5 className="font-bold  ml-[-6vw] text-3xl">Python</h5>
          <p className="w-[32vw] mb-4 ml-4 mt-6 text-left">
            Friendly, easy-to-learn programming language for Network Automation
            and Data analysis. Loved by beginners and pros alike!
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-[3vw] w-full h-full flex-row justify-around mt-6">
          {dummyData.map(item => (
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
