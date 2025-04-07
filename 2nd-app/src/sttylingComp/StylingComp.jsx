import React from "react";
import './StylingComp.css' 

const StylingComp =()=>{
    const style ={
        color:'green',
        textAlign:'center'
    }
  return(
   <>
     {/* 1.Styling using inline css */}
    <h2 style={{color:'red',textAlign:'center'}}>Styling Component usuing Inline css</h2>
    {/* 2.Styling usingn internal css */}
    <h2 style={style}>Styling Comnponent using Internal css</h2>
     {/* 3.Styling using Extrnal css */}
    <h2 className="h2color">Styling Component using External css</h2>
    </>
  )
       
}
export default StylingComp;
