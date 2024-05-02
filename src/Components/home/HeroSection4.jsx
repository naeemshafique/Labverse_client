"use client"

import React, { useState, useEffect } from "react";
import BlogCard from "../constant/Blogcard";

const HeroSection4 = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await fetch("http://127.0.0.1:8000/api/blogposts/");
          const data = await response.json();
          // Filter blogs to include only those with category.id equal to 2
          const filteredBlogs = data.filter(blog => blog.category && blog.category.id === 2);
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
          Blog
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-[3vw] w-full h-full flex-row ">
          {blogs.map((blog) => (
            <div key={blog.id}>
              <a href={blog.link} className="block">
                <BlogCard
                  language={blog.type}
                  title={blog.title}
                  description={blog.heading}
                  imageUrl={blog.image}
                  name={blog.user}
                  dateTime={new Date(blog.published_date).toLocaleString()}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
};

export default HeroSection4;
