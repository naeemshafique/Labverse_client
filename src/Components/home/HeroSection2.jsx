import React from "react";
import CourseCard from "../constant/CourseCard";
import CourseCard1 from "../constant/CourseCard1";

const HeroSection2 = () => {
  const courses = [
    {
      imgUrl: "/images/python-logo.png",
      heading: "Python For Network Engineers",
      paragraph:
        "If you are a Network Engineer looking to learn Python for Network Automation, this course is for you. We start from the very basics and build a solid foundation.",
      href: "/python-network",
    },
    {
      imgUrl: "/images/Python-logo-notext.svg-1.png",
      heading: "Netmiko",
      paragraph:
        "Introduction to Netmiko and how can you use it to automate your network. A simple step-by-step guide on how to use it in your automation workflows.",
      href: "/netmiko",
    },
    {
      imgUrl: "/images/python-logo.png",
      heading: "Python For Network Engineers",
      paragraph:
        "If you are a Network Engineer looking to learn Python for Network Automation, this course is for you. We start from the very basics and build a solid foundation.",
      href: "/python-network",
    },
    {
      imgUrl: "/images/Python-logo-notext.svg-1.png",
      heading: "Netmiko",
      paragraph:
        "Introduction to Netmiko and how can you use it to automate your network. A simple step-by-step guide on how to use it in your automation workflows.",
      href: "/netmiko",
    },
    {
      imgUrl: "/images/python-logo.png",
      heading: "Python For Network Engineers",
      paragraph:
        "If you are a Network Engineer looking to learn Python for Network Automation, this course is for you. We start from the very basics and build a solid foundation.",
      href: "/python-network",
    },
    {
      imgUrl: "/images/Python-logo-notext.svg-1.png",
      heading: "Netmiko",
      paragraph:
        "Introduction to Netmiko and how can you use it to automate your network. A simple step-by-step guide on how to use it in your automation workflows.",
      href: "/netmiko",
    },
  ];

  return (
    <div className="">
      <p className="font-bold text-[3vh] opacity-5 ml-[2vw]">Blog</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-[3vw] w-full h-full  flex-row justify-around">
        {courses.map((course, index) => (
          <a href={course.href} className="m-4" key={index}>
            <CourseCard
              svg={course.svg}
              heading={course.heading}
              paragraph={course.paragraph}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default HeroSection2;
