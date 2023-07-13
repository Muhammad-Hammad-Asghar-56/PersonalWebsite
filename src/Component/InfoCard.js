import React, { useState } from "react";
import { useContext } from "react";
import { ModeContext } from "../Context/ModeContext";


const InfoCard = ({ title, details, classes }) => {
  const [color, setColor] = useState("#6223FF");
  const context = useContext(ModeContext);
  const { mode } = context;
  const darkMode = { background: "#FFB703",color:"#0D1B2A" };
  const lightMode= { background: "#6223FF",color:"white" };
  return (
    <div
      className={`${classes} block flex-1 max-w-sm p-4   border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}
      style={mode === "dark" ? darkMode:lightMode}
    >
      <h5 className="mb-2 flex justify-center text-center text-lg font-bold tracking-tight ">
        {title}
      </h5>
      {details.map((item, index) => (
        <div className="flex ml-6 sm:flex-row border-gray-200 mt-4" key={index}>
          <p className="font-semibold  sm:text-right ml-2">{Object.keys(item)[0] }  :</p>
          <p className="font-normal ">{Object.values(item)[0]}</p>
        </div>
        // 
      ))}
    </div>
  );
};

export default InfoCard;
