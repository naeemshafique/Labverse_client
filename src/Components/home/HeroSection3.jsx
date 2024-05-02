import React from "react";

const HeroSection3 = () => {
  return (
    <div className=" w-full overflow-hidden">
      <p>EXPERIENCED WITH</p>
      <div className="border-t border-black border-solid py-4">
        <div className="flex flex-row justify-around overflow-auto">
          {/* SVG 1 */}
          <div className="m-4">
            <svg
              height="40"
              viewBox="2.5 3.7 893.4 246"
              width="70"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m705.5 4.7c-25.5 1.6-45.7 13.6-54.7 32.5-5.2 11.1-6 13.4-8.7 26.7-1.4 6.6-1.4 51.8-.1 58.1.6 2.5 1.4 6.5 1.9 9 1 5 3.9 12.9 6.4 17.5.9 1.6 2.1 4 2.7 5.3 1.6 3.6 14.3 16 18.1 17.7 1.9.8 4.1 1.9 4.9 2.4 5.1 2.9 8 4.1 9.6 4.1 1 0 3.6.6 5.9 1.4 2.2.8 9.6 2 16.4 2.6 17.5 1.7 36.8-.5 50.6-5.7 12.7-4.9 26.5-12.7 26.5-15 0-.8-1.3-3.1-3-5-1.6-1.8-3-3.8-3-4.3 0-2-5-.9-7.9 1.8-3 2.7-12 7.6-19.6 10.6-6.9 2.7-26 4.9-36 4.2-10.2-.8-21.3-2.8-26.5-4.8-12.7-4.8-23.1-15.2-27.8-27.8-4-10.6-7.3-38.4-5-40.6.9-.8 3.7-.9 9.3-.3 4.4.4 33.7.8 65 .9l57 .1.3-9.3c.4-10.2-2.1-33.1-4.5-41.8-1.4-5.3-3.6-10.9-5.4-14-.5-.8-1.3-2.4-1.8-3.6-.5-1.1-3.3-4.5-6.3-7.5-5.6-5.8-15.6-11.4-23.3-13.1-10.2-2.3-25.8-3.1-41-2.1zm38.1 16.4c3.3 1.1 8.3 3.7 11 5.8 8.4 6.3 15.4 19.5 15.4 29.2.1 2.4.7 7.1 1.5 10.4s1.5 8.1 1.5 10.8v4.7l-58.7-.2-58.8-.3.3-5.5c.4-6.4 3.5-21.8 5-24.6.5-1 2-4.1 3.2-6.7 4.6-10.1 14.6-18.2 29-23.7 9.2-3.5 40.2-3.4 50.6.1zm129.4-16c-22.5.9-27 1.8-39 7.2-5.7 2.6-15 12-17.1 17.2-5.8 14.4-6.1 17.7-6 80 .1 29.7-.3 56.9-.8 60.5-1.1 8.6-.6 9.2 8.6 8.8l7.4-.3.2-66.5c.2-61.5.3-66.7 2-69 .9-1.3 1.7-3.2 1.7-4.2 0-2.6 9.9-12.1 15-14.5 8.9-4.1 17.5-5.5 33.5-5.3 8.3.1 15.6.1 16.2.1.9-.1 1.2-2 1.2-6.1-.1-6.4-1.6-9.2-4.7-8.8-.9.1-9.1.5-18.2.9zm-557.5 1.4c-14.1 2.3-24.6 6.9-31.2 13.7-3.3 3.5-9.3 14.5-9.3 17.3 0 .8-.7 3.1-1.5 5.1-1.2 2.9-1.4 14.1-1.5 69.7l-.2 66.2 7.6.3 7.6.3v-64.3c0-57 .2-64.9 1.6-69.3 2.8-8.3 4.7-11.5 9.2-15.6 9.5-8.3 19.6-10.9 42.9-10.9 13.2 0 18.5.4 24.7 2 4.3 1 8.4 2.4 9 3 .5.5 1.6 1 2.3 1 3.5 0 15.3 12.7 15.3 16.5 0 .9.6 2.6 1.3 3.8.9 1.7 1.3 17.9 1.7 67.7l.5 65.5h15.8l-.2-52c-.2-77.8-.6-83.4-6.9-96.5-4.5-9.2-12.3-15.6-25.7-21-9-3.7-46.3-5.1-63-2.5zm-253.5 81.6c0 72.9-.2 81.7-1.7 86.3-2.5 7.8-4.5 11.4-8.2 15.2-4.1 4.1-14.9 9.4-19.2 9.4-1.7 0-4 .5-5.2 1.2-1.3.7-6.9 1.2-13.7 1.3l-11.5.1v14.9l7.2.3c4.2.2 9.6-.4 13.1-1.3 3.3-.8 8-1.5 10.4-1.5 8.5 0 24.2-6.8 30.5-13.1 3.9-3.9 10.3-15.1 10.3-17.9 0-1 .7-3.6 1.5-5.9 1.2-3.5 1.4-17 1.5-86.9l.2-82.7-7.6-.3-7.6-.3zm42.9-80.4c0 .4 0 28.2.1 61.8.1 47 .4 63.2 1.5 70.4.8 5.2 1.9 9.9 2.5 10.5.5.5 1 2 1 3.2s.7 2.7 1.5 3.4 1.5 1.8 1.5 2.6c0 2 10.3 11.7 14.6 13.8 2.1 1 5.1 2.5 6.6 3.2 1.4.8 3.5 1.4 4.6 1.4s3.5.6 5.3 1.4c5.6 2.2 33.1 4.1 41.6 2.7 3.9-.6 9.1-1.1 11.4-1.1 4.7 0 19.3-4.3 23.9-7.1.8-.5 2.4-1.3 3.5-1.8 2.6-1.1 10.5-9 11.6-11.6.5-1.1 1.3-2.7 1.8-3.5 6-10.7 6.4-15.2 6.8-86.3l.4-63.8-7.6.3-7.7.3-.2 63c-.3 66.6-.3 66.7-5 77.8-1.9 4.4-8 10.5-12.7 12.8-8.5 4.1-11.4 4.8-23.7 6-15 1.5-37.8 0-41.9-2.7-1.2-.7-3-1.4-3.9-1.4-2 0-10.4-5.6-12.2-8.1-.7-1-2-2.6-3-3.5-6.1-6.2-7.2-20-7-87.4l.2-56.5-7.7-.3c-4.2-.2-7.7.1-7.8.5zm335.6.5c-.3.7-.4 39.3-.3 85.8l.3 84.5h14.6v-171l-7.1-.3c-5-.2-7.2.1-7.5 1zm44.5-.2v85.5l-.1 85 7.6.3 7.5.3v-29.7c-.1-16.3.3-30 .7-30.3.4-.4 12.5-.2 26.8.3 28.6 1 56.2-.4 60-3 1.1-.8 2.7-1.4 3.7-1.4 5.3 0 19.4-11.6 23.6-19.5 9.7-18 9.6-47-.2-65.3-2.4-4.6-11.3-12.9-16.1-15.1-8.7-4-12.3-5-20.5-6.1-8.4-1-93-2-93-1zm93 16c11.9 3.2 20.1 9.5 24.5 18.7 2.2 4.6 2.8 7.7 3.2 15.4.9 15-.2 21.7-4.5 28.8-3.4 5.5-11.6 13.1-14.2 13.1-.6 0-2.3.8-3.7 1.7-2.4 1.6-6.9 1.9-42.8 2.3-22 .3-40.1.5-40.3.4s-.4-71.7-.2-81.2c0-1.9 71.1-1.1 78 .8zm279.5 133.8c-2.8.6-6.5 3.2-6.5 4.7 0 .7-.7 1.8-1.5 2.5s-1.5 2.5-1.5 4 .7 3.3 1.5 4 1.5 1.9 1.5 2.6c0 1.3 7.2 5.4 9.4 5.4 2.1 0 8.5-3.6 8.6-4.8 0-.7.7-1.5 1.5-1.8 1-.4 1.5-2 1.5-4.9 0-2.6-.6-4.7-1.5-5.5-.8-.7-1.5-1.8-1.5-2.4 0-2-7.8-4.6-11.5-3.8zm5.1 8.3c1 1.7-1.3 3.6-2.7 2.2-1.2-1.2-.4-3.3 1.1-3.3.5 0 1.2.5 1.6 1.1zm6.4 2.3c0 3.7-1.5 5.5-3.2 3.8-.8-.8-.7-2 .2-4.1 1.7-4.1 3-3.9 3 .3zm-14.5-.3c.8 2.3-.7 4.5-2.4 3.5-1.2-.8-1.5-3.9-.4-4.9 1.2-1.2 2.2-.7 2.8 1.4zm8.5 7.5c0 2.2-.4 2.5-2.7 2.2-2-.2-2.9-.9-3.1-2.6-.3-1.9.1-2.2 2.7-2.2 2.7 0 3.1.4 3.1 2.6zm-388.4 23.1c-1.8.5-1.8 1.4-1.2 18.4.6 14.9.5 17.9-.6 17.9-.8 0-3.9-3.9-7.1-8.8-3.1-4.8-6.7-9.9-7.9-11.4-1.3-1.5-4.3-5.6-6.8-9.2-3.9-5.7-4.9-6.5-7.7-6.6h-3.2l-.3 22.7c-.3 22.4.1 26.3 2.5 26.3 3.8-.1 4-1.3 3.8-20.4-.1-10.2.1-18.6.6-18.6.4.1 2.6 2.9 4.8 6.3 4.5 7 11.3 16.8 14.7 21 1.3 1.6 3.4 4.5 4.8 6.5 2 2.8 3.3 3.7 5.4 3.7h2.8l.5-23.4c.4-18.9.2-23.5-.9-24.2-.7-.5-1.5-.8-1.8-.8-.3.1-1.3.3-2.4.6zm30.2 0-13.8.4v47.7l14.8.4c16.8.4 18.2.2 18.2-2.2 0-3.5-2.4-4.2-14.7-3.8l-11.8.3v-16l12.2.4 12.2.3.7-2.7c.4-1.8.2-3-.7-3.7-.8-.5-6.6-.8-12.9-.6l-11.5.3-.3-7.3-.3-7.3 12.6.2c6.9.1 12.7 0 12.9-.2s.7-1.4 1-2.6c.6-1.9.2-2.5-1.9-3.3-1.4-.5-2.7-.9-2.8-.8s-6.4.4-13.9.5zm25.6.6c-1.7 1-1.8 4.3-.1 5.4.6.4 4.8.7 9.2.8h7.9l-.3 20.7c-.3 22.5-.1 23.5 4.9 20.8 2.2-1.2 2.2-1.4 1.9-21.3l-.4-20.2 7.6-.1c4.1 0 8.1-.4 8.7-.8 1.6-1 1.5-5.6 0-5.6-16.4-.5-38.3-.3-39.4.3zm46.7 0c-.9 1.1-.5 3.2 1.5 9.3 1.4 4.4 2.9 8.8 3.4 9.9.4 1.1 1.8 5.1 3 9 1.2 3.8 2.8 8.4 3.6 10.2.8 1.7 1.4 4 1.4 5.1 0 2.1 2.4 5.2 4 5.2 2.2 0 6-9.7 12.4-31.2 2-6.7 3.3-8 4.1-4.1.9 4.2 6.6 22.6 7.5 24.4.5.9 1.2 3.3 1.5 5.3 1 5 4.2 6.7 6.7 3.6 1-1.2 2.1-3.4 2.4-4.9.9-4 10.5-33.2 12.1-36.9s1.2-6.2-1.1-6.2c-3.1 0-4.6 1.3-5.2 4.8-.4 2.1-1 4.1-1.4 4.7-.4.5-1.1 2.8-1.5 5s-1 4.4-1.4 5c-.4.5-1.6 4.1-2.5 8-2.7 10.5-2.7 10.5-3.6 10.5-.5 0-1.7-2.6-2.6-5.8-1-3.1-2.7-8.9-4-12.7-1.2-3.9-3-9.6-3.9-12.7-1-3.1-2.4-5.9-3.2-6.2-2.6-1-5.1 1.2-5.6 5.1-.2 2.1-1.6 6.9-3 10.8-1.3 3.8-3.2 9.7-4.2 13-.9 3.3-1.9 6.6-2.1 7.3-1 3.3-2.6-.3-6.4-13.8-3-10.5-5.2-17.7-6.4-20-1.4-2.9-3.8-3.7-5.5-1.7zm84.9-.7c-13.8 5.3-17.9 13-16 30.1.9 8.3 3.1 12 9.4 16.1 3.7 2.4 5 2.6 14.1 2.6 8.6 0 10.5-.3 13.7-2.3 8.2-5 11.5-14.3 9.9-27.2-1.1-8.7-4.5-14-11.2-17.5-3.2-1.6-17-2.9-19.9-1.8zm18.6 8.5c6.8 4.1 9.4 17.3 5.1 25.8-2.6 5.3-5.6 7.6-11.9 9.3-4 1-5.5.9-10.1-.5-6.3-2-9.1-4.6-11.2-10.6-3-8.6-.8-19.3 4.8-23.3 5.7-4.1 17.2-4.4 23.3-.7zm70.2-7.8c-1 1.1-1.2 3.6-.6 11.3.4 5.4.4 15.8.1 23-.6 12.8-.5 13.2 1.6 13.9 3.4 1.1 4.1-.2 4.1-8.1v-7.5l4.6-4.7c4.2-4.3 4.6-4.6 5.7-2.9 13.4 20.5 15.4 23.2 17.5 23.5 1.3.2 2.5-.3 2.8-1.3.6-1.5-.6-3.5-12-20-6-8.5-5.9-8.2-3.9-10.3 13.9-14.2 15.7-16.3 14.3-17.2-3-1.9-5.7-1-9.1 3.1-1.9 2.3-3.8 4.7-4.4 5.3-.5.6-4.1 4.6-7.9 8.9-4.8 5.4-7.1 7.4-7.6 6.5-.4-.7-.4-6 0-11.8.3-6 .2-11-.3-11.8-1.2-1.6-3.2-1.5-4.9.1zm52.4-.5c-1.2.4-3.8 2-5.7 3.5-3.3 2.6-3.5 3.1-3.5 8.7 0 9.3 3.7 11.8 23 15.6 6.1 1.1 8.7 5 6.9 10.3-1.1 3.2-6.7 6.1-11.7 6.1-3.5 0-11.4-2.4-14.5-4.5-2.3-1.5-2.6-1.5-4.1 0-1.9 2-2.1 3.9-.3 5.2 5 3.8 24.5 5.2 30.2 2.1 5.5-2.9 7-5.5 7-11.8 0-4.4-.5-6.3-2-8-2.7-3-9.1-5.7-15.6-6.5-3-.4-7-1.4-8.9-2.3-2.9-1.4-3.5-2.3-3.8-5.2-.3-4.7.7-6 5.8-7.1 4.8-1.1 9.8-.5 15.2 1.8 3.1 1.3 4 1.4 5.3.3 3-2.5 1.4-5.2-4-7.1-5-1.8-14.9-2.3-19.3-1.1zm-99.6 1c-.3.5-.5 11.2-.5 23.9 0 19.7.3 23.2 1.6 23.7.8.3 2.2.2 3.1-.3 1.4-.8 1.7-2.6 1.7-9.8v-8.8l4.4-.3c7.1-.5 8.6.3 12.4 6.7 1.9 3.3 3.8 6.8 4.1 7.9 1.5 4.6 7.6 6.9 8.4 3.1.1-.8-2-5-4.8-9.2-2.7-4.2-5-8-5-8.6 0-.5 1.4-1.2 3-1.6 7.2-1.6 10.8-12.9 6.6-20.7-3-5.5-7-6.8-21.9-6.8-6.9 0-12.8.4-13.1.8zm27.8 7.3c5.2 4.1 2.8 13.8-3.9 15.5-1.1.3-5.6.4-10 .2l-8-.3-.3-7.4c-.2-4.1-.1-8 .2-8.8.4-.9 3-1.3 9.9-1.3 8 0 9.8.3 12.1 2.1z" />
            </svg>
          </div>

          {/* SVG 2 */}
          <div className="m-5">
            <svg
              width="90"
              height="40"
              viewBox="11.752 -158.846 797.655 797.655"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M271 418.843h-32.635v-129.33H271v129.33z"
                fill="#c4122e"
              />
              <g transform="matrix(10.33728 0 0 -10.33728 -861.345 7843.84)">
                <defs>
                  <path
                    id="a"
                    d="M84.461 713.596h77.163v43.961H84.461v-43.961z"
                  />
                </defs>
                <clipPath id="b">
                  <use xlinkHref="#a" overflow="visible" />
                </clipPath>
                <g clipPath="url(#b)">
                  <path
                    d="M134.996 727.2c-.13.066-1.146.668-2.656.668-2.041 0-3.457-1.42-3.457-3.337 0-1.859 1.355-3.34 3.457-3.34 1.484 0 2.517.59 2.656.664v-3.358c-.396-.11-1.475-.445-2.877-.445-3.551 0-6.668 2.448-6.668 6.48 0 3.735 2.82 6.475 6.668 6.475 1.48 0 2.578-.36 2.877-.449V727.2zM102.043 727.2c-.127.066-1.142.668-2.652.668-2.045 0-3.46-1.42-3.46-3.337 0-1.859 1.356-3.34 3.46-3.34 1.484 0 2.516.59 2.652.664v-3.358c-.392-.11-1.47-.445-2.88-.445-3.548 0-6.661 2.448-6.661 6.48 0 3.735 2.82 6.475 6.662 6.475 1.486 0 2.582-.36 2.879-.449V727.2zM144.927 727.821c-1.873 0-3.264-1.474-3.264-3.29 0-1.82 1.391-3.293 3.264-3.293 1.871 0 3.266 1.473 3.266 3.293 0 1.816-1.395 3.29-3.266 3.29m6.611-3.29c0-3.579-2.763-6.479-6.61-6.479-3.849 0-6.608 2.9-6.608 6.48 0 3.572 2.76 6.475 6.607 6.475 3.848 0 6.611-2.903 6.611-6.476M121.512 727.941c-.047.015-1.376.382-2.468.382-1.265 0-1.953-.424-1.953-1.025 0-.762.928-1.028 1.447-1.192l.871-.277c2.05-.652 2.983-2.055 2.983-3.579 0-3.143-2.764-4.199-5.18-4.199-1.679 0-3.252.31-3.407.342v2.88c.278-.07 1.602-.466 2.981-.466 1.571 0 2.293.46 2.293 1.168 0 .634-.625 1-1.408 1.246-.19.064-.478.154-.674.218-1.758.556-3.224 1.59-3.224 3.66 0 2.34 1.752 3.911 4.662 3.911 1.537 0 2.983-.373 3.077-.398v-2.67z"
                    fill="#c4122e"
                  />
                  <path
                    d="M89.154 744.23c0 .862-.704 1.561-1.567 1.561s-1.568-.699-1.568-1.56v-3.285a1.568 1.568 0 0 1 3.135 0v3.284zM97.763 748.54a1.567 1.567 0 0 1-3.135 0v-7.594a1.567 1.567 0 0 1 3.135 0v7.595zM106.373 754.438c0 .862-.704 1.562-1.567 1.562-.864 0-1.568-.7-1.568-1.562v-16.613a1.568 1.568 0 0 1 3.135 0v16.613zM114.982 748.54a1.567 1.567 0 0 1-3.135 0v-7.594a1.567 1.567 0 0 1 3.135 0v7.595zM123.582 744.23a1.56 1.56 0 0 1-1.558 1.561 1.566 1.566 0 0 1-1.567-1.56v-3.285a1.562 1.562 0 1 1 3.125 0v3.284zM132.195 748.54a1.563 1.563 0 0 1-3.125 0v-7.594a1.562 1.562 0 1 1 3.125 0v7.595zM140.81 754.438a1.562 1.562 0 0 1-3.125 0v-16.613a1.564 1.564 0 1 1 3.125 0v16.613zM149.423 748.54c0 .863-.699 1.564-1.582 1.564a1.563 1.563 0 0 1-1.562-1.563v-7.595c0-.867.7-1.566 1.562-1.566.883 0 1.582.699 1.582 1.566v7.595zM158.02 744.23a1.563 1.563 0 0 1-3.128 0v-3.284c0-.867.701-1.567 1.564-1.567.862 0 1.563.7 1.563 1.567v3.284z"
                    fill="#15495d"
                  />
                  <path
                    d="M156.213 719.922v-.196h-.558v-1.451h-.23v1.45h-.56v.197h1.348zM156.33 719.922h.359l.493-1.351h.008l.477 1.35h.352v-1.646h-.235v1.35h-.008l-.5-1.35h-.217l-.488 1.35h-.011v-1.35h-.23v1.647z"
                    fill="#c4122e"
                  />
                </g>
              </g>
            </svg>
          </div>
          {/* SVG 3 */}
          <div className="m-5">
            <svg
              width="50"
              height="40"
              viewBox="0 0 256 315"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
            >
              <g fill="#1A1918">
                <path d="M67.517 313.864c-.542 0-1.126-.137-1.532-.686L48.6 290.316v23.32h-3.964V284.92c0-1.143.946-2.057 2.028-2.057.63 0 1.17.182 1.575.731l17.34 22.816v-23.227h3.963v28.668c0 1.189-.946 2.012-2.026 2.012M100.306 314.138c-3.962 0-8.107-.824-11.98-2.286l.946-3.293c3.558 1.144 7.431 1.967 11.034 1.967 5 0 7.612-1.784 7.612-4.298 0-2.286-2.028-3.43-9.008-6.722-6.981-3.292-9.727-5.394-9.727-9.51 0-5.166 3.962-7.27 11.438-7.27 3.108 0 7.882.64 10.63 1.464l-.63 3.383c-3.02-.731-6.801-1.234-9.91-1.234-5.268 0-7.43 1.005-7.43 3.52 0 2.469 1.575 3.52 8.962 6.95 7.792 3.612 9.773 5.441 9.773 9.19 0 5.442-5.135 8.139-11.71 8.139M130.798 283.184h4.098v30.45h-4.098v-30.45zM169.758 299.827h-10.18v10.334h10.18c3.467 0 5.584-2.195 5.584-5.26 0-2.88-2.206-5.074-5.584-5.074m-1.983-13.169h-8.197v9.74h8.197c3.288 0 5.675-2.104 5.675-5.03 0-2.88-2.072-4.71-5.675-4.71m2.028 26.977h-12.25a2.044 2.044 0 0 1-2.073-2.057V285.24c0-1.098.901-2.057 2.073-2.057h10.133c6.215 0 9.908 3.063 9.908 7.864 0 2.606-1.532 5.03-3.874 6.447 3.47 1.052 5.81 3.932 5.81 7.407 0 4.846-4.008 8.733-9.727 8.733M199.212 313.635c-1.124 0-2.025-.96-2.025-2.057v-28.394h4.097v26.748h16.304v3.703h-18.376zM245.526 314.138c-8.377 0-13.421-3.109-13.421-9.373 0-2.972 1.667-5.807 4.91-7.133-2.613-1.646-3.964-3.978-3.964-6.538 0-5.67 4.37-8.368 12.566-8.368 2.748 0 6.62.32 9.864 1.052l-.451 3.383c-3.422-.549-6.621-.868-9.729-.868-5.314 0-8.152 1.463-8.152 4.984 0 2.79 2.613 4.984 6.081 4.984h7.025c.991 0 1.757.777 1.757 1.737 0 1.006-.766 1.783-1.757 1.783h-7.565c-3.964 0-6.485 1.965-6.485 4.984 0 4.435 4.098 5.76 9.232 5.76 2.793 0 6.575-.364 9.637-1.096l.587 3.337c-2.928.824-6.757 1.372-10.135 1.372M14.138 288.895l7.178 17.984-10.84-8.67 3.662-9.314zm12.751 22.127l-11.04-26.974c-.314-.778-.945-1.19-1.711-1.19a1.84 1.84 0 0 0-1.756 1.19L.264 313.635h4.144l4.798-12.198 14.314 11.74c.576.473.991.686 1.532.686 1.08 0 2.027-.822 2.027-2.01 0-.194-.068-.5-.19-.83z" />
              </g>
              <path
                d="M255.879 127.868c0 70.455-57.11 127.565-127.567 127.565-70.45 0-127.566-57.11-127.566-127.565C.746 57.418 57.862.302 128.312.302c70.456 0 127.567 57.116 127.567 127.566"
                fill="#1A1918"
              />
              <path
                d="M130.46 78.229l33.011 81.476-49.863-39.278L130.46 78.23zm58.644 100.245L138.326 56.272c-1.45-3.524-4.348-5.39-7.866-5.39-3.525 0-6.634 1.866-8.084 5.39l-55.732 134.04h19.065l22.062-55.265 65.84 53.19c2.647 2.141 4.558 3.11 7.041 3.11 4.974 0 9.322-3.73 9.322-9.111 0-.876-.31-2.267-.87-3.762z"
                fill="#FFF"
              />
            </svg>
          </div>
          {/* SVG 4 */}
          <div className="m-6">
            <svg
              height="40"
              viewBox="-.1 1.1 304.9 179.8"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2s-7.4-11.2-7.4-19.2c0-8.5 3-15.4 9.1-20.6s14.2-7.8 24.5-7.8c3.4 0 6.9.3 10.6.8s7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3s-7.3 2-10.8 3.4c-1.6.7-2.8 1.1-3.5 1.3s-1.2.3-1.6.3c-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5s1.4-1.4 2.8-2.1c3.5-1.8 7.7-3.3 12.6-4.5 4.9-1.3 10.1-1.9 15.6-1.9 11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4zm-40.6 15.2c3.3 0 6.7-.6 10.3-1.8s6.8-3.4 9.5-6.4c1.6-1.9 2.8-4 3.4-6.4s1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7s-6.3-.6-9.4-.6c-6.7 0-11.6 1.3-14.9 4s-4.9 6.5-4.9 11.5c0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9l-23.5-77.3c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9l16.8 66.2 15.6-66.2c.5-2 1.1-3.3 1.9-3.9s2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6s-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9s-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1s-1.5-2-1.9-4l-15.5-64.5-15.4 64.4c-.5 2-1.1 3.3-1.9 4s-2.2 1-4 1zm128.5 2.7c-5.2 0-10.4-.6-15.4-1.8s-8.9-2.5-11.5-4c-1.6-.9-2.7-1.9-3.1-2.8s-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3s1.5.6 2.5 1c3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3s5.2-5.4 5.2-9.5c0-2.8-.9-5.1-2.7-7s-5.2-3.6-10.1-5.2l-14.5-4.5c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1s4.2-6 7.2-8.2c3-2.3 6.4-4 10.4-5.2s8.2-1.7 12.6-1.7c2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6s3.2 1.2 4.2 1.8c1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8s-4.7 4.8-4.7 8.9c0 2.8 1 5.2 3 7.1s5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6s4.6 8.8 4.6 14c0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z"
                fill="#252f3e"
              />
              <g clip-rule="evenodd" fill="#f90" fill-rule="evenodd">
                <path d="m273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z" />
                <path d="m287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z" />
              </g>
            </svg>{" "}
          </div>
          {/* SVG 5 */}
          <div className="m-5">
            <svg
              viewBox="0 0 111.72 40.54"
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="40"
            >
              <path d="M0 0h111.72v40.54H0z" fill="#231f20" />
              <g fill="#fff">
                <path d="M70.52 33.76h.59v-2.55l2 2.55h.64v-3.44h-.59v2.54l-2-2.54h-.64zM74.56 33.76h2.77v-.55h-2.17v-.95h2.06v-.55h-2.06v-.84h2.13v-.55h-2.72zM77.86 30.87h1.23v2.89h.59v-2.89h1.22v-.55h-3zM82.5 33.76h.62s.76-2.36.86-2.64c.08.28.85 2.64.85 2.64h.61l1.14-3.44h-.62l-.79 2.58-.85-2.58h-.66l-.82 2.58c-.09-.28-.8-2.58-.8-2.58h-.64zM88.62 30.24a1.83 1.83 0 0 0-1.37.51 2 2 0 0 0 0 2.59 1.86 1.86 0 0 0 1.37.51 1.81 1.81 0 1 0 0-3.61m-.94 2.71a1.27 1.27 0 0 1-.32-.9 1.25 1.25 0 0 1 .32-.9 1.28 1.28 0 0 1 .94-.35 1.26 1.26 0 1 1 0 2.51 1.28 1.28 0 0 1-.94-.35M91.14 33.76h.6v-1.4h1.2c.34 0 .54.11.57.72v.1c0 .34 0 .46.11.56h.66l-.08-.09c-.1-.12-.12-.27-.14-.87a.74.74 0 0 0-.4-.71.86.86 0 0 0 .47-.82.89.89 0 0 0-.94-.94h-2.06zm.6-2.89h1.3c.33 0 .51.17.51.47s-.06.47-.52.47h-1.29zM95 33.77h.6v-1.12l.52-.48 1.31 1.6h.81l-1.67-2c.09-.07 1.61-1.44 1.61-1.44h-.85l-1.73 1.59v-1.59H95zM98.7 31.31c0 .76.76.89 1 .93l.74.13c.39.07.55.19.55.43a.39.39 0 0 1-.11.29 1 1 0 0 1-.7.22c-.37 0-1-.09-1-.7v-.07h-.6v.05a1.15 1.15 0 0 0 .31.83 1.74 1.74 0 0 0 1.24.41 1.7 1.7 0 0 0 1.17-.39 1 1 0 0 0 .28-.76c0-.72-.76-.86-1-.9l-.8-.14c-.43-.08-.48-.26-.48-.38a.42.42 0 0 1 .11-.29.85.85 0 0 1 .59-.2c.73 0 .86.32.9.57v.05h.59v-.07c0-.69-.57-1.09-1.44-1.09s-1.36.4-1.36 1.06M42.67 16.07a3.6 3.6 0 0 0-2.57-1 3.18 3.18 0 0 0-2.77 1.28v-.64a1.32 1.32 0 0 0-1-.53 1.26 1.26 0 0 0-1 .53v14.6h2.11v-5.45a3.22 3.22 0 0 0 2.75 1.23 3.55 3.55 0 0 0 2.55-1c1.06-1.08 1.18-2.93 1.18-4.56s-.12-3.46-1.18-4.54m-3.11 8.13c-1.9 0-2.19-1.68-2.19-3.59s.29-3.56 2.19-3.56 2.18 1.65 2.18 3.56-.27 3.59-2.18 3.59M51.58 26v-1a3.41 3.41 0 0 1-2.8 1.11 3.64 3.64 0 0 1-2.81-1 3.33 3.33 0 0 1-.83-2.31c0-1.81 1.22-3.1 3.62-3.1h2.78v-.76c0-1.36-.67-2-2.3-2a2.45 2.45 0 0 0-2.3 1l-1.39-1.34a4.29 4.29 0 0 1 3.77-1.55c2.88 0 4.33 1.26 4.33 3.7v7.19zm0-4.75h-2.47c-1.24 0-1.88.57-1.88 1.54s.6 1.53 1.92 1.53a2.48 2.48 0 0 0 2-.61 2.21 2.21 0 0 0 .46-1.59zM58.98 24.15c-.85 0-1.14-.42-1.14-1.25v-12a1.33 1.33 0 0 0-1.06-.54 1.28 1.28 0 0 0-1 .54v12.13a2.71 2.71 0 0 0 2.88 3h1.3v-1.85zM68.17 24.85a4.22 4.22 0 0 1-3.15 1.28 4.17 4.17 0 0 1-3.13-1.28c-1-1.06-1.24-2.42-1.24-4.24s.25-3.16 1.24-4.22a4.17 4.17 0 0 1 3.13-1.28 4.22 4.22 0 0 1 3.15 1.28c1 1.06 1.24 2.42 1.24 4.22s-.25 3.18-1.24 4.24m-1.6-7.19a2.11 2.11 0 0 0-1.55-.61 2.06 2.06 0 0 0-1.53.61 6.33 6.33 0 0 0 0 5.9 2.08 2.08 0 0 0 1.53.63 2.13 2.13 0 0 0 1.55-.63 6.33 6.33 0 0 0 0-5.9M84.86 24.15c-.85 0-1.14-.42-1.14-1.25v-12a1.33 1.33 0 0 0-1.06-.54 1.31 1.31 0 0 0-1.06.54v12.13a2.71 2.71 0 0 0 2.88 3h1.31v-1.85zM77.14 26v-1a3.41 3.41 0 0 1-2.8 1.11 3.64 3.64 0 0 1-2.81-1 3.33 3.33 0 0 1-.83-2.31c0-1.81 1.22-3.1 3.62-3.1h2.78v-.76c0-1.36-.67-2-2.3-2a2.45 2.45 0 0 0-2.3 1l-1.39-1.34a4.29 4.29 0 0 1 3.77-1.55c2.88 0 4.33 1.26 4.33 3.7v7.19zm0-4.75h-2.47c-1.24 0-1.88.57-1.88 1.54s.6 1.53 1.92 1.53a2.48 2.48 0 0 0 2-.61 2.21 2.21 0 0 0 .46-1.59zM91.62 17.09v-1.66h-2v-3.26a1.35 1.35 0 0 0-1.07-.53 1.31 1.31 0 0 0-1 .54v3.25h-1.2v1.66h1.2v5.92a2.77 2.77 0 0 0 2.88 3h1.26v-1.85h-.87c-.78 0-1.15-.46-1.15-1.25V17.1zM100.41 24.85a4.22 4.22 0 0 1-3.15 1.28 4.16 4.16 0 0 1-3.13-1.28c-1-1.06-1.24-2.42-1.24-4.24s.25-3.16 1.24-4.22a4.16 4.16 0 0 1 3.13-1.28 4.22 4.22 0 0 1 3.15 1.28c1 1.06 1.24 2.42 1.24 4.22s-.25 3.18-1.24 4.24m-1.6-7.19a2.11 2.11 0 0 0-1.55-.61 2.06 2.06 0 0 0-1.53.61 6.33 6.33 0 0 0 0 5.9 2.08 2.08 0 0 0 1.53.63 2.13 2.13 0 0 0 1.6-.65 6.33 6.33 0 0 0 0-5.9M103.44 32.41a1.04 1.04 0 0 1 0-2.08 1.04 1.04 0 0 1 0 2.08m0-1.93a.87.87 0 0 0-.85.89.85.85 0 1 0 1.7 0 .87.87 0 0 0-.85-.89m.25 1.46l-.26-.47h-.17v.47h-.15V30.8h.38a.34.34 0 0 1 .35.34.31.31 0 0 1-.24.31l.27.49zm-.22-1h-.21v.4h.21a.2.2 0 0 0 .21-.2.2.2 0 0 0-.21-.2M29.07 20.95a1.09 1.09 0 0 1 1-.88v-6.79a3.15 3.15 0 0 0-3.13-3.17H13.12a3.15 3.15 0 0 0-3.13 3.17v13.95a3.15 3.15 0 0 0 3.13 3.17h13.81a3.15 3.15 0 0 0 3.13-3.17v-4.4a.93.93 0 0 1-.46.12.72.72 0 0 1-.72-.88zM12.71 22.7l-.19 1.12a1.09 1.09 0 0 1-1 .88.72.72 0 0 1-.72-.88l.19-1.12a1.09 1.09 0 0 1 1-.88.72.72 0 0 1 .72.88m3 0l-.68 3.91a1.08 1.08 0 0 1-1 .89.72.72 0 0 1-.72-.89l.67-3.91a1.09 1.09 0 0 1 1-.88.72.72 0 0 1 .72.88m3.28-1.78l-1.3 7.49a1.08 1.08 0 0 1-1 .89.72.72 0 0 1-.72-.89l1.29-7.49a1.08 1.08 0 0 1 1-.89.73.73 0 0 1 .73.89m3.58-3.57l-1.74 10.1a1.1 1.1 0 0 1-1 .89.73.73 0 0 1-.72-.89l1.74-10.1a1.11 1.11 0 0 1 1-.88.72.72 0 0 1 .72.88m3.13-1l-1.29 7.5a1.08 1.08 0 0 1-1 .88.72.72 0 0 1-.73-.88l1.29-7.5a1.11 1.11 0 0 1 1-.88.72.72 0 0 1 .72.88m2.66 1.8l-.67 3.92a1.11 1.11 0 0 1-1 .88.72.72 0 0 1-.72-.88l.68-3.92a1.09 1.09 0 0 1 1-.88.72.72 0 0 1 .72.88" />
              </g>
            </svg>
          </div>
          {/* SVG 6 */}
          <div className="m-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="40">
              <style></style>
              <path d="M47.212 25.9H43.53v-2.198h9.86V25.9h-3.682v11h-2.495zm8.45 9.204c1-.005 1.994-.158 2.95-.455l.38 1.82a10.35 10.35 0 0 1-3.543.632c-3.032 0-4.08-1.4-4.08-3.72v-2.526c0-2.04.9-3.8 3.998-3.8s3.8 1.8 3.8 3.878v2.06h-5.37v.493c0 1.156.4 1.6 1.876 1.6zm-1.895-4.06h3.07v-.474c0-.9-.278-1.54-1.465-1.54s-1.604.632-1.604 1.54z" />
              <use href="#B" />
              <use href="#B" x="5.899" />
              <path d="M79.577 36.875H77.6l-.177-.632a5.29 5.29 0 0 1-2.868.853c-1.762 0-2.526-1.206-2.526-2.868 0-1.958.853-2.7 2.8-2.7h2.318v-1c0-1.067-.297-1.446-1.838-1.446a13.47 13.47 0 0 0-2.672.297l-.297-1.838a12.58 12.58 0 0 1 3.303-.455c3.032 0 3.922 1.067 3.922 3.487zm-2.413-3.644h-1.78c-.8 0-1 .215-1 .947s.215.973.973.973a3.79 3.79 0 0 0 1.819-.493zm9.84-8.2a7.15 7.15 0 0 0-1.383-.158c-.947 0-1.086.417-1.086 1.15v1.206h2.45l-.14 1.895h-2.318v7.718h-2.413V29.16h-1.547v-1.895h1.54v-1.37c0-2.002.928-2.988 3.07-2.988a7.65 7.65 0 0 1 2.078.278zm4.712 12.036c-3.303 0-4.194-1.82-4.194-3.8V30.85c0-1.977.9-3.8 4.194-3.8s4.2 1.82 4.2 3.8v2.438c-.006 1.964-.897 3.8-4.2 3.8zm0-7.977c-1.263 0-1.78.575-1.78 1.66v2.596c0 1.086.493 1.66 1.78 1.66s1.78-.575 1.78-1.66V30.76c0-1.093-.5-1.667-1.78-1.667zm10.4.158a18.63 18.63 0 0 0-2.526 1.41v6.215h-2.44v-9.645h2.04l.158 1.067a10.8 10.8 0 0 1 2.526-1.263zm6.64 7.627v-6.727c0-.512-.215-.77-.77-.77-.888.1-1.748.376-2.526.815v6.7h-2.4v-9.645h1.838l.24.815a9.64 9.64 0 0 1 3.86-1.01 1.83 1.83 0 0 1 1.819 1.03c1.204-.616 2.527-.967 3.878-1.03 1.604 0 2.18 1.13 2.18 2.85v6.986h-2.413v-6.727c0-.512-.215-.77-.77-.77a6.39 6.39 0 0 0-2.526.815v6.7z" />
              <g
                transform="matrix(.549621 0 0 .549621 6.171141 42.722741)"
                class="C"
              >
                <path
                  d="M39.1-8.713v-.16l-21.16-12.22v24.43l21.16 12.22zm0-27.28v24.44l-21.16-12.22v-24.44z"
                  fill="#5c4ee5"
                />
                <path
                  d="M41.42-11.553l21.17-12.22v-24.44l-21.17 12.22z"
                  fill="#4040b2"
                />
                <g fill="#5c4ee5">
                  <path d="M-5.54-37.413l21.16 12.22v-24.44l-21.16-12.22z" />
                  <path d="M53.64-.483" />
                  <path d="M17.94-21.093" />
                </g>
              </g>
              <defs>
                <path
                  id="B"
                  d="M65.605 29.258c-.877.404-1.722.875-2.526 1.41v6.215h-2.444v-9.645h2.04l.158 1.067a10.8 10.8 0 0 1 2.526-1.263z"
                />
              </defs>
            </svg>
          </div>
          {/* SVG 7 */}
          <div className="m-5">
            <img
              className="w-16 h-10"
              src="\images\Python-logo-notext.svg-1.png"
              alt=""
            />
          </div>
        </div>
        <div className="border-t border-black border-solid"></div>
      </div>
    </div>
  );
};

export default HeroSection3;