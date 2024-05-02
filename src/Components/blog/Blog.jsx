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
    imageUrl: "/images/remote-ssh--1-.png",
    paragraph: "- NETDEVOPS",
    heading: "Why Did No One Tell Me About This VSCode Remote - SSH Feature?",
    imageUrl2: "/images/blog-avatar--1-.png",
    Name: "Dr Zangi",
    date: "Apr 14, 2024"
  },
  {
    id: 3,
    imageUrl: "/images/nornir--1-.png",
    paragraph: "- PYTHON",
    heading: "Nornir Network Automation",
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
    imageUrl: "/images/remote-ssh--1-.png",
    paragraph: "- NETDEVOPS",
    heading: "Why Did No One Tell Me About This VSCode Remote - SSH Feature?",
    imageUrl2: "/images/blog-avatar--1-.png",
    Name: "Dr Zangi",
    date: "Apr 14, 2024"
  },
  {
    id: 6,
    imageUrl: "/images/nornir--1-.png",
    paragraph: "- PYTHON",
    heading: "Nornir Network Automation",
    imageUrl2: "/images/blog-avatar--1-.png",
    Name: "Dr Zangi",
    date: "Apr 14, 2024"
  },
  {
    id: 7,
    imageUrl: "/images/bgp-lab-containerlab-nornir.png",
    paragraph: "- NETDEVOPS",
    heading: "Simple BGP Lab with Containerlab and Nornir (Lab-as-a-Code)",
    imageUrl2: "/images/blog-avatar--1-.png",
    Name: "Dr Zangi",
    date: "Apr 14, 2024"
  },
  {
    id: 8,
    imageUrl: "/images/remote-ssh--1-.png",
    paragraph: "- NETDEVOPS",
    heading: "Why Did No One Tell Me About This VSCode Remote - SSH Feature?",
    imageUrl2: "/images/blog-avatar--1-.png",
    Name: "Dr Zangi",
    date: "Apr 14, 2024"
  },
  {
    id: 9,
    imageUrl: "/images/nornir--1-.png",
    paragraph: "- PYTHON",
    heading: "Nornir Network Automation",
    imageUrl2: "/images/blog-avatar--1-.png",
    Name: "Dr Zangi",
    date: "Apr 14, 2024"
  },
  // Add more dummy data objects as needed
];

const Blog = () => {
  return (
    <div>
      <h5 className="text-center font-bold m-12 text-6xl">Blog</h5>
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

export default Blog;
