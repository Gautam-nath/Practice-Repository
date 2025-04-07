import React from "react";
import ChildFunc from "./ChildFunc";

const ParentFun = () =>{
    const remfee = 40000;
    return(
        <>
        <h1>welcome to ParentFun Component</h1>
        <ChildFunc fee={remfee}/>
        </>
    )
}
export default ParentFun;