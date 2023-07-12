import React,{useState} from "react";
import { useContext } from "react";
import { ModeContext } from "../Context/ModeContext";

const CurouselItem = ({classes,children}) => {

    return (
    <div className={`${classes} w-full h-full `}
    >
      {children}
    </div>
  )
}

export default CurouselItem
