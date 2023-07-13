import React, { useState } from "react";
// import { SocialIcon } from "react-animated-social-icons";
// import { AnimatedSocialIcon } from "react-animated-social-icons";
import { useContext } from "react";
import { ModeContext } from "../Context/ModeContext";
import { github } from "../asserts";

const Footer = () => {
  const defaultColor = "white";
  const hoverColor = "#0D1B2A";

  const context = useContext(ModeContext);
  const { mode } = context;
  const darkMode = { background: "#FFB703", color: "#0D1B2A " };
  const lightMode = { background: "#6223FF", color: "white" };
  return (

      <div className="text-white" style={{ background: `${mode === "dark" ? "#0D1B2A" : "white"}` }}>
        <div
          className="w-full rounded-t-3xl flex  justify-center"
          style={mode === "dark" ? darkMode : lightMode}
        >
          {/* <div className="flex my-4 flex-row">
            <AnimatedSocialIcon
              className="flex-1"
              brandName="github"
              url="https://github.com/meko-deng/react-animated-social-icons"
              animation="bounce"
              defaultColor={defaultColor}
              hoverColor={hoverColor}
              width="2em"
              animationDuration={0.8}
              style={{ marginRight: "20px" }}
            />
            <AnimatedSocialIcon
              className="flex-1"
              brandName="instagram"
              url="https://github.com/meko-deng/react-animated-social-icons"
              animation="bounce"
              defaultColor={defaultColor}
              hoverColor={hoverColor}
              width="2em"
              animationDuration={0.8}
              style={{ marginRight: "20px" }}
            />
            <AnimatedSocialIcon
              className="flex-1"
              brandName="facebook"
              url="https://github.com/meko-deng/react-animated-social-icons"
              animation="bounce"
              defaultColor={defaultColor}
              hoverColor={hoverColor}
              width="2em"
              animationDuration={0.8}
              style={{ marginRight: "20px" }}
            />

            <AnimatedSocialIcon
              className="flex-1"
              brandName="twitter"
              url="https://github.com/meko-deng/react-animated-social-icons"
              animation="bounce"
              defaultColor={defaultColor}
              hoverColor={hoverColor}
              width="2em"
              animationDuration={0.8}
              style={{ marginRight: "20px" }}
            />
          </div> */}
        </div>
        <div className="font-normal text-sm text-center" style={mode === "dark" ? darkMode : lightMode}>
          All rights reserved. Copyright © 2023 M H Asghar
        </div>
      </div>
  );
};

export default Footer;
