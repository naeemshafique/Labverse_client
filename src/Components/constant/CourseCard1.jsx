import React from "react";

const CourseCard1 = ({ heading, paragraph, imgUrl }) => {
  return (
    
    <div className="h-full w-64  rounded overflow-hidden shadow-lg bg-white transition-transform transform hover:-translate-y-1 hover:shadow-xl">
       <img className="w-[15vw] h-[25vh] px-6 py-4" src={imgUrl} alt="Card" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{heading}</div>
        <p className="text-gray-700 text-base">{paragraph}</p>
      </div>
    </div>
  );
};

export default CourseCard1;
