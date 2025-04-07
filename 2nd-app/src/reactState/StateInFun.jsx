import React, { useState } from "react";

const StateInFun =()=>{
    const name ="Umesh";
    const[userName,setusername] = useState("Umesh")
    const changeuserName =()=>{
        console.log(userName);
        setusername("Umes Bichukale");
        
    }
  return(
    <>
    <h2>State in Function Component</h2>
    <h3>Name Value using Normal Variable:{name}</h3>

    <h3>User Name Value using State:{userName} </h3>
    <button onClick={changeuserName}>Change userName</button>
    </>
  )
}
export default StateInFun;