import React from 'react'
import { ModeContext } from './ModeContext'
import { useState } from 'react'


const ModeState = ({children}) => {
  const [mode,SetMode]=useState("white");
  const darkMode={
    backgroundClass:"bg-gray-900",
    fontClass:"text-white",
    contrastColor:""
  }
  const LightMode={
    backgroundClass:"bg-gray-900",
    fontClass:"text-white"
  }
  const  toggleMode=()=>{
    if(mode==="white"){
        SetMode("dark");
    }
    else{
        SetMode("white");
    }
    console.log(mode)
  }
  return (
    <ModeContext.Provider value={{mode,toggleMode}}>
        {children}
    </ModeContext.Provider>
  )
}

export default ModeState
