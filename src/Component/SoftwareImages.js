import React from "react";
import { github, cSharp, netCore, java, intelliJ, python, selenium, mongoDB, expressJS, nodeJS, react, mssql, mysql } from "../asserts/index";
import MotionImg from "./MotionImg";

const SoftwareImages = () => {
    // 0.5,0.5
// 0.7,0.5
// 0.8,0.9
// 0.2,0.2
// 0.3,0.6
// 0.3,0.9
// 0.5,0.7
// 0.8,0.7
// 1,0.2
// 0.99,0.5
    const softwareImages=[
        , {img:cSharp, top:0.5,left:0.5}
        , {img:netCore,top:0.7,left:0.5} 
        , {img:java, top:0.8,left:0.9}
        , {img:python, top:0.2,left:0.2}
        , {img:selenium,top:0.3,left:0.6}, 
        , {img:mongoDB,top:0.3,left:0.9} 
        , {img:expressJS,top:0.5,left:0.7}, 
        , {img:nodeJS, top:0.8,left:0.7}
        , {img:react, top:1,left:0.2}
        , {img:mysql, top:0.99,left:0.5}
        ]
    return (
        <>
      {softwareImages.map((imageVar, index) => (
          <MotionImg index={index} source={imageVar.img} top={imageVar.top} left={imageVar.left}/>
          ))}

        </>
      );
};

export default SoftwareImages;
