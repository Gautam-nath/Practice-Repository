import React from "react";

const JsxComponent =()=>{
    let a=10,b=20;
    return(
        <div>
            <h1>JsxComponent</h1>
            <h2>Addition of two numbers={a+b}</h2>
            <h3>{a>b ?"A is Greater":"B is Greater"}</h3>
        </div>
    )
}
export default JsxComponent;