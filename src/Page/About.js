import React from "react";
import Button from "../Component/Button";
import { useContext } from "react";
import { ModeContext } from "../Context/ModeContext";

const About = () => {
  const context = useContext(ModeContext);
  const { mode } = context;
  const darkMode={background:"#0D1B2A",color:"white"}
  return (
    <div className={`flex flex-row w-full h-screen `} style={mode==="dark"? darkMode:{}}>
      <div className="h-full flex-1 hidden lg:block">
        <img
          src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="px-2 lg:mx-14 sm:mx-4 flex h-full flex-1 relative">
        <div className="my-auto mx-auto bg-gray">
          <h1 className="text-3xl font-semibold">
            <span className="font-bold" style={mode==="dark"? {color:"#FFB703"}:{}}>Greetings</span>! M Hammad Asghar
          </h1>
          <p className="mt-4 text-justify relative ">
            I am a skilled software developer with over 3 years of experience in
            creating high-quality desktop management systems, console
            applications, and backend development using MERN with different APIs
            and Packages. My passion lies in delivering software projects that
            exceed my client's expectations. I am confident that my skills would
            be well-suited to bringing your ideas to life. Let's work together
            to create top-notch software projects that meet your needs.
            <span className={`absolute bottom-0 right-0 font-bold ${mode==="dark"?"text-gray-400":"text-black"} text-8xl opacity-25 p-2 pointer-events-none`} >
              01
            </span>
          </p>
          <Button
            className="mt-4"
            backgroundColor={mode==="dark"? "#FFB703":"#7B3FBC"}
            onclick={() => {
              console.log("clicked");
            }}
          >
            Let's Connect {`\u2192`}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
