import React from "react";

const BlogCard = ({ language, title, description, imageUrl, Name, dateTime }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-80 h-72 border border-gray-300 ">
      <p className="text-gray-700 mb-4">{language}</p>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex items-center">
        <div>
          <img
            src={imageUrl}
            alt={"sing"}
            className="w-12 h-12 rounded-full border border-gray-300"
          />
        </div>
        <div className="ml-4">
          <p className="text-gray-600">{Name}</p>
          <p className="text-gray-600">{dateTime}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
