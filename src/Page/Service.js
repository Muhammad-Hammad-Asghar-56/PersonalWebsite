import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CustomCurousel } from "../Component/CustomCurousel";
import CurouselItem from "../Component/CurouselItem";
import SeriveDetails from "../Component/SeriveDetails";
import { useContext } from "react";
import { ModeContext } from "../Context/ModeContext";


const Service = () => {
  const context = useContext(ModeContext);
  const { mode } = context;
  const darkMode = { background: "#0D1B2A", color: "white" };
  
  const crouselDarkMode = { background: "#FFB703", color: "#0D1B2A" };
  return (
    <div id="service" className="w-full py-6 text-white" style={mode === "dark" ? darkMode : {background: "#6223FF"}}>
      <div className="text-center mt-14 my-6">
        <h1 className="text-white text-opacity-50 text-xl ">
          What I Offered ?
        </h1>
        <h1 className="font-bold text-3xl">Service</h1>
      </div>
      <div className="py-10 mx-4 md:mx-8 lg:mx-16 xl:mx-28 border-solid rounded-3xl bg-white text-black" style={mode === "dark" ? crouselDarkMode : {}}>
        <CustomCurousel>
          <CurouselItem>
            <SeriveDetails
              title="Web Development"
              description="To remove the navigation buttons and pagination dots from the carousel and make it auto-play with a duration of 5 seconds"
              frontEnd={["React", "Vue", "Angular"]}
              backendEnd={["NodeJS", "Django", "PHP"]}
              sql={["SQLLite","MySql","MSSQL","db2"]}
            />
          </CurouselItem>

          <CurouselItem>
            <SeriveDetails
              title=".net Development"
              description="To remove the navigation buttons and pagination dots from the carousel and make it auto-play with a duration of 5 seconds"
              frontEnd={["Winform", "ASP.net", "Visual Basic"]}
              backendEnd={["C#"]}
              sql={["SQLLite","MySql","MSSQL","db2"]}
            />
          </CurouselItem>

          <CurouselItem>
            <SeriveDetails
              title="Java Desktop Application Development"
              description="To remove the navigation buttons and pagination dots from the carousel and make it auto-play with a duration of 5 seconds"
              frontEnd={["Javafx", "Swing", "SceneBuilder"]}
              backendEnd={["Java"]}
              sql={["SQLLite","MySql","MSSQL","db2"]}
            />
          </CurouselItem>
        </CustomCurousel>
      </div>
    </div>
  );
};

export default Service;
