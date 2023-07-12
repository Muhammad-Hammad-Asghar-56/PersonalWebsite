import React, { useState } from "react";
import { test,github, react } from "../asserts/index";
import PropTypes from "prop-types";
import Button from "../Component/Button";
import { useContext } from "react";
import { ModeContext } from "../Context/ModeContext";


const ProjectCard = ({ classes, title, isVideo, stacks }) => {
  // const [color, setColor] = useState("#6223FF");
  const context = useContext(ModeContext);
  const { mode } = context;
  
  return (
    
    <div
    // ${mode==="dark"? "text-gray-800":"text-white"}
      className={`${classes} h-full px-4 py-4 text-white `}
      style={mode==="dark"? {background:"#FFB703",color:"#0D1B2A"}:{background:"#6223FF"}}
    >
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg flex justify-center">
        <div className="w-full h-full rounded-xl">
          {isVideo ? (
            <iframe
              className="w-full"
              height={180}
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              title="Video"
            ></iframe>
          ) : (
            <img
              className="w-full object-cover"
              height={180}
              src={test}
              alt="Body"
            />
          )}
        </div>
      </div>

      <h3 className="mt-4 font-semibold text-lg">{title}</h3>
      <div className="flex flex-row items-center flex-wrap">
  <span className="mt-1 text-sm font-medium pr-4 border-r border-white">
    Technology Stack
  </span>
  {stacks.map((element, index) => (
    <img
      key={index}
      width={40}
      height={30}
      src={element}
      className="ml-2 object-contain"
      alt="Technology Stack"
    />
  ))}
</div>

      <div className="flex mt-4">
      {/* dark "#0D1B2A" */}
        <Button className=" inline-flex" backgroundColor={mode==="dark"? "#0D1B2A":"#7B3FBC"}  onClick={() => {  console.log("clicked"); }} >
            Goto Code <img src={github} width={20} height={20} className="ml-2" alt=""></img>
        </Button>
        {/* <Button className="ml-4 inline-flex" onClick={() => {  console.log("clicked"); }} > Let's Connect {`\u2192`}</Button> */}
      </div>    
    </div>
  );
};

ProjectCard.propTypes = {
  classes: PropTypes.string,
  isVideo: PropTypes.func,
  stacks: PropTypes.array,
};
ProjectCard.defaultProps = {
  stacks: ["https://img.icons8.com/ultraviolet/40/react--v1.png"],
};
export default ProjectCard;
