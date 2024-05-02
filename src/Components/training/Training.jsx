import React from "react";

const dummyTrainingData = [
  {
    id: 1,
    title: "Python for Network Automation",
    description:
      "This course introduces you to the basics of Python, Netmiko, Napalm, and Nornir. By the end, you'll be able to create your own scripts to automate network tasks confidently."
  },
  {
    id: 2,
    title: "Ansible Network Automation",
    description:
      "Dive into Ansible basics and learn how to automate tasks for network devices from Cisco, Juniper, and Palo Alto."
  },
  {
    id: 3,
    title: "Palo Alto Networks Training",
    description:
      "Starts with the fundamentals of Palo Alto, covering interfaces, zones, objects, and policies, and advances to topics like Panorama, logging, VPN, and GlobalProtect."
  },
  {
    id: 4,
    title: "Intermediate Network Automation",
    description:
      "For those who have a grasp on the basics and aim to advance their skills, this course covers REST API, PanOS Python SDK, Boto3, Terraform, and more."
  }
];

const Training = () => {
  return (
    <div className="w-full flex flex-col bg-white items-center">
      <h5 className="font-bold text-5xl w-full m-6 text-center">
        Network Automation Training
      </h5>
      <div className="w-full flex flex-col items-center">
        <p className="sm:w-[42vw] w-full mb-4">
          If you're a Network Engineer who is new to Network Automation and
          looking for personalized training, I'm here to help. You can sign up
          for an <b>8-hour 1:1 training for $699.</b> Each course typically
          spans 8 lessons.
        </p>
      </div>
      <p className="ml-[-10vw] mb-4">Here’s what I offer</p>
      <ul className="list-disc sm:w-[42vw] w-full mb-6 ">
        {dummyTrainingData.map(training => (
          <li key={training.id}>
            <b>{training.title} -</b> {training.description}
          </li>
        ))}
      </ul>
      <p>Let's kickstart your automation journey together. Reach out to book your slot.</p>
      <img className="sm:w-[38vw] sm:h-[38vh] w-full h-full m-4" src="\images\training.png" alt="kuch b"  />
    </div>
  );
};

export default Training;
