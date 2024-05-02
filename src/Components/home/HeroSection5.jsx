// import Link from "next/link";
// import React from "react";



// const TagCard = ({ link, svg, heading, paragraph, bgColor }) => {
//     return (
//       <Link href={link} className={`m-4 ${bgColor}`}>
//         <div className="bg-white rounded-lg shadow-lg p-6 h-[30vh] flex flex-col items-center">
//           <div className="text-4xl mb-4">{svg}</div>
//           <h2 className="text-xl font-semibold mb-2">{heading}</h2>
//           <p className="text-gray-600">{paragraph}</p>
//         </div>
//       </Link>
//     );
//   };

// const HeroSection5 = () => {
//   return (
//     <div>
//       <p className="font-bold text-[3vh] ml-[2vh] text-blueColor-0">Tags</p>
//       <div className="bg-slate-600 grid grid-cols-1 lg:grid-cols-6 md:grid-cols-3 gap-[3vw] w-full h-full flex-row justify-around sm:p-4">
//         {dummyData.map((data, index) => (
//           <div key={index}>
//             <TagCard
//               link={data.link}
//               svg={data.svg}
//               heading={data.heading}
//               paragraph={data.paragraph}
//               bgColor={'bg-white'}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroSection5;


import Link from "next/link";
import React from "react";

const dummyData = [
  {
    link: "netdevops",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-code"
        width="60"
        height="60"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="#6f32be"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <polyline points="7 8 3 12 7 16" />
        <polyline points="17 8 21 12 17 16" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    heading: "NETDEV",
    paragraph: "106+",
  },
  {
    link: "/cisco",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-antenna-bars-4"
        width="80"
        height="60"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="#000000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <line x1="6" y1="18" x2="6" y2="15" />
        <line x1="10" y1="18" x2="10" y2="12" />
        <line x1="14" y1="18" x2="14" y2="9" />
        <line x1="18" y1="18" x2="18" y2="18.01" />
      </svg>
    ),
    heading: "CISCO",
    paragraph: "136+",
  },
  {
    link: "/python",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-brand-python"
        width="80"
        height="60"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="#000000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3" />
        <path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3" />
        <path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4" />
        <line x1="11" y1="6" x2="11" y2="6.01" />
        <line x1="13" y1="18" x2="13" y2="18.01" />
      </svg>
    ),
    heading: "PYTHON",
    paragraph: "36+",
  },
  {
    link: "/firewall",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-wall"
        width="80"
        height="60"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="#000000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 8h16" />
        <path d="M20 12h-16" />
        <path d="M4 16h16" />
        <path d="M9 4v4" />
        <path d="M14 8v4" />
        <path d="M8 12v4" />
        <path d="M16 12v4" />
        <path d="M11 16v4" />
      </svg>
    ),
    heading: "FIREWALL",
    paragraph: "336+",
  },
  {
    link: "/palo-alto",
    svg: (
      <svg
        width="80px"
        height="60px"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="512" cy="512" r="512" style={{ fill: "#fa582d" }} />
        <path
          d="M592.93 310.51 512.42 391l40 40.06L350.58 633l80.51 80.51L511.6 633l-40-40 201.84-202zM230 512.4l201.89-201.89L512.41 391l-201.9 201.91zM511.59 633l201.9-201.91L794 511.6 592.11 713.49z"
          style={{ fill: "#fff" }}
        />
      </svg>
    ),
    heading: "Palo Alto",
    paragraph: "336+",
  },
  {
    link: "ansible",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-medical-cross"
        width="80"
        height="50"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="#009988"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M13 3a1 1 0 0 1 1 1v4.535l3.928 -2.267a1 1 0 0 1 1.366 .366l1 1.732a1 1 0 0 1 -.366 1.366l-3.927 2.268l3.927 2.269a1 1 0 0 1 .366 1.366l-1 1.732a1 1 0 0 1 -1.366 .366l-3.928 -2.269v4.536a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-4.536l-3.928 2.268a1 1 0 0 1 -1.366 -.366l-1 -1.732a1 1 0 0 1 .366 -1.366l3.927 -2.268l-3.927 -2.268a1 1 0 0 1 -.366 -1.366l1 -1.732a1 1 0 0 1 1.366 -.366l3.928 2.267v-4.535a1 1 0 0 1 1 -1h2z" />
      </svg>
    ),
    heading: "Ansible",
    paragraph: "336+",
  },
];

const colors = [
  'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 
  'bg-purple-500', 'bg-pink-500', 'bg-indigo-500'
];

const TagCard = ({ link, svg, heading, paragraph, bgColor }) => {
    return (
      <Link href={link} className={`m-4 ${bgColor}`}>
        <div className={`rounded-lg shadow-lg p-6 h-[30vh] flex flex-col items-center ${bgColor}`}>
          <div className="text-4xl mb-4">{svg}</div>
          <h2 className="text-xl font-semibold mb-2">{heading}</h2>
          <p className="text-gray-600">{paragraph}</p>
        </div>
      </Link>
    );
};

const HeroSection5 = () => {
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div>
      <p className="font-bold text-[3vh] ml-[2vh] text-blueColor-0">Tags</p>
      <div className=" grid grid-cols-1 lg:grid-cols-6 md:grid-cols-3 gap-[3vw] w-full h-full flex-row justify-around sm:p-4">
        {dummyData.map((data, index) => (
          <div key={index}>
            <TagCard
              link={data.link}
              svg={data.svg}
              heading={data.heading}
              paragraph={data.paragraph}
              bgColor={getRandomColor()}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection5;
