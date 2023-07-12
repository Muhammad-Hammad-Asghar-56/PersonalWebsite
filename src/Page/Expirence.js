import React from "react";
import TimeLine from "../Component/TimeLine";
import CountUp from "react-countup";
import { useContext } from "react";
import { ModeContext } from "../Context/ModeContext";



const Expirence = () => {
  const context = useContext(ModeContext);
  const { mode } = context;
  const darkMode={background:"#0D1B2A",color:"white"}

  return (
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-18" style={mode==="dark"?darkMode:{}}>
        <div className="text-center py-10">
          <h1  className={`${mode==="dark"? "text-white":"text-black"} text-opacity-50 text-xl`}>What I have?</h1>
          
          <h1 className="font-bold text-3xl">Expirence</h1>
        </div>

        <div className="flex gap-4 justify-center mb-8">
          <div className="block flex-1 max-w-sm p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          style={mode==="dark"?{background:"#FFB703",color:"#0D1B2A"}:{background:"white",color:"#0D1B2A"}}
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Projects Done
            </h5>
            <p className="font-normal text-3xl text-gray-700 dark:text-gray-400">
              <CountUp end={30} suffix=" +" duration={7}></CountUp>
            </p>
          </div>
          <div className="block flex-1 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
           style={mode==="dark"?{background:"#FFB703"}:{background:"white"}}
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Clients
            </h5>
            <p className="font-normal text-3xl text-gray-700 dark:text-gray-400">
              <CountUp end={20} suffix=" +" duration={5}></CountUp>
            </p>
          </div>
        </div>

        <TimeLine />
      </div>

  );
};

export default Expirence;
