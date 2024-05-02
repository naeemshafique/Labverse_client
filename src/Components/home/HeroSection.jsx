import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full text-gray-700 py-56"> 
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Technical, Practical, not so boring articles
        </h1>
        <p className="text-lg mb-6">
          Explore the less boring side of Networking and Automation
        </p>
        <div className="max-w-md mx-auto">
          <form className="flex flex-col sm:flex-row items-center justify-center">
            <input
              type="email"
              placeholder="Your email"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 mb-2 sm:mb-0 sm:mr-2"
            />
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
