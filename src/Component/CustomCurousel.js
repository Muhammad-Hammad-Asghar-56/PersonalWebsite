import React,{useState} from "react";
import { Carousel } from 'react-responsive-carousel';


export const CustomCurousel = ({children}) => {
  
  return (
    <div >
      <Carousel showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={2000}
          infiniteLoop={true}
          transitionTime={500}>
          {children}
        
        </Carousel>
    </div>
  )
}
