import React from "react";

const HireMe= () => {
  return (
    <div className="w-full flex flex-col bg-white items-center">
      <h5 className="font-bold text-6xl m-6 text-center">Hire me</h5>
      <img
        className="w-full sm:w-[55vw] h-[55vh]"
        src="\images\hire-me.png"
        alt="Moosewala"
      />
      <p className="w-full sm:w-[55vw] m-8 text-lg">
        Thanks for stopping by my blog! I'm glad you're here and hope you find
        the insights and stories about networking and automation as fascinating
        as I do. If you're looking for a{" "}
        <b>Freelance Network Engineer based in London,</b> you've come to the
        right place. My hands-on experience spans across vendors like{" "}
        <b> Cisco, Palo Alto, Meraki, Fortinet, and Juniper,</b>
        making me a useful partner for your network consultancy needs. Apart
        from traditional networking, I also specialise in{" "}
        <b>Network Automation.</b>
      </p>
      <p className=" m-8 sm:w-[55vw] text-lg">
        Think we might be a good fit? I'd love to chat more about how I can
        support your projects. Reach out to book a free consultation, and let's
        explore how we can work together.
      </p>
    </div>
  );
};

export default HireMe;
