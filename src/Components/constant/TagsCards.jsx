import React from "react";

const TagCard = ({ heading, paragraph, svg, imgUrl }) => {
  return (
    
    <div className="max-w-xs h-48 w-44  rounded overflow-hidden shadow-lg bg-white transition-transform transform hover:-translate-y-1 hover:shadow-xl">

      {svg && (
        <div className="px-6 py-4">
          {svg}
        </div>
      )}
      <div className="px-6 py-4 flex flex-row justify-between">
        <div className="  mb-2">{heading}</div>
        <p className="text-gray-700 text-base">{paragraph}</p>
      </div>
    </div>
  );
};

export default TagCard;
