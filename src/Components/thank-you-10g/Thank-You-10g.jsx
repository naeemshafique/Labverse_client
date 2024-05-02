import React from "react";

const Thankyou = () => {
  return (
    <div>
      <h5 className="text-center font-bold m-12 text-6xl">Thank You</h5>
      <div className="container w-[42vw] h-[45vh] mb-20 bg-white mx-auto p-4 border border-gray-800 rounded-lg">
        <section className="code-section ">
          <h2 className="text-center m-4 font-bold text-4xl">
            Read the full story
          </h2>
          <p className="text-center">
            Sign up now to read the full story and get access to all posts for
            10 Gigabit/s tier only.
          </p>
          <button className="subscribe-btn bg-blue-500 m-4 text-white px-4 py-2 rounded mt-4 mx-auto block">
            Subscribe
          </button>
          <p className="text-center mt-6">
            Already have an account?{" "}
            <a
              href="/sign-in"
              className="text-blue-500 border-b border-blue-500"
            >
              Sign in
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Thankyou;
