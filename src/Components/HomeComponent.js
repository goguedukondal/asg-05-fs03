import React from 'react'
import {GiSelfLove} from "react-icons/gi"

function HomeComponent() {
  return (
    <div className='image_part'>
      <h1 >HOME</h1>
      <div style={{display:"flex",justifyContent:"center",marginTop:"300px"}}>
      <h3 style={{color:"white"}}>Made with </h3>&nbsp;&nbsp;
      <GiSelfLove style={{color:"red",marginTop:"28px"}}/>&nbsp;&nbsp;
      <h3 style={{color:"white"}}>by</h3>&nbsp;&nbsp;
      <h3 style={{color:"red"}}>Learnig Robo</h3>
      </div>
      
    </div>
  )
}

export default HomeComponent