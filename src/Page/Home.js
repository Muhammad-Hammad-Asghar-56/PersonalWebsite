import React from "react";
import { Typewriter } from "react-simple-typewriter";
import SoftwareImages from "../Component/SoftwareImages";
import { github, cSharp, netCore, java, intelliJ, python, selenium, mongoDB, expressJS, nodeJS, react, mssql, mysql, darkProfilePic,lightProfilePic } from "../asserts/index";
import { useContext } from "react";
import { ModeContext } from "../Context/ModeContext";


const Home = () => {
  const context = useContext(ModeContext);
  const { mode } = context;

  const typingWords = [
    "Web Developer ~ MERN",
    "Desktop App Developer (Java)",
    ".Net, Python & Java XP"
  ];

  const softwareImages=[
    { img: cSharp, top: 0.5, left: 0.1 },
    { img: netCore, top: 0.7, left: 0.6 },
    { img: java, top: 0.8, left: 0.9 },
    { img: python, top: 0.2, left: 0.2 },
    { img: selenium, top: 0.3, left: 0.4 },
    { img: mongoDB, top: 1, left: 0.1 },
    { img: expressJS, top: 0.5, left: 0.7 },
    { img: nodeJS, top: 0.8, left: 0.7 },
    { img: react, top: 0.89, left: 0.32 },
    { img: mysql, top: 0.99, left: 0.5 }
  ];

  return (
    <div>
      <div
        className={`flex flex-col lg:flex-row py-36 w-full h-screen items-center justify-center ${
          mode === "dark" ? "text-white" : "bg-gradient-to-b from-white to-[#6223FF]"
        }`}
        style={mode === "dark" ? { background: "#0D1B2A" } : {}}
      >
        <div className="mx-6 lg:mx-24 w-2/3 flex-1">
          <div className="text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="font-extrabold" style={mode==="dark"? {color:"#FFB703"}:{color:"white"}}>{"Hi! "} 
            </span>
            <span className="font-semibold">I'm Hammad</span>
          </div>
          <div className="text-lg md:text-2xl lg:text-3xl text-left">
            a{" "}
            <span style={mode==="dark"? {color:"#FFB703"}:{}}>
            <Typewriter
              words={typingWords}
              loop={Infinity}
              typeSpeed={40}
              deleteSpeed={20}
              delaySpeed={1000}
              cursor={true}
              cursorBlinking={true}
              />
              </span>
          </div>
        </div>
        <div className="w-1/3 lg:flex-1">
          <div className="flex justify-center items-center">
            <div className="overflow-hidden rounded-lg aspect-w-2 aspect-h-1 group-hover:opacity-75 sm:h-64">
              <img
                src={mode==="dark"? darkProfilePic:lightProfilePic}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
