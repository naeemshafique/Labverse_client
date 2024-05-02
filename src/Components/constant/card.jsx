import React from "react";
import Link from "next/link";

const Card = ({ imgUrl, heading, dateTime , href }) => {
  return (
    <Link href={href}>
    <div className="sm:w-[35vw] sm:h-[55vh] w-[90vw] h-[57vh]  shadow-lg bg-white transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      <img className="sm:w-[35vw] sm:h-[35vh]  " src={imgUrl} alt="Card" />
      <div className="px-6 py-4">
        <div className="font-bold text-l mb-2">{heading}</div>
        <p className="text-gray-700 ">{dateTime}</p>
      </div>
    </div>
    </Link>
  );
};

export default Card;
