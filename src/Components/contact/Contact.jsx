import React from "react";

const Contact = () => {
  return (
    <div className="w-full flex flex-col  items-center">
      <h5 className="font-bold text-6xl m-6 text-center">
      Contact Me
      </h5>
      <form>
        <div className="w-[40vw]">
          <label for="full-name" class="block font-bold">
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            name="full-name"
            class="w-full border border-gray-300 rounded-md p-2 mt-1"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="w-[40vw] mt-4">
          <label for="email" class="block font-bold">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full border border-gray-300 rounded-md p-2 mt-1"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="w-[40vw] mt-4 ">
          <label for="message" class="block font-bold">
            Message
          </label>
          <textarea
            className="h-[35vh] w-[40vw]"
            id="message"
            name="message"
            class="w-full border border-gray-300 rounded-md p-2 mt-1"
            rows="4"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <div class="mt-4 ml-52">
          <button
            type="submit"
            class="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
