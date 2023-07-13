import React from "react";
import { Typewriter } from "react-simple-typewriter";
import SoftwareImages from "../Component/SoftwareImages";
import {
  github,
  cSharp,
  netCore,
  java,
  intelliJ,
  python,
  selenium,
  mongoDB,
  expressJS,
  nodeJS,
  react,
  mssql,
  mysql,
  darkProfilePic,
  lightProfilePic,
} from "../asserts/index";
import { useContext } from "react";
import { ModeContext } from "../Context/ModeContext";
import MotionImg from "../Component/MotionImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  social_facebook,
  social_insta,
  social_linkedIn,
  social_gitlab,
} from "../asserts/index";
// import { SocialIcon } from "react-social-icons";
import { ReactSocialMediaIcons } from "react-social-media-icons";

const Home = () => {
  const context = useContext(ModeContext);
  const { mode } = context;

  const typingWords = [
    "Web Developer ~ MERN",
    "Desktop App Developer (Java)",
    ".Net, Python & Java XP",
  ];

  const softwareImages = [
    // { img: cSharp, top: 0.5, left: 0.1 },
    // { img: netCore, top: 0.7, left: 0.6 },
    // { img: java, top: 0.8, left: 0.9 },
    // { img: python, top: 0.2, left: 0.2 },
    // { img: selenium, top: 0.3, left: 0.4 },
    // { img: mongoDB, top: 1, left: 0.1 },
    { img: expressJS, top: 0.5, left: 0.7 },
    { img: nodeJS, top: 0.8, left: 0.7 },
    { img: react, top: 0.89, left: 0.32 },
    { img: mysql, top: 0.99, left: 0.5 },
  ];

  return (
    <div id="home"
      className={`flex flex-col lg:flex-row lg:pt-36 lg:pb-48 w-full items-center justify-center sm:my-auto ${
        mode === "dark"
          ? "text-white"
          : "bg-gradient-to-b from-white to-[#6223FF]"
      }`}
      style={mode === "dark" ? { background: "#0D1B2A" } : {}}
    >
      <div className="mx-6 lg:mx-24 w-full lg:w-2/3 flex-1 flex flex-col justify-center">
        <div className="text-4xl md:text-5xl lg:text-6xl mb-4">
          <span
            className="font-extrabold"
            style={mode === "dark" ? { color: "#FFB703" } : { color: "white" }}
          >
            Hi!
          </span>
          <span className="font-semibold">I'm Hammad</span>
        </div>
        <div className="text-lg md:text-2xl lg:text-3xl text-left ">
          a{" "}
          <span style={mode === "dark" ? { color: "#FFB703" } : {}}>
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
        <div
          className=" mt-16 flex justify-center"
          style={{ justifyContent: "space-between", width: "50%" }}
        >
          <ReactSocialMediaIcons
            borderColor="rgba(0,0,0,0.25)"
            icon="twitter"
            iconColor="rgba(26,166,233,1)"
            backgroundColor="rgba(255,255,255,1)"
            roundness={50}
            url="https://some-website.com/my-social-media-url"
            size="48"
          />
          <ReactSocialMediaIcons
            borderColor="rgba(0,0,0,0.25)"
            icon="mail"
            iconColor="rgba(12, 170, 0, 1)"
            backgroundColor="rgba(255,255,255,1)"
            roundness={50}
            url="hammadasgharm@gmail.com"
            size="48"
          />
          <ReactSocialMediaIcons
            borderColor="rgba(0,0,0,0.25)"
            icon="instagram"
            iconColor="rgba(255, 109, 0, 1)"
            backgroundColor="rgba(255,255,255,1)"
            roundness={50}
            url="https://www.instagram.com/hammadasgharmuhammad/"
            size="48"
          />
          <ReactSocialMediaIcons
            borderColor="rgba(0,0,0,0.25)"
            icon="linkedin"
            iconColor="rgba(0, 119, 181, 1)"
            backgroundColor="rgba(255,255,255,1)"
            roundness={50}
            url="https://www.linkedin.com/in/m-h-asghar/"
            size="48"
          />
          <ReactSocialMediaIcons
            borderColor="rgba(0,0,0,0.25)"
            icon="github"
            iconColor="rgba(9.02, 8.24, 8.24, 1)"
            backgroundColor="rgba(255,255,255,1)"
            roundness={50}
            url="https://some-website.com/my-social-media-url"
            size="48"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/3 h-auto lg:h-full mt-12 lg:mt-0">
        <div className="flex justify-center items-center">
          <div className="overflow-hidden rounded-lg aspect-w-2 aspect-h-1 group-hover:opacity-75 w-3/4 lg:w-full">
            <img
              src={mode === "dark" ? darkProfilePic : lightProfilePic}
              alt=""
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
