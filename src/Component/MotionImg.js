
import React from "react";

const MotionImg = ({index,source,top,left}) => {
  return (
    <img
      key={index}
      src={source}
      alt="Software"
      className="absolute"
      style={{
        top: `${top * 80}vh`, // Randomize the top position
        left: `${left*80}vw`, // Randomize the left position
      }}
      whileHover={{ scale: 1.1 }} // Scale up on hover
      whileTap={{ scale: 0.9 }} // Scale down on tap
      transition={{
        duration: 1,
        yoyo: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default MotionImg;
