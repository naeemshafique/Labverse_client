import React from "react";

const BlogMain = ({ imageUrl,  paragraph, heading, imageUrl2, Name, date }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg w-full h-full border border-gray-300">
      <img
        src={imageUrl}
        alt={"sing"}
        className=" w-full h-[30vh]"
      />
     <p className="text-gray-700 mb-4 mt-4 ml-4">{paragraph}</p>
      <h2 className="text-xl font-bold mb-2 ml-4">{heading}</h2>
      <div className="flex items-center mt-4 ml-4">
        <div>
          <img
            src={imageUrl2}
            alt={"sing"}
            className="w-12 h-12 rounded-full border border-gray-300"
          />
        </div>
        <div className="ml-4">
          <p className="text-gray-600">{Name}</p>
          <p className="text-gray-600">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
