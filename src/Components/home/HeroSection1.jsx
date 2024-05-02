"use client"
import { useEffect, useState } from "react";
import Card from "../constant/card";

const HeroSection1 = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/blogposts/");
        const data = await response.json();
        setBlogs(data);
        const filteredBlogs = data.filter(blog => blog.category && blog.category.id === 1);
          setBlogs(filteredBlogs);
      } catch (error) {
        console.error("Error fetching Blogs:", error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <div className="">
      <p className="font-bold text-[3vh] ml-[2vh] text-blueColor-0">
        Featured posts
      </p>
      <div
        className="w-full flex flex-row overflow-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {blogs.map((blog) => (
          <div key={blog.id} className="m-4">
            <Card
              href={`/blog/${blog.id}`}
              imgUrl={blog.image}
              heading={blog.title}
              dateTime={new Date(blog.published_date).toLocaleString()}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection1;
