import React, { useState } from "react";
// import { SocialIcon } from "react-animated-social-icons";
// import { AnimatedSocialIcon } from "react-animated-social-icons";
import { useContext } from "react";
import { ModeContext } from "../Context/ModeContext";
import { github } from "../asserts";

const Footer = () => {
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
        </div>
        <div className="font-normal py-8 text-sm text-center" style={mode === "dark" ? darkMode : lightMode}>
          All rights reserved. Copyright © 2023 M H Asghar
        </div>
      </div>
  );
};

export default Footer;
